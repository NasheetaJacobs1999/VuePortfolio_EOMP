<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg mx-auto fixed-top gradient-custom">
      <div class="container-fluid">
             <span class="navbar-brand mb-0"
            ><img
              src="https://nasheetajacobs1999.github.io/allimages/images/NJ Logo.jpg"
              alt="logo" class="logo"
          /></span>
        <button
          class="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link text-white">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/resume" class="nav-link text-white">Education&Experience</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/project" class="nav-link text-white">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact" class="nav-link text-white">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    position: sticky;
    top: 0;
    z-index: 1;

}
.navbar {
    background-color: #000000;
}

li {
    padding: 1.5rem;
}

button {
    background-color: #a78484;
}

@media (max-width: 992px) {
  .container {
    position: relative;
    width: 100%;
}

.navbar {
  width: 100%;
  text-align: center;
}
}
</style>