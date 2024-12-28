<template>
  <div class="home">
    <section class="categories">
      <h2>Shop by Category</h2>
      <div class="category-grid">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-card"
        >
          <img
            :src="category.image"
            :alt="category.name"
          >
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </section>

    <section class="featured-products">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="product-card"
        >
          <img
            :src="product.image"
            :alt="product.name"
          >
          <h3>{{ product.name }}</h3>
          <p class="price">
            ${{ product.price }}
          </p>
          <button @click="addToCart(product)">
            Add to Cart
          </button>
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
        { name: 'DRESS', image: require('@/assets/DRESSfinal project FE Sisko.png') },
        { name: 'JACKET', image: require('@/assets/JACKETfinal project FE Sisko.png') },
        { name: 'SHOES', image: require('@/assets/SHOESfinal project FE Sisko.png') },
        { name: 'GLASSES', image: require('@/assets/GLASSESfinal project FE Sisko.png') },
        { name: 'HAT', image: require('@/assets/HATfinal project FE Sisko.png') },
        { name: 'TROUSERS', image: require('@/assets/TROUSERSfinal project FE Sisko.png') }
      ],
      featuredProducts: [
        {
          id: 1,
          name: 'Little Black Dress',
          price: 99.99,
          image: require('@/assets/Little Black Dressfinal project FE Sisko.png')
        },
        {
          id: 2,
          name: 'Classic Sneakers',
          price: 79.99,
          image: require('@/assets/Sneakersfinal project FE Sisko.png')
        },
        {
          id: 3,
          name: 'Casual Shirt',
          price: 49.99,
          image: require('@/assets/Shirtfinal project FE Sisko.png')
        }
      ]
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  padding: 48px;
}

.categories, .featured-products {
  margin-bottom: 48px;

  h2 {
    text-align: center;
    margin-bottom: 32px;
    font-size: 32px;
  }
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.category-card {
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  background: #f8f8f8;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 18px;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.product-card {
  text-align: center;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .price {
    color: #e44d26;
    font-weight: bold;
    margin-bottom: 16px;
  }

  button {
    background: #000;
    color: white;
    border: none;
    padding: 8px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #333;
    }
  }
}
</style>
