<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard text="center">
          <MDBCardBody>
            <MDBFileUpload />
            <MDBCardTitle class="fs-1">Gede Bagus Darmagita</MDBCardTitle>
            <MDBCardText class="fs-4">
              Cilegon, 14 - Desember - 2000
            </MDBCardText>
            <MDBBtn tag="a" href="#!" color="link" outline="primary"
              >Upload Moment
            </MDBBtn>
            <MDBBtn tag="a" href="#!" color="link" outline="primary"
              >Edit Profile
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
import Navbar from "../components/Navbarcopy.vue";
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-vue-ui-kit";
import { MDBFileUpload } from "mdb-vue-file-upload";
export default {
  components: {
    Navbar,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBContainer,
    MDBFileUpload,
  },
};
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
body {
  background-color: #f0f2f5;
}
</style>
