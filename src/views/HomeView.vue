<template>
  <section id="home" class="home">
    <video autoplay loop muted playsinline>
            <source src="https://nasheetajacobs1999.github.io/allimages/videos/3141207-uhd_3840_2160_25fps.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
    <div class="container-fluid mt-md-0">
      <div class="row">
        <div class="col colT" data-aos="zoom-in-right">
          <div class="text1">
            <p class="text2 me">
              <span class="me">I'm, Nasheeta Jacobs</span>
            </p>
          </div>
          <p class="text2">
            <span class="subT">An aspiring Web Developer</span>
          </p>
          <div class="contact">
            <router-link to="/about"
              ><button class="btnC">
                <i class="fa-brands fa-golang fa-2xl i" style="color: #F6F4EB"></i
                >Find Out More!
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  height: 100vh;
  padding-top:80px;
  position: relative;
}

.home video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
}

img {
  background-color: #9c9fa3;
  border-radius: 50rem 20rem;
  width: 17rem;
  border-radius: 50px;
}

.container-fluid {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colT {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45rem;
}

.text2 {
  padding-inline: 0.4rem;
  font-size: 3rem;
  font-weight: bolder;
  color: #ffffff;
}

.btnC {
  padding: 0.4rem;
  border-radius: 2rem;
  border: 0;
  background-color: #0a0d12;
  color: #F6F4EB;
}

.btnC:hover {
  background-color: #0a0d12;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  color: #099a5b;
  transform: scale(1.1);
}

.subT {
  text-align: center;
  font-size: 2rem;
  /* background: #0a0d12; */
  color: #099a5b;
}

.text1 {
  display: flex;
}

.me {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: typing 1.4s steps(20), cursor 0.4s step-end infinite alternate;
}

i {
  margin-right: 0.5rem;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}

@media (max-width: 1200px) {
  .col {
    display: flex;
    justify-content: center;
  }

  img {
    width: 30rem;
  }
}

@media (max-width: 700px) {
  .colT {
    width: 40rem;
  }

  .text2 {
    padding-inline: 0.4rem;
    font-size: 2rem;
  }
}
@media (max-width: 550px) {
  .colT {
    width: 26rem;
  }

  .text2 {
    padding-inline: 0.4rem;
    font-size: 1.7rem;
  }

  .subT {
    font-size: 1.5rem;
  }

  .btnC {
    padding: 0.2rem;
    border-radius: 2rem;
    border: 0;
  }
  .btnC:hover {
    transition: none;
    transform: none;
  }

  img {
    width: 25rem;
    border-radius: 27rem 10rem;
  }
}
@media (max-width: 400px) {
  .colT {
    width: 20rem;
    margin-top: 0;
  }

  .text2 {
    padding-inline: 0.4rem;
    font-size: 1.4rem;
  }

  .subT {
    font-size: 1rem;
  }

  img {
    width: 18rem;
  }
}
@media (max-width: 335px) {
  .colT {
    width: 300px;
  }

  .text2 {
    padding-inline: 0.4rem;
    font-size: 1.1rem;
  }

  .subT {
    font-size: 1rem;
  }

  img {
    width: 250px;
  }
}
</style>