
<template>
  <MDBContainer>
    <MDBRow>
      <MDBCol>One of three columns</MDBCol>
      <MDBCol>One of three columns</MDBCol>
      <MDBCol>One of three columns</MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
  import { MDBCol, MDBRow, MDBContainer} from 'mdb-vue-ui-kit';


  export default {
    components: {
      MDBCol,
      MDBRow,
      MDBContainer
    },
  };
</script>