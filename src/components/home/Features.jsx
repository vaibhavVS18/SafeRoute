"use client";

import { Users, Route, AlertTriangle, Bell } from "lucide-react";

export default function Features() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Features Designed to Keep You Safe
      </h2>

      <div className="grid md:grid-cols-4 gap-10">
        
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <Users className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Guardians</h3>
          <p className="text-gray-600">
            Add trusted guardians who can access your live location and keep an eye on your journey.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <Route className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Route Tracking</h3>
          <p className="text-gray-600">
            Guardians can track your route in real time, ensuring you stay safe at every point.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant SOS Alerts</h3>
          <p className="text-gray-600">
            Send an immediate SOS alert to your guardians if you ever feel unsafe.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <Bell className="w-12 h-12 text-emerald-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Safe-Arrival Notification</h3>
          <p className="text-gray-600">
            Guardians get a notification the moment your child or loved one reaches home safely.
          </p>
        </div>

      </div>
    </section>
  );
}
