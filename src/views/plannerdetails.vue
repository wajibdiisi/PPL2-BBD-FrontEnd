<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBContainer>
            <MDBContainer>
              <div style="margin: 5vh auto">
                <MDBCardTitle class="fs-1">Liburan ke Bali</MDBCardTitle>
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
                    color="primary"
                    aria-controls="exampleSideModal1"
                    class="text.nowrap"
                    size="lg"
                    style="background-color: rgb(50, 224, 196)"
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
      <MDBModalBody>
        <p class="text-start">Pilih Tempat Wisata</p>
        <div class="form-control">
          <!-- <p class="search-text">Cari Wisata</p> -->
          <MDBAutocomplete
            v-model="autocompleteTemplate"
            :filter="filterTemplate"
            :displayValue="displayValueTemplate"
            :itemContent="itemTemplate"
            style="width: 22rem"
            label="Pilih Tempat Wisata"
          />
        </div>
        <MDBCol class="my-2">
          <MDBTimepicker
            label="Pilih Jam"
            inline
            v-model="picker1"
            :hoursFormat="24"
            :increment="5"
            placeholder="20:05"
          />
        </MDBCol>
        <MDBCol class="my-2">
          <MDBDatepicker
            v-model="picker2"
            inline
            label="Pilih Tanggal"
            format="DD, MMM, YYYY"
            placeholder="DD, MMM, YYYY"
          />
        </MDBCol>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="info"> Add </MDBBtn>
        <MDBBtn color="outline-info" @click="exampleSideModal1 = false">
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
import { ref } from "vue";
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
  MDBTimepicker,
  MDBDatepicker,
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
    MDBTimepicker,
    MDBDatepicker,
  },
  setup() {
    const search3 = ref("");
    const picker1 = ref("");
    const picker2 = ref("");
    const exampleSideModal1 = ref(false);
    const dataset3 = {
      columns: [
        { label: "Place", field: "Title" },
        { label: "Time", field: "Time" },
        { label: "Date", field: "Date" },
        { label: "Action", field: "Action", sort: false },
      ],
      rows: [
        {
          Date: "29/11/2020",
          Time: "08.00",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "30/10/2020",
          Time: "08.00",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "31/10/2020",
          Time: "08.00",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
      ].map((row) => {
        return {
          ...row,
          Action: `
              <button class="message-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${row.email}"><i class="fa fa-trash"></i></button>`,
        };
      }),
    };
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
      dataset3,
      exampleSideModal1,
      picker1,
      picker2,
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