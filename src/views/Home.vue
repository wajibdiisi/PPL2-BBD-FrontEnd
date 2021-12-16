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
      <div class="search-box">
        <MDBAutocomplete
          class="search-bg"
          v-model="autocompleteTemplate"
          :filter="filterTemplate"
          :displayValue="displayValueTemplate"
          :itemContent="itemTemplate"
          @update="redirectAutoComplete(autocompleteTemplate)"
          style="width: 22rem"
          label="Cari Tempat Wisata"
        />
      </div>
    </div>
  </MDBContainer>
  <div class="container" style="margin: 5vh auto">
    <div class="row">
      <h5>Tempat yang sering di kunjungi</h5>
      <p>Jelajahi daftar pilihan tempat populer di Indonesia</p>
      <div
        class="col-md-4"
        v-for="(wisata, index) in most_favourited"
        :key="wisata._id"
      >
        <MDBCard class="h-100">
          <MDBCardImg :src="wisata.photos[0]" top alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{{ wisata.nama }}</MDBCardTitle>
            <MDBCardText>
              <template v-if="stringToShow[index] == 200">
                {{ wisata.description.slice(0, stringToShow[index]) }}
                <a class="" role="button" @click="stringToShow[index] = 0">
                  Read more...
                </a>
              </template>
              <template v-if="stringToShow[index] == 0">
                {{ wisata.description }}
              </template>
            </MDBCardText>
            <MDBBtn @click="redirect(wisata.slug)" color="primary"
              >See Details</MDBBtn
            >
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 5vh">
    <div class="row">
      <h5>Lihat Diskusi Mengenai Tempat Wisata</h5>
      <p>
        Temukan pendapat orang yang pernah ke destinasi wisata yang akan anda
        kunjungi
      </p>
      <div class="col-md-4" v-for="wisata in diskusi_wisata" :key="wisata._id">
        <MDBCard bg="dark" text="white" class="h-100">
          <div class="bg-image" v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg :src="wisata.photos[0]" alt="..." overlay>
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.5)">
                <p
                  class="text-center fs-3 text-uppercase"
                  style="margin-top: 10vh"
                >
                  {{ wisata.nama }}
                </p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <MDBBtn @click="redirect(wisata.slug)" color="white"
                    >Lihat Diskusi</MDBBtn
                  >
                </div>
              </div>
            </MDBCardImg>
          </div>
        </MDBCard>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 10vh">
    <div class="row">
      <h5>Lihat Moment Mengenai Tempat Wisata</h5>
      <p>Temukan moment terbaik dari tempat wisata yang akan anda kunjungi</p>
      <template v-if="momentCarousel.length">
        <div class="col-md-4">
          <MDBCarousel
            class="img-thumbnail"
            v-model="carousel6"
            :items="momentCarousel"
            :indicators="false"
          />
        </div>
      </template>
      <template v-if="momentCarousel2.length">
        <div class="col-md-4">
          <MDBCarousel
            class="img-thumbnail"
            v-model="carousel7"
            :items="momentCarousel2"
            :indicators="false"
          />
        </div>
      </template>
      <template v-if="momentCarousel3.length">
        <div class="col-md-4">
          <MDBCarousel
            class="img-thumbnail"
            v-model="carousel8"
            :items="momentCarousel3"
            :indicators="false"
          />
        </div>
      </template>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbarcopy.vue"
