<template>
  <Navbar />
  <MDBContainer> </MDBContainer>
  <div class="habib">
    <img
      src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
      class="search-bg"
      alt=""
    />
    <div class="search-box">
      <!-- <p class="search-text">Cari Wisata</p> -->
      <input class="form-control" type="text" placeholder="Cari Wisata" />
    </div>
  </div>
  <!-- <div>
    <img
      src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
      alt=""
    />
    <MDBContainer>
      <row class="pa-12">
        <MDBCol offset-md="5" cols="12" md="6">
          <h3 class="header_BreedsCat">'Dog' Breeds</h3>
          <p class="desc_BreedsCat">
            Discover cat breeds from around the world and get help finding your
            perfect pet.
          </p>
        </MDBCol>
      </row>
    </MDBContainer>
  </div> -->
  <div class="container" style="margin-bottom: 10vh">
    <MDBRow :cols="['1', 'md-3']" class="g-4">
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <MDBBtn tag="a" href="#!" color="link" outline="primary"
                >See Details
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText
              >This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <MDBBtn tag="a" href="#!" color="link" outline="primary"
                >See Details
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </MDBCardText>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <MDBBtn tag="a" href="#!" color="link" outline="primary"
                >See Details
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <MDBBtn tag="a" href="#!" color="link" outline="primary"
                >See Details
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
//import Wisatadetails from "../components/Wisatadetails.vue";
// import { ref } from "vue";
import {
  // MDBCarousel,
  MDBContainer,
  MDBCol,
  MDBRow,
  // MDBCardGroup,
  // MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
} from "mdb-vue-ui-kit";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    //Wisatadetails
    // MDBCarousel,
    MDBCol,
    MDBRow,
    // MDBCardGroup,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
    // MDBInput,
  },
  // setup() {
  //   const items1 = [
  //     {
  //       src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
  //       alt: "...",
  //       label: "First slide label",
  //       caption: "Liburan lebih nikmat dengan MyTour!",
  //     },
  //     {
  //       src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
  //       alt: "...",
  //       label: "Second slide label",
  //       caption: "Liburan lebih nikmat dengan MyTour!",
  //     },
  //     {
  //       src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
  //       alt: "...",
  //       label: "Third slide label",
  //       caption: "Liburan lebih nikmat dengan MyTour!",
  //     },
  //   ];
  //   const carousel1 = ref(0);

  //   return {
  //     items1,
  //     // carousel1,
  //   };
  // },
};
</script>
<style>
.navbar {
  background-color: rgba(255, 255, 255, 0.561);
}
.nav-link {
  color: black !important;
}
.habib {
  width: 70vw;
  margin: 0 auto;
  background: black;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10vh;
}
.habib .search-bg {
  object-fit: cover;
  opacity: 0.6;
}
.search-bg {
  width: 100%;
  height: 100%;
  position: relative;
}
.search-box {
  position: absolute;
  top: 75vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 75%;
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
.header_BreedsCat {
  font-size: 3rem;
  color: #ffa62b;
  letter-spacing: 2%;
  margin-top: 20%;
}
.desc_BreedsCat {
  color: #ffa62b;
  opacity: 70%;
  margin-top: -1%;
}

* {
  font-family: "Montserrat", sans-serif;
}
</style>