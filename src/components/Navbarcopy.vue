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
        <MDBNavbarItem to="#">
          <MDBIcon icon="bell"></MDBIcon>
          <MDBBadge notification color="danger" pill>1</MDBBadge>
        </MDBNavbarItem>
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
                  params: { username: user.user.username },
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
  MDBToast,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
    clearToast: function () {
      this.$store.dispatch("disableNotification");
    },
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
    MDBToast,
  },
  setup() {
    const store = useStore();
    const collapse1 = ref(false);
    const dropdown6 = ref(false);
    const user = computed(() => store.getters.user);
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const toast1 = ref(computed(() => store.getters.set_notification));
    const toastMsg = computed(() => store.getters.notificationData);
    return {
      isLoggedIn,
      toast1,
      collapse1,
      toastMsg,
      dropdown6,
      user,
    };
  },
};
</script>
<style>
li {
  list-style: none;
}
* {
  font-family: "Montserrat", sans-serif;
}
</style>