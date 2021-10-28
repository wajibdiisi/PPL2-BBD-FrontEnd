<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBContainer>
            <MDBContainer>
              <MDBCardBody>
                <MDBCardTitle class="fs-1"
                  >Cara Penggunaan Fitur MyTour
                </MDBCardTitle>
                <MDBTabs v-model="activeTabId2">
                  <!-- Tabs navs -->
                  <MDBTabNav fill tabsClasses="mb-3">
                    <MDBTabItem tabId="ex2-1" href="ex2-1"></MDBTabItem>
                    <MDBTabItem tabId="ex2-2" href="ex2-2"
                      >Very very very very long link</MDBTabItem
                    >
                    <MDBTabItem tabId="ex2-3" href="ex2-3"
                      >Another link</MDBTabItem
                    >
                    <MDBTabItem tabId="ex2-4" href="ex2-4"
                      >Another link</MDBTabItem
                    >
                  </MDBTabNav>
                  <!-- Tabs navs -->
                  <!-- Tabs content -->
                  <MDBTabContent>
                    <MDBTabPane tabId="ex2-1">Tab 1 content</MDBTabPane>
                    <MDBTabPane tabId="ex2-2">Tab 2 content</MDBTabPane>
                    <MDBTabPane tabId="ex2-3">Tab 3 content</MDBTabPane>
                  </MDBTabContent>
                  <!-- Tabs content -->
                </MDBTabs>
                <!-- <MDBCardText class="fs-4">
                  Please upload your photos with ‘16:9’ ratio otherwise,
                </MDBCardText>
                <MDBCardText class="fs-4">
                  your photo will possibly turn blurry
                </MDBCardText> -->
              </MDBCardBody>
            </MDBContainer>
          </MDBContainer>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
//   MDBCardText,
  MDBContainer,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from "mdb-vue-ui-kit";
import { ref } from 'vue';
export default {
  components: {
    Navbar,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    // MDBCardText,
    MDBContainer,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  },
  setup() {
      const activeTabId2 = ref('ex2-1');

      return {
        activeTabId2,
      };
    },
};
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
</style>