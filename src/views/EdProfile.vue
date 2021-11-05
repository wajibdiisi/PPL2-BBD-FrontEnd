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
             <input ref="file" @change="handleFileUpload" class="form-control form-control-sm" id="formFileSm" type="file" />
                
               <div v-if="url != null">
                 
    <img  :src="url" class="img-fluid"/>
  </div>
  <div v-else-if="user.user.profilePicture != null">
                 
    <img  :src="user.user.profilePicture" class="img-fluid"/>
  </div>
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
                  readonly
                  v-model="user.user.email"
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
                <MDBCardText class="fs-4"> Provinsi </MDBCardText>
               <MDBAutocomplete
      v-model="user.user.provinsi"
      :filter="filterAsync"
      :displayValue="displayValueAsync"
      :itemContent="itemTemplate"
      style="width: 22rem"
      label="Pilih Provinsi"
    />
                <MDBCardText class="fs-4"> Kota </MDBCardText>
                <MDBAutocomplete
      v-model="user.user.kota"
      :filter="filterAsyncKota"
      :displayValue="displayValueAsyncKota"
      :itemContent="itemTemplateKota"
      style="width: 22rem"
      label="Pilih Provinsi"
    />
                <MDBCardText class="fs-4"> Birth </MDBCardText>
                <MDBDatepicker
            v-model="user.user.tglLahir"
            inline
            invalidLabel="Invalid Date Format"
            label="Pilih Tanggal"
       
            format="DD MMMM YYYY"
            placeholder="DD, MMM, YYYY"
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

import { computed } from "vue";
import { useStore } from "vuex";
import {useRouter} from 'vue-router'
import Swal from "sweetalert2";
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
  MDBAutocomplete,MDBDatepicker,
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
    MDBCardTitle,MDBDatepicker,
    MDBCardText,
    MDBContainer,MDBAutocomplete,
    MDBBtn,
    MDBInput,
  },
  setup() {
    const store = useStore();
    const config = {
      headers: {'Authorization': `${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
      }
    };
    const provinsi = ref("");
    const router = useRouter()
    const user = computed(() => store.getters.user);
    const userInit = computed(() => store.getters.user);
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const app = getCurrentInstance();
    
        const autocompleteAsync = ref("");
        const autocompleteAsyncKota = ref("");
    const filterAsync = async () => {
      let uri_provinsi =
      process.env.VUE_APP_ROOT_API + "location/provinsi"
      const res = ref([]);
         res.value = await app.appContext.config.globalProperties.$http.get(uri_provinsi);
        const data = await res.value;
    
        return data.data;
      };
      const filterAsyncKota = async () => {
      let uri_provinsi =
      process.env.VUE_APP_ROOT_API + "location/provinsi/" + user.value?.  user.provinsi
      const res = ref([]);
         res.value = await app.appContext.config.globalProperties.$http.get(uri_provinsi);
        const data = await res.value;
    
        return data.data;
      };
    const itemTemplate = result => {
        return `
          <div class="autocomplete-custom-item-content">
            <div class="autocomplete-custom-item-title">${result.name}</div>
          </div>
        `;
      };
      const itemTemplateKota = result => {
        return `
          <div class="autocomplete-custom-item-content">
            <div class="autocomplete-custom-item-title">${result.name}</div>
          </div>
        `;
      };
    const files2 = ref([]);
    const file = ref(null)
    const url = ref(null)
    const input1 = ref("");
   const displayValueAsync = value => value.name;
 const displayValueAsyncKota = value => value.name;
    const handleFileUpload = async( ) => {
           // debugger;
           url.value = URL.createObjectURL(file.value.files[0]);
            console.log("selected file",file.value.files[0])
            //Upload to server
        }
    function updateProfile() {
      let formData = new FormData();
      formData.append("file", file.value.files[0])
      const uri_profile = process.env.VUE_APP_ROOT_API + "users/update_profile";
      formData.append("email",user.value.user.email)
      formData.append("name",user.value.user.name)
      formData.append("provinsi",user.value.user.provinsi)
      formData.append("kota",user.value.user.kota)
      formData.append("tglLahir",user.value.user.tglLahir)
      app.appContext.config.globalProperties.$http
        .patch(uri_profile, formData, config)
        .then(() => {
        router.push({name : 'Profile', params :{username : user.value.user.username}})
        store.dispatch('get_user'),
        Swal.fire({
          icon : 'success',
          text : 'success',
          title : 'Data Berhasil Diubah'
        })
        });
    }

    return {
      files2,
      user,
      handleFileUpload,
      updateProfile,
      userInit,
      config,
      file,
      isLoggedIn,itemTemplate,itemTemplateKota,
      autocompleteAsync,autocompleteAsyncKota,
      url,filterAsync,filterAsyncKota,
      input1,
      provinsi,displayValueAsync,displayValueAsyncKota
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
.pac-container {
    background-color: #FFF;
    z-index: 20;
    position: fixed;
    display: inline-block;
    float: left;
}
.modal{
    z-index: 20;   
}
.modal-backdrop{
    z-index: 10;        
}
</style>
