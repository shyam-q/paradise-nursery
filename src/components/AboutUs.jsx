import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="content-page about-page">
      <section className="about-card">
        <p className="eyebrow">OUR STORY</p>
        <h1>A greener home starts here.</h1>
        <p>Paradise Nursery believes that a little greenery can make everyday life feel calmer, brighter, and more connected to nature.</p>
        <p>We curate welcoming houseplants for new plant parents and experienced growers alike. From resilient starter plants to leafy statement pieces, our goal is to help you find the right plant for your space and lifestyle.</p>
        <p>Every plant in our collection is chosen with care, and our simple shopping experience helps you discover your next favorite green companion.</p>
        <Link to="/plants" className="button">Explore our plants</Link>
      </section>
    </main>
  );
}