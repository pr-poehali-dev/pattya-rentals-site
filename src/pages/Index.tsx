import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/rental_pattaya/8645', '_blank');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/img/40d562d6-87ae-4931-85fd-4fe95ea17738.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight animate-fade-in">
          <span className="block text-cyan-300">АРЕНДА</span>
          <span className="block text-white">АВТО</span>
          <span className="block text-cyan-200 text-3xl md:text-4xl mt-4">в Паттайе</span>
        </h1>
        
        <div className="mt-12 animate-scale-in">
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <Icon name="Send" className="mr-3" size={24} />
            Паттайя Аренда
          </Button>
          <p className="text-cyan-100 mt-4 text-lg">t.me/rental_pattaya</p>
        </div>

        {/* Floating icons */}
        <div className="absolute top-20 left-10 text-yellow-400 animate-bounce">
          <Icon name="Palmtree" size={32} />
        </div>
        <div className="absolute bottom-20 right-10 text-cyan-300 animate-pulse">
          <Icon name="Car" size={32} />
        </div>
        <div className="absolute top-32 right-16 text-white animate-bounce delay-300">
          <Icon name="Bike" size={28} />
        </div>
        <div className="absolute bottom-32 left-16 text-yellow-300 animate-pulse delay-500">
          <Icon name="Home" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Index;