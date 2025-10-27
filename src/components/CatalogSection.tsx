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
    <section id="catalog" className="py-16 bg-muted/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
