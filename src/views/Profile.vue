<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard text="center">
          <MDBCol class="align-self-center" md="3">
            <MDBCardImg
              src="https://i.ibb.co/CvZk0fc/1479636246154.jpg"
              top
              class="img-fluid rounded-circle"
              alt="..."
            />
          </MDBCol>
          <MDBCardBody>
            <MDBCardTitle class="fs-1">{{userProfile.name}}</MDBCardTitle>
            <MDBCardText class="fs-4">
              Cilegon, 14 - Desember - 2000
            </MDBCardText>
            <MDBBtn tag="a" href="#!" color="link" outline="primary"
              >Upload Moment
            </MDBBtn>
            <MDBBtn tag="a" href="#!" color="link" outline="primary"
              >Edit Profile
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBContainer>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle class="text-uppercase">notification</MDBCardTitle>
        <MDBCardText class="text-uppercase fs-6 fw-light text-end">
          Clear all notification
        </MDBCardText>
        <MDBRow>
          <div class="container">
            <div class="row">
              <div>
                <div class="box shadow-sm rounded bg-white mb-3">
                  <div class="box-title border-bottom p-3">
                    <h6 class="m-0">Recent</h6>
                  </div>
                  <div class="box-body p-0">
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        bg-light
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                      </div>
                      <div class="mr-3">
                        <div class="font-weight-bold text-truncate">
                          DAILY RUNDOWN: WEDNESDAY
                        </div>
                        <div class="small">
                          Income tax sops on the cards, The bias in VC funding,
                          and other top news for you
                        </div>
                      </div>
                      <!-- Default dropstart button -->
                      <div class="justify-content-md-end">
                        <MDBDropdown btnGroup dropstart v-model="dropdown21">
                          <MDBDropdownToggle @click="dropdown21 = !dropdown21">
                            <MDBIcon icon="ellipsis-v" iconStyle="fas" />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem href="#">Delete</MDBDropdownItem>
                            <!-- <MDBDropdownItem href="#"
                            >Another Action</MDBDropdownItem
                          >
                          <MDBDropdownItem href="#"
                            >Something else here</MDBDropdownItem
                          >
                          <MDBDropdownItem divider />
                          <MDBDropdownItem href="#"
                            >Separated link</MDBDropdownItem
                          > -->
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </div>
                      <!-- <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">3d</div>
                      </span> -->
                    </div>
                  </div>
                </div>
                <div class="box shadow-sm rounded bg-white mb-3">
                  <div class="box-title border-bottom p-3">
                    <h6 class="m-0">Earlier</h6>
                  </div>
                  <div class="box-body p-0">
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div
                        class="
                          dropdown-list-image
                          mr-3
                          d-flex
                          align-items-center
                          bg-danger
                          justify-content-center
                          rounded-circle
                          text-white
                        "
                      >
                        DRM
                      </div>
                      <div class="font-weight-bold mr-3">
                        <div class="text-truncate">DAILY RUNDOWN: MONDAY</div>
                        <div class="small">
                          Nunc purus metus, aliquam vitae venenatis sit amet,
                          porta non est.
                        </div>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div
                            class="dropdown-menu dropdown-menu-right"
                            style=""
                          >
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">3d</div>
                      </span>
                    </div>
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                      </div>
                      <div class="font-weight-bold mr-3">
                        <div class="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                        <div class="small">
                          Pellentesque semper ex diam, at tristique ipsum varius
                          sed. Pellentesque non metus ullamcorper
                        </div>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">3d</div>
                      </span>
                    </div>
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                        />
                      </div>
                      <div class="font-weight-bold mr-3">
                        <div class="mb-2">
                          <span class="font-weight-normal"
                            >Congratulate Gurdeep Singh Osahan
                            (iamgurdeeposahan)</span
                          >
                          for 5 years at Askbootsrap Pvt.
                        </div>
                        <button
                          type="button"
                          class="btn btn-outline-success btn-sm"
                        >
                          Say congrats
                        </button>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">4d</div>
                      </span>
                    </div>
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt=""
                        />
                      </div>
                      <div class="font-weight-bold mr-3">
                        <div>
                          <span class="font-weight-normal"
                            >Congratulate Mnadeep singh (iamgurdeeposahan)</span
                          >
                          for 4 years at Askbootsrap Pvt.
                          <div class="small text-success">
                            <i class="fa fa-check-circle"></i> You sent Mandeep
                            a message
                          </div>
                        </div>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">4d</div>
                      </span>
                    </div>
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div
                        class="
                          dropdown-list-image
                          mr-3
                          d-flex
                          align-items-center
                          bg-success
                          justify-content-center
                          rounded-circle
                          text-white
                        "
                      >
                        M
                      </div>
                      <div class="font-weight-bold mr-3">
                        <div class="text-truncate">DAILY RUNDOWN: MONDAY</div>
                        <div class="small">
                          Nunc purus metus, aliquam vitae venenatis sit amet,
                          porta non est.
                        </div>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">3d</div>
                      </span>
                    </div>
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                      </div>
                      <div class="font-weight-bold mr-3">
                        <div class="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                        <div class="small">
                          Pellentesque semper ex diam, at tristique ipsum varius
                          sed. Pellentesque non metus ullamcorper
                        </div>
                      </div>
                      <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">3d</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="4">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle class="fs-3">Plan</MDBCardTitle>
            <MDBRow>
              <div
                class="col-md d-flex align-items-center"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> Plan 1 </MDBCardText>
              </div>
              <div class="col-md d-flex justify-content-end">
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
              <div
                class="d-flex justify-content-between"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> Plan 1 </MDBCardText>
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
              <div
                class="d-flex justify-content-between"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> Plan 1 </MDBCardText>
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
            </MDBRow>
            <!-- <MDBCardText class="fs-5">
              Plan 1
              <div class="d-grid mx-auto justify-content-md-end">
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
            </MDBCardText> -->
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol col="8">
        <MDBCard>
          <MDBCardBody>
            <MDBRow>
              <div class="col-md-6" style="margin: 2vh auto">
                <MDBCard class="h-100">
                  <MDBCardImg
                    src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
                    top
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Candi Borobudur</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div class="col-md-6" style="margin: 2vh auto">
                <MDBCard class="h-100">
                  <MDBCardImg
                    src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
                    top
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Candi Borobudur</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div class="col-md-6" style="margin: 2vh auto">
                <MDBCard class="h-100">
                  <MDBCardImg
                    src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
                    top
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Candi Borobudur</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div class="col-md-6" style="margin: 2vh auto">
                <MDBCard class="h-100">
                  <MDBCardImg
                    src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
                    top
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Candi Borobudur</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </div>
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
import { ref } from "vue";
import { getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import { computed }  from 'vue';
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    Footer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBContainer,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon,
  },
  setup() {
    const dropdown21 = ref(false);
    const route = useRoute()
    const app = getCurrentInstance()
    const store = useStore();
    const user = computed(() => store.getters.user);
    const userProfile = ref({
      'name' : null }
    )
      let uri_profile =  process.env.VUE_APP_ROOT_API  + "users/profile/" + route.params.username
      
      app.appContext.config.globalProperties.$http.get(uri_profile).then((response) => {
      console.log(response)
      userProfile.value = response.data
      })
    return {
      dropdown21,
      userProfile,
      user
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
.dropdown-list-image {
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
}
.dropdown-list-image img {
  height: 2.5rem;
  width: 2.5rem;
}
.btn-light {
  color: #2cdd9b;
  background-color: #e5f7f0;
  border-color: #d8f7eb;
}
</style>