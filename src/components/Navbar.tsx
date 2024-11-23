import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          webco.
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {['プロジェクト', 'サービス', '会社概要', 'お問い合わせ'].map((item) => (
            <a
              key={item}
              href={`#${item === 'プロジェクト' ? 'projects' : 
                     item === 'サービス' ? 'services' :
                     item === '会社概要' ? 'about' : 'contact'}`}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t">
          {['プロジェクト', 'サービス', '会社概要', 'お問い合わせ'].map((item) => (
            <a
              key={item}
              href={`#${item === 'プロジェクト' ? 'projects' : 
                     item === 'サービス' ? 'services' :
                     item === '会社概要' ? 'about' : 'contact'}`}
              className="block px-6 py-4 text-primary hover:bg-secondary/20 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;