import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 relative overflow-hidden">
      {/* background wave / texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/symphony.png')] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">AppDost</span>
          </h1>
          <p className="text-gray-600 leading-relaxed">
            AppDost is an innovative technology company providing complete web, mobile, and cloud-based solutions.  
            Our mission is to empower businesses by creating seamless digital experiences that drive growth and efficiency.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We combine design, development, and strategy to deliver results that matter.  
            Our expert team works closely with clients to understand goals and turn their vision into scalable digital products.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80"
            alt="Team at work"
            className="rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/30 to-transparent rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto px-6 mt-24 grid md:grid-cols-2 gap-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide innovative, scalable, and high-quality digital solutions that help organizations
            achieve success and stand out in the modern market.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a global leader in delivering creative, user-centric software that transforms how
            businesses interact with technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
