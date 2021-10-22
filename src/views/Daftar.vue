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
            v-model="name"
            label="Name"
            class="my-4"
            type="text"
            invalidFeedback="Please input your name"
            required
          />
        </MDBCol>
        <MDBCol class="my-4">
          <MDBInput
            v-model="email"
            label="Email"
            class="my-4"
            type="email"
            invalidFeedback="Please input your email"
            required
          />
        </MDBCol>
         <MDBCol class="my-4">
          <MDBInput
            v-model="username"
            label="Username"
            class="my-4"
            type="text"
            invalidFeedback="Please input your username (you won't be able to change it later)"
            required
          />
        </MDBCol>
        <MDBCol class="my-4">
          <MDBInput
            v-model="password"
            label="Password"
            class="my-4"
            type="password"
            invalidFeedback="Please input your password"
            required
          />
        </MDBCol>
         <MDBCol class="my-4">
          <MDBInput
            v-model="confirm_password"
            label="Confirm Password"
            class="my-4"
            type="password"
            invalidFeedback="Please input your password"
            required
          />
        </MDBCol>
        
        <MDBCol class="my-4 d-flex justify-content-between">
          <MDBCheckbox
            label="I agree to the Terms and Conditions"
            required
            class="ml-0"
          />
        </MDBCol>
        <MDBCol class="my-4">
          <MDBBtn
            color="primary"
            class="text.nowrap w-100"
            rounded
            size="lg"
            style="background-color: rgb(50, 224, 196)"
            type="submit"
            @click="register()"
          >
            Sign Up
          </MDBBtn>
        </MDBCol>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import Swal from 'sweetalert2'
import {
  MDBCol,
  //MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from "mdb-vue-ui-kit";
export default {
  data:() => ({
    name :"",
    email : "",
    password : "",
    username : "",
    confirm_password : "",

  }),
  components: {
    Navbar,
    MDBCol,
    //MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
  },
methods :{
  register: function () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        username : this.username,
        confirm_password : this.confirm_password,
      };
      this.$store
        .dispatch("register", data)
        .then(() => 
        Swal.fire({
            title: 'Registrasi Berhasil',
            text:   "Registrasi berhasil",
            icon: 'success',
          
        }),
        this.$router.push("/login?msg=register_success"))
        .catch((err) => (this.errors = err.response.data));
    },
  
}
};
</script>

<style scoped>
</style>