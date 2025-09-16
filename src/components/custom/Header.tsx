import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [{ to: "/", label: "Home" }];

  return (
    <header className="w-full border-b bg-white ">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src="/logo.jpg" alt="Logo" className="h-12 w-auto" />
            <p>Digital Smart</p>
          </Link>

          {/* Desktop Links */}
          {/* <nav className="hidden md:flex gap-6 font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`
                    text-primary
                    relative pb-1 transition-colors
                    after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all
                    hover:after:w-full
                    ${isActive ? "text-primary after:w-full" : "text-black"}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav> */}
        </div>

        {/* Right: Contact button */}
        <div className="flex items-center gap-2">
          {/* <Link to="/contact" className="hidden md:block">
            <Button variant="default">Contact </Button>
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`
                      relative pb-1 transition-colors
                      after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all
                      hover:after:w-full
                      ${isActive ? "text-primary after:w-full" : "text-black"}
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {/* Mobile Contact Button */}
              {/* <Link to="/contact" onClick={() => setOpen(false)}>
                <Button variant="default">Contact</Button>
              </Link> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
