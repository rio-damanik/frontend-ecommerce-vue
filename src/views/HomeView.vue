<template>
  <div class="home">
    <!-- New Arrival Section -->
    <section class="new-arrival">
      <h1 class="title">NEW ARRIVAL!!</h1>
      <h2 class="subtitle">Summer Special Edition</h2>
      
      <div class="products-grid">
        <div v-for="(product, index) in newArrivals" :key="index" class="product-card">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p class="price">Rp {{ product.price.toLocaleString() }}</p>
        </div>
      </div>
    </section>

    <!-- Special Edition Bundles -->
    <section class="special-edition">
      <div class="bundle-grid">
        <div class="bundle-image">
          <img src="../assets/bundle-outfit.jpg" alt="Bundle Grey Jean">
        </div>
        <div class="bundle-info">
          <h2 class="special-title">Special Edition!!</h2>
          <h3 class="bundle-name">Bundle: Grey Jean, White Shirt, & Brown Boots</h3>
          <p class="bundle-price">Rp 1.300.000.00</p>
          <button class="buy-now">Buy Now</button>
        </div>
      </div>

      <div class="bundle-grid reverse">
        <div class="bundle-info">
          <h2 class="special-title">Special Edition!!</h2>
          <h3 class="bundle-name">Bundle: Grey Jean, White Shirt, & Brown Boots</h3>
          <p class="bundle-price">Rp 1.300.000.00</p>
          <button class="buy-now">Buy Now</button>
        </div>
        <div class="bundle-image">
          <img src="../assets/bundle-outfit.jpg" alt="Bundle Grey Jean">
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
      <h1 class="title">CATEGORIES</h1>
      <div class="category-grid">
        <div v-for="category in categories" :key="category.name" class="category-card">
          <div class="image-container">
            <img :src="category.image" :alt="category.name">
            <div class="category-name">{{ category.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Store Section -->
    <section class="location-store">
  <div class="store-container">
    <div class="store-header">
      <h1 class="store-title">Location Store</h1>
      <img src="../assets/arshion-logo.png" alt="ARSHION" class="store-logo">
    </div>
    
    <div class="store-locations">
      <div class="location">
        <h2>Jakarta</h2>
        <p>Jakarta Selatan - Jl. Fatmawati No.07</p>
      </div>

      <div class="location">
        <h2>Bandung</h2>
        <p>Bandung Selatan - Jl. Cibaduyut No.22</p>
      </div>

      <div class="location">
        <h2>Yogyakarta</h2>
        <p>Kota Yogyakarta - Jl. Malioboro No.10</p>
      </div>
    </div>
  </div>
</section>

    <!-- Footer Section -->
    <section class="footer-section">
      <div class="store-container">
        <div class="store-footer">
          <div class="footer-section">
            <h3>Come To Join</h3>
            <div class="email-signup">
              <input type="email" placeholder="Email" class="email-input">
              <button class="submit-btn">Submit</button>
            </div>
            <p class="terms">By submitting your email address, you agree to receive marketing emails from ARSHION and accept our terms & conditions and privacy policy.</p>
          </div>

          <div class="footer-section">
            <h3>About Arshion</h3>
            <ul>
              <li><a href="#">Information</a></li>
              <li><a href="#">Store location</a></li>
              <li><a href="#">Partnerships</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Payment Method</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Me</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Follow me</h3>
            <div class="social-icons">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div class="copyright">
          <p> 2023 ARSHION. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      categories: [
        { name: 'TSHIRT', image: require('@/assets/tshirt.jpg') },
        { name: 'GLASSES', image: require('@/assets/glasses.jpg') },
        { name: 'JACKET', image: require('@/assets/jacket.jpg') },
        { name: 'SHOES', image: require('@/assets/shoes.jpg') },
        { name: 'SANDALS', image: require('@/assets/sandals.jpg') },
        { name: 'DRESS', image: require('@/assets/dress.jpg') },
        { name: 'TROUSERS', image: require('@/assets/trousers.jpg') },
        { name: 'HAT', image: require('@/assets/hat.jpg') },
        { name: 'SHIRT', image: require('@/assets/shirt.jpg') }
      ],
      newArrivals: [
        {
          name: 'INCERUN Men Casual Chinese Style',
          price: 126000,
          image: require('../assets/chinese-shirt.jpg')
        },
        {
          name: 'INCERUN Men Casual Chinese Style',
          price: 126000,
          image: require('../assets/chinese-shirt.jpg')
        },
        {
          name: 'INCERUN Men Casual Chinese Style',
          price: 126000,
          image: require('../assets/chinese-shirt.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Common Styles */
.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
}

.subtitle {
  text-align: center;
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

/* New Arrival Section */
.new-arrival {
  margin-bottom: 60px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.product-card {
  text-align: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.product-card img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
}

.product-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #ff4444;
}

/* Special Edition Styles */
.special-edition {
  margin-bottom: 60px;
}

.bundle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  align-items: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.bundle-grid.reverse {
  direction: rtl;
}

.bundle-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bundle-info {
  padding: 2rem;
  text-align: center;
  direction: ltr;
}

.special-title {
  color: #ff4444;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.bundle-name {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.bundle-price {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #ff4444;
}

.buy-now {
  background-color: #333;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-now:hover {
  background-color: #555;
}

/* Categories Section */
.categories {
  margin-bottom: 60px;
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
}

.category-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 330px;
}

.category-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  width: 330px;
  height: 357px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Location Store Section */
.location-store {
  background-color: rgba(0, 0, 0, 0.8);
  background-image: url('../assets/background-location.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-attachment: fixed;
  color: white;
  padding: 60px 20px;
  margin-top: 60px;
  margin-left: -20px;
  margin-right: -20px;
  width: calc(100% + 40px);
  position: relative;
  margin-bottom: 15px;
}

.store-header {
  position: relative;
  margin-bottom: 40px;
}

.store-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.store-logo {
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  filter: brightness(0) invert(1); /* Makes the logo white */
}

.store-logo img {
  height: 50px;
  margin-bottom: 20px;
}

.store-logo h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}


.store-title {
  text-align: center;
  font-size: 2.5rem;
}

.store-locations {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;
  margin: 0 auto;
}

.location {
  text-align: center;
}

.location h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.location p {
  font-size: 1.2rem;
  color: #e0e0e0;
}

/* Footer Section */
.footer-section {
  background-color: #1a1a1a;
  color: white;
  padding: 60px 0;
  width: 100%;
  position: relative;
}

.store-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 70px;
}


.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: white;
}

.email-signup {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.email-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #333;
  background: transparent;
  color: white;
  border-radius: 5px;
}

.submit-btn {
  padding: 10px 20px;
  background: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background: #cccccc;
}

.terms {
  font-size: 0.9rem;
  color: #999;
  line-height: 1.4;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #cccccc;
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: white;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #cccccc;
}

.copyright {
  text-align: center;
  margin-top: 40px;
  color: #999;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .category-grid,
  .products-grid,
  .store-locations {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .category-card,
  .image-container {
    width: 100%;
  }
  
  .image-container {
    height: 300px;
  }

  .bundle-grid {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .bundle-grid.reverse {
    direction: ltr;
  }

  .store-footer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .category-grid,
  .products-grid,
  .store-locations {
    grid-template-columns: 1fr;
  }

  .category-card,
  .image-container {
    width: 100%;
    max-width: 330px;
  }

  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .store-footer {
    grid-template-columns: 1fr;
  }

  .store-logo h1 {
    font-size: 2.5rem;
  }

  .location h2 {
    font-size: 1.8rem;
  }
}
</style>