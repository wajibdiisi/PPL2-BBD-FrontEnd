<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard class="upload-box text-white" text="center">
          <MDBCardBody>
            <MDBCardTitle class="fs-1"
              >You can upload up to X images
            </MDBCardTitle>
            <MDBCardTitle class="fs-1">Select your images here </MDBCardTitle>
            <MDBCol col="6" class="photo-box" style="margin: 3vh auto">
              <MDBFile v-model="files2" multiple inputClass="png" />
            </MDBCol>
            <MDBCardText class="fs-4">
              Please upload your photos with ‘16:9’ ratio otherwise,
            </MDBCardText>
            <MDBCardText class="fs-4">
              your photo will possibly turn blurry
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard>
          <MDBCardBody>
            <MDBContainer>
              <MDBContainer>
                <MDBCardText class="fs-4"> Moment Title </MDBCardText>
                <MDBInput
                  label="Email"
                  class="my-1"
                  type="email"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Moment Description </MDBCardText>
                <MDBInput
                  label="Email"
                  class="my-1"
                  type="email"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Location </MDBCardText>
                <MDBInput
                  label="Email"
                  class="my-1"
                  type="email"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Date and Time </MDBCardText>
                <MDBInput
                  label="Email"
                  class="my-1"
                  type="email"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
                <div style="margin-top: 2vh">
                  <MDBBtn size="lg"> Cancel </MDBBtn>
                  <MDBBtn
                    tag="a"
                    size="lg"
                    @click="updateProfile()"
                    color="primary"
                    style="background-color: rgb(50, 224, 196)"
                    >Update Profile
                  </MDBBtn>
                </div>
              </MDBContainer>
            </MDBContainer>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <Footer />
</template>
<script>
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { MDBFile } from "mdb-vue-ui-kit";
import { ref } from "vue";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBInput,
  MDBBtn,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    Footer,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBContainer,
    MDBFile,
    MDBInput,
    MDBBtn,
  },
  setup() {
    const files2 = ref([]);
    const input1 = ref("");

    return {
      files2,
      input1,
    };
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
.upload-box {
  background-color: #32e0c4;
}
.photo-box {
  margin: 0 auto;
}
</style>
