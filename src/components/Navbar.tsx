import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Heart, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home', icon: Home },
    { name: 'ABOUT', href: '#about', icon: User },
    { name: 'PROJECTS', href: '#projects', icon: Briefcase },
    { name: 'SOCIAL ENTREPRENEURSHIP', href: '#social', icon: Heart },
    { name: 'CONTACT', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg font-bold font-mono text-foreground">
            {'</BENSON>'}
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link flex flex-col items-center gap-1 py-2"
              >
                <item.icon size={16} className="text-primary" />
                <span className="text-xs tracking-wide">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="lg:hidden flex items-center gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link p-2"
                aria-label={item.name}
              >
                <item.icon size={18} className="text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
