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
                <div
                  color="#0E5020"
                  height="4.6rem"
                  width="3.0rem"
                  font-size="17px"
                  class="sc-1q7bklc-10 rating"
                >
                  <div class="sc-1q7bklc-6 liCXOR">
                    <div class="sc-1q7bklc-5 kHxpSk">
                      <div class="sc-1q7bklc-1 cILgox">4.8</div>
                      <div class="sc-1q7bklc-2 pxJGx">
                        <i class="sc-rbbb40-1 iFnyeo" color="#FFFFFF"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#FFFFFF"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 20 20"
                            aria-labelledby="icon-svg-title- icon-svg-desc-"
                            role="img"
                            class="sc-rbbb40-0 ffadyU"
                          >
                            <title>star-fill</title>
                            <path
                              d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
                            ></path></svg
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
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
              <MDBTabPane tabId="ex1-2">
                <MDBRow class="d-flex align-content-center">
                  <MDBCol md="12" class="text-center">
                    <h5 style="font-weight: 500">
                      Rate Your Travel Experience
                    </h5>
                  </MDBCol>
                  <MDBCol
                    class="d-grid gap-1 d-md-flex justify-content-md-center"
                  >
                    <MDBBtn
                      style="background-color: rgb(50, 224, 196); color: white"
                    >
                      1 <MDBIcon icon="star" iconStyle="fas" />
                    </MDBBtn>
                    <MDBBtn
                      style="background-color: rgb(50, 224, 196); color: white"
                    >
                      2 <MDBIcon icon="star" iconStyle="fas" />
                    </MDBBtn>
                    <MDBBtn
                      style="background-color: rgb(50, 224, 196); color: white"
                    >
                      3 <MDBIcon icon="star" iconStyle="fas" />
                    </MDBBtn>
                    <MDBBtn
                      style="background-color: rgb(50, 224, 196); color: white"
                    >
                      4 <MDBIcon icon="star" iconStyle="fas" />
                    </MDBBtn>
                    <MDBBtn
                      style="background-color: rgb(50, 224, 196); color: white"
                    >
                      5 <MDBIcon icon="star" iconStyle="fas" />
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <h6>Candi Borobudur Review</h6>
                  </MDBCol>
                </MDBRow>
                <MDBRow class="d-flex justify-content-between">
                  <MDBCol class="text-start">
                    <h6>All Review (90)</h6>
                  </MDBCol>
                  <MDBCol class="text-end">
                    <h6>Newest First</h6>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBRow>
                    <MDBCol md="12" class="d-flex align-items-center mb-3">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                      <p class="mb-0 ms-2" style="font-weight: 500">Bagus</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="1">
                      <div
                        color="#24963F"
                        height="2rem"
                        width="2.6rem"
                        font-size="1.3rem"
                        class="sc-1q7bklc-10 kgIEjH"
                      >
                        <div class="sc-1q7bklc-6 liCXOR">
                          <div class="sc-1q7bklc-5 kHxpSk">
                            <div class="sc-1q7bklc-1 cILgox">4</div>
                            <div class="sc-1q7bklc-2 pxJGx">
                              <i class="sc-rbbb40-1 iFnyeo" color="#FFFFFF"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#FFFFFF"
                                  width="0.8rem"
                                  height="0.8rem"
                                  viewBox="0 0 20 20"
                                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                                  role="img"
                                  class="sc-rbbb40-0 fauQLv"
                                >
                                  <title>star-fill</title>
                                  <path
                                    d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
                                  ></path></svg
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBCol md="8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBTabPane>
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

<style scoped>
.rating {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(50, 224, 196);
  color: rgb(255, 255, 255);
  height: 2.6rem;
  min-width: 3rem;
  padding: 0px 0.4rem;
  font-size: 17px;
  border-radius: 0.6rem;
  border: 1px solid rgb(50, 224, 196);
}
.liCXOR {
  display: block;
  font-size: inherit;
}
.kHxpSk {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: inherit;
  cursor: unset;
}
.cILgox {
  margin-right: 0.2rem;
  font-weight: 500;
  font-size: inherit;
  padding-bottom: 0.1rem;
}
.pxJGx {
  margin-left: 0px;
}
.iFnyeo {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: inherit;
}
.ffadyU {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
.kgIEjH {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: rgb(50, 224, 196);
  color: rgb(255, 255, 255);
  height: 2rem;
  min-width: 2.6rem;
  padding: 0px 0.4rem;
  font-size: 1.3rem;
  border-radius: 0.6rem;
  border: 1px solid rgb(50, 224, 196);
}
</style>