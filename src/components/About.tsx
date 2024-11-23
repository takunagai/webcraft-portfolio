const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-wider text-primary/60">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              We're a team of digital craftsmen
            </h2>
            <p className="text-primary/70 leading-relaxed">
              With years of experience in digital innovation, we combine creativity
              with technical expertise to deliver exceptional results. Our passion
              lies in transforming ideas into powerful digital solutions that drive
              business growth.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold">100+</div>
                <p className="text-primary/60 mt-2">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <p className="text-primary/60 mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;