import Footer from "../components/Footer copy.vue"
import { ref, getCurrentInstance } from "vue"
import { useRouter } from "vue-router"
import {
  MDBCarousel,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBBtn,
  MDBAutocomplete,
  mdbRipple
} from "mdb-vue-ui-kit"

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    MDBCarousel,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn,
    MDBAutocomplete
  },
  data() {
    return {
      email: ""
    }
  },
  methods: {
    notification: function () {
      this.$store.dispatch("notificationMessage", this.email)
    }
  },
  setup() {
    const diskusi_wisata = ref([])
    const momentCarousel = ref([])
    const momentCarousel2 = ref([])
    const momentCarousel3 = ref([])
    const carousel6 = ref(0)
    const carousel7 = ref(0)
    const carousel8 = ref(0)
    const router = useRouter()
    const app = getCurrentInstance()
    const wisata_list = ref()
    const moment_wisata = ref()
    const stringToShow = ref(Array(100).fill(200))
    const most_favourited = ref()
    const wisataAutoComplete = ref()
    let uri_wisata = process.env.VUE_APP_ROOT_API + "wisata/all"
    let uri_favourite = process.env.VUE_APP_ROOT_API + "wisata/most_favourited"
    let uri_wisataRandom = process.env.VUE_APP_ROOT_API + "wisata/random"
    let uri_momentRandom = process.env.VUE_APP_ROOT_API + "moment/random/moment"
    app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {
      wisata_list.value = response.data
      wisataAutoComplete.value = wisata_list.value.map((wisata) => wisata.slug)
    
    })
    app.appContext.config.globalProperties.$http.get(uri_favourite).then((response)=> {
      most_favourited.value = response.data
    })
    app.appContext.config.globalProperties.$http.get(uri_wisataRandom).then((response)=> {
      diskusi_wisata.value = response.data
    })
    app.appContext.config.globalProperties.$http.get(uri_momentRandom).then((response)=> {
      moment_wisata.value = response.data
      for(let i = 0 ; i < response.data.length ; i++){
        var label = ''
        for(let j = 0 ; j < response.data[i].id_wisata.length ; j++){
          if(response.data[i].id_wisata.length - 1 == 0)
          label = label + response.data[i].id_wisata[j].nama
          else if(response.data[i].id_wisata.length - j != 1)
          label = label + response.data[i].id_wisata[j].nama + ' - '
          else 
          label = label + response.data[i].id_wisata[j].nama + ' '
        }
    
        if(i <= 2 ){
          momentCarousel.value.push({
          'src' : response.data[i].photo,
          'alt' : "..",
          'label' : label
        })
        }if(2 < i <= 5){
          momentCarousel2.value.push({
          'src' : response.data[i+3].photo,
          'alt' : "..",
          'label' : label
        })
        }if(5 < i <= 8){
          momentCarousel3.value.push({
          'src' : response.data[i+6].photo,
          'alt' : "..",
          'label' : label
        })
        }
    }})
    function redirect(data) {
      router.push({ name: "WisataDetails", params: { slug: data } })
    }
    function redirectAutoComplete(data) {
      if(wisataAutoComplete.value.includes(data)){
      router.push({ name: "WisataDetails", params: { slug: data } })}
    }

    const filterTemplate = async (value) => {
      const res = ref([])
      res.value = await app.appContext.config.globalProperties.$http.get(
        uri_wisata
      )
      const data = await res.value.data

      return data.filter((wisata) => {
        if (!wisata.nama.split(" ").length > 1)
          return wisata.nama.toLowerCase().startsWith(value.toLowerCase())
        else {
          var words = wisata.nama.split(" ")
          for (var i = 0; i < words.length; i + 1) {
            return wisata.nama.toLowerCase().includes(value)
          }
        }
      })
    }
    const autocompleteTemplate = ref("")
    const itemTemplate = (result) => {
      return `
          <div class="autocomplete-custom-item-content">
            <div class="autocomplete-custom-item-title">${result.nama}</div>
            <div class="autocomplete-custom-item-subtitle">${result.kota} - ${result.provinsi}</div>
          </div>
        `
    }
    const displayValueTemplate = (value) => value.slug

    return {
      momentCarousel,
      wisata_list,
      most_favourited,
      moment_wisata,
      momentCarousel2,
      momentCarousel3,
      carousel6,
      carousel7,
      diskusi_wisata,
      carousel8,
      stringToShow,
      redirect,
      filterTemplate,
      displayValueTemplate,
      itemTemplate,redirectAutoComplete,
      autocompleteTemplate
    }
  },
  directives: { mdbRipple }
}
</script>
<style>
body {
  background-color: #f0f2f5;
}
.navbar {
  background-color: rgba(255, 255, 255, 0.561);
}
.nav-link {
  color: black !important;
}
.search-box {
  position: absolute;
  top: 40vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 50%;
  background-color: white;
  border-radius: 10px;
}
.form-control {
  height: 60px;
}
.search-text {
  font-size: 5rem;
  color: white;
  font-weight: 700;
  text-align: center;
}
* {
  font-family: "Montserrat", sans-serif;
}
</style>