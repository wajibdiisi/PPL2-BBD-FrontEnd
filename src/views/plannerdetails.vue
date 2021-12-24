<template>
  <Navbar />
  
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBContainer>
            <MDBContainer>
              <div style="margin: 5vh auto">
                <MDBCardTitle class="fs-1">{{planner.title}}</MDBCardTitle>
                <MDBInput v-model="search3" />
                <MDBDatatable
                  :dataset="dataset3"
                  :search="search3"
                  hover
                  :maxHeight="490"
                  fixedHeader 
                  @render="setActions"
                />
                <div
                  class="d-grid gap-2 d-md-flex justify-content-md-end"
                  style="margin: 2vh auto"
                >
                <MDBBtn
                    aria-controls="exampleSideModal1"
                    class="text.nowrap"
                    size="lg"
                    
                    type="submit"
                    @click="router.back()"
                  >
                   Back
                  </MDBBtn>
                  <MDBBtn
                    color="primary"
                    aria-controls="exampleSideModal1"
                    class="text.nowrap"
                    size="lg"                    
                    type="submit"
                    @click="exampleSideModal1 = true"
                  >
                    Add Place to Plan
                  </MDBBtn>
                </div>
              </div>
            </MDBContainer>
          </MDBContainer>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBModal
      side
      position="bottom-right"
      direction="right"
      id="exampleSideModal1"
      tabindex="-1"
      labelledby="exampleSideModalLabel1"
      v-model="exampleSideModal1"
    >
      <MDBModalHeader class="text-white" style="background-color: rgb(50, 224, 196)">
        <MDBModalTitle id="exampleSideModalLabel1">
       
          Pilih Tempat Wisata
        </MDBModalTitle>
      </MDBModalHeader>
      <form class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
      <MDBModalBody>
        <p class="text-start">Pilih Tempat Wisata</p>
         <MDBRow>  
        <div id="validation">
          <!-- <p class="search-text">Cari Wisata</p> -->
          <MDBAutocomplete
            v-model="data.wisata"
            :filter="filterTemplate"
            :displayValue="displayValueTemplate"
            :itemContent="itemTemplate"
            style="width: 22rem;z-index : 9999999 !important"
            label="Pilih Tempat Wisata"
            validFeedback="Looks good!"
          invalidFeedback="Input value is required!"
            required
          />
        </div>
        <MDBCol md="6" class="my-2">
          
          <MDBTimepicker
            label="Pilih Jam Mulai"
            inline
            v-model="data.time"
            :hoursFormat="24"
            :increment="5"
            isValidated="true"
            readonly
            validFeedback="Looks good!"
            
            validLabel="Looks Good"
            invalidLabel="Input value is required!"
            placeholder="20:05"
          />
        </MDBCol>
         <MDBCol  md="6" class="my-2">
          <MDBTimepicker
            label="Pilih Jam Selesai"
            inline
            v-model="data.end_time"
            :hoursFormat="24"
            :increment="5"
            isValidated="true"
            readonly
            validLabel="Looks Good"
            invalidLabel="Input value is required!"
  
            placeholder="20:05"
          />
        </MDBCol>
        <MDBCol  md="12" class="my-3">
          <MDBDatepicker
            v-model="data.date"
            inline
            invalidLabel="Invalid Date Format"
            label="Pilih Tanggal"
            readonly
            format="DD, MMM, YYYY"
            placeholder="DD, MMM, YYYY"
          />
        </MDBCol>
         </MDBRow>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn type ="submit" color="info" > Add  </MDBBtn>
        <MDBBtn color="outline-info" @click="exampleSideModal1 = false">
          Cancel
        </MDBBtn>
      </MDBModalFooter>
      </form>
    </MDBModal>
     <MDBModal
      side
      position="bottom-right"
      direction="right"
      id="exampleSideModal2       "
      tabindex="-1"
      labelledby="exampleSideModalLabel1"
      v-model="exampleSideModal2"
    >
      <MDBModalHeader class="text-white" style="background-color: rgb(50, 224, 196)">
        <MDBModalTitle id="exampleSideModalLabel1">
          Pilih Tempat Wisata
        </MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <p class="text-start">Pilih Tempat Wisata</p>
        <div class="autocomplete">
          <!-- <p class="search-text">Cari Wisata</p> -->
          <MDBAutocomplete
            v-model="data.wisata"
            :filter="filterTemplate"
            :displayValue="displayValueTemplate"
            :itemContent="itemTemplate"
            style="width: 22rem;z-index : 9999999 !important"
            label="Pilih Tempat Wisata"
          />
        </div>
        <MDBCol class="my-2">
          <MDBTimepicker
            label="Pilih Jam"
            inline
            v-model="data.time"
            :hoursFormat="24"
            :increment="5"
            readonly
            placeholder="20:05"
          />
        </MDBCol>
         <MDBCol class="my-2">
          <MDBTimepicker
            label="Pilih Jam Selesai"
            inline
            readonly
            v-model="data.end_time"
            :hoursFormat="24"
            :increment="5"
            
            placeholder="20:05"
          />
        </MDBCol>
        <MDBCol class="my-2">
          <MDBDatepicker
            v-model="data.date"
            inline
            label="Pilih Tanggal"
            format="DD, MMM, YYYY"
            readonly
            placeholder="DD, MMM, YYYY"
          />
        </MDBCol>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="info" @click="updatePlanner(selectedPlan)"> Update Plan  </MDBBtn>
        <MDBBtn color="outline-info" @click="exampleSideModal2 = false">
          Cancel
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </MDBContainer>
  <!-- <Footer /> -->
</template>
<script>
import Navbar from "../components/Navbarcopy.vue";
// import Footer from "../components/Footer copy.vue";
import { ref,getCurrentInstance,onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";
import authHeader from "../auth-header";
import Swal from 'sweetalert2'
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  //   MDBCardBody,
  //   MDBCardTitle,
  //   MDBCardText,
  //   MDBCardImg,
  MDBContainer,
  MDBDatatable,
  //   MDBIcon,
  MDBModal,
  MDBAutocomplete,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBTimepicker,
  MDBDatepicker,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    // Footer,
    MDBCol,
    MDBRow,MDBAutocomplete,
    MDBBtn,
    MDBCard,
    // MDBCardBody,
    // MDBCardTitle,
    // MDBCardText,
    // MDBCardImg,
    MDBContainer,
    MDBDatatable,
    // MDBIcon,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBTimepicker,
    MDBDatepicker,
  },
  setup() {
    const checkForm = e => {
        e.target.classList.add("was-validated");
         if(localStorage.getItem('token') == null){
         Swal.fire({
           title : "Action Failed",
           text : "You need to login first to do this action",
           icon : "error"
         })
         return router.push('/login')
       }
       if(!data.value.time || !data.value.end_time || !data.value.wisata || !data.value.date){
         Swal.fire({
           title : "Action Failed",
           text : "Please input all required information",
           icon : "error"
         })
       }else{
         addPlannerDetail()
       }
      };
      
    const search3 = ref("");
    const data = ref({
      wisata : '',
      time : null,
      date : null,
      end_time : null,
    })
     const config = {
        headers: authHeader(),
      };
    const route = useRoute();
    const router = useRouter();
    const title = ref();
    const exampleSideModal1 = ref(false);
    const exampleSideModal2 = ref(false);
    const planner = ref({
      title : null
    });
    
    const selectedPlan = ref("");
    const app = getCurrentInstance()
    let uri_wisata =  process.env.VUE_APP_ROOT_API  + "wisata/all"
    
    onMounted(async ()=> {
      let uri_plan = process.env.VUE_APP_ROOT_API + "planner/plan/" + route.params.id
      app.appContext.config.globalProperties.$http.get(uri_plan,config).then((response) => {
        planner.value = response.data
        document.title = planner.value.title + ' - Mytour'
      }).catch((err) => {
        if(err.response.status == 404){
          Swal.fire({
            icon : 'error',
            title : 'Action Failed',
            text : 'Page Not Found'
          }).then(() => {
            router.push('/')
          })
        }
      })
      dataset3.value.rows = await []
      get_plan()
    })
    const dataset3 = ref({
      columns: [
        { label: "Place", field: "Title" },
        { label: "Time", field: "Time" },
        { label: "Date", field: "Date" },
        { label: "Action", field: "Action", sort: false },
      ],
      });
    const autocompleteTemplate = ref("");
    
      const itemTemplate = result => {
        return `
          <div class="autocomplete-custom-item-content">
            <div class="autocomplete-custom-item-title">${result.nama}</div>
          </div>
        `;
      };
      const filterTemplate =  async value => {
        const res = ref()
        res.value = await app.appContext.config.globalProperties.$http.get(uri_wisata)
        const data = await res.value.data

        return data?.filter(wisata => {
          return wisata.nama.toLowerCase().startsWith(value.toLowerCase());
        });
        
      };
      const displayValueTemplate =  value => 

        value.nama
   const setActions = () => {
        document.getElementsByClassName("details-btn").forEach(btn => {
          if (btn.getAttribute("click-listener") !== "true") {
            btn.addEventListener("click", () => {
              const params = btn.attributes['data-mdb-email'].value
              route.push({name : 'PlannerDetails',params: { id: params } });
            });
            btn.setAttribute("click-listener", "true");
          }
        });

        document.getElementsByClassName("edit-btn").forEach(btn => {
          if (btn.getAttribute("click-listener") !== "true") {
            btn.addEventListener("click", () => {
              selectedPlan.value = btn.attributes['data-mdb-email'].value
              data.value.wisata =  btn.attributes['data-mdb-title'].value
              data.value.time = btn.attributes['data-mdb-time'].value
              data.value.end_time = btn.attributes['data-mdb-end-time'].value
              data.value.date = btn.attributes['data-mdb-date'].value
              exampleSideModal2.value = true
            });
            btn.setAttribute("click-listener", "true");
          }
        });
        document.getElementsByClassName("delete-btn").forEach(btn => {
          if (btn.getAttribute("click-listener") !== "true") {
            btn.addEventListener("click", () => {
              Swal.fire({
              title: "Do you want to delete your plan?",
              icon: "info",
              showCancelButton: true,
              confirmButtonText: "Yes",
              }).then((result) => {
                if(result.isConfirmed){
                let uri_planner =  process.env.VUE_APP_ROOT_API  + "planner/plan/" +  route.params.id + "/" + btn.attributes['data-mdb-email'].value
                app.appContext.config.globalProperties.$http
                .delete(uri_planner, config)
                .then((response) => {
                Swal.fire(response.data.msg, "", "success");
                get_plan()
                 });
                }
              })
            });
            btn.setAttribute("click-listener", "true");
          }
        });
      };  function addPlannerDetail(){
        let uri_planner = process.env.VUE_APP_ROOT_API + "planner/plan/" + route.params.id

        app.appContext.config.globalProperties.$http.post(uri_planner,data,config).then((response) =>{
          if(response.status == 200){
            Swal.fire(response.data.msg, "", "success");
            exampleSideModal1.value = false
            get_plan()
          }
        }
        )
      }
       function updatePlanner(id){
         if(!data.value.wisata){
           Swal.fire({
             text : 'Tempat wisata tidak boleh kosong',
             icon : 'error',
             title : 'Action Failed'
           })
         }
        else {
        let uri_planner = process.env.VUE_APP_ROOT_API + "planner/plan/" + route.params.id + '/' + id
      
        app.appContext.config.globalProperties.$http.patch(uri_planner,data,config).then((response) =>{
          
          console.log(response.data)
          if(response.status == 200){
            Swal.fire({
              text : 'Data berhasil diubah',
               icon : 'success',
              title : 'Success'
            });
            exampleSideModal1.value = false
            get_plan()
          }
        }
        )
       }
       }
      function get_plan(){
        let uri_planner =  process.env.VUE_APP_ROOT_API  + "planner/plan/" + route.params.id + "/details"
      app.appContext.config.globalProperties.$http.get(uri_planner,config).then(response => {
        dataset3.value.rows = response.data.map(planner => ({
          ...planner,
          Title: `${planner.id_wisata.nama}`,
          Time: `${planner.time} - ${planner.end_time}`,
          Date: `${planner.date}`,
          Action:  `
              
              <button class="edit-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${planner._id}" data-mdb-time="${planner.time}" data-mdb-end-time="${planner.end_time}"
               data-mdb-date="${planner.date}" data-mdb-title="${planner.id_wisata.nama}"><i class="fa fa-edit"></i></button>
              <button class="delete-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${planner._id}"><i class="fa fa-trash"></i></button>`}))
      }).catch((err) => {
        console.log(err.response.status)
      })
    }
     
    return {
      search3,
      dataset3,
      exampleSideModal1,
      get_plan,
      title,
      planner,
      autocompleteTemplate,
      itemTemplate,
      addPlannerDetail,
      updatePlanner,
      exampleSideModal2,
      data,
      selectedPlan,
      filterTemplate,
      displayValueTemplate,
      setActions,
      checkForm,
      router
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
input:read-only {
  background-color: white;
}
</style>