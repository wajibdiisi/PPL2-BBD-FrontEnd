<template>
  <Navbar />
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
import { ref } from "vue";
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
    const search3 = ref("");
    const dataset3 = {
      columns: [
        { label: "Date", field: "Date" },
        { label: "Title", field: "Title" },
        { label: "Action", field: "Action", sort: false },
      ],
      rows: [
        {
          Date: "29/10/2020",
          Title: "Liburan ke Bali",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Bali",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Bali",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Bali",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Jawa",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Kalimantan",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
        {
          Date: "29/10/2020",
          Title: "Liburan ke Sumatra",
          phone: "+48000000000",
          email: "tiger.nixon@gmail.com",
        },
      ].map((row) => {
        return {
          ...row,
          Action: `
              <button class="message-btn btn ms-2 btn-primary btn-floating btn-sm" data-mdb-email="${row.email}"><i class="fa fa-eye"></i></button>`,
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