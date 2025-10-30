import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const ServiceCard = ({ icon, title, list, img }) => (
  <div className="card relative overflow-hidden p-6 flex flex-col gap-4 bg-white/80 backdrop-blur-sm hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-xl rounded-xl border border-gray-100">
    <div className="flex items-center gap-4">
      <img src={img} alt={title} className="w-12 h-12 rounded-lg object-cover" />
      <h4 className="font-semibold text-gray-800">{title}</h4>
    </div>
    <ul className="mt-2 text-sm text-gray-600 space-y-2">
      {list.map((l, i) => (
        <li key={i}>• {l}</li>
      ))}
    </ul>
  </div>
);

const Home = () => {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=60",
      title: "Web Development",
      list: ["Responsive Web Apps", "React / Next.js", "E-commerce Solutions"],
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=60",
      title: "Mobile Apps",
      list: ["React Native & Flutter", "App Store Deployment", "Maintenance & Updates"],
    },
    {
      img: "https://media.istockphoto.com/id/1390723340/vector/designer-creator-of-an-individual-design-of-user-interface-scenes-for-a-mobile-ui-ux.jpg?s=612x612&w=0&k=20&c=2DUpg6DhOYkVPbzRToPPguEathziPgorfRZwZDD8CFo=",
      title: "UI/UX Design",
      list: ["Wireframes", "Prototypes", "High-fidelity Interfaces"],
    },
  ];

  const projects = [
    {
      title: "BEU Mate - Educational Platform",
      tech: "React Native · Node.js · AI",
      desc: "AI-powered study companion for smarter learning experiences.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Devskillquest",
      tech: "Next.js · TypeScript",
      desc: "Interactive coding practice platform with personalized feedback.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Wedding Portal",
      tech: "PHP · Laravel",
      desc: "Premium wedding vendor marketplace to simplify planning.",
      img: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      className="pt-24 pb-16 min-h-screen relative"
      style={{
        background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative Wave Background */}
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-b-[100%] opacity-30"
        style={{ filter: "blur(50px)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Transform Your Ideas Into{" "}
              <span className="text-blue-600">Digital Reality</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              AppDost delivers end-to-end IT solutions for startups and enterprises.
              From mobile apps to SaaS platforms, we bring creativity, innovation, and excellence.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/signup">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
                  Get Free Consultation
                </button>
              </Link>
              <a
                href="#services"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-6 flex gap-8 text-sm text-gray-600">
              <div>
                <strong className="text-gray-900">10+</strong> Projects
              </div>
              <div>
                <strong className="text-gray-900">5+</strong> Apps
              </div>
              <div>
                <strong className="text-gray-900">24/7</strong> Support
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-white/70 rounded-xl p-6 shadow-xl hover:shadow-2xl transition duration-500">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="AppDost Preview"
                className="rounded-lg w-full shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div id="services" className="mt-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card icon="🔎" title="Discovery & Planning">
              Understanding goals, audience & creating clear roadmap.
            </Card>
            <Card icon="🎨" title="Design & Prototype">
              Crafting engaging interfaces and experience prototypes.
            </Card>
            <Card icon="💻" title="Development & Testing">
              Building robust, scalable, and well-tested applications.
            </Card>
            <Card icon="🚀" title="Deployment & Support">
              Launching smoothly & providing long-term maintenance.
            </Card>
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-gray-900">
              Featured Projects
            </h2>
            <Link to="/projects" className="text-sm text-blue-600 font-medium hover:underline">
              View all
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                  <div className="mt-3 text-xs text-blue-500 font-medium">{p.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
