import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-md transition-colors " + (isActive ? "text-primary font-semibold" : "text-gray-700 hover:text-primary")
    }
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-primary-dark flex items-center justify-center text-white font-bold shadow">
            AD
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">AppDost</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Complete IT Solutions</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <div className="ml-3">
            <Link to="/signup"><Button>Get Started</Button></Link>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <Link to="/login" className="text-sm text-gray-700">Sign in</Link>
          <button
            className="p-2 rounded-md border"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-gray-700">Home</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="text-gray-700">Projects</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="text-gray-700">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-gray-700">Contact</Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="mt-2">
              <span className="btn-primary block text-center">Get Started</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
