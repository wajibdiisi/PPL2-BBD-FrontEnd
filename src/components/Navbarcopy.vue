<template>
  <MDBNavbar expand="lg" light bg="light" container="md">
    <MDBNavbarBrand href="#"
      ><img
        src="https://i.ibb.co/T8wDGBV/Logo-removebg-preview-Copy-removebg-preview.png"
        height="50"
        alt=""
        to="/home"
        loading="lazy"
    /></MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <!-- <MDBNavbarNav right class="mb-2 mb-lg-0"> -->
      <MDBNavbarItem to="/" active>Home</MDBNavbarItem>
      <MDBNavbarItem to="/Wisata"> Explore </MDBNavbarItem>
      <MDBNavbarItem to="/Planner"> Planner </MDBNavbarItem>
      <MDBNavbarItem to="/Aboutus"> About Us </MDBNavbarItem>
      <MDBNavbarItem to="/Help"> Help </MDBNavbarItem>
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <MDBDropdown offset="-100,10" class="nav-item" v-model="dropdown4">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown4 = !dropdown4"
          >
            <MDBIcon icon="bell" />
            <MDBBadge notification color="danger" pill>1</MDBBadge>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#">
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                class="rounded-circle"
                alt="avatar"
                width="40"
                height="40"
              />
              Ahmad Irfan Fadholi Liked one of your Moment
            </MDBDropdownItem>
            <MDBDropdownItem href="#">Action</MDBDropdownItem>
            <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
            <MDBDropdownItem divider />
            <MDBRow class="d-flex justify-content-center">
              <MDBCol>
                <p>Clear Notifications</p>
              </MDBCol>
            </MDBRow>
          </MDBDropdownMenu>
        </MDBDropdown>
        <!--<template v-if="user.user">
          <MDBNavbarItem
            :to="{
              name: 'Profile',
              params: { username: user.user.username }
            }"
          >
            <MDBIcon icon="bell"></MDBIcon>
            <template v-if="notification?.length">
              <MDBBadge notification color="danger" pill>
                {{ notification?.length }}
              </MDBBadge>
            </template>
          </MDBNavbarItem>
        </template>-->
        <MDBNavbarItem>
          <MDBDropdown
            class="nav-item"
            v-model="dropdown6"
            v-if="isLoggedIn == false"
          >
            <MDBDropdownToggle
              tag="a"
              class="nav-link"
              @click="dropdown6 = !dropdown6"
              ><img
                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                class="rounded-circle"
                height="22"
                alt=""
                loading="lazy"
              />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem to="/login">Login</MDBDropdownItem>
              <MDBDropdownItem to="/register">Register</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown
            class="nav-item"
            v-model="dropdown6"
            v-if="isLoggedIn == true"
          >
            <MDBDropdownToggle
              tag="a"
              class="nav-link"
              @click="dropdown6 = !dropdown6"
              ><img
                :src="user.user.profilePicture"
                class="rounded-circle"
                height="22"
                alt=""
                loading="lazy"
              />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <router-link
                :to="{
                  name: 'Profile',
                  params: { username: user.user.username }
                }"
              >
                <MDBDropdownItem to="">Profile</MDBDropdownItem>
              </router-link>
              <MDBDropdownItem to="" @click="logout()"> Logout</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- </MDBNavbarNav> -->
    </MDBCollapse>
  </MDBNavbar>
  <MDBToast
    v-model="toastMsg"
    id="basic-primary-example"
    autohide
    :delay="2000"
    position="top-right"
    appendToBody
    stacking
    width="350px"
    color="primary"
    text="white"
    @hide="clearToast()"
  >
    <template #title> MDBootstrap </template>
    <template #small> 11 mins ago </template>
    {{ toastMsg }}
  </MDBToast>
</template>
<script>
import {
  MDBIcon,
  MDBBadge,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBToast
} from "mdb-vue-ui-kit"
import { ref } from "vue"
import { computed, getCurrentInstance } from "vue"
import { useStore } from "vuex"
import authHeader from "../auth-header"
export default {
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/")
      })
    },
    clearToast: function () {
      this.$store.dispatch("disableNotification")
    }
  },
  components: {
    MDBIcon,
    MDBBadge,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBToast
  },
  setup() {
    const config = {
      headers: authHeader()
    }
    const store = useStore()
    const collapse1 = ref(false)
    const dropdown6 = ref(false)
    const user = computed(() => store.getters.user)
    const isLoggedIn = computed(() => store.getters.isLoggedIn)
    const toast1 = ref(computed(() => store.getters.set_notification))
    const toastMsg = computed(() => store.getters.notificationData)
    const notification = ref()
    const app = getCurrentInstance()
    const dropdown4 = ref(false)
    let uri_notification = process.env.VUE_APP_ROOT_API + "notification"
    if (localStorage.getItem("token") != null) {
      app.appContext.config.globalProperties.$http
        .get(uri_notification, config)
        .then((response) => {
          notification.value = response.data
        })
    }
    return {
      isLoggedIn,
      toast1,
      collapse1,
      toastMsg,
      dropdown6,
      user,
      notification,
      dropdown4
    }
  }
}
</script>
<style>
li {
  list-style: none;
}
* {
  font-family: "Montserrat", sans-serif;
}
</style>