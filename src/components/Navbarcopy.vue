<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#"
      ><img
        src="https://i.ibb.co/cC5hgZ0/Logo-removebg-preview-Copy.png"
        height="50"
        alt=""
        loading="lazy"
    /></MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
        <MDBNavbarItem href="#"> Link </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
    <!-- Notification dropdown -->
    <MDBNavbarItem to="#">
      <MDBIcon icon="bell"></MDBIcon>
      <MDBBadge notification color="danger" pill>1</MDBBadge>

      <!-- <MDBDropdownMenu>
            <MDBDropdownItem href="#">Action</MDBDropdownItem>
            <MDBDropdownItem href="#">Another Action</MDBDropdownItem>
            <MDBDropdownItem href="#">Something else here</MDBDropdownItem>
          </MDBDropdownMenu> -->
    </MDBNavbarItem>
    <!-- Notification dropdown -->
    <!-- Avatar -->
    <MDBDropdown class="nav-item" v-model="dropdown6">
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
        <MDBDropdownItem href="#">My profile</MDBDropdownItem>
        <MDBDropdownItem href="#">Logout</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  </MDBNavbar>
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
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
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
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown6 = ref(false);

    return {
      collapse1,
      dropdown6,
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