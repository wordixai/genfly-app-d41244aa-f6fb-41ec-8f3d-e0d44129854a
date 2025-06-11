import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

const menuItems = [
  {
    name: "Signature Espresso",
    description: "Rich and bold espresso with caramel notes",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Artisan Cappuccino",
    description: "Perfectly steamed milk with artistic foam design",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Cold Brew Delight",
    description: "Smooth cold brew with vanilla cream",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Matcha Latte",
    description: "Premium matcha powder with oat milk",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
]

const FeaturedMenu = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handcrafted beverages, made with the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-gray-900">{item.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedMenu