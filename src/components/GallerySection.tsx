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

interface GallerySectionProps {
  products: Product[];
}

const GallerySection = ({ products }: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-16 bg-white">
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
  );
};

export default GallerySection;
