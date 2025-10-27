import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
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

interface ProductModalProps {
  product: Product | null;
  categories: Array<{ id: string; name: string; icon: string }>;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
}

const ProductModal = ({ product, categories, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6">
            <img src={product.image} alt={product.name} className="w-full h-96 md:h-full object-cover" />
            <div className="p-6">
              <Badge className="mb-4">{categories.find(c => c.id === product.category)?.name}</Badge>
              <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name="Star" 
                    size={18} 
                    className={i < product.rating ? 'fill-primary text-primary' : 'text-gray-300'} 
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">({product.rating}/5)</span>
              </div>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="text-sm font-semibold mb-2 block">Выберите цвет:</Label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <Badge key={color} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-semibold mb-2 block">Выберите размер:</Label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Badge key={size} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                {product.oldPrice && (
                  <span className="text-lg text-muted-foreground line-through ml-3">{product.oldPrice.toLocaleString()} ₽</span>
                )}
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={() => { 
                    onAddToCart(product, product.colors[0], product.sizes[0]); 
                    onClose(); 
                  }}
                  disabled={!product.inStock}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
                </Button>
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductModal;
