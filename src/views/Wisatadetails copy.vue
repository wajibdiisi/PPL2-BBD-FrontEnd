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
              <MDBCol md="8"><h1 class="display-6">
              {{data_wisata['nama']}}</h1></MDBCol>
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
            <h6>{{data_wisata['kota']}}, {{data_wisata['provinsi']}}</h6>
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
                  @click="redirect('https://www.google.com/maps/dir/?api=1&destination=' + center['lat'] +',' + center['lng'])"
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
                    {{data_wisata['description']}}
                  </p>
                </MDBCol>
                <MDBCol md="10">
                  <h6>Average Cost</h6>
                  <p>
                    {{data_wisata['avg_cost']}}
                  </p>
                </MDBCol>
                <MDBCol md="10" class="d-flex flex-column">
                  <h6>Google Maps Location</h6>
                  <MDBRow class="d-flex">
                   <div v-if="mapLoaded === true">
  <GoogleMap
  api-key="AIzaSyCUoE4KTUN7wRzSI-3WfsinoHDtgb6SAR0"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
  </div>
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
import { useRoute } from 'vue-router'
import { GoogleMap, Marker } from 'vue3-google-map'
import Footer from "../components/Footer copy.vue";
import { getCurrentInstance } from 'vue';

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
  data(){
    return {
      
    }
  },

  methods: {
  redirect: function (link, target = "_blank") {
      window.open(link, target);
    },
  },
  components: {
    GoogleMap, Marker,
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
    const data_wisata = ref({
      'nama' : null,
      'description' : null,
      'avg_cost' : null
    });
    const route = useRoute()
    const mapLoaded = ref(false)
     const app = getCurrentInstance()
   const center = { lat: 40.689247, lng: -74.044502 }
      let uri_wisata =  process.env.VUE_APP_ROOT_API  + "wisata/" + route.params.slug
      
      app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {
      data_wisata.value = response.data
      mapLoaded.value = true
      center.lat = response.data.coordinate[0]
      center.lng= response.data.coordinate[1]
      console.log(center)
      })
 
    const activeTabId1 = ref("ex1-1");
    
    
    return {
      mapLoaded,
      activeTabId1,
      center,
      data_wisata
    };
  },
};
</script>