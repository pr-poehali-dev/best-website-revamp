import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

function Calculator() {
  const [area, setArea] = useState([150]);
  const [floors, setFloors] = useState([1]);
  const pricePerSqm = 35000;
  const floorMultiplier = floors[0] === 2 ? 1.3 : 1;
  const totalPrice = Math.round(area[0] * pricePerSqm * floorMultiplier);

  return (
    <div className="space-y-6 text-white">
      <div>
        <label className="block mb-3 text-lg font-semibold">Площадь дома: {area[0]} м²</label>
        <Slider
          value={area}
          onValueChange={setArea}
          min={50}
          max={400}
          step={10}
          className="w-full"
        />
      </div>
      <div>
        <label className="block mb-3 text-lg font-semibold">Количество этажей: {floors[0]}</label>
        <Slider
          value={floors}
          onValueChange={setFloors}
          min={1}
          max={2}
          step={1}
          className="w-full"
        />
      </div>
      <div className="pt-6 border-t border-white/20">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/80">Базовая стоимость:</span>
          <span className="text-xl">{(area[0] * pricePerSqm).toLocaleString('ru-RU')} ₽</span>
        </div>
        {floors[0] === 2 && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80">Надбавка за 2 этажа (+30%):</span>
            <span className="text-xl">+ {Math.round(area[0] * pricePerSqm * 0.3).toLocaleString('ru-RU')} ₽</span>
          </div>
        )}
        <div className="flex justify-between items-center pt-4 border-t border-white/20">
          <span className="text-2xl font-bold text-[#f97316]">Итоговая стоимость:</span>
          <span className="text-3xl font-bold text-[#f97316]">{totalPrice.toLocaleString('ru-RU')} ₽</span>
        </div>
        <p className="text-sm text-white/60 mt-4">* Окончательная стоимость рассчитывается индивидуально с учетом выбранных материалов и комплектации</p>
      </div>
    </div>
  );
}

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
              {['home', 'about', 'services', 'materials', 'mortgage', 'calculator', 'portfolio', 'contacts'].map((section) => (
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
                  {section === 'materials' && 'Пиломатериалы'}
                  {section === 'mortgage' && 'Ипотека'}
                  {section === 'calculator' && 'Калькулятор'}
                  {section === 'portfolio' && 'Портфолио'}
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

      <section id="materials" className="py-20 px-4 bg-[#1e40af]/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Пиломатериалы с собственной деревообрабатывающей линии</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <img 
                      src="https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/4a535755-765c-44bd-90c2-30f60e47ff9b.jpg" 
                      alt="Деревообрабатывающая линия" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="text-white space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={24} className="text-[#f97316] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Высокое качество по доступным ценам</h3>
                        <p className="text-white/80">Контролируем весь процесс производства — от закупки древесины до готовой продукции</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Truck" size={24} className="text-[#f97316] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Доставка собственным транспортом</h3>
                        <p className="text-white/80">Доставляем пиломатериалы собственным манипулятором или транспортом — быстро и надёжно</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Доска обрезная', price: 'от 7 000 ₽/м³', icon: 'Box' },
                    { name: 'Вагонка', price: 'от 12 000 ₽/м³', icon: 'Album' },
                    { name: 'Брус', price: 'от 8 500 ₽/м³', icon: 'Container' },
                    { name: 'Горбыль', price: 'от 500 ₽/м³', icon: 'Layers' },
                    { name: 'Дрова для печек', price: 'от 2 500 ₽/м³', icon: 'Flame' },
                    { name: 'Опилки', price: 'от 300 ₽/м³', icon: 'Package' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all">
                      <Icon name={item.icon as any} size={32} className="text-[#f97316] mb-3" />
                      <h4 className="text-white font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-[#f97316] font-bold text-xl">{item.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="mortgage" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Ипотека на строительство дома</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <Icon name="Building2" size={64} className="text-[#f97316] mx-auto mb-4" />
                  <p className="text-xl text-white mb-6">
                    Помогаем оформить ипотеку на индивидуальное жилищное строительство. <br/>
                    Работаем с ведущими банками России.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: 'Percent', title: 'Выгодные ставки', desc: 'От 7% годовых на ИЖС' },
                    { icon: 'Clock', title: 'Быстрое оформление', desc: 'Помощь в сборе документов' },
                    { icon: 'Shield', title: 'Надёжные банки', desc: 'Сбербанк, ВТБ, Альфа-Банк' },
                    { icon: 'FileCheck', title: 'Полное сопровождение', desc: 'От заявки до получения средств' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white">
                      <Icon name={item.icon as any} size={32} className="text-[#f97316] flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                    Узнать условия ипотеки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-[#1e40af]/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Калькулятор стоимости</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-8">
                <Calculator />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { img: 'https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/91837d13-c770-4aed-8ffe-0ccc6afe89d8.jpg', title: 'Современный дом', desc: '180 м²' },
              { img: 'https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/54965ccf-ad18-4495-a6dc-88a251ca0258.jpg', title: 'Двухэтажный дом', desc: '220 м²' },
              { img: 'https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/91837d13-c770-4aed-8ffe-0ccc6afe89d8.jpg', title: 'Загородный дом', desc: '150 м²' },
              { img: 'https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/87d8b011-ab85-422f-86a7-c5d6297fbb6f.jpg', title: 'Дом из бруса', desc: '200 м²' },
              { img: 'https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/fa3e744e-9b9d-47e4-88dd-bed5cb0548d5.jpg', title: 'Семейный дом', desc: '170 м²' },
              { img: 'https://cdn.poehali.dev/projects/d4ba8d6f-01b6-4d1e-8e2c-c60969e05fbf/files/e1a10c65-f657-47c9-8d37-eb90e3471a16.jpg', title: 'Просторный дом', desc: '240 м²' },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:scale-105 transition-transform">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-white/80">{item.desc}</CardDescription>
                </CardHeader>
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