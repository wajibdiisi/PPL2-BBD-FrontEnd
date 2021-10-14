<template>
  <!-- Footer -->
  <MDBFooter :text="['white','center', 'lg-start']" bg="dark">
    <!-- Grid container -->
    <MDBContainer class="p-4">
      <!--Grid row-->
      <MDBRow>
        <!--Grid column-->
        <MDBCol lg="6" md="12" class="mb-4 mb-md-0">
          <h5 class="text-uppercasee">MYTOUR</h5>
          <img
            src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
            class="img-fluid rounded"
            alt=""
          />
          <p>
            Aplikasi untuk membantu memberikan informasi mengenai hal hal yang
            penting mengenai tempat wisata, mengenai rekomendasi tempat wisata,
            dan juga dapat membantu untuk membuat jadwal dari liburan.
          </p>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase">Menu</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Home</a>
            </li>
            <li>
              <a href="#!" class="text-white">Explore</a>
            </li>
            <li>
              <a href="#!" class="text-white">Planner</a>
            </li>
            <li>
              <a href="#!" class="text-white">About Us</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->

        <!--Grid column-->
        <MDBCol lg="3" md="6" class="mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Follow Us</h5>

          <ul class="list-unstyled">
            <li>
              <MDBIcon icon="instagram" iconStyle="fab" />
              <a href="#!" class="text-white"> Comming soon!</a>
            </li>
            <li>
              <MDBIcon icon="facebook" iconStyle="fab" />
              <a href="#!" class="text-white"> Comming soon!</a>
            </li>
            <li>
              <MDBIcon icon="twitter" iconStyle="fab" />
              <a href="#!" class="text-white">Comming soon!</a>
            </li>
          </ul>
        </MDBCol>
        <!--Grid column-->
      </MDBRow>
      <!--Grid row-->
    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MyTour 2021</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>
<script>
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  },
};
</script>
<style>
.img-fluid {
  max-height: 20vh;
  max-width: 40vw;
}
</style>