<template>
  <Navbar />
  <MDBContainer class="d-flex justify-content-center" style="margin: 17vh auto">
    <MDBCard class="w-50 p-3" style="border: 1px solid black">
      <MDBCardBody>
        <MDBCol class="d-flex justify-content-center">
          <img
            src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
            alt="MyTour"
            class="w-50"
          />
        </MDBCol>
        <MDBCol class="my-4">
          <MDBInput
            label="Email"
            class="my-4"
            type="email"
            invalidFeedback="Please input your email"
            required
          />
        </MDBCol>
        <MDBCol class="my-4">
          <MDBInput
            label="Password"
            class="my-4"
            type="password"
            invalidFeedback="Please input your password"
            required
          />
        </MDBCol>
        <MDBCol class="my-4 d-flex justify-content-between">
          <MDBRow class="m-lg-0">
            <MDBCheckbox label="Remember Me" required />
          </MDBRow>
          <MDBRow><MDBText> Forgot Password?</MDBText></MDBRow>
        </MDBCol>
        <MDBCol class="my-4">
          <MDBBtn
            color="primary"
            class="text.nowrap"
            rounded
            size="lg"
            style="background-color: rgb(50, 224, 196)"
            type="submit"
          >
            Login
          </MDBBtn>
          <MDBBtn
            class="text.nowrap text.black"
            style="border: 1px rgb(50, 224, 196)"
            rounded
            size="lg"
            type="button"
          >
            Register
          </MDBBtn>
        </MDBCol>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
  }, //,
  setup() {},
};
</script>

<style scoped>
.registerbtn {
  color: rgb(50, 224, 196);
}
</style>