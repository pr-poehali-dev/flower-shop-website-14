import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Цветы, которые дарят радость
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Создаём неповторимые букеты с душой. Доставка за 2 часа по всему городу!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg px-8 py-6 animate-scale-in" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
              Выбрать букет
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 animate-scale-in" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
