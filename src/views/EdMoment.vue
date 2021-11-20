<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard class="upload-box text-white" text="center">
          <MDBCardBody>
            <MDBCardTitle class="fs-1"
              >You can't change your moment photo please make a new moment if you want to upload new photo
            </MDBCardTitle>
            
            <MDBCol col="6" class="photo-box" style="margin: 3vh auto">
           
                
               <div v-if="data.photo != null">
                 
    <img  :src="data.photo" class="img-fluid"/>
       </div>

            </MDBCol>
        
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
                 <MDBInput
                 v-model="selectedWisata"
            disabled
          ></MDBInput>
    <MDBCardText class="fs-4"> Date</MDBCardText>
      <MDBInput
            v-model="data.date"
            label="Date"
            class="my-4"
            type="text"
            required
            tooltipFeedback
            disabled
          />
          <MDBCardText class="fs-4"> Time </MDBCardText>
               <MDBTimepicker
            label="Pilih Jam"
            inline
            v-model="data.time"
            :hoursFormat="24"
            :increment="5"
            required
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
import {  useRouter,useRoute} from "vue-router"
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
  MDBTimepicker,
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
    MDBTimepicker
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
       if(isValid.value == true && data.value.title != null && data.value.description != null && data.value.time != null &&data.value.date != null){
         createMoment()
       }else {
         if(data.value.id_wisata == null){
           console.log('sss' + data.value.id_wisata)
           Swal.fire({
           title : "Action Failed",
           text : "Please input atleast one location to create a moment",
           icon : "error"
         })
         }
         else if(data.value.date == null){
           Swal.fire({
           title : "Action Failed",
           text : "Please input date",
           icon : "error"
         })
         }
         else if (data.value.time == null){
           Swal.fire({
           title : "Action Failed",
           text : "Please input time",
           icon : "error"
         })
         }
       }
    }
     const config = {
      headers: {'Authorization': `${localStorage.getItem('token')}`,
      'Accept': 'application/json',
      }
    };
    const router = useRouter()
    const route = useRoute()
    const input1 = ref("");
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
   
    const app = getCurrentInstance()
    const data = ref([])
    let uri_moment = process.env.VUE_APP_ROOT_API + "moment/edit/" + route.params.id
   
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
     app.appContext.config.globalProperties.$http.get(uri_moment,config).then((response)=> {
      data.value = response.data
      selectedWisata.value = response.data.id_wisata.map((wisata) => wisata.nama)
    })
    const selectedWisata = ref("27, Nov, 2021")
    
    function createMoment(){
      let uri_moment = process.env.VUE_APP_ROOT_API + "moment/" + route.params.id
      app.appContext.config.globalProperties.$http.patch(uri_moment,data,config).then((response) => {
        if(response.status == 201){
          Swal.fire({
            title : response.data.msg,
            icon : 'success'
          })
          router.push('/')
        }
      })
    }
    return {
      input1,
      data,
      wisata_list,createMoment,
      selectedWisata,
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
