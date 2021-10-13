<template>
  <Navbar />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbarcopy.vue";
import Wisatadetails from "../components/Wisatadetails.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Wisatadetails
  },
};
</script>