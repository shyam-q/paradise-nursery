import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice.jsx';
import { categories } from '../data/plants.js';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.items.some((item) => item.id === plant.id));

  return (
    <article className="plant-card">
      <img src={plant.image} alt={plant.name} loading="lazy" />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="plant-card-bottom">
          <span className="price">${plant.price.toFixed(2)}</span>
          <button className="button add-button" disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
            {inCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <main className="content-page">
      <section className="page-heading">
        <p className="eyebrow">THE PLANT SHOP</p>
        <h1>Find your green companion.</h1>
        <p>Browse our handpicked houseplants and bring a little more life into your space.</p>
      </section>
      {categories.map((category) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading">
            <div><h2>{category.name}</h2><p>{category.description}</p></div>
            <span>{category.plants.length} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </section>
      ))}
    </main>
  );
}