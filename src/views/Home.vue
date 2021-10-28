<template>
  <Navbar />
  <MDBContainer fluid style="margin-bottom: 1vh">
    <div class="text-center">
      <MDBCol col="12">
        <img
          src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
          alt=""
        />
      </MDBCol>
      <div class="search-box">
        <p class="search-text">Cari Wisata</p>
        <input class="form-control" type="text" placeholder="Cari Wisata" />
      </div>
    </div>
  </MDBContainer>
  <div class="container" style="margin: 5vh auto">
    <div class="row">
      <h5>Tempat yang sering di kunjungi</h5>
      <p>Jelajahi daftar pilihan tempat populer di Indonesia</p>
      <div class="col-md-4">
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Candi Borobudur</MDBCardTitle>
            <MDBCardText>
              Candi Borobudur adalah candi Buddha terbesar di dunia. Candi
              Borobudur adalah candi Buddha terbesar di dunia. Candi Borobudur
              adalah candi Buddha terbesar di dunia. Candi Borobudur adalah
              candi Buddha terbesar di dunia. Candi Borobudur adalah candi
              Buddha terbesar di dunia. Candi Borobudur adalah candi Buddha
              terbesar di dunia. Candi Borobudur adalah candi Buddha terbesar di
              dunia. Candi Borobudur adalah candi Buddha terbesar di dunia.
            </MDBCardText>
            <MDBBtn tag="a" href="#!" color="primary">See Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div class="col-md-4">
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Candi Borobudur</MDBCardTitle>
            <MDBCardText>
              Candi Borobudur adalah candi Buddha terbesar di dunia.
            </MDBCardText>
            <MDBBtn tag="a" href="#!" color="primary">See Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div class="col-md-4">
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Candi Borobudur</MDBCardTitle>
            <MDBCardText>
              Candi Borobudur adalah candi Buddha terbesar di dunia.
            </MDBCardText>
            <MDBBtn tag="a" href="#!" color="primary">See Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 5vh">
    <div class="row">
      <h5>Lihat Diskusi Mengenai Tempat Wisata</h5>
      <p>
        Temukan pendapat orang yang pernah ke destinasi wisata yang akan anda
        kunjungi
      </p>
      <div class="col-md-4">
        <MDBCard bg="dark" text="white">
          <div class="bg-image" v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg
              src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
              alt="..."
              overlay
            >
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.5)">
                <p
                  class="text-center fs-3 text-uppercase"
                  style="margin-top: 10vh"
                >
                  Candi Borobudur
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <MDBBtn tag="a" href="#!" color="white" rounded
                    >Lihat Diskusi
                  </MDBBtn>
                </div>
              </div>
            </MDBCardImg>
          </div>
        </MDBCard>
      </div>
      <div class="col-md-4">
        <MDBCard bg="dark" text="white">
          <div class="bg-image" v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg
              src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
              alt="..."
              overlay
            >
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.5)">
                <p
                  class="text-center fs-3 text-uppercase"
                  style="margin-top: 10vh"
                >
                  Candi Borobudur
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <MDBBtn tag="a" href="#!" color="white" rounded
                    >Lihat Diskusi
                  </MDBBtn>
                </div>
              </div>
            </MDBCardImg>
          </div>
        </MDBCard>
      </div>
      <div class="col-md-4">
        <MDBCard bg="dark" text="white">
          <div class="bg-image" v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg
              src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
              alt="..."
              overlay
            >
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.5)">
                <p
                  class="text-center fs-3 text-uppercase"
                  style="margin-top: 10vh"
                >
                  Candi Borobudur
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <MDBBtn tag="a" href="#!" color="white" rounded
                    >Lihat Diskusi
                  </MDBBtn>
                </div>
              </div>
            </MDBCardImg>
          </div>
        </MDBCard>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 10vh">
    <div class="row">
      <h5>Lihat Moment Mengenai Tempat Wisata</h5>
      <p>Temukan moment terbaik dari tempat wisata yang akan anda kunjungi</p>
      <div class="col-md-4">
        <MDBCarousel
          class="img-thumbnail"
          v-model="carousel6"
          :items="items6"
          :indicators="false"
        />
      </div>
      <div class="col-md-4">
        <MDBCarousel
          class="img-thumbnail"
          v-model="carousel7"
          :items="items7"
          :indicators="false"
        />
      </div>
      <div class="col-md-4">
        <MDBCarousel
          class="img-thumbnail"
          v-model="carousel8"
          :items="items8"
          :indicators="false"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { ref } from "vue";
import {
  MDBCarousel,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
  mdbRipple,
} from "mdb-vue-ui-kit";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    MDBCarousel,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    notification: function () {
      this.$store.dispatch("notificationMessage", this.email);
    },
  },
  setup() {
    const items6 = [
      {
        src: "http://www.maioloo.com/maioloo/wp-content/uploads/2016/03/Candi-Prambanan-Yogyakarta-01.jpg.jpg",
        alt: "...",
        label: "First slide label",
      },
      {
        src: "https://i2.wp.com/borobudurnews.com/wp-content/uploads/2020/06/tribun.jpg?fit=1081%2C610&ssl=1",
        alt: "...",
        label: "First slide label",
      },
      {
        src: "https://cdn0-production-images-kly.akamaized.net/xrOIlX7j0Okz0tOIMpaO5wIZHVc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2837936/original/087054100_1561537719-borobudur.jpg",
        alt: "...",
        label: "First slide label",
      },
    ];
    const items7 = [
      {
        src: "https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png",
        alt: "...",
        label: "First slide label",
      },
      {
        src: "https://i0.wp.com/www.agoda.com/wp-content/uploads/2020/01/Besakih-Temple-places-to-visit-in-Bali.jpg?ssl=1",
        alt: "...",
        label: "First slide label",
      },
      {
        src: "http://www.justtravel.hr/wp-content/uploads/2017/08/bali-guide.jpg.jpg",
        alt: "...",
        label: "First slide label",
      },
    ];
    const items8 = [
      {
        src: "https://www.harapanrakyat.com/wp-content/uploads/2019/11/tempat-wisata-di-Indonesia.jpg",
        alt: "...",
        label: "First slide label",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH8IkxBoRXA4XZhsfJLD8-jjHXygQd_2RYlGPsBXPwe8GR3kLj26PmUF8Q033BxpE62E&usqp=CAU",
        alt: "...",
        label: "First slide label",
      },
      {
        src: "https://d99i6ad9lbm5v.cloudfront.net/uploads/image/file/3702/tempat-wisata-di-indonesia-2.jpg",
        alt: "...",
        label: "First slide label",
      },
    ];
    const carousel6 = ref(0);
    const carousel7 = ref(0);
    const carousel8 = ref(0);

    return {
      items6,
      items7,
      items8,
      carousel6,
      carousel7,
      carousel8,
    };
  },
  directives: { mdbRipple },
};
</script>
<style>
body {
  background-color: #f0f2f5;
}
.navbar {
  background-color: rgba(255, 255, 255, 0.561);
}
.nav-link {
  color: black !important;
}
.search-box {
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 50%;
}
.form-control {
  height: 60px;
}
.search-text {
  font-size: 5rem;
  color: white;
  font-weight: 700;
  text-align: center;
}
* {
  font-family: "Montserrat", sans-serif;
}
</style>