
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>
                  Total: ₹{item.price * item.quantity}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Grand Total: ₹{totalAmount}</h2>

          <button onClick={() => alert('Coming Soon')}>
            Checkout
          </button>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;
