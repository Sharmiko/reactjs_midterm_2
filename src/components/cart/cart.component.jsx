import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../cartItem/cartItem.component';
import './cart.style.scss';

const Cart = () => {
  const { items, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch({
      type: 'orderHistory/addedPackage',
      payload: { cost: totalCost, items: items },
    });
    dispatch({ type: 'cart/checkedOut' });
  };

  return !items || items.length === 0 ? (
    <div className="cart">
      <h2>Your cart is empty</h2>
    </div>
  ) : (
    <div className="cart">
      <button className="cart__checkout ActionButton" onClick={handleCheckout}>
        Checkout for {totalCost.toFixed(2)}$
      </button>
      <ul className="cart-list">
        {items.map((productItem) => (
          <CartItem
            key={productItem.id}
            id={productItem.id}
            name={productItem.name}
            price={productItem.price}
            imageUrl={productItem.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;