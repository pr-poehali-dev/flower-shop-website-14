import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-br from-accent via-white to-accent/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <Icon name="Sparkles" size={18} className="text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Премиальные букеты с доставкой</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Цветы, которые
            </span>
            <br />
            <span className="text-foreground">дарят радость</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 animate-fade-in max-w-2xl mx-auto font-light">
            Создаём неповторимые композиции с душой и вниманием к деталям. 
            Быстрая доставка за 2 часа.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-primary/90" 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Выбрать букет
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 bg-white/50 backdrop-blur-sm hover:bg-white/80 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105" 
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;