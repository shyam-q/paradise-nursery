import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice.jsx';

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="content-page cart-page">
        <section className="empty-state">
          <span className="empty-icon">🪴</span>
          <h1>Your cart is ready to grow.</h1>
          <p>You haven't added any plants yet.</p>
          <Link to="/plants" className="button">Continue Shopping</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="content-page cart-page">
      <section className="page-heading cart-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>{items.reduce((sum, item) => sum + item.quantity, 0)} plant item(s) in your cart</p>
      </section>
      <div className="cart-layout">
        <section className="cart-list" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-product-details">
                <h2>{item.name}</h2>
                <p className="muted">Unit price: ${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
              </div>
              <div className="cart-line-total">
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div className="summary-line"><span>Plants subtotal</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-line"><span>Delivery</span><span>Calculated later</span></div>
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="button checkout-button" onClick={() => window.alert('Coming Soon! Checkout will be available soon.')}>Checkout</button>
          <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </aside>
      </div>
    </main>
  );
}