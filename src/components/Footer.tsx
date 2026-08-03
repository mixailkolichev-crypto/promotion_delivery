import { MessageSquare, Send, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#09090B] text-zinc-400 py-12 border-t border-zinc-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-full bg-[#FFCC00] flex items-center justify-center font-black text-black text-xs shadow-md shadow-[#FFCC00]/40">
                е
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                еда<span className="text-[#FFCC00]">.</span> Promotion Delivery
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Агентство комплексного продвижения ресторанов и кафе на сервисе Яндекс.Еда в России. Увеличиваем заказы, выручку и рейтинг заведений с гарантией.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://wa.me/79161482007"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-bold text-[#25D366] border border-zinc-800 hover:border-[#25D366] transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://max.ru/promotion_delivery"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-bold text-[#FFCC00] border border-zinc-800 hover:border-[#FFCC00] transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                <span>MAX Messenger</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#FFCC00] transition-colors">Услуги</a></li>
              <li><a href="#cases" className="hover:text-[#FFCC00] transition-colors">Кейсы</a></li>
              <li><a href="#about" className="hover:text-[#FFCC00] transition-colors">О нас</a></li>
              <li><a href="#reviews" className="hover:text-[#FFCC00] transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span>Оптимизация карточки и меню</span></li>
              <li><span>Продвижение в ТОП выдачи</span></li>
              <li><span>Работа с рейтингом 4.9+</span></li>
              <li><span>Настройка акций и скидок</span></li>
              <li><span>Сквозная аналитика 24/7</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#FFCC00]" />
                <a href="tel:+79161482007" className="hover:text-white transition-colors">+7 (916) 148-20-07</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#FFCC00]" />
                <a href="mailto:makhareakhalaia@gmail.com" className="hover:text-white transition-colors">makhareakhalaia@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#FFCC00]" />
                <span>Москва, Пресненская наб. 12, Москва-Сити</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <span>© {new Date().getFullYear()} Promotion Delivery. Все права защищены.</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Оферта</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
