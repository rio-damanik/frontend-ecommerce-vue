<template>
  <div id="app">
    <header class="header">
      <div class="top-bar">
        <div class="left">
          <a
            href="#"
            class="download-app"
          >
            <img
              src="@/assets/Vectorfinal project FE Sisko.png"
              alt="Mobile"
            >
            Download Arshion App
          </a>
        </div>
        <div class="right">
          <a
            href="#"
            class="help"
          >
            <img
              src="@/assets/Helpfinal project FE Sisko.png"
              alt="Help"
            >
            Help
          </a>
          <div class="language">
            <img
              src="@/assets/Globefinal project FE Sisko.png"
              alt="Language"
            >
            Language English
          </div>
          <div class="auth-links">
            <a
              href="#"
              class="sign-in"
            >Sign in</a>
            <span>|</span>
            <a
              href="#"
              class="sign-up"
            >Sign Up</a>
          </div>
        </div>
      </div>

      <nav class="main-nav">
        <div class="logo">
          <img
            src="@/assets/Logofinal project FE Sisko.png"
            alt="ARSHION"
          >
        </div>
        <div class="nav-links">
          <a
            href="#"
            class="nav-link"
          >MEN</a>
          <a
            href="#"
            class="nav-link"
          >WOMEN</a>
          <a
            href="#"
            class="nav-link"
          >KIDS</a>
        </div>
        <div class="nav-icons">
          <img
            src="@/assets/Searchfinal project FE Sisko.png"
            alt="Search"
          >
          <img
            src="@/assets/Favoritefinal project FE Sisko.png"
            alt="Favorites"
          >
          <img
            src="@/assets/Shopfinal project FE Sisko.png"
            alt="Cart"
          >
          <img
            src="@/assets/Accountfinal project FE Sisko.png"
            alt="Account"
          >
        </div>
      </nav>
    </header>


    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>DISCOUNT UP TO 50%</h1>
          <p>From September 30, 2023 - October 25, 2023</p>
        </div>
      </section>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, sans-serif;
}

.header {
  .top-bar {
    
    background: #f8f8f8;
    padding: 8px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left, .right {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    a {
      text-decoration: none;
      color: #333;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .auth-links {
      display: flex;
      gap: 8px;

      span {
        color: #333;
      }
    }
  }

  .main-nav {
    padding: 16px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
   

    .nav-links {
      display: flex;
      gap: 48px;
      margin-left: 50px;

      .nav-link {
        text-decoration: none;
        color: #000;
        font-weight: bold;
      }
    }

    .nav-icons {
      display: flex;
      gap: 24px;
      margin-left: auto;

      img {
        cursor: pointer;
      }
    }
  }
}

.language {
  display: flex;
  align-items: center;
  gap: 8px;  /* adds space between the image and text */
  height: 100%;  /* matches the height of other nav items */
}

.language img {
  width: 20px;  /* adjust size as needed */
  height: 20px;  /* adjust size as needed */
}

.hero {
  height: 600px;
  background-image: url('@/assets/assesthero.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  .hero-content {
    h1 {
      font-size: 64px;
      margin-bottom: 16px;
    }

    p {
      font-size: 24px;
    }
  }
}
</style>
