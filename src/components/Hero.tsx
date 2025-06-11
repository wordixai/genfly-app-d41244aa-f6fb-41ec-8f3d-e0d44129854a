import { Button } from "@/components/ui/button"
import { Coffee, Clock, MapPin } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Coffee className="w-12 h-12 text-amber-600 mr-2" />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Brew Haven
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Where every cup tells a story. Experience the perfect blend of artisan coffee, 
          cozy atmosphere, and exceptional service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Order Now
          </Button>
          <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg">
            View Menu
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Open Daily 6AM - 10PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Downtown Coffee District</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero