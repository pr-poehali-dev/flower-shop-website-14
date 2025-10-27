import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  images?: string[];
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section id="reviews" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-muted-foreground">Нам доверяют тысячи довольных клиентов</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={review.id} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
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
                {review.images && (
                  <div className="flex gap-2">
                    {review.images.map((img, idx) => (
                      <img key={idx} src={img} alt="Отзыв" className="w-16 h-16 object-cover rounded" />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
