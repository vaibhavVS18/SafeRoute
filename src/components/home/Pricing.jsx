export default function Pricing() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Simple & Affordable Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-gray-600 mt-2">Basic protection for everyone</p>
          <p className="text-3xl font-bold mt-4">₹0</p>
          <ul className="mt-5 text-gray-700 space-y-2">
            <li>✔ Add 1 guardian</li>
            <li>✔ Basic location sharing</li>
            <li>✔ SafeRoute suggestions</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="p-8 bg-blue-600 text-white rounded-2xl shadow-xl transform scale-105">
          <h3 className="text-xl font-semibold">Standard</h3>
          <p className="mt-2 opacity-90">Perfect for daily commuters</p>
          <p className="text-3xl font-bold mt-4">₹199/mo</p>
          <ul className="mt-5 space-y-2">
            <li>✔ Add up to 3 guardians</li>
            <li>✔ SOS alerts</li>
            <li>✔ Night-time auto alerts</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold">Premium</h3>
          <p className="text-gray-600 mt-2">Advanced safety controls</p>
          <p className="text-3xl font-bold mt-4">₹299/mo</p>
          <ul className="mt-5 text-gray-700 space-y-2">
            <li>✔ Unlimited guardians</li>
            <li>✔ Audio + Video SOS</li>
            <li>✔ Live movement alerts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
