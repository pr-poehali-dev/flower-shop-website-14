import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: () => void;
}

const ProductCard = ({ product, index, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in bg-gradient-to-br from-white to-accent/20 border-0"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        {product.oldPrice && (
          <Badge className="absolute top-4 left-4 bg-destructive shadow-lg z-20 animate-pulse">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </Badge>
        )}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md z-20 flex items-center gap-1">
          <Icon name="Star" size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold">{product.rating}</span>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
            <Badge variant="secondary" className="text-base px-6 py-2">Нет в наличии</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {product.price.toLocaleString()} ₽
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">{product.oldPrice.toLocaleString()} ₽</span>
            )}
          </div>
          <Icon name="ArrowRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;