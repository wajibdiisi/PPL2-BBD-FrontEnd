<template>
  <Navbar />
  <MDBContainer>
    <MDBRow>
      <img
        src="https://mdbootstrap.com/img/new/slides/041.jpg"
        class="img-fluid"
        alt="..."
      />
      <MDBCol col=""></MDBCol>
      <MBBCol>
        <MDBRow><h1 class="display-6">Candi Borobudur</h1></MDBRow>
        <MDBRow><MDBBtn>bintang</MDBBtn></MDBRow>
      </MBBCol>

      <MDBTabs v-model="activeTabId1">
        <!-- Tabs navs -->
        <MDBTabNav tabsClasses="mb-3">
          <MDBTabItem tabId="ex1-1" href="ex1-1">Tab #1</MDBTabItem>
          <MDBTabItem tabId="ex1-2" href="ex1-2">Tab #2</MDBTabItem>
          <MDBTabItem tabId="ex1-3" href="ex1-3">Tab #3</MDBTabItem>
        </MDBTabNav>
        <!-- Tabs navs -->
        <!-- Tabs content -->
        <MDBTabContent>
          <MDBTabPane tabId="ex1-1">Content #1</MDBTabPane>
          <MDBTabPane tabId="ex1-2">Content #2</MDBTabPane>
          <MDBTabPane tabId="ex1-3">Content #3</MDBTabPane>
        </MDBTabContent>
        <!-- Tabs content -->
      </MDBTabs>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import {
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