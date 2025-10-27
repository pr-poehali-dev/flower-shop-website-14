import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
          <p className="text-muted-foreground">Ответы на популярные вопросы о доставке и заказе</p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">Как быстро вы доставляете цветы?</AccordionTrigger>
            <AccordionContent>
              Мы доставляем букеты в течение 2 часов по всему городу. Для срочных заказов доступна экспресс-доставка за 1 час с доплатой 500 рублей.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">Можно ли заказать индивидуальный букет?</AccordionTrigger>
            <AccordionContent>
              Конечно! Наши флористы с удовольствием создадут уникальную композицию по вашим пожеланиям. Свяжитесь с нами по телефону или в чате для обсуждения деталей.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">Какие способы оплаты вы принимаете?</AccordionTrigger>
            <AccordionContent>
              Мы принимаем оплату картой онлайн, наличными при получении, а также переводом на карту или через системы онлайн-платежей (Сбербанк, Тинькофф, ЮMoney).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">Как долго сохраняются цветы?</AccordionTrigger>
            <AccordionContent>
              При правильном уходе наши букеты радуют свежестью от 7 до 14 дней. К каждому заказу прилагается инструкция по уходу за цветами и пакетик подкормки.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">Можно ли заказать доставку на определённое время?</AccordionTrigger>
            <AccordionContent>
              Да, при оформлении заказа вы можете указать желаемое время доставки. Мы постараемся доставить букет точно в срок с точностью ±30 минут.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left">Есть ли у вас программа лояльности?</AccordionTrigger>
            <AccordionContent>
              Да! При каждом заказе вы получаете баллы, которые можно обменять на скидки. Также действуют специальные предложения для постоянных клиентов.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left">Что делать, если букет пришел не свежим?</AccordionTrigger>
            <AccordionContent>
              Мы гарантируем свежесть всех букетов. Если вы не довольны качеством, свяжитесь с нами в течение 24 часов — мы заменим букет бесплатно или вернем деньги.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
