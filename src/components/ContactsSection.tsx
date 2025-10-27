import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-white/90">Мы всегда рады помочь с выбором!</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={40} className="mx-auto mb-3" />
                <p className="font-semibold mb-2">Телефон</p>
                <p className="text-sm text-white/80">+7 (999) 123-45-67</p>
                <p className="text-sm text-white/80">Ежедневно 8:00-22:00</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={40} className="mx-auto mb-3" />
                <p className="font-semibold mb-2">Email</p>
                <p className="text-sm text-white/80">info@flowers.ru</p>
                <p className="text-sm text-white/80">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={40} className="mx-auto mb-3" />
                <p className="font-semibold mb-2">Адрес</p>
                <p className="text-sm text-white/80">ул. Цветочная, 15</p>
                <p className="text-sm text-white/80">Москва, Россия</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Остались вопросы? Напишите нам!</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="contact-name" className="text-white">Ваше имя</Label>
                  <Input id="contact-name" className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <Label htmlFor="contact-phone" className="text-white">Телефон</Label>
                  <Input id="contact-phone" type="tel" className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
              </div>
              <div className="mb-4">
                <Label htmlFor="contact-message" className="text-white">Сообщение</Label>
                <Textarea id="contact-message" rows={4} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
              </div>
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
