import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Custom React + Node e-commerce solution with real-time inventory and secure checkout.",
    img: "https://media.istockphoto.com/id/1970000697/vector/online-banking-concept-credit-card-payment-3d-phone-digital-money-pay.jpg?s=612x612&w=0&k=20&c=NTL8zfYaCFtGsdE-t71REz3nn9HUTQltpLTzuYWpcR4=",
  },
  {
    title: "Travel Booking App",
    desc: "Mobile-first platform for easy trip planning, hotel booking, and AI route suggestions.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Analytics Dashboard",
    desc: "Data-driven dashboard with advanced charts and real-time reporting.",
    img: "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=",
  },
  {
    title: "Educational Platform",
    desc: "An interactive learning portal with quizzes, live classes, and course tracking.",
    img: "https://media.istockphoto.com/id/499924122/photo/e-learning-concept-with-a-teacher-presenting-online-education-program.jpg?s=1024x1024&w=is&k=20&c=iNG1o7RsHYZmXtICAbTdGeJZXjSr-EgOOm7crGPdtco=",
  },
  {
    title: "Fitness Mobile App",
    desc: "A fitness companion app that tracks workouts, nutrition, and health goals using AI.",
    img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Finance Portal",
    desc: "Secure finance management system with predictive analytics and visual dashboards.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore some of the digital solutions we’ve designed and developed for clients
            across multiple industries.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm mt-1 opacity-90">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
