const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} AppDost. All rights reserved.
        </div>
        <div className="flex gap-4 text-gray-600">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="/contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
