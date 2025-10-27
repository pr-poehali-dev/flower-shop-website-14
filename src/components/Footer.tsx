import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Flower2" size={28} />
              <h3 className="text-xl font-bold">Цветочный рай</h3>
            </div>
            <p className="text-sm text-white/70 mb-4">Создаём букеты с любовью с 2014 года</p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#catalog" className="hover:text-white transition-colors">Букеты</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Свадебные</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Сезонные</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Премиум</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Пн-Пт: 8:00 - 22:00</li>
              <li>Сб-Вс: 9:00 - 21:00</li>
              <li className="pt-2">
                <a href="tel:+79991234567" className="hover:text-white transition-colors">+7 (999) 123-45-67</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© 2024 Цветочный рай. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
