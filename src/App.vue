<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  watch : {
    '$route' (to){
      document.title = to.meta.title || 'Mytour'
    },
    immediate : true
  }
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif, Montserrat;
}
</style>
