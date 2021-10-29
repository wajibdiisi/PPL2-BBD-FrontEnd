<template>
  <Navbar />
  <MDBContainer fluid style="margin-bottom: 1vh">
    <div class="text-center">
      <MDBCol col="12">
        <img
          src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
          alt=""
        />
      </MDBCol>
    </div>
  </MDBContainer>
  <MDBContainer style="margin-bottom: 10vh">
    <MDBCard>
      <MDBCol class="align-self-center" col="10" style="margin: 1vh">
        <MDBAutocomplete
          class="search-bg"
          v-model="autocompleteTemplate"
          :filter="filterTemplate"
          :displayValue="displayValueTemplate"
          :itemContent="itemTemplate"
          style="width: 22rem"
          label="Cari Tempat Wisata"
        />
      </MDBCol>
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="wisata in search_wisata" :key="wisata.id">
          <MDBCard border="light" shadow="0" bg="white" class="h-100">
            <MDBCardImg
              src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
              top
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>{{ wisata.nama }}</MDBCardTitle>
              <MDBCardText>
                {{ wisata.description }}
              </MDBCardText>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link
                  :to="{
                    name: 'WisataDetails',
                    params: { slug: wisata.slug },
                  }"
                >
                  <MDBBtn tag="a" color="link" outline="primary"
                    >See Details
                  </MDBBtn>
                </router-link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <!-- <MDBRow
        :cols="['1', 'md-3']"
        class="g-4"
        v-if="autocompleteTemplate == ''"
      >
        <MDBCol v-for="wisata in wisata_list" :key="wisata.id">
          <MDBCard class="h-100">
            <MDBCardImg
              src="https://www.akseleran.co.id/blog/wp-content/uploads/2020/08/Ilustrasi-Wisata-Bali-Sumber-The-Jakarta-Post.png"
              top
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>{{ wisata.nama }}</MDBCardTitle>
              <MDBCardText>
                {{ wisata.description }}
              </MDBCardText>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link
                  :to="{
                    name: 'WisataDetails',
                    params: { slug: wisata.slug },
                  }"
                >
                  <MDBBtn tag="a" color="link" outline="primary"
                    >See Details
                  </MDBBtn>
                </router-link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow> -->
      <nav aria-label="Page navigation example" style="margin-top: 5vh">
        
          <button @click="prev">prev</button>
      <button @click="nextPagination()">next</button>
        <MDBPagination class="justify-content-end">
        </MDBPagination>
      </nav>
    </MDBCard>
  </MDBContainer>
  <Footer />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { getCurrentInstance } from "vue";
import { usePagination } from "vue-composable";
//import Wisatadetails from "../components/Wisatadetails.vue";
import { ref, onMounted, computed } from "vue";
import {
  // MDBCarousel,
  MDBContainer,
  MDBCol,
  MDBRow,
  // MDBCardGroup,
  // MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBAutocomplete,
  MDBCardImg,
  MDBBtn,
  MDBPagination,
  //MDBPageNav,
  //MDBPageItem,
} from "mdb-vue-ui-kit";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    //Wisatadetails
    // MDBCarousel,
    MDBCol,
    MDBRow,
    // MDBCardGroup,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBAutocomplete,
    MDBCardImg,
    MDBBtn,
    MDBPagination,
    //MDBPageNav,
    //MDBPageItem,
    // MDBInput,
  },

  setup() {
    const wisata_list = ref();
     
    const app = getCurrentInstance();
    
    
    let uri_wisata = process.env.VUE_APP_ROOT_API + "wisata/all";

    onMounted(async () => {
      try {
        
        const res = await app.appContext.config.globalProperties.$http.get(
          uri_wisata
        );
        wisata_list.value = await res.data;
      } catch (e) {
        console.log("Error Loading Wisata");
      }
    }); /*
    if(wisata_list.value != null){
    search_wisata = computed(() =>
      
       wisata_list.value.filter(wisata => {
         if(autocompleteTemplate.value != null){
         console.log('s')
         return wisata
         }
        else {
          console.log('s')
          return wisata
        }
       }
    ))
    }*/

    const search_wisata = computed({
      get: () =>
        wisata_list.value?.filter((wisata) => {
          
          if (autocompleteTemplate.value != null) {
            return wisata.nama.includes(autocompleteTemplate.value);
          } else {
            return wisata.nama != null;
          }
        }).slice(offset.value, offset.value + pageSize.value),
    });
    const {
      currentPage,
      lastPage,
      next,
      prev,
      offset,
      pageSize,
      total,
    } = usePagination({
      currentPage: 1,
      pageSize: 9,
      total:100,
    });   
    console.log(total)
    const autocompleteTemplate = ref("");

    const itemTemplate = (result) => {
      return `
          <div class="autocomplete-custom-item-content">
            <div class="autocomplete-custom-item-title">${result.nama}</div>
            <div class="autocomplete-custom-item-subtitle">${result.slug}</div>
          </div>
        `;
    };
    const filterTemplate = async (value) => {
      const res = ref([]);
      res.value = await app.appContext.config.globalProperties.$http.get(
        uri_wisata
      );
      const data = await res.value.data;

      return data.filter((wisata) => {
        return wisata.nama.toLowerCase().startsWith(value.toLowerCase());
      });
    };
    const displayValueTemplate = (value) => value.nama;

    /*
    app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {
      wisata_list.value = response.data
  
      })*/

    function nextPagination(){
      console.log(offset.value)
      if(search_wisata.value.length >= offset.value){
        next()
      }else{
        return
      }
    }
    return {
      wisata_list,nextPagination,
      itemTemplate,
      autocompleteTemplate,
      filterTemplate,
      search_wisata,
      displayValueTemplate,
      currentPage,
      lastPage,
      next,
      total,
      prev,
    };
  },
  // setup() {
  //   const items1 = [
  //     {
  //       src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
  //       alt: "...",
  //       label: "First slide label",
  //       caption: "Liburan lebih nikmat dengan MyTour!",
  //     },
  //     {
  //       src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
  //       alt: "...",
  //       label: "Second slide label",
  //       caption: "Liburan lebih nikmat dengan MyTour!",
  //     },
  //     {
  //       src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
  //       alt: "...",
  //       label: "Third slide label",
  //       caption: "Liburan lebih nikmat dengan MyTour!",
  //     },
  //   ];
  //   const carousel1 = ref(0);

  //   return {
  //     items1,
  //     // carousel1,
  //   };
  // },
};
</script>
<style>
body {
  background-color: #f0f2f5;
}
.search-bg {
  width: 100%;
  height: 100%;
}
.form-control {
  height: 60px;
}
* {
  font-family: "Montserrat", sans-serif;
}
</style>