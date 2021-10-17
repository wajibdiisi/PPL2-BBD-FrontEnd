<template>
  <Navbar />
  <MDBContainer>
    <MDBRow start class="mb-6">
      <MDBCol sm="12" md="12">
        <MDBCol md="12">
          <MDBCol md="12">
            <img
              src="https://mdbootstrap.com/img/new/slides/041.jpg"
              class="img-fluid"
              alt="..."
            />
          </MDBCol>
          <MDBCol md="12" class="mt-3">
            <MDBRow>
              <MDBCol md="8"><h1 class="display-6">Candi Borobudur</h1></MDBCol>
              <MDBCol md="4" class="d-flex justify-content-end">
                <MDBBtn
                  style="background-color: rgb(50, 224, 196); color: white"
                >
                  bintang
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="12">
            <h6>Magelang, Jawa Tengah</h6>
          </MDBCol>
          <MDBCol md="12" class="mb-3">
            <MDBRow class="d-flex flex-column">
              <MDBCol class="p-2">
                <MDBBtn
                  style="background-color: rgb(50, 224, 196); color: white"
                >
                  <MDBIcon icon="star" iconStyle="fas" /> Add Favorite
                </MDBBtn>
                <MDBBtn
                  style="
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                  "
                >
                  <MDBIcon
                    icon="directions"
                    iconStyle="fas"
                    style="color: rgb(50, 224, 196)"
                  />
                  Direction
                </MDBBtn>
                <MDBBtn
                  style="
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                  "
                >
                  <MDBIcon
                    icon="bookmark"
                    iconStyle="fas"
                    style="color: rgb(50, 224, 196)"
                  />
                  Bookmark
                </MDBBtn>
                <MDBBtn
                  style="
                    background-color: white;
                    color: black;
                    border: 1px solid black;
                  "
                >
                  <MDBIcon
                    icon="share-alt"
                    iconStyle="fas"
                    style="color: rgb(50, 224, 196)"
                  />
                  Share
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBTabs v-model="activeTabId1">
            <!-- Tabs navs -->
            <MDBTabNav tabsClasses="mb-3">
              <MDBTabItem tabId="ex1-1" href="ex1-1">Overview</MDBTabItem>
              <MDBTabItem tabId="ex1-2" href="ex1-2">Review</MDBTabItem>
              <MDBTabItem tabId="ex1-3" href="ex1-3">Moment</MDBTabItem>
              <MDBTabItem tabId="ex1-4" href="ex1-4">Discussion</MDBTabItem>
            </MDBTabNav>
            <!-- Tabs navs -->
            <!-- Tabs content -->
            <MDBTabContent>
              <MDBTabPane tabId="ex1-1">
                <MDBCol md="10">
                  <h6>About This Place</h6>
                  <p>
                    Borobudur adalah sebuah candi Buddha yang terletak di
                    Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini
                    terletak kurang lebih 100 km di sebelah barat daya Semarang,
                    86 km di sebelah barat Surakarta, dan 40 km di sebelah barat
                    laut Yogyakarta. Candi berbentuk stupa ini didirikan oleh
                    para penganut agama Buddha Mahayana sekitar tahun 800-an
                    Masehi pada masa pemerintahan wangsa Syailendra. Borobudur
                    adalah candi atau kuil Buddha terbesar di dunia, sekaligus
                    salah satu monumen Buddha terbesar di dunia.
                  </p>
                </MDBCol>
                <MDBCol md="10">
                  <h6>Average Cost</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc et commodo enim. Ut ut erat sit amet turpis sodales
                    vehicula
                  </p>
                </MDBCol>
                <MDBCol md="10" class="d-flex flex-column">
                  <h6>Direction</h6>
                  <MDBRow class="d-flex">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Indonesia_Java_location_map.svg/1920px-Indonesia_Java_location_map.svg.png"
                      style="width: 500px; height: 200px"
                    />
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p style="font-size: 1rem">
                        Jl. Badrawati, Kw. Candi Borobudur, Borobudur, Kec.
                        Borobudur, Magelang, Jawa Tengah
                      </p>
                    </MDBCol>
                    <MDBRow>
                      <MDBCol md="2">
                        <MDBBtn
                          style="
                            background-color: white;
                            color: black;
                            border: 1px solid black;
                          "
                        >
                          <MDBIcon
                            icon="copy"
                            iconStyle="fas"
                            style="color: rgb(50, 224, 196)"
                          />
                          Copy
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBBtn
                          style="
                            background-color: white;
                            color: black;
                            border: 1px solid black;
                          "
                        >
                          <MDBIcon
                            icon="directions"
                            iconStyle="fas"
                            style="color: rgb(50, 224, 196)"
                          />
                          Direction
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBRow>
                </MDBCol>
              </MDBTabPane>
              <MDBTabPane tabId="ex1-2">Content #2</MDBTabPane>
              <MDBTabPane tabId="ex1-3">Content #3</MDBTabPane>
            </MDBTabContent>
            <!-- Tabs content -->
          </MDBTabs>
        </MDBCol>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import {
  MDBIcon,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  components: {
    Navbar,
    Footer,
    MDBIcon,
    MDBBtn,
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  },
  setup() {
    const activeTabId1 = ref("ex1-1");

    return {
      activeTabId1,
    };
  },
};
</script>