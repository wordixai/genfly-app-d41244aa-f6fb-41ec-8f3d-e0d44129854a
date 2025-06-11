import { Heart, Award, Coffee } from "lucide-react"

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded in 2015, Brew Haven began as a small neighborhood coffee shop with a big dream: 
              to create a community space where people could connect over exceptional coffee. Today, we're 
              proud to serve premium, ethically sourced beans roasted to perfection.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Coffee className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Coffee</h4>
                  <p className="text-gray-600">Sourced directly from farmers, ensuring quality and sustainability</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Focus</h4>
                  <p className="text-gray-600">Creating connections and supporting local initiatives</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Award Winning</h4>
                  <p className="text-gray-600">Recognized for excellence in coffee and customer service</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Coffee shop interior"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1442975631115-c4f7b05bad06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Barista at work"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Coffee beans"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Latte art"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About