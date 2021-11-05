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
      <MDBCol class="align-self-center" col="10" style="margin: 1vh">
        <MDBBtn
          color="primary"
          style="background-color: rgb(50, 224, 196)"
          @click="collapse1 = !collapse1"
          aria-controls="collapsibleContent1"
          :aria-expanded="collapse1"
          rounded
        >
          <MDBIcon icon="filter" iconStyle="fas" class="me-2"></MDBIcon>Filters
        </MDBBtn>
        <MDBBtn
          color="primary"
          style="background-color: rgb(50, 224, 196)"
          @click="collapse2 = !collapse2"
          aria-controls="collapsibleContent2"
          :aria-expanded="collapse2"
          rounded
        >
          <MDBIcon icon="sort" iconStyle="fas" class="me-2"></MDBIcon>Sorting
        </MDBBtn>
        <MDBCollapse id="collapsibleContent1" v-model="collapse1">
          <MDBRow>
            <MDBCol col="6" style="margin-top: 2vh">
              <MDBSelect v-model:options="options1" v-model:selected="filteredType" label="Type" clearButton />
            </MDBCol>
            <MDBCol col="6" style="margin-top: 2vh">
              <MDBSelect
                v-model:options="optionsProvinsi"
                label="Location"
                clearButton
                placeholder="Example placeholder"
                v-model:selected="selectedProv"
              />
            </MDBCol>
            <!-- <MDBCol col="3" style="margin-top: 2vh">
              <MDBSelect
                v-model:options="options7"
                label="Example label"
                clearButton
              />
            </MDBCol> -->
            <!-- <MDBCol col="4" style="margin-top: 2vh">
              <MDBSelect
                v-model:options="options3"
                label="Average Cost"
                clearButton
              />
            </MDBCol> -->
          </MDBRow>
        </MDBCollapse>
        <MDBCollapse id="collapsibleContent2" v-model="collapse2">
          <MDBRow>
            <MDBCol col="4" style="margin-top: 2vh">
              <p>Name</p>
            </MDBCol>
            <MDBCol col="4" style="margin-top: 2vh">
              <p>Popular</p>
            </MDBCol>
            <MDBCol col="4" style="margin-top: 2vh">
               <MDBBtn color="primary" @click="onlyShowFavourite" >Only Show Favourited</MDBBtn>
              
            </MDBCol>
            <MDBCol col="4">
              <MDBRadio value="nameAsc" label="Ascending" v-model="sortType" inline />
              <MDBRadio value="nameDesc" label="Descending" v-model="sortType" inline />
            </MDBCol>
            <MDBCol col="4">
              <MDBRadio value="popDesc" label="Most Popular" v-model="sortType" inline />
               <MDBRadio value="popAsc" label="Least Popular" v-model="sortType" inline />
            </MDBCol>
          </MDBRow>
        </MDBCollapse>
      </MDBCol>
      <MDBRow :cols="['1', 'md-3']" class="g-4">
        <MDBCol v-for="(wisata,index) in search_wisata" :key="index">
          <MDBCard border="light" shadow="0" bg="white" class="h-100">
            <MDBCardImg
              :src="wisata.photos[0]"
              top
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>{{ wisata.nama }}</MDBCardTitle>
              <MDBCardText>
                <template v-if="stringToShow[index] == 200">
                {{ wisata.description.slice(0,stringToShow[index]) }}  <a class="" @click="stringToShow[index] = 0">
        Read more...
        </a>
                </template>
                <template v-if="stringToShow[index] == 0">
                  {{wisata.description}}
                  </template>
              </MDBCardText>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <router-link
                  :to="{
                    name: 'WisataDetails',
                    params: { slug: wisata.slug }
                  }"
                >
                 <span class="pe-2">
                                  <MDBIcon icon="comment" iconStyle="fas" /> {{wisata.bookmark_id_user.length}}
                                </span>
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
   
      <div class="center" style="margin-top: 4vh">
        <div class="pagination">
          <a  @click="prev">&laquo;</a>
          <a href="#" class="active">{{currentPage}}</a>
          <!-- <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a> -->
          <a @click="nextPagination()">&raquo;</a>
        </div>
      </div>
    </MDBCard>
  </MDBContainer>
  <Footer />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbarcopy.vue"
