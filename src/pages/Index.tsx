import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Розовая нежность',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg',
      category: 'bouquets',
      rating: 5,
      description: 'Изысканный букет из роз, пионов и тюльпанов в нежных розовых тонах'
    },
    {
      id: 2,
      name: 'Свадебная мечта',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/5f422bb1-7189-47d2-ae5a-f4cef692833e.jpg',
      category: 'wedding',
      rating: 5,
      description: 'Роскошная композиция для свадьбы с белыми розами и зеленью'
    },
    {
      id: 3,
      name: 'Весенний день',
      price: 2800,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/b99bf0ae-98f8-425e-9dfc-b7c8014d7133.jpg',
      category: 'seasonal',
      rating: 4,
      description: 'Яркий букет из весенних тюльпанов и нарциссов'
    },
    {
      id: 4,
      name: 'Летний закат',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg',
      category: 'bouquets',
      rating: 5,
      description: 'Пышная композиция в оранжево-розовой гамме'
    },
    {
      id: 5,
      name: 'Классический шарм',
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/5f422bb1-7189-47d2-ae5a-f4cef692833e.jpg',
      category: 'premium',
      rating: 5,
      description: 'Элегантный букет из премиальных роз'
    },
    {
      id: 6,
      name: 'Радужное настроение',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/b99bf0ae-98f8-425e-9dfc-b7c8014d7133.jpg',
      category: 'bouquets',
      rating: 4,
      description: 'Яркий микс из цветов всех оттенков радуги'
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      text: 'Потрясающий сервис! Букет доставили точно в срок, цветы свежие и ароматные. Жена в восторге!',
      date: '15 октября 2024'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 5,
      text: 'Заказывал букет на юбилей мамы. Превзошли все ожидания! Композиция была шикарная, упаковка премиум.',
      date: '10 октября 2024'
    },
    {
      id: 3,
      name: 'Елена Иванова',
      rating: 4,
      text: 'Очень довольна выбором. Единственное - хотелось бы больше сезонных букетов в каталоге.',
      date: '5 октября 2024'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все букеты', icon: 'Sparkles' },
    { id: 'bouquets', name: 'Букеты', icon: 'Flower2' },
    { id: 'wedding', name: 'Свадебные', icon: 'Heart' },
    { id: 'seasonal', name: 'Сезонные', icon: 'Sun' },
    { id: 'premium', name: 'Премиум', icon: 'Crown' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success('Добавлено в корзину!');
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/20 to-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <Icon name="Flower2" size={32} className="text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Цветочный рай
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="relative">
                <Icon name="ShoppingCart" size={20} />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-secondary">{totalItems}</Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <Card key={item.id}>
                        <CardContent className="p-4 flex gap-4">
                          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, -1)}>
                                <Icon name="Minus" size={14} />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                                <Icon name="Plus" size={14} />
                              </Button>
                              <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id)} className="ml-auto">
                                <Icon name="Trash2" size={16} className="text-destructive" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-lg font-bold mb-4">
                        <span>Итого:</span>
                        <span>{totalPrice.toLocaleString()} ₽</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Цветы, которые дарят радость
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Создаём неповторимые букеты с душой. Доставка за 2 часа по всему городу!
            </p>
            <Button size="lg" className="text-lg px-8 py-6 animate-scale-in" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
              Выбрать букет
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог букетов</h2>
            <p className="text-muted-foreground">Подберите идеальную композицию для любого случая</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="transition-all hover:scale-105"
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-foreground">
                    <Icon name="Star" size={14} className="mr-1 fill-primary text-primary" />
                    {product.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedProduct(null)}>
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 object-cover" />
                <div className="p-6">
                  <Badge className="mb-4">{categories.find(c => c.id === selectedProduct.category)?.name}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{selectedProduct.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={18} 
                        className={i < selectedProduct.rating ? 'fill-primary text-primary' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">({selectedProduct.rating}/5)</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
                  <p className="text-3xl font-bold text-primary mb-6">{selectedProduct.price} ₽</p>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Добавить в корзину
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedProduct(null)}>
                      Закрыть
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <section id="gallery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея наших работ</h2>
            <p className="text-muted-foreground">Вдохновляйтесь нашими композициями</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...products, ...products].map((product, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-square animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">Нам доверяют тысячи довольных клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={16} 
                        className={i < review.rating ? 'fill-primary text-primary' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-4 text-muted-foreground">{review.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">Ответы на популярные вопросы о доставке и заказе</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Как быстро вы доставляете цветы?</AccordionTrigger>
              <AccordionContent>
                Мы доставляем букеты в течение 2 часов по всему городу. Для срочных заказов доступна экспресс-доставка за 1 час.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Можно ли заказать индивидуальный букет?</AccordionTrigger>
              <AccordionContent>
                Конечно! Наши флористы с удовольствием создадут уникальную композицию по вашим пожеланиям. Свяжитесь с нами для обсуждения деталей.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Какие способы оплаты вы принимаете?</AccordionTrigger>
              <AccordionContent>
                Мы принимаем оплату картой онлайн, наличными при получении, а также переводом на карту или через системы онлайн-платежей.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Как долго сохраняются цветы?</AccordionTrigger>
              <AccordionContent>
                При правильном уходе наши букеты радуют свежестью от 7 до 14 дней. К каждому заказу прилагается инструкция по уходу за цветами.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Можно ли заказать доставку на определённое время?</AccordionTrigger>
              <AccordionContent>
                Да, при оформлении заказа вы можете указать желаемое время доставки. Мы постараемся доставить букет точно в срок.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Остались вопросы?</h2>
            <p className="mb-8 text-white/90">Свяжитесь с нами удобным способом, и мы поможем с выбором!</p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-3 text-white" />
                  <p className="font-semibold mb-1">Телефон</p>
                  <p className="text-sm text-white/80">+7 (999) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-3 text-white" />
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-white/80">info@flowers.ru</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-3 text-white" />
                  <p className="font-semibold mb-1">Адрес</p>
                  <p className="text-sm text-white/80">ул. Цветочная, 15</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower2" size={28} />
                <h3 className="text-xl font-bold">Цветочный рай</h3>
              </div>
              <p className="text-sm text-white/70">Создаём букеты с любовью с 2020 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Букеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Свадебные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сезонные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Премиум</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
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
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 Цветочный рай. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
