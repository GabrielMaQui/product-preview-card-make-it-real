
import './App.css'

function ProductImage() {

  return (
    <div className="product-image">
      
    </div>
  );
};

function ProductInfo() {
  return (
    <>
    <div className="product-info">
      <p className="category">PERFUME</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p className="description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="price">
        <span className="current-price">$149.99</span>
        <span className="original-price">$169.99</span>
      </div>
      <button className="add-to-cart"> <img src='/src/assets/icon-cart.svg'/>   Add to Cart</button>
    </div>
    </>
  );
};

function ProductCard() {
  return (
    <div className="product-card">
      <ProductImage />
      <ProductInfo />
    </div>
  );
};

function App() {
  return (
    <>
    <ProductCard />
    </>
  );
}

export default App