import Footer from "../components/Footer copy.vue"
import { getCurrentInstance } from "vue"
import { usePagination } from "vue-composable"
import Swal from 'sweetalert2'
import { useStore } from "vuex"
//import Wisatadetails from "../components/Wisatadetails.vue";
import { ref, onMounted, computed } from "vue"
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
  //MDBPagination,
  MDBCollapse,
  MDBIcon,
  MDBSelect,
  //MDBCheckbox,
  MDBRadio
  //MDBPageNav,
  //MDBPageItem,
} from "mdb-vue-ui-kit"
import { useRouter } from 'vue-router'

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
    //MDBPagination,
    MDBCollapse,
    MDBIcon,
    MDBSelect,
    //MDBCheckbox,
    MDBRadio,
    //MDBPageNav,
    //MDBPageItem,
    // MDBInput,
  },

  setup() {
    const wisata_list = ref()
    const router = useRouter()
    const stringToShow = ref(Array(100).fill(200))
    const selectedProv = ref(null)
    const sortType = ref("nameAsc")
    const optionsProvinsi = ref([])
    const store = useStore()
    const filteredType = ref()
    const user = computed(() => store.getters.user)
    const options1 = ref([
      { text: "Select All", value : "Select All"},
      { text: "Pantai", value: "Pantai" },
      { text: "Gunung", value: "Gunung" },
      { text: "Bangunan Bersejarah", value: "Bangunan Bersejarah" },
      { text: "Candi", value: "Candi"},
      { text: "Other", value: "Other" }
    ])
    const options2 = ref([
      {text : "Select All", value : "Select All"},
      { text: "Sumatra Selatan", value: "Sumatra Selatan" },
      { text: "Jawa Barat", value: 2 },
      { text: "Bali", value: "Bali" },
      { text: "Sulawesi Utara", value: 4 }
    ])
    const options3 = ref([
      { text: "Free", value: 1 },
      { text: "<50.000", value: 2 },
      { text: "<100.000", value: 3 },
      { text: ">100.000", value: 4 }
    ])
    const app = getCurrentInstance()
    const collapse1 = ref(false)
    const collapse2 = ref(false)
    const checkbox5 = ref(false)
    
    let uri_wisata = process.env.VUE_APP_ROOT_API + "wisata/all"

    onMounted(async () => {
      try {
      const dataTemp = ref([])
       app.appContext.config.globalProperties.$http.get(
          uri_wisata
        ).then((response) => {
          wisata_list.value =  response.data
          const dataInit = {
            'text' : 'Select All',
            'mdbKey' : 0,
            'value' : 'Select All'
          }
          dataTemp.value.push(dataInit)
          for(let i = 0; i < response.data.length; i++){
            const data = {
              'text' : response.data[i].provinsi,
              'mdbKey' : i + 1,
              'value' : response.data[i].provinsi
            }
            dataTemp.value.push(data)

          }

       optionsProvinsi.value =  dataTemp.value.filter(function(item,pos,array){
          return array.map(function(mapItem){
            return mapItem['text'];
          }).indexOf(item['text']) == pos;
        })

        })
      } catch (e) {
        console.log("Error Loading Wisata")
      }
    }) /*
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
        wisata_list.value
          ?.filter((wisata) => {
            if (autocompleteTemplate.value != null) {
              return wisata.nama.includes(autocompleteTemplate.value)
            } else {
              return wisata.nama != null
            }
          }).filter((wisata) => {
            if(selectedProv.value != "Select All"){
      
              return wisata.provinsi.includes(selectedProv.value)
            }else{
              return wisata.nama != null
            }
          }).
          filter((wisata) => {
            if(filteredType.value != "Select All"){
              return wisata.tipe.includes(filteredType.value)
            }else{
              return wisata.nama != null
            }
          })
          .
          filter((wisata)=> {
            if(checkbox5.value == true){
              return wisata.bookmark_id_user.includes(user.value.user._id)
            }else{
              return wisata.nama != null
            }
            }).sort((a,b) => {
            let modifier = 1
            if(sortType.value == 'nameDesc' || sortType.value =='popDesc'){
               modifier = -1
            }
            if(sortType.value == 'nameAsc' || sortType.value == 'nameDesc'){
            if(a['nama'] < b['nama']){
              return -1 * modifier;
            }
            if(a['nama'] > b['nama']){
              return 1 * modifier
            }
            }else if (sortType.value == 'popAsc' || sortType.value == 'popDesc'){
              if(a['bookmark_id_user'].length < b['bookmark_id_user'].length) return -1 * modifier
              if(a['bookmark_id_user'].length > b['bookmark_id_user'].length) return 1 * modifier
            }

          })
          .slice(offset.value, offset.value + pageSize.value)
    })
    const { currentPage, lastPage, next, prev, offset, pageSize, total } =
      usePagination({
        currentPage: 1,
        pageSize: 9,
        total: 200
      })
    const autocompleteTemplate = ref("")

    const itemTemplate = (result) => {
      return `
          <div class="autocomplete-custom-item-content">
            <div class="autocomplete-custom-item-title">${result.nama}</div>
            <div class="autocomplete-custom-item-subtitle">${result.kota} - ${result.provinsi}</div>
          </div>
        `
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
    const displayValueTemplate = (value) => value.nama

    /*
    app.appContext.config.globalProperties.$http.get(uri_wisata).then((response) => {
      wisata_list.value = response.data
  
      })*/

    function nextPagination() {
    
      if (wisata_list.value.length > offset.value + search_wisata.value.length) {
        next()
        if(search_wisata.value.length == 0) prev()
      } else {
        return
      }
    }

    function onlyShowFavourite(){
     if(localStorage.getItem('token') == null){
        Swal.fire({
          title : "Action Failed",
          text : "You need to login first before you can make a discussion",
          icon : "error"
        })
        return router.push('/login')
      }else{
        checkbox5.value = !checkbox5.value
      } 
    }
    return {
      stringToShow,
      wisata_list,
      nextPagination,
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
      collapse1,
      collapse2,
      options1,
      options2,
      options3,
      checkbox5,
      selectedProv,
      sortType,
      optionsProvinsi,
      onlyShowFavourite,
      user,
      filteredType
    }
  }
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
}
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
.center {
  text-align: center;
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  margin: 0 4px;
}

.pagination a.active {
  background-color: rgb(50, 224, 196);
  color: white;
  border: 1px solid rgb(50, 224, 196);
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>