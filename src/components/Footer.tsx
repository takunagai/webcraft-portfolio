const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">webco.</h3>
            <p className="text-white/70">
              革新的なデジタル体験を創造する
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2">
              {['Webデザイン', '開発', 'デジタルソリューション'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">会社情報</h4>
            <ul className="space-y-2">
              {['会社概要', 'プロジェクト', 'お問い合わせ'].map((item) => (
                <li key={item}>
                  <a href={`#${item === '会社概要' ? 'about' : 
                           item === 'プロジェクト' ? 'projects' : 'contact'}`} 
                     className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-white/70">
              <li>info@webco.jp</li>
              <li>03-1234-5678</li>
              <li>〒100-0001 東京都千代田区1-1-1</li>
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