import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CatalogSection from '@/components/CatalogSection';
import ProductModal from '@/components/ProductModal';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

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

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  images?: string[];
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    deliveryDate: '',
    deliveryTime: '',
    comment: '',
    paymentMethod: 'card'
  });

  const products: Product[] = [
    {
      id: 1,
      name: 'Розовая нежность',
      price: 3500,
      oldPrice: 4200,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg',
      category: 'bouquets',
      rating: 5,
      description: 'Изысканный букет из роз, пионов и тюльпанов в нежных розовых тонах. Идеально подходит для романтических свиданий и признаний в любви.',
      colors: ['Розовый', 'Белый', 'Красный'],
      sizes: ['Маленький', 'Средний', 'Большой'],
      inStock: true
    },
    {
      id: 2,
      name: 'Свадебная мечта',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/5f422bb1-7189-47d2-ae5a-f4cef692833e.jpg',
      category: 'wedding',
      rating: 5,
      description: 'Роскошная композиция для свадьбы с белыми розами и зеленью. Создаст незабываемую атмосферу в ваш важный день.',
      colors: ['Белый', 'Кремовый'],
      sizes: ['Средний', 'Большой', 'XL'],
      inStock: true
    },
    {
      id: 3,
      name: 'Весенний день',
      price: 2800,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/b99bf0ae-98f8-425e-9dfc-b7c8014d7133.jpg',
      category: 'seasonal',
      rating: 4,
      description: 'Яркий букет из весенних тюльпанов и нарциссов. Подарит весеннее настроение в любое время года.',
      colors: ['Желтый', 'Розовый', 'Микс'],
      sizes: ['Маленький', 'Средний'],
      inStock: true
    },
    {
      id: 4,
      name: 'Летний закат',
      price: 4200,
      oldPrice: 5000,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg',
      category: 'bouquets',
      rating: 5,
      description: 'Пышная композиция в оранжево-розовой гамме. Символ радости и теплоты.',
      colors: ['Оранжевый', 'Розовый'],
      sizes: ['Средний', 'Большой'],
      inStock: true
    },
    {
      id: 5,
      name: 'Классический шарм',
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/5f422bb1-7189-47d2-ae5a-f4cef692833e.jpg',
      category: 'premium',
      rating: 5,
      description: 'Элегантный букет из премиальных роз. Выразит вашу изысканность и хороший вкус.',
      colors: ['Красный', 'Белый', 'Розовый'],
      sizes: ['Средний', 'Большой', 'XL'],
      inStock: true
    },
    {
      id: 6,
      name: 'Радужное настроение',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/b99bf0ae-98f8-425e-9dfc-b7c8014d7133.jpg',
      category: 'bouquets',
      rating: 4,
      description: 'Яркий микс из цветов всех оттенков радуги. Заряд позитива на весь день!',
      colors: ['Микс'],
      sizes: ['Маленький', 'Средний', 'Большой'],
      inStock: true
    },
    {
      id: 7,
      name: 'Тропический рай',
      price: 6200,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg',
      category: 'exotic',
      rating: 5,
      description: 'Экзотические цветы с тропическим очарованием.',
      colors: ['Оранжевый', 'Желтый'],
      sizes: ['Большой', 'XL'],
      inStock: true
    },
    {
      id: 8,
      name: 'Королевская роскошь',
      price: 9800,
      image: 'https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/5f422bb1-7189-47d2-ae5a-f4cef692833e.jpg',
      category: 'premium',
      rating: 5,
      description: 'VIP-композиция из редких сортов роз.',
      colors: ['Бордовый', 'Белый'],
      sizes: ['XL'],
      inStock: true
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Анна Петрова',
      avatar: '👩',
      rating: 5,
      text: 'Потрясающий сервис! Букет доставили точно в срок, цветы свежие и ароматные. Жена в восторге! Обязательно закажу еще.',
      date: '15 октября 2024',
      images: ['https://cdn.poehali.dev/projects/690e3837-25c7-4972-9a11-55790710bfb5/files/75130afe-a6ac-4721-945a-a96b49102855.jpg']
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      avatar: '👨',
      rating: 5,
      text: 'Заказывал букет на юбилей мамы. Превзошли все ожидания! Композиция была шикарная, упаковка премиум.',
      date: '10 октября 2024'
    },
    {
      id: 3,
      name: 'Елена Иванова',
      avatar: '👩‍🦰',
      rating: 4,
      text: 'Очень довольна выбором. Единственное - хотелось бы больше сезонных букетов в каталоге.',
      date: '5 октября 2024'
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Профессиональный подход! Помогли с выбором, доставили быстро. Цветы простояли больше недели.',
      date: '1 октября 2024'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все букеты', icon: 'Sparkles' },
    { id: 'bouquets', name: 'Букеты', icon: 'Flower2' },
    { id: 'wedding', name: 'Свадебные', icon: 'Heart' },
    { id: 'seasonal', name: 'Сезонные', icon: 'Sun' },
    { id: 'premium', name: 'Премиум', icon: 'Crown' },
    { id: 'exotic', name: 'Экзотика', icon: 'Palmtree' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product, color?: string, size?: string) => {
    const existing = cart.find(item => 
      item.id === product.id && 
      item.selectedColor === color && 
      item.selectedSize === size
    );
    
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id && 
        item.selectedColor === color && 
        item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1, selectedColor: color, selectedSize: size }]);
    }
    toast.success('Добавлено в корзину!');
  };

  const removeFromCart = (id: number, color?: string, size?: string) => {
    setCart(cart.filter(item => !(item.id === id && item.selectedColor === color && item.selectedSize === size)));
  };

  const updateQuantity = (id: number, delta: number, color?: string, size?: string) => {
    setCart(cart.map(item => {
      if (item.id === id && item.selectedColor === color && item.selectedSize === size) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const submitOrder = () => {
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
      toast.error('Заполните обязательные поля');
      return;
    }
    toast.success('Заказ оформлен! Скоро с вами свяжется менеджер.');
    setCart([]);
    setCheckoutStep(1);
    setOrderForm({
      name: '', phone: '', email: '', address: '', city: '',
      deliveryDate: '', deliveryTime: '', comment: '', paymentMethod: 'card'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/20 to-white">
      <Header
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        checkoutStep={checkoutStep}
        orderForm={orderForm}
        setCheckoutStep={setCheckoutStep}
        setOrderForm={setOrderForm}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        submitOrder={submitOrder}
      />

      <HeroSection />
      <FeaturesSection />
      
      <CatalogSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        filteredProducts={filteredProducts}
        onProductClick={setSelectedProduct}
      />

      <ProductModal
        product={selectedProduct}
        categories={categories}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <AboutSection />
      <ServicesSection />
      <GallerySection products={products} />
      <ReviewsSection reviews={reviews} />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
