
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  // Indoor Plants
  { id: 1, name: 'Snake Plant', price: 350, category: 'Indoor', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 2, name: 'Peace Lily', price: 450, category: 'Indoor', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'},
  { id: 3, name: 'Money Plant', price: 250, category: 'Indoor', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 4, name: 'Monstera', price: 650, category: 'Indoor', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
  { id: 5, name: 'ZZ Plant', price: 500, category: 'Indoor', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
  { id: 6, name: 'Rubber Plant', price: 550, category: 'Indoor', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },

  // Outdoor Plants
  { id: 7, name: 'Rose Plant', price: 300, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400' },
  { id: 8, name: 'Hibiscus', price: 280, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
  { id: 9, name: 'Jasmine', price: 220, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 10, name: 'Bougainvillea', price: 400, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400' },
  { id: 11, name: 'Marigold', price: 180, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 12, name: 'Lavender', price: 350, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400' },

  // Succulents
  { id: 13, name: 'Aloe Vera', price: 200, category: 'Succulents', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
  { id: 14, name: 'Echeveria', price: 180, category: 'Succulents', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
  { id: 15, name: 'Jade Plant', price: 250, category: 'Succulents', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
  { id: 16, name: 'Haworthia', price: 220, category: 'Succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
  { id: 17, name: 'Cactus', price: 150, category: 'Succulents', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400' },
  { id: 18, name: 'String of Pearls', price: 300, category: 'Succulents', image: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=400' },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = ['Indoor', 'Outdoor', 'Succulents'];

  return (
    <div className="product-list">
      <h2>Our Beautiful Plants</h2>

      {categories.map(category => (
        <section key={category}>
          <h3>{category} Plants</h3>

          <div className="plant-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const alreadyAdded = cartItems.some(
                  item => item.id === plant.id
                );

                return (
                  <div className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h4>{plant.name}</h4>
                    <p>₹{plant.price}</p>

                    <button
                      disabled={alreadyAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {alreadyAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
