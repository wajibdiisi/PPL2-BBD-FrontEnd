<template>
  <Navbar />
  {{data.id_wisata}}
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
                  <input ref="file" @change="handleFileUpload" class="form-control form-control-sm" id="formFileSm" type="file" />
                
               <div v-if="url != null">
                 
    <img  :src="url" class="img-fluid"/>
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
    <MDBRow tag="form" class="needs-validation" novalidate @submit.prevent="checkForm">
      <MDBCol col="12" class="align-self-center">
        <MDBCard>
          <MDBCardBody>
            <MDBContainer>
              <MDBContainer>
                <MDBCardText class="fs-4"> Moment Title </MDBCardText>
                <MDBInput
                  label="Moment Title"
                  class="my-1"
                  type="text"
                  v-model="data.title"
                  invalidFeedback="Please provide moment title"
                  required
                />
                <MDBCardText class="fs-4"> Moment Description</MDBCardText>
              <MDBTextarea
                            label="Moment Description"
                            rows="10"
                            class="my-1"
                            invalidFeedback="Please provide moment description"
                            v-model="data.description"
                            required
                          />
             
                <MDBCardText class="fs-4"> Location </MDBCardText>
                 <MDBSelect multiple v-model:options="wisata_list"  v-model:selected="data.id_wisata" :isValidated="isValidated"
    :isValid="isValid"
    required
    validFeedback="This value is valid"
    invalidFeedback="This value is invalid"
    @change="validate" />
                <MDBCardText class="fs-4"> Date </MDBCardText>
               <MDBDatepicker
            v-model="data.date"
            inline
            invalidLabel="Invalid Date Format"
            label="Pilih Tanggal"
            format="DD, MMM, YYYY"
            placeholder="DD, MMM, YYYY"
          />
          <MDBCardText class="fs-4"> Time </MDBCardText>
               <MDBTimepicker
            label="Pilih Jam"
            inline
            v-model="data.time"
            :hoursFormat="24"
            :increment="5"
            placeholder="20:05"
          />
                <div style="margin-top: 2vh">
                  <MDBBtn size="lg"> Cancel </MDBBtn>
                  <MDBBtn
                    size="lg"
                    
                    color="primary"
                    type="submit"
                    style="background-color: rgb(50, 224, 196)"
                    >Upload Moment
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
import { useRoute , useRouter} from "vue-router"
import Swal from 'sweetalert2'
import { ref,getCurrentInstance } from "vue";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBInput,
  MDBTextarea,
  MDBBtn,
  MDBDatepicker,
  MDBTimepicker,
  MDBSelect
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
    //MDBFile,
    MDBInput,
    MDBBtn,MDBTextarea,
    MDBDatepicker,
    MDBTimepicker,
    MDBSelect
  },
  setup() {
    const checkForm = async (e) => {
      validate()
      isValidated.value = true
       e.target.classList.add("was-validated")
       if(localStorage.getItem('token') == null){
         Swal.fire({
           title : "Action Failed",
           text : "You need to login first to do this action",
           icon : "error"
         })
         return router.push('/login')
       }
       if(url.value != null && isValid.value == true && data.value.title != null && data.value.description != null && data.value.time != null &&data.value.date != null){
         createMoment()
       }else {
         if(url.value == null){
         Swal.fire({
           title : "Action Failed",
           text : "Please upload image to create a moment",
           icon : "error"
         })
         }else{
           Swal.fire({
           title : "Action Failed",
           text : "Please input atleast one location to create a moment",
           icon : "error"
         })
         }
       }
    }
     const config = {
      headers: {'Authorization': `${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
      }
    };
    const route = useRoute()
    const router = useRouter()
    const file = ref(null)
    const input1 = ref("");
    const url = ref(null)
    const wisata_list = ref([ ])
    const isValidated = ref(false);
      const isValid = ref(false);
      const validate = () => {
        if (data.value?.id_wisata.length <1) {
          
          isValid.value = false;
        } else {
          isValid.value = true;
        }
      };
     const handleFileUpload = async( ) => {
           url.value = URL.createObjectURL(file.value.files[0]);
            console.log("selected file",file.value.files[0])
        }
    const app = getCurrentInstance()
    const data = ref({
      title : null,
      description : null,
      time : null,
      date : null,
      id_wisata : [],
    })
    let uri_wisata = process.env.VUE_APP_ROOT_API + "wisata/all"
    app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {

      for(let i = 0 ; i <response.data.length ; i++){
        const data = {
          'text' : response.data[i].nama,
          'mdbKey': i,
          'value' : response.data[i]._id
        }
        wisata_list.value.push(data)
      }
    })
    const selectedWisata = ref([])
    
    function createMoment(){
      let formData = new FormData();
      formData.append("file", file.value.files[0])
      formData.append("title", data.value.title)
      formData.append("description", data.value.description)
      formData.append("time", data.value.time)
      formData.append("date", data.value.date)
      formData.append("id_wisata",data.value.id_wisata)
      let uri_moment = process.env.VUE_APP_ROOT_API + "moment"
      app.appContext.config.globalProperties.$http.post(uri_moment,formData,config).then((response) => {
        if(response.status == 201){
          Swal.fire({
            title : 'Moment created successfully',
            icon : 'success'
          })
        }
        route.push('/')
      })
    }
    return {
      file,
      input1,
      data,
      wisata_list,createMoment,
      selectedWisata,
      handleFileUpload,url,
      checkForm,
      isValid,
        isValidated,
        validate
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
