import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  const features = [
    {
      icon: "Clock",
      title: "Доставка 2 часа",
      description: "Быстрая доставка по городу",
      delay: "0s"
    },
    {
      icon: "Flower2",
      title: "Свежие цветы",
      description: "Только из лучших питомников",
      delay: "0.1s"
    },
    {
      icon: "Users",
      title: "Профи флористы",
      description: "Опытные мастера своего дела",
      delay: "0.2s"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Заменим букет, если не понравится",
      delay: "0.3s"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-accent/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0VDNEE5OSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm animate-fade-in overflow-hidden relative"
              style={{ animationDelay: feature.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="mb-4 relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                  <Icon name={feature.icon as any} size={56} className="mx-auto text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;