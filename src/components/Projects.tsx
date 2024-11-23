const projects = [
  {
    title: "E-commerce Platform",
    description: "A premium shopping experience with seamless checkout",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Web Development",
  },
  {
    title: "Financial Dashboard",
    description: "Real-time analytics and reporting system",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Application",
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with intuitive interface",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Web Development",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary/60">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl hover-lift"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm uppercase tracking-wider text-white/80">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  <p className="text-white/80 mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;