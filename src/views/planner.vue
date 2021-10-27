<template>
  <Navbar />
  {{dataset3}}
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBInput v-model="search3" />
          <MDBDatatable
            :dataset="dataset3"
            :search="search3"
            hover
            @render="setActions"
          />
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <Footer />
</template>
<script>
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { ref,onMounted,getCurrentInstance } from "vue";
import {
  MDBCol,
  MDBRow,
  //   MDBBtn,
  MDBCard,
  //   MDBCardBody,
  //   MDBCardTitle,
  //   MDBCardText,
  //   MDBCardImg,
  MDBContainer,
  MDBDatatable,
  //   MDBIcon,
  //   MDBModal,
  //   MDBModalHeader,
  //   MDBModalTitle,
  //   MDBModalBody,
  //   MDBModalFooter,
  MDBInput,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    Footer,
    MDBCol,
    MDBRow,
    // MDBBtn,
    MDBCard,
    // MDBCardBody,
    // MDBCardTitle,
    // MDBCardText,
    // MDBCardImg,
    MDBContainer,
    MDBDatatable,
    // MDBIcon,
    // MDBModal,
    // MDBModalHeader,
    // MDBModalTitle,
    // MDBModalBody,
    // MDBModalFooter,
    MDBInput,
  },
  setup() {
    const app = getCurrentInstance()
    const wisata_list = ref()
    let uri_wisata =  process.env.VUE_APP_ROOT_API  + "wisata/all"
    const dataset3 = ref({
      columns: [
        { label: "Date", field: "Date" },
        { label: "Title", field: "Title" },
        { label: "Action", field: "Action", sort: false },
      ],
      
    });
   
    onMounted(async ()=> {
      dataset3.value.rows = await []
      console.log(dataset3)
      app.appContext.config.globalProperties.$http.get(uri_wisata).then(response => {
        dataset3.value.rows = response.data.map(wisata => ({
          ...wisata,
          Date: `${wisata.slug}`
        }))
      })
      try {
      const res = await app.appContext.config.globalProperties.$http.get(uri_wisata)
      wisata_list.value = await res.data
      
      } catch (e) {
        console.log("Error Loading Wisata");
      }
    })
    const search3 = ref("");
    
    
    // const setActions = () => {
    //   document.getElementsByClassName("call-btn").forEach((btn) => {
    //     if (btn.getAttribute("click-listener") !== "true") {
    //       btn.addEventListener("click", () => {
    //         console.log(`call ${btn.attributes["data-mdb-number"].value}`);
    //       });
    //       btn.setAttribute("click-listener", "true");
    //     }
    //   });

    //   document.getElementsByClassName("message-btn").forEach((btn) => {
    //     if (btn.getAttribute("click-listener") !== "true") {
    //       btn.addEventListener("click", () => {
    //         console.log(
    //           `send a message to ${btn.attributes["data-mdb-email"].value}`
    //         );
    //       });
    //       btn.setAttribute("click-listener", "true");
    //     }
    //   });
    // };

    return {
      search3,
      dataset3
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