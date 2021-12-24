<template>
  <Navbar />
  <MDBContainer
    xl
    class="d-flex justify-content-center"
    style="margin: 17vh auto"
  >
    <MDBRow start>
      <MDBCol sm="12" md="12">
        <MDBCol md="12">
          <MDBCard
            class="w-100 p-3"
            style="border: 1px solid black; height: 520px"
          >
            <MDBCardBody>
              <MDBCol class="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
                  alt="MyTour"
                  class="w-50"
                />
              </MDBCol>
              <MDBCol class="mt-5">
                <div class="my-5"></div>
                <MDBInput
                  label="Email"
                  class="my-1"
                  type="email"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
              </MDBCol>
              <MDBCol class="my-2">
                <MDBInput
                  label="Password"
                  class="my-4"
                  type="password"
                  v-model="password"
                  invalidFeedback="Please input your password"
                  required
                />
              </MDBCol>
              <!---
              <MDBCol class="my-4 d-flex justify-content-between">
                <MDBRow class="m-lg-0">
                  <MDBCheckbox label="Remember Me" required />
                </MDBRow>
                <MDBRow><MDBText> Forgot Password?</MDBText></MDBRow>
              </MDBCol>--->
              <MDBCol class="my-4">
                <MDBBtn
                  color="primary"
                  class="text.nowrap"
                  rounded
                  size="lg"
                  type="submit"
                  @click="login()"
                >
                  Login
                </MDBBtn>
                <router-link to="/register">
                  <MDBBtn
                    class="text.nowrap text.black"
                    style="border: 1px rgb(50, 224, 196)"
                    rounded
                    size="lg"
                    type="button"
                  >
                    Register
                  </MDBBtn>
                </router-link>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import {
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from "mdb-vue-ui-kit";
import Swal from "sweetalert2";
export default {
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then((response) => {
          if(response.status == 200){
          Swal.fire({
            title: 'Login Berhasil',
            text:   "Selamat datang kembali",
            icon: 'success',
          
        }).then((result) => {
          if(result.isConfirmed){
            this.$router.push('/')
          }
        })
        }
        })
        .catch((err) => {
          if(err.response.status == 404){
             Swal.fire({
            title: 'Action Failed',
            text:   err.response.data.msg,
            icon: 'error',  
          
            })
          }
        });
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    Navbar,
    MDBCol,
    MDBRow,
    MDBInput,
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