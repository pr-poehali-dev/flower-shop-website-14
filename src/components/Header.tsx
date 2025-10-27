import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface HeaderProps {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  checkoutStep: number;
  orderForm: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    deliveryDate: string;
    deliveryTime: string;
    comment: string;
    paymentMethod: string;
  };
  setCheckoutStep: (step: number) => void;
  setOrderForm: (form: any) => void;
  updateQuantity: (id: number, delta: number, color?: string, size?: string) => void;
  removeFromCart: (id: number, color?: string, size?: string) => void;
  submitOrder: () => void;
}

const Header = ({
  cart,
  totalItems,
  totalPrice,
  checkoutStep,
  orderForm,
  setCheckoutStep,
  setOrderForm,
  updateQuantity,
  removeFromCart,
  submitOrder
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 animate-fade-in">
          <Icon name="Flower2" size={32} className="text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Цветочный рай
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
          <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
          <a href="#about" className="hover:text-primary transition-colors">О нас</a>
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
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
          <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Корзина</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <Icon name="ShoppingBag" size={64} className="mx-auto text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">Корзина пуста</p>
                </div>
              ) : checkoutStep === 1 ? (
                <>
                  {cart.map((item, idx) => (
                    <Card key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${idx}`}>
                      <CardContent className="p-4 flex gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          {item.selectedColor && <p className="text-xs text-muted-foreground">Цвет: {item.selectedColor}</p>}
                          {item.selectedSize && <p className="text-xs text-muted-foreground">Размер: {item.selectedSize}</p>}
                          <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, -1, item.selectedColor, item.selectedSize)}>
                              <Icon name="Minus" size={14} />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, 1, item.selectedColor, item.selectedSize)}>
                              <Icon name="Plus" size={14} />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)} className="ml-auto">
                              <Icon name="Trash2" size={16} className="text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Товары ({totalItems})</span>
                      <span>{totalPrice.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Доставка</span>
                      <span className="text-green-600">Бесплатно</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Итого:</span>
                      <span>{totalPrice.toLocaleString()} ₽</span>
                    </div>
                    <Button className="w-full" size="lg" onClick={() => setCheckoutStep(2)}>
                      Оформить заказ
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <Button variant="ghost" onClick={() => setCheckoutStep(1)} className="mb-4">
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Назад к корзине
                  </Button>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" value={orderForm.name} onChange={(e) => setOrderForm({...orderForm, name: e.target.value})} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" value={orderForm.phone} onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={orderForm.email} onChange={(e) => setOrderForm({...orderForm, email: e.target.value})} />
                    </div>
                    <div>
                      <Label htmlFor="city">Город *</Label>
                      <Input id="city" value={orderForm.city} onChange={(e) => setOrderForm({...orderForm, city: e.target.value})} />
                    </div>
                    <div>
                      <Label htmlFor="address">Адрес доставки *</Label>
                      <Input id="address" value={orderForm.address} onChange={(e) => setOrderForm({...orderForm, address: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Дата доставки</Label>
                        <Input id="date" type="date" value={orderForm.deliveryDate} onChange={(e) => setOrderForm({...orderForm, deliveryDate: e.target.value})} />
                      </div>
                      <div>
                        <Label htmlFor="time">Время</Label>
                        <Input id="time" type="time" value={orderForm.deliveryTime} onChange={(e) => setOrderForm({...orderForm, deliveryTime: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="payment">Способ оплаты</Label>
                      <Select value={orderForm.paymentMethod} onValueChange={(val) => setOrderForm({...orderForm, paymentMethod: val})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Картой онлайн</SelectItem>
                          <SelectItem value="cash">Наличными при получении</SelectItem>
                          <SelectItem value="transfer">Перевод на карту</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="comment">Комментарий к заказу</Label>
                      <Textarea id="comment" value={orderForm.comment} onChange={(e) => setOrderForm({...orderForm, comment: e.target.value})} />
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-lg font-bold mb-4">
                        <span>К оплате:</span>
                        <span>{totalPrice.toLocaleString()} ₽</span>
                      </div>
                      <Button className="w-full" size="lg" onClick={submitOrder}>
                        Подтвердить заказ
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
