import { useDispatch } from 'react-redux';
import './cartItem.style.scss';

const CartItem = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="cartItem__header">
        <h3 className="cartItem__name">{name}</h3>
        <button 
          className="cartItem__remove"
          onClick={() => dispatch({ type: 'cart/productRemoved', payload: { id, price } })}
        ></button>
      </div>
      <span className="cart-item__price">${price}</span>
      <img src={imageUrl} alt={name} className="cart-item__image" />
    </div>
  );
};

export default CartItem;