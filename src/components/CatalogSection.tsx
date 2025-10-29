import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ProductCard from './ProductCard';

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

interface CatalogSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Array<{ id: string; name: string; icon: string }>;
  filteredProducts: Product[];
  onProductClick: (product: Product) => void;
}

const CatalogSection = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredProducts,
  onProductClick
}: CatalogSectionProps) => {
  return (
    <section id="catalog" className="py-24 bg-gradient-to-b from-accent/30 to-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Наши коллекции</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог букетов</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Подберите идеальную композицию для любого случая</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, index) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className={`transition-all duration-300 hover:scale-105 animate-fade-in ${
                selectedCategory === cat.id 
                  ? 'shadow-lg bg-gradient-to-r from-primary to-primary/90' 
                  : 'bg-white/50 backdrop-blur-sm hover:bg-white border-2'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Icon name={cat.icon as any} size={18} className="mr-2" />
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;