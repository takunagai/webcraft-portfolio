const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-primary/60">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Start Your Project
            </h2>
          </div>

          <div className="glass-card rounded-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:border-primary/20 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:border-primary/20 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:border-primary/20 focus:outline-none transition-colors min-h-[150px]"
                  placeholder="Tell us about your project"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;