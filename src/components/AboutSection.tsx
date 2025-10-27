import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашей студии</h2>
            <p className="text-muted-foreground mb-4">
              Мы работаем с цветами уже более 10 лет. За это время создали тысячи букетов для самых важных моментов жизни наших клиентов.
            </p>
            <p className="text-muted-foreground mb-4">
              Каждый букет — это произведение искусства, созданное с любовью и вниманием к деталям. Мы используем только свежие цветы из лучших питомников мира.
            </p>
            <p className="text-muted-foreground mb-6">
              Наша миссия — дарить радость и создавать незабываемые моменты через красоту цветов.
            </p>
            <Button size="lg">
              Узнать больше
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg" alt="Студия" className="rounded-lg h-48 object-cover" />
            <img src="https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/5f422bb1-7189-47d2-ae5a-f4cef692833e.jpg" alt="Работа" className="rounded-lg h-48 object-cover mt-8" />
            <img src="https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/b99bf0ae-98f8-425e-9dfc-b7c8014d7133.jpg" alt="Букеты" className="rounded-lg h-48 object-cover" />
            <img src="https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg" alt="Цветы" className="rounded-lg h-48 object-cover mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
