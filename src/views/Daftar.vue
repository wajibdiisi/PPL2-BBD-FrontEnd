<template>
  <Navbar />
  <MDBContainer class="d-flex justify-content-center" style="margin: 17vh auto">
    <MDBCard class="w-50 p-3" style="border: 1px solid black">
      <MDBCardBody >
        <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
        
        <MDBCol md="12" class="d-flex justify-content-center">
          <img
            src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
            alt="MyTour"
            class="w-50"
          />
        </MDBCol>
        <MDBCol md="12" class="my-2">
          <MDBInput
            v-model="name"
            label="Name"
            type="text"
            isValid
            tooltipFeedback
            invalidFeedback="Please input your name"
            required
          />
        </MDBCol>
        <MDBCol md="12" class="my-2">
          <MDBInput
            v-model="email"
            label="Email"
            type="email"
            tooltipFeedback
            pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
            invalidFeedback="Please input your email"
            required
          />
        </MDBCol>
         <MDBCol md="12" class="my-2">
          <MDBInput
            v-model="username"
            label="Username"
          
            type="text"
            tooltipFeedback
            pattern="^[-a-zA-Z0-9@\.+_]+$"
            invalidFeedback="Please input your username(atleast 5 letters and without space)"
            required
            minLength="5"
          maxLength="30"
          />
        </MDBCol>
      
        <MDBCol md="12" class="my-2">
          <MDBInput
            v-model="password"
            label="Password"
            
            type="password"
            pattern="^.{6,}$"
            invalidFeedback="Please input your password (minimal 6 characters)"
            required
            tooltipFeedback
          />
        </MDBCol>
         <MDBCol  md="12" class="my-2">
          <MDBInput
            v-model="confirm_password"
            label="Confirm Password"
            
            type="password"
            pattern="^.{6,}$"
            invalidFeedback="Please input your password (minimal 6 characters)"
            required
            tooltipFeedback
          />
        </MDBCol>
        <MDBCol md="12" class="my-2">
          <MDBBtn
            color="primary"
            class="text.nowrap w-100"
            rounded
            size="lg"
            style="background-color: rgb(50, 224, 196)"
            type="submit"
          >
            Sign Up
          </MDBBtn>
        </MDBCol>
       
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import Swal from 'sweetalert2'

import {
  MDBCol,
  MDBRow,
  MDBInput,
 // MDBCheckbox,
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
    MDBRow,
    MDBInput,
  //  MDBCheckbox,
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
  },
methods :{
  preg_match : function (regex, str) {
  return (new RegExp(regex).test(str))
  },
  
  checkForm(event) {
        event.preventDefault();
        event.target.classList.add('was-validated');
        const rePassword = /^.{6,}$/
        const reUsername = /[0-9a-zA-Z\\s]{5,}/
        /* eslint-disable-next-line */
        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        /* eslint-disable-next-line */
        if(this.preg_match(reUsername,this.username) && 
        this.preg_match(reEmail,this.email) && this.preg_match(rePassword,this.password) && this.password == this.confirm_password){
          this.register()
        }else if( this.password != this.confirm_password){
          Swal.fire({
            'title' : 'Action failed',
            'text' : 'Your password & confirm password are not the same',
            'icon' : 'error'
          })
        }
      },
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
        .then((response) =>{
        if(response.status == 201){
        Swal.fire({
            title: 'Registrasi Berhasil',
            text:   "Registrasi berhasil",
            icon: 'success',
          
        }).then((result) => {
          if(result.isConfirmed){
            this.$router.push('/login')
          }
        })
        }
        })
        .catch((err) => {
          console.log(err.response.status)
          if(err.response.status == 406){
             Swal.fire({
            title: 'Action Failed',
            text:   err.response.data.msg,
            icon: 'error',  
          
            })
          }
        });
    },
  
}
};
</script>

<style scoped>
</style>