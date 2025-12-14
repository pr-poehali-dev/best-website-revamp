import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3a8a] via-[#1e40af] to-[#1d4ed8]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e3a8a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Home" size={32} className="text-[#f97316]" />
              <h1 className="text-2xl font-bold text-white">БЭСТ</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'portfolio', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-white hover:text-[#f97316] transition-colors ${
                    activeSection === section ? 'text-[#f97316] font-semibold' : ''
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <a href="tel:+79265500974" className="text-white font-semibold hover:text-[#f97316] transition-colors">
              +7 (926) 550-09-74
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#f97316] text-white text-lg px-6 py-2">
              Строим дома под ключ в Московской области
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Деревянные дома<br />вашей мечты
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              ООО "Бэст" — полный цикл строительства от деревообрабатывающей линии до сдачи под ключ
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-[#1e40af]/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">О компании</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Building2" size={24} className="text-[#f97316]" />
                  ООО "Бэст"
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-2">
                <p><strong>ИНН/КПП:</strong> 9704054224/770401001</p>
                <p><strong>ОГРН:</strong> 1217700123300</p>
                <p><strong>Адрес:</strong> 119048, г. Москва, вн. тер. г. муниципальный округ Хамовники, ул. Ефремова, д. 19, к. 1, эт./пом. 1/I, ком. 3</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Landmark" size={24} className="text-[#f97316]" />
                  Банковские реквизиты
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90 space-y-2">
                <p><strong>Банк:</strong> АО «АЛЬФА-БАНК»</p>
                <p><strong>р/с:</strong> 40702810502370006185</p>
                <p><strong>к/с:</strong> 30101810200000000593</p>
                <p><strong>БИК:</strong> 044525593</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white/90">
                <p className="text-lg leading-relaxed">
                  Компания ООО "Бэст" специализируется на строительстве деревянных домов под ключ. 
                  Мы располагаем собственной деревообрабатывающей линией, что позволяет контролировать 
                  качество материалов на всех этапах производства и предлагать конкурентные цены.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Home', title: 'Строительство домов', desc: 'Деревянные дома под ключ по индивидуальным и типовым проектам' },
              { icon: 'TreePine', title: 'Деревообработка', desc: 'Собственная деревообрабатывающая линия — качественные материалы' },
              { icon: 'Hammer', title: 'Отделочные работы', desc: 'Полный комплекс внутренних и внешних отделочных работ' },
              { icon: 'Ruler', title: 'Проектирование', desc: 'Разработка индивидуальных проектов с учетом всех пожеланий' },
              { icon: 'Wrench', title: 'Инженерные системы', desc: 'Монтаж систем отопления, водоснабжения и электрики' },
              { icon: 'Shield', title: 'Гарантия', desc: 'Полная гарантия на все виды работ и используемые материалы' },
            ].map((service, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-[#f97316] mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-white/80">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-[#1e40af]/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-[#0ea5e9] to-[#1e40af] flex items-center justify-center">
                  <Icon name="Image" size={64} className="text-white/30" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">Проект {item}</CardTitle>
                  <CardDescription className="text-white/80">Деревянный дом, 150 м²</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Блог</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Преимущества деревянных домов', date: '15 декабря 2024', excerpt: 'Почему деревянное домостроение становится все популярнее?' },
              { title: 'Этапы строительства дома', date: '10 декабря 2024', excerpt: 'Подробный разбор всех этапов от проекта до сдачи' },
              { title: 'Выбор материалов для строительства', date: '5 декабря 2024', excerpt: 'Какие породы дерева лучше всего подходят для дома' },
            ].map((post, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-2 text-[#f97316] text-sm mb-2">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </div>
                  <CardTitle className="text-white text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-white/80">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="text-[#f97316] p-0 h-auto">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-[#1e40af]/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 text-white">
                  <Icon name="MapPin" size={24} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Адрес офиса:</p>
                    <p className="text-white/90">Москва, ул. Ефремова, д. 19, к. 1</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Icon name="Phone" size={24} className="text-[#f97316]" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <a href="tel:+79265500974" className="text-white/90 hover:text-[#f97316] transition-colors">
                      +7-926-5500-974
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Icon name="Mail" size={24} className="text-[#f97316]" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <a href="mailto:ots-d@yandex.ru" className="text-white/90 hover:text-[#f97316] transition-colors">
                      ots-d@yandex.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  />
                  <textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  />
                  <Button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-[#1e3a8a] border-t border-white/10">
        <div className="container mx-auto text-center text-white/70">
          <p>© 2024 ООО "Бэст" — Строительство деревянных домов под ключ</p>
          <p className="text-sm mt-2">ИНН: 9704054224 | ОГРН: 1217700123300</p>
        </div>
      </footer>
    </div>
  );
}
