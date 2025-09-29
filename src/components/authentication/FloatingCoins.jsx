import { LuHeart } from "react-icons/lu";

  const FloatingCoins = () => (
    <div className="relative">
      {/* Donation jar with heart */}
      <div className="relative z-10">
        <div className="w-32 h-40 mx-auto relative">
          {/* Jar body */}
          <div className="absolute bottom-0 w-28 h-32 bg-white/20 rounded-2xl border-4 border-white/40 mx-auto left-1/2 transform -translate-x-1/2">
            {/* Heart in jar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <LuHeart className="w-8 h-8 text-red-500 fill-red-500" />
            </div>
          </div>
          
          {/* Jar lid */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-white/30 rounded-full border-2 border-white/50"></div>
          
          {/* Hands holding jar */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-8 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Floating coins */}
      <div className="absolute inset-0">
        {/* Coin 1 */}
        <div className="absolute top-8 left-8 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-300 flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <span className="text-xs font-bold text-yellow-800">$</span>
        </div>
        
        {/* Coin 2 */}
        <div className="absolute top-12 right-12 w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-300 flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}>
          <span className="text-xs font-bold text-yellow-800">$</span>
        </div>
        
        {/* Coin 3 */}
        <div className="absolute top-20 left-16 w-7 h-7 bg-yellow-400 rounded-full border-2 border-yellow-300 flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.8s'}}>
          <span className="text-xs font-bold text-yellow-800">$</span>
        </div>
        
        {/* Coin 4 */}
        <div className="absolute top-6 right-8 w-5 h-5 bg-yellow-400 rounded-full border-2 border-yellow-300 flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}>
          <span className="text-xs font-bold text-yellow-800">$</span>
        </div>
        
        {/* Coin 5 - falling into jar */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-300 flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold text-yellow-800">$</span>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-40 left-4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-44 right-6 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-8 w-5 h-5 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-16 right-4 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
  
  export default FloatingCoins;