import { Code, Globe, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Webデザイン",
    description: "魅力的でレスポンシブなウェブサイトを制作し、ユーザーの心を掴むデザインを実現します。",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "開発",
    description: "最新技術とベストプラクティスを活用し、堅牢なWebアプリケーションを構築します。",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "デジタルソリューション",
    description: "現代のビジネスニーズに応える包括的なデジタル戦略を提供します。",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-primary/60">
            サービス内容
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            提供サービス
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl hover-lift"
            >
              <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-primary/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;