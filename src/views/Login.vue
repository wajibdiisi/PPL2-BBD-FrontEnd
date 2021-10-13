<template>
  <Navbar />
  <br />
  <div class="container d-flex justify-content-center">
    <div class="col-md-4">
      <div class="card" style="height: 520px">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" placeholder="Email.." />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password.."
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbarcopy.vue";
export default {
  components: {
    Navbar,
    //Wisatadetails
  },
};
</script>

<style scoped>
</style>