/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar' ;
const products = [
    {
      id: 1,
      name: 'chocolate',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1hugWDePxVxwwAGl6w3dzmySMZSFeEtsc',
      imageAlt: "Otakk Kirii.",
      price: '23.300',
    
    },

    {
      id: 1,
      name: 'redvelvetberry',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1B3p22cpFYM8jSuIJeU8WNnGXl2g-X9P3',
      imageAlt: "Otakk Kirii.",
      price: '24.300',
    
    },

    {
      id: 1,
      name: 'Milkshakes',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=19gnF424J4KtvOA3h1l8pMUePXp2r85YX',
      imageAlt: "Otakk Kirii.",
      price: '23.300',
    
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
          <Navbar/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Menu Minuman</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  