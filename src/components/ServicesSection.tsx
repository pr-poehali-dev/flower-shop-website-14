import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">Полный спектр флористических услуг</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Icon name="Heart" size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Свадебное оформление</h3>
              <p className="text-muted-foreground mb-4">
                Создадим незабываемую атмосферу для вашей свадьбы. Букет невесты, декор зала, композиции на столы.
              </p>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Icon name="Briefcase" size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Корпоративные букеты</h3>
              <p className="text-muted-foreground mb-4">
                Украсим ваш офис или мероприятие. Работаем с компаниями любого масштаба.
              </p>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Icon name="Gift" size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Подарочные наборы</h3>
              <p className="text-muted-foreground mb-4">
                Букеты в коробках, корзины с цветами, композиции с конфетами и игрушками.
              </p>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
