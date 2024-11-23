import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
      `;
    };

    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] via-[#E5DEFF] to-[#FDE1D3] opacity-50" />
      
      <div
        ref={heroRef}
        className="container mx-auto px-6 py-32 transition-transform duration-300 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Create Digital
            <span className="block text-primary">Experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto">
            Crafting premium web solutions that combine stunning design with
            powerful functionality. We bring your digital vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-white rounded-lg hover-lift"
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-primary/20 rounded-lg hover-lift"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;