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
              {{data_wisata['nama']}}{{isFavourited}}</h1></MDBCol>
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
            <h6>{{data_wisata['kota']}}, {{data_wisata['provinsi']}}</h6>
          </MDBCol>
          <MDBCol md="12" class="mb-3">
            <MDBRow class="d-flex flex-column">
              <MDBCol class="p-2">
                <MDBBtn v-if="isFavourited == false" 
                  style="background-color: rgb(50, 224, 196); color: white"
                @click="add_favourite(data_wisata['slug'])"
                >
                  <MDBIcon icon="star" iconStyle="fas" /> Add Favorite
                </MDBBtn>
                <MDBBtn v-if="isFavourited == true" 
                  style="background-color: rgb(50, 224, 196); color: white"
                @click="remove_favourite(data_wisata['slug'])"
                >
                  <MDBIcon icon="star" iconStyle="fas" /> Remove Favorite
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
import { GoogleMap, Marker } from 'vue3-google-map'
import Footer from "../components/Footer copy.vue";
import authHeader from '../auth-header';
import { getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import { computed }  from 'vue';
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
  /*add_favourite :function(slug){
    const config = {
      headers : authHeader()
    }
    let uri_favourite = process.env.VUE_APP_ROOT_API  + "wisata/" + slug + '/add_bookmark'
    this.$http.post(uri_favourite,config, config).then((response) => {
      console.log(response.data)
      }).catch((error) => {
        console.log(error.message)
      })
  },*/
  /*remove_favourite :function(slug){
  const config = {
      headers : authHeader()
    }
    let uri_favourite = process.env.VUE_APP_ROOT_API  + "wisata/" + slug + '/remove_bookmark'
    this.$http.post(uri_favourite,config, config).then((response) => {
      console.log(response.data)
      }).catch((error) => {
        console.log(error.message)
      })

  }*/

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
      'avg_cost' : null,
      'slug' : null,
     });
    const route = useRoute()
    const app = getCurrentInstance()
    const store = useStore();
    const mapLoaded = ref(false)
    const bookmark_list = []
    const center = { lat: 40.689247, lng: -74.044502 }
    const user = computed(() => store.getters.user);
    const isFavourited = ref(false)
      let uri_wisata =  process.env.VUE_APP_ROOT_API  + "wisata/" + route.params.slug
      
      app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {
      data_wisata.value = response.data
      mapLoaded.value = true
      center.lat = response.data.coordinate[0]
      center.lng= response.data.coordinate[1]
      bookmark_list.value = data_wisata.value.bookmark_id_user
      isFavourited.value = response.data.bookmark_id_user.includes(JSON.parse(JSON.stringify(user.value.user._id)))
      })
 
    const activeTabId1 = ref("ex1-1");
    
    function add_favourite(slug){
      const config = {
      headers : authHeader()
      }
      let uri_favourite = process.env.VUE_APP_ROOT_API  + "wisata/" + slug + '/add_bookmark'
      app.appContext.config.globalProperties.$http.post(uri_favourite,config, config).then((response) => {
      console.log(response.data)
      isFavourited.value = true
      }).catch((error) => {
        console.log(error.message)
      })
    }

    function remove_favourite(slug){
      const config = {
      headers : authHeader()
    }
      let uri_favourite = process.env.VUE_APP_ROOT_API  + "wisata/" + slug + '/remove_bookmark'
      app.appContext.config.globalProperties.$http.post(uri_favourite,config, config).then((response) => {
      isFavourited.value = false
      console.log(response.data)
      }).catch((error) => {
        console.log(error.message)
      })

  
    }
    
    return {
      mapLoaded,
      user,
      isFavourited,
      activeTabId1,
      remove_favourite,
      center,add_favourite,
      data_wisata
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