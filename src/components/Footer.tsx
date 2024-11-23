const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">webco.</h3>
            <p className="text-white/70">
              Creating digital experiences that inspire and innovate.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Design', 'Development', 'Digital Solutions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>hello@webco.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Web Street, Digital City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} webco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;