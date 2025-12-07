import User from "@/models/user.model.js";

export const addGuardian = async(currentUserId, guardianEmail)=>{
    const guardian = await User.findOne({email: guardianEmail});

    if(!guardian){
        return {error: "User not found"};
    }

    if(guardian._id.toString() === currentUserId.toString()){
        return {error: "You can not add yourself as a guardian"};
    }

    const currentUser = await User.findById(currentUserId);

    // check for already guardian
    const alreadyGuardian = currentUser.guardians.some(
        (g)=> g.user.toString() === guardian._id.toString()
    );

    if (alreadyGuardian) {
        return { error: "This user is already your guardian" };
    };

    currentUser.guardians.push({
        user: guardian._id,
        canViewLocation: false,
    });

    guardian.trackedUsers.push({
        user: currentUser._id,
        canViewLocation: false,
    });

    await currentUser.save();
    await guardian.save();

    return {success: true, guardian};
}


export const removeGuardian = async(currentUserId, guardianEmail) =>{
    try{
        const guardian = await User.findOne({email: guardianEmail});
        
        if(!guardian){
            return {error: "User not found"};
        }

        await User.findByIdAndUpdate(currentUserId, {
            $pull:{
                guardians: {user: guardian._id},
            },
        });

        await User.findByIdAndUpdate(guardian._id, {
            $pull: {
                trackedUsers: {user: currentUserId},
            }
        });

        return {success: true};
    }
    catch(error){
        console.error(error);
        return {msg: "Something went wrong", error: error};
    }
}



export const requestGuardian = async (guardianId, childEmail) => {
  try {
    const child = await User.findOne({ email: childEmail });

    if (!child) {
      return { error: "Child user not found" };
    }

    if (child._id.toString() === guardianId.toString()) {
      return { error: "You cannot send request to yourself" };
    }

    const guardian = await User.findById(guardianId);

    if (!guardian) {
      return { error: "Guardian user not found" };
    }

    // Check if already guardian
    const alreadyExists = child.guardians.some(
      (g) => g.user.toString() === guardianId.toString()
    );

    if (alreadyExists) {
      return { error: "You are already a guardian of this user" };
    }

    // Prevent duplicate pending request
    const alreadyRequested = child.incomingRequests.some(
      (req) =>
        req.from.toString() === guardianId.toString() &&
        req.status === "pending"
    );

    if (alreadyRequested) {
      return { error: "Request already sent" };
    }

    // Add to child's incoming requests
    child.incomingRequests.push({
      from: guardianId,
      status: "pending",
    });

    // Add to guardian's outgoing requests
    guardian.outgoingRequests.push({
      from: child._id,
      status: "pending",
    });

    await child.save();
    await guardian.save();

    return { success: true, child };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send guardian request" };
  }
};



export const acceptGuardian = async (childId, guardianId) => {
  try {
    const child = await User.findById(childId);
    const guardian = await User.findById(guardianId);

    if (!child || !guardian) {
      return { error: "User not found" };
    }

    // Find the incoming request on child
    const incomingRequest = child.incomingRequests.find(
      (req) =>
        req.from.toString() === guardianId.toString() &&
        req.status === "pending"
    );

    if (!incomingRequest) {
      return { error: "No pending request from this user" };
    }

    // Prevent duplicate guardian
    const alreadyGuardian = child.guardians.some(
      (g) => g.user.toString() === guardianId.toString()
    );

    if (alreadyGuardian) {
      return { error: "This user is already your guardian" };
    }

    // Update request status to accepted
    incomingRequest.status = "accepted";

    // Update guardian's outgoing request status
    const outgoingRequest = guardian.outgoingRequests.find(
      (req) =>
        req.from.toString() === childId.toString() &&
        req.status === "pending"
    );

    if (outgoingRequest) {
      outgoingRequest.status = "accepted";
    }

    // Add guardian to child
    child.guardians.push({
      user: guardianId,
      canViewLocation: true
    });

    // Add child to guardian's tracked users
    guardian.trackedUsers.push({
      user: childId,
      canViewLocation: true
    });

    await child.save();
    await guardian.save();

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to accept guardian request" };
  }
};



export const rejectGuardian = async (childId, guardianId) => {
  try {
    const child = await User.findById(childId);
    const guardian = await User.findById(guardianId);

    if (!child || !guardian) {
      return { error: "User not found" };
    }

    // Find pending incoming request on child
    const incomingRequest = child.incomingRequests.find(
      (req) =>
        req.from.toString() === guardianId.toString() &&
        req.status === "pending"
    );

    if (!incomingRequest) {
      return { error: "No pending request from this user" };
    }

    //  Update request to rejected
    incomingRequest.status = "rejected";

    // Update outgoing request on guardian
    const outgoingRequest = guardian.outgoingRequests.find(
      (req) =>
        req.from.toString() === childId.toString() &&
        req.status === "pending"
    );

    if (outgoingRequest) {
      outgoingRequest.status = "rejected";
    }

    await child.save();
    await guardian.save();

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to reject guardian request" };
  }
};



export const getIncomingRequests = async (childId) => {
  try {
    const child = await User.findById(childId).populate({
      path: "incomingRequests.from",
      select: "username email profileImage",
    });

    if (!child) {
      return { error: "User not found" };
    }

    const pendingRequests = child.incomingRequests.filter(
      (req) => req.status === "pending"
    );

    const requests = pendingRequests.map((req) => ({
      requestId: req._id,
      guardian: {
        id: req.from._id,
        username: req.from.username,
        email: req.from.email,
        profileImage: req.from.profileImage,
      },
      requestedAt: req.requestedAt,
    }));

    return { requests };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch incoming requests" };
  }
};



export const getOutgoingRequests = async (guardianId) => {
  try {
    const guardian = await User.findById(guardianId).populate({
      path: "outgoingRequests.from",
      select: "username email profileImage",
    });

    if (!guardian) {
      return { error: "User not found" };
    }

    const requests = guardian.outgoingRequests.map((req) => ({
      requestId: req._id,
      child: {
        id: req.from._id,
        username: req.from.username,
        email: req.from.email,
        profileImage: req.from.profileImage,
      },
      status: req.status,
      requestedAt: req.requestedAt,
    }));

    return { requests };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch outgoing requests" };
  }
};


