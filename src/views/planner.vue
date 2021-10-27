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
                    class="text.nowrap"
                    size="lg"
                    style="background-color: rgb(50, 224, 196)"
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
      <MDBInput label="Title" type="text" />
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="info"> Add </MDBBtn>
      <MDBBtn color="outline-info" @click="exampleSideModal1 = false">
        Cancel
      </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
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
    const search3 = ref("");
    const picker1 = ref("");
    const picker2 = ref("");
    const exampleSideModal1 = ref(false);
    const dataset3 = {
      columns: [
        // { label: "Date", field: "Date" },
        { label: "Title", field: "Title" },
        { label: "Action Button", field: "Action", sort: false },
      ],
      rows: [
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Bali",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          email: "tiger.nixon@gmail.com",
        },
        {
          // Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          email: "tiger.nixon@gmail.com",
        },
      ].map((row) => {
        return {
          ...row,
          Action: `
              <button class="message-btn btn ms-2 btn-outline-dark btn-floating btn-sm" data-mdb-email="${row.email}"><i class="fa fa-eye"></i></button>
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