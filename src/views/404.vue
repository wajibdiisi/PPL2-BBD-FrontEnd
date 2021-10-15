<template>
  <Navbar />
  <p class="text-center text-uppercase fs-2" style="margin-top: 10vh">
    Maaf halaman yang anda cari tidak dapat ditemukan
  </p>
  <MDBContainer class="d-flex justify-content-center" style="margin-bottom: 3vh">
    <img
      src="https://image.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg"
      class="img-fluid"
      alt="..."
    />
  </MDBContainer>
  <div class="d-grid gap-2 col-2 mx-auto" style="margin-bottom: 8vh">
    <MDBBtn tag="a" href="#!" color="primary"
      >Back to Home
    </MDBBtn>
  </div>
    <Footer />
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { MDBBtn, MDBContainer } from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    Footer,
    MDBBtn,
    MDBContainer,
  },
};
</script>