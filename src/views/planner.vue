<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBContainer>
            <MDBContainer>
              <div style="margin: 5vh auto">
                <MDBCardTitle class="fs-1">List Liburan Anda</MDBCardTitle>
                <MDBInput v-model="search3" />
                <MDBDatatable
                  :search="search3"
                  :dataset="dataset3"
                  :searchColumns="search4Columns"
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
                    @click="route.back()"
                  >
                   Back
                  </MDBBtn>
                  <MDBBtn
                    color="primary"
                    class="text.nowrap"
                    size="lg"                    
                    type="submit"
                    @click="exampleSideModal1 = true"
                  >
                    Create New Plan
                  </MDBBtn>
                </div>
              </div>
            </MDBContainer>
          </MDBContainer>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBModal
    side
    position="bottom-right"
    direction="right"
    id="exampleSideModal1"
    tabindex="-1"
    labelledby="exampleSideModalLabel1"
    v-model="exampleSideModal1"
  >
    <MDBModalHeader
      class="text-white"
      style="background-color: rgb(50, 224, 196)"
    >
      <MDBModalTitle id="exampleSideModalLabel1">
        Menambahkan Plan
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <p class="text-start">Judul Liburan Anda</p>
      <MDBInput v-model ="title" label="Title" type="text" />
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="info" @click="addPlanner()"> Add </MDBBtn>
      <MDBBtn color="outline-info" @click="exampleSideModal1 = false">
        Cancel
      </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <MDBModal
    side
    position="bottom-right"
    direction="right"
    id="exampleSideModal1"
    tabindex="-1"
    labelledby="exampleSideModalLabel1"
    v-model="exampleSideModal2"
  >
    <MDBModalHeader
      class="text-white"
      style="background-color: rgb(50, 224, 196)"
    >
      <MDBModalTitle id="exampleSideModalLabel1">
        Mengganti Judul Plan
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <p class="text-start">Judul Liburan Anda</p>
      <MDBInput v-model ="title" label="Title" type="text" />
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="info" @click="updatePlan(selectedPlan)"> Add </MDBBtn>
      <MDBBtn color="outline-info" @click="exampleSideModal2 = false; selectedPlan = null">
        Cancel
      </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  <!-- <Footer /> -->
</template>
<script>
import Navbar from "../components/Navbarcopy.vue";
// import Footer from "../components/Footer copy.vue";
import { ref ,getCurrentInstance,onMounted} from "vue";
import authHeader from "../auth-header";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
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
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    // Footer,
    MDBCol,
    MDBRow,
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
  },
  setup() {
    const config = {
        headers: authHeader(),
      };
    
    const title = ref("");
    const picker1 = ref("");
    const picker2 = ref("");
    const selectedPlan = ref();
    const exampleSideModal1 = ref(false);
    const exampleSideModal2 = ref(false);
    const app = getCurrentInstance()
    const route = useRouter();
    const dataset3 = ref({
      columns: [
        // { label: "Date", field: "Date" },
        { label: "Title", field: "Title" },
        { label: "Action Button", field: "Action", sort: false },
      ],
    })
    function get_plan(){
        let uri_planner =  process.env.VUE_APP_ROOT_API  + "planner/plan_list"
      app.appContext.config.globalProperties.$http.get(uri_planner,config).then(response => {
        dataset3.value.rows = response.data.map(planner => ({
          ...planner,
          Title: `${planner.title}`,
          Action:  `
              <button class="details-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${planner._id}"><i class="fa fa-eye"></i></button>
              <button class="edit-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${planner._id}" data-mdb-title="${planner.title}"><i class="fa fa-edit"></i></button>
              <button class="delete-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${planner._id}"><i class="fa fa-trash"></i></button>`}))
      })
    }
     onMounted(async ()=> {
      dataset3.value.rows = await []
      get_plan()
      
    })
    const search3 = ref("");

    function addPlanner(){
      const rePattern = /[0-9a-zA-Z]{1,}/
      if(new RegExp(rePattern).test(title.value)){
        let uri_planner = process.env.VUE_APP_ROOT_API + "planner/new_plan"
        app.appContext.config.globalProperties.$http.post(uri_planner,title,config).then(
          Swal.fire("Plan Created", "", "success"),
          exampleSideModal1.value = false,
          get_plan()
          )
      }else {
        Swal.fire("Please Input Plan Title", "", "error")
      }
    }

    function updatePlan(id_plan){
     if(!title.value){
        Swal.fire({
             text : 'Judul liburan tidak boleh kosong',
             icon : 'error',
             title : 'Action Failed'
           })
     }else {
     let uri_planner = process.env.VUE_APP_ROOT_API + "planner/plan/" + id_plan
     app.appContext.config.globalProperties.$http.patch(uri_planner,title,config).then(
        Swal.fire("Plan Successfully Changed", "", "success"),
        exampleSideModal2.value = false,
        get_plan()
        )
    }
    }
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
              exampleSideModal2.value = true
              selectedPlan.value = btn.attributes['data-mdb-email'].value
              title.value =  btn.attributes['data-mdb-title'].value
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
                let uri_planner =  process.env.VUE_APP_ROOT_API  + "planner/plan/" +  btn.attributes['data-mdb-email'].value
         
                app.appContext.config.globalProperties.$http
                .delete(uri_planner, config)
                .then(() => {
                Swal.fire("Plan Deleted", "", "success");
                get_plan()
                 });
                }
              })
            });
            btn.setAttribute("click-listener", "true");
          }
        });
      };
    return {
      search3,
      dataset3,
      exampleSideModal1,
      picker1,
      setActions,
      config,
      selectedPlan,
      updatePlan,
      title,
      addPlanner,
      picker2,
      get_plan,
      exampleSideModal2,
      route
      // setActions,
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
</style>