"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/membership.css";

const MembershipPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-darkred text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12">
        <div id="membership-content" className="flex flex-col md:flex-row justify-center items-start gap-12 w-full max-w-4xl">
          <section id="membership-info" className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex-1">
            <h2 className="text-3xl font-bold mb-4">Join Our Membership!</h2>
            <p className="text-lg mb-4">Unlock materials only for members!</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Unlock courses</li>
              <li>Download materials</li>
              <li>Benefits of personal tutoring with experts</li>
            </ul>
          </section>

          <section id="membership-form" className="bg-gray-900 text-white p-8 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-bold mb-6">Sign Up for Membership</h3>
            <form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="fullname" className="block text-lg mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-lg mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-700 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#8B0000] text-white font-medium rounded hover:bg-red-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MembershipPage;
