<template>
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
</template>

<script>
export default {
  name: 'Categories',
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
      ]
    }
  }
}
</script>

<style scoped>
.categories {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
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

@media (max-width: 1200px) {
  .category-grid {
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
}

@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card,
  .image-container {
    width: 100%;
    max-width: 330px;
  }
}
</style>
