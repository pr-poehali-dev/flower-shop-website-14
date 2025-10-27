import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Доставка 2 часа</h3>
              <p className="text-sm text-muted-foreground">Быстрая доставка по городу</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Icon name="Flower2" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Свежие цветы</h3>
              <p className="text-sm text-muted-foreground">Только из лучших питомников</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Профи флористы</h3>
              <p className="text-sm text-muted-foreground">Опытные мастера своего дела</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">Заменим букет, если не понравится</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
