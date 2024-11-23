import React from 'react';
import { Menu, X, Guitar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#videos', label: 'Videos' },
    { href: '/#about', label: 'Acerca' },
    { href: '/contact', label: 'Redes' },
  ];

  const handleClick = (href: string) => {
    if (href.startsWith('/#') && isHome) {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
            <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/d77869e4-29ca-2888-6dc5-55a5e5827b40.png"
                  alt="logo"
                 width={185}
                />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => handleClick(href)}
                  className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90  ">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                onClick={() => handleClick(href)}
                className="text-gray-300 hover:text-red-500 block px-3 py-2  "
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}