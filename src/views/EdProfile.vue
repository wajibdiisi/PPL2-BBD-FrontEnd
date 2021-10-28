<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard class="upload-box text-white" text="center">
          <MDBCardBody>
            <MDBCardTitle class="fs-1"
              >You can only upload 1 images
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
                <MDBCardText class="fs-4"> Email </MDBCardText>
                <MDBInput
                  label=""
                  class="my-1"
                  type="email"
                  v-model="user.user.email"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Password </MDBCardText>
                <MDBInput
                  label=""
                  class="my-1"
                  type="email"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Name </MDBCardText>
                <MDBInput
                  label=""
                  class="my-1"
                  type="name"
                  v-model="user.user.name"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Location </MDBCardText>
                <MDBInput
                  label=""
                  class="my-1"
                  type="location"
                  v-model="email"
                  invalidFeedback="Please input your email"
                  required
                />
                <MDBCardText class="fs-4"> Birth </MDBCardText>
                <MDBInput
                  label=""
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
import { computed } from "vue";
import authHeader from "../auth-header";
import { useStore } from "vuex";
import { ref, getCurrentInstance } from "vue";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBBtn,
  MDBInput,
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
    MDBBtn,
    MDBFile,
    MDBInput,
  },
  setup() {
    const store = useStore();
    const config = {
      headers: authHeader(),
    };
    const user = computed(() => store.getters.user);
    const userInit = computed(() => store.getters.user);
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const files2 = ref([]);
    const input1 = ref("");
    const app = getCurrentInstance();
    function updateProfile() {
      const uri_profile = process.env.VUE_APP_ROOT_API + "users/update_profile";
      app.appContext.config.globalProperties.$http
        .patch(uri_profile, user.value, config)
        .then(store.dispatch("get_user"));
    }

    return {
      files2,
      user,
      updateProfile,
      userInit,
      config,
      isLoggedIn,
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
