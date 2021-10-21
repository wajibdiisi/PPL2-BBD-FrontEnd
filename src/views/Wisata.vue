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
      <input class="form-control" type="text" placeholder="Cari Tempat - Tempat Wisata di Indonesia" />
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
    
      <MDBCol v-for="wisata in wisata_list" :key="wisata._id">
        <MDBCard class="h-100">
          <MDBCardImg
            src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
            top
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>{{wisata.nama}}</MDBCardTitle>
            <MDBCardText>
             {{wisata.description}}
            </MDBCardText>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <router-link :to="{name : 'WisataDetails', params : { slug : wisata.slug}}">
              <MDBBtn tag="a" color="link" outline="primary"
                >See Details
              </MDBBtn>
              </router-link>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
   
      
    </MDBRow>
    <nav aria-label="Page navigation example" style="margin-top: 5vh">
      <MDBPagination class="justify-content-end">
        <MDBPageNav prev></MDBPageNav>
        <MDBPageItem href="#">1</MDBPageItem>
        <MDBPageItem href="#">2</MDBPageItem>
        <MDBPageItem href="#">3</MDBPageItem>
        <MDBPageNav next></MDBPageNav>
      </MDBPagination>
    </nav>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { getCurrentInstance } from 'vue';
//import Wisatadetails from "../components/Wisatadetails.vue";
import { ref } from "vue";
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
  MDBPagination,
  MDBPageNav,
  MDBPageItem,
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
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    // MDBInput,
  },

  setup(){
    const app = getCurrentInstance()
    const wisata_list = ref(null);
    let uri_wisata =  process.env.VUE_APP_ROOT_API  + "wisata/all"
    app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {
      wisata_list.value = response.data
  
      })
    return {
      wisata_list
    }

  }
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