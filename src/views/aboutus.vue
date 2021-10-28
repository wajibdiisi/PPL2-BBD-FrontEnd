<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBCol class="align-self-center" md="6" style="margin: 5vh auto">
            <MDBCardImg
              src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
              top
              class="img-fluid"
              alt="..."
            />
          </MDBCol>
          <MDBCardBody>
            <!-- <MDBCardTitle class="fs-1">asdasdasd</MDBCardTitle> -->
            <MDBCardText class="text-center fs-5 lh-base">
              MyTour merupakan aplikasi berbasis website yang bertujuan untuk
              memudahkan pencarian informasi mengenai tempat wisata khususnya di
              pulau jawa. Selain itu aplikasi ini juga diharapkan dapat membantu
              pengguna untuk menemukan lokasi wisata yang ter-rekomendasi.
              MyTour menyediakan berbagai macam informasi yang berguna mengenai
              tempat wisata. Selain menyediakan informasi. MyTour memiliki dua
              fitur utama yaitu menyediakan platform untuk pengguna mengatur
              jadwal rencana liburan mereka, dan adanya platform diskusi untuk
              melihat pendapat dari pengguna pengguna lain yang sudah pernah ke
              tempat wisata tersebut. MyTour juga memiliki fitur review dan
              momen dari suatu tempat wisata supaya pengguna dapat melihat
              experience dari pengguna lain yang sudah ke tempat wisata
              tersebut.
            </MDBCardText>
            <!-- <MDBRow>
              <MDBCol class="align-items-start" md="4" style="margin: 4vh">
                <MDBCardImg
                  src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
                  top
                  class="img-fluid rounded-circle"
                  alt="..."
                />
              </MDBCol>
              <MDBCol md="8" style="margin: 4vh">
                <MDBCardText class="fs-5 lh-base">
                  MyTour merupakan aplikasi berbasis website yang bertujuan
                  untuk memudahkan pencarian informasi mengenai tempat wisata
                  khususnya di pulau jawa. Selain itu aplikasi ini juga
                  diharapkan dapat membantu pengguna untuk menemukan lokasi
                  wisata yang ter-rekomendasi. MyTour menyediakan berbagai macam
                  informasi yang berguna mengenai tempat wisata. Selain
                  menyediakan informasi. MyTour memiliki dua fitur utama yaitu
                  menyediakan platform untuk pengguna mengatur jadwal rencana
                  liburan mereka, dan adanya platform diskusi untuk melihat
                  pendapat dari pengguna pengguna lain yang sudah pernah ke
                  tempat wisata tersebut. MyTour juga memiliki fitur review dan
                  momen dari suatu tempat wisata supaya pengguna dapat melihat
                  experience dari pengguna lain yang sudah ke tempat wisata
                  tersebut.
                </MDBCardText>
              </MDBCol>
            </MDBRow> -->
            <MDBRow start style="margin: 4vh">
              <MDBCol col="3">
                <MDBCardImg
                  src="https://i.ibb.co/68K8TmD/Screenshot-8.png"
                  top
                  class="img-thumbnail img-fluid rounded-circle"
                  alt="..."
                />
              </MDBCol>
              <MDBCol class="align-self-center" col="8">
                <MDBCardText class="fs-2 lh-base">
                  Project Manager
                </MDBCardText>
                <MDBCardText class="fs-5 lh-base">
                  Gede Bagus Darmagita
                </MDBCardText>
              </MDBCol>
            </MDBRow>
            <MDBRow class="justify-content-end" style="margin: 4vh">
              <MDBCol class="align-self-center" col="8">
                <MDBCardText class="text-end fs-2 lh-base">
                  Front End
                </MDBCardText>
                <MDBCardText class="text-end fs-5 lh-base">
                  M. Iqbal Alif F
                </MDBCardText>
              </MDBCol>
              <MDBCol col="3">
                <MDBCardImg
                  src="https://i.ibb.co/mq04gNd/Screenshot-6.png"
                  top
                  class="img-thumbnail img-fluid rounded-circle"
                  alt="..."
                />
              </MDBCol>
            </MDBRow>
            <MDBRow start style="margin: 4vh">
              <MDBCol col="3">
                <MDBCardImg
                  src="https://i.ibb.co/MRPpvjV/Screenshot-7.png"
                  top
                  class="img-thumbnail img-fluid rounded-circle"
                  alt="..."
                />
              </MDBCol>
              <MDBCol class="align-self-center" col="8">
                <MDBCardText class="fs-2 lh-base"> Back End </MDBCardText>
                <MDBCardText class="fs-5 lh-base"> Ahmad Irfan F </MDBCardText>
              </MDBCol>
            </MDBRow>
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
import {
  MDBCol,
  MDBRow,
  // MDBBtn,
  MDBCard,
  MDBCardBody,
  // MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBContainer,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    Footer,
    MDBCol,
    MDBRow,
    // MDBBtn,
    MDBCard,
    MDBCardBody,
    // MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBContainer,
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