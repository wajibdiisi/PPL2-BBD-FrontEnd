<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12" class="align-self-center">
        <MDBCard text="center">
          <MDBCol class="align-self-center" md="3" style="margin: 2vh">
            <MDBCardImg
              :src="userProfile.profilePicture"
              top
              class="img-fluid rounded-circle"
              alt="..."
            />
          </MDBCol>
          <MDBCardBody>
            <MDBCardTitle class="fs-1">{{ userProfile.name }}</MDBCardTitle>
            <MDBCardText class="fs-4" v-if="userProfile.kota && userProfile.provinsi">
             {{userProfile.kota}}, {{userProfile.provinsi}}
            </MDBCardText>
            <MDBCardText class="fs-4">
            {{userProfile.tglLahir}}
            </MDBCardText>
            <template v-if="userProfile._id == user.user?._id">
            <router-link to="/uploadmoment">
            <MDBBtn tag="a" href="#!" color="link" outline="primary"
              >Upload Moment
            </MDBBtn>
            </router-link>
            
            <router-link to="/profile/edit">
            <MDBBtn tag="a" href="#!" color="link" outline="primary"
              >Edit Profile
            </MDBBtn>
            </router-link>
            </template>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>  
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="4">
        <MDBCard>
          <MDBCardBody>
            <template v-if="user.user?._id == userProfile._id">
            <MDBCardTitle class="fs-3">Your Plan</MDBCardTitle>
            </template>
            <template v-if="user.user?._id != userProfile._id">
              <MDBCardTitle class="fs-3">{{userProfile.name}}'s Plan</MDBCardTitle>
              </template>
            <template v-if="planner_list">
            <MDBRow v-for="planner in plannerComputed" :key="planner._id">
             <div
                class="d-flex justify-content-between"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> {{planner.title}} </MDBCardText>
                <template v-if="user.user?._id == userProfile._id">
             <MDBBtn color="link" outline="primary" @click="redirect(planner._id,'planner')"
                  >Details
                </MDBBtn>
            </template>
               
              </div>
 
            </MDBRow>
            </template>
            <!-- <MDBCardText class="fs-5">
              Plan 1
              <div class="d-grid mx-auto justify-content-md-end">
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
            </MDBCardText> -->
          </MDBCardBody>
          <div class="center" style="margin: 4vh">
        <div class="pagination">
          <a  @click="prevPagination()">&laquo;</a>
          <a href="#" class="active">{{currentPagePlanner}}</a>
          <!-- <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a> -->
          <a @click="nextPagination('planner')">&raquo;</a>
        </div>
      </div>
        </MDBCard>
      </MDBCol>
      <MDBCol col="8">
        <MDBCard>
          <MDBCardBody>
            
            <template v-if="user.user?._id == userProfile._id">
            <MDBCardTitle class="fs-3">Your Moment</MDBCardTitle>
            </template>
            <template v-if="user.user?._id != userProfile._id">
              <MDBCardTitle class="fs-3">{{userProfile.name}}'s Moment(s)</MDBCardTitle>
              </template>
            <MDBRow>
              <template v-if="moment_list">
              <div v-for="data_moment in momentComputed" :key="data_moment._id" class="col-md-6" style="margin: 2vh auto">
                
                <MDBCard style="cursor: pointer" class="h-100" @click="openModalMoment(data_moment)">
                  <MDBCardImg
                    :src="data_moment.photo"
                    top
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{{data_moment.title}}<small class="text-end"> - {{moment(data_moment.created_at).fromNow()}}</small></MDBCardTitle>
                    <MDBBtn size="sm" outline="dark" v-for="wisata in data_moment.id_wisata" :key="wisata._id">
                                  <router-link :to="{name : 'WisataDetails', params :{ slug :  wisata.slug} }">
                                  {{wisata.nama}}
                                  </router-link>
                                </MDBBtn>
                  </MDBCardBody>
                  
                </MDBCard>
              </div>
              </template>
              
            
            </MDBRow>
          </MDBCardBody>
          <div class="center" style="margin: 4vh">
        <div class="pagination">
          <a  @click="prev">&laquo;</a>
          <a href="#" class="active">{{currentPage}}</a>
          <!-- <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a> -->
          <a @click="nextPagination('moment')">&raquo;</a>
        </div>
      </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
   <MDBModal
                      id="Moment"
                      tabindex="-1"
                      labelledby="Moment"
                      v-model="modalMoment"
                      centered
                      scrollable
                      size="xl"
                    >
                      <MDBModalBody>
                        <MDBRow>
                          <MDBCol md="8">
                            <img
                              :src="modalDataMoment.photo"
                              alt="..."
                              style="width: 100%"
                            />
                          </MDBCol>
                          <MDBCol md="4">
                            <MDBRow>
                              <MDBCol
                                md="3"
                                class="d-flex justify-content-center"
                              >
                              
                                <img
                                  :src="modalDataMoment.id_user.profilePicture"
                                  alt="avatar"
                                  width="60"
                                  height="60"
                                />
                              </MDBCol>
                              <MDBCol md="9">
                                <MDBCol>
                                  <p style="margin-bottom: 4px">{{modalDataMoment.title}}</p>
                                </MDBCol>
                                
                                <MDBCol>
                                  <p class="fw-light">{{moment(modalDataMoment.created_at).fromNow()}}</p>
                                </MDBCol>
                              </MDBCol>
                            </MDBRow>
                            <MDBCol>
                              <p style="margin-top: 8px">
                                {{modalDataMoment.description}}
                              </p>
                            </MDBCol>
                            <p class="text-end">
                              {{modalDataMoment.time}} ; {{modalDataMoment.date}}
                            </p>
                            <!-- <p>
                              waktu : {{modalDataMoment.time}}
                            </p> -->
                             <MDBBtn size="sm" outline="dark" v-for="wisata in modalDataMoment.id_wisata" :key="wisata._id">
                                  <router-link :to="{name : 'WisataDetails', params :{ slug :  wisata.slug} }">
                                  <p style="margin-bottom: 4px">{{wisata.nama}}</p>
                                  </router-link>
                                </MDBBtn>
                            <hr />
                            <MDBCol>
                              <p>
                                <MDBTooltip v-model="tooltip2" tag="a">
                                <template #reference>
                                <a role="button"  style="color: rgb(0, 0, 255)" @click="likeMoment(modalDataMoment._id)"><MDBIcon icon="thumbs-up" iconStyle="fas" />Like ({{modalDataMoment.thumbs_up.length}}) </a>
                                </template>
                                <template #tip>
                                  <div v-for="thumbs_user in modalDataMoment.thumbs_up" :key="thumbs_user._id">
                                  <span>{{thumbs_user.name}} </span>
                                  </div>
                                </template>
                                </MDBTooltip>
                                <template v-if="user.user?._id == modalDataMoment.id_user._id">
                                <a role="button" style="color:rgb(0,0,255)" @click="editMoment(modalDataMoment._id)"><MDBIcon icon="pencil-alt" iconStyle="fas" />Edit </a>
                                <a role="button" style="color:rgb(255,0,0)" @click="deleteMoment(modalDataMoment._id)"><MDBIcon icon="trash" iconStyle="fas" />Delete </a>
                                </template>
                              </p>
                              
                            </MDBCol>
                          </MDBCol>
                        </MDBRow>
                      </MDBModalBody>
                    </MDBModal>
  <Footer />
</template>
<script>
import Navbar from "../components/Navbarcopy.vue";
import Footer from "../components/Footer copy.vue";
import { ref } from "vue";
import { getCurrentInstance } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import authHeader from "../auth-header"
import moment from "moment"
import Swal from "sweetalert2"
import { usePagination } from "vue-composable"
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBTextarea,
  MDBSelect,MDBTooltip,
    MDBModalBody,
} from "mdb-vue-ui-kit";
export default {
  components: {
    Navbar,
    Footer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBContainer,
    MDBIcon,
    MDBModal,
    MDBTextarea,
    MDBModalBody,
    MDBSelect,
    MDBTooltip
  
  },
  setup() {
      const sortType = ref([
        { text: "Newest First", value: "desc" },
        { text: "Oldest First", value: "asc" },
       
      ]);
     const config = {
          headers: authHeader()
        }
    const checkFormComment = async (e) => {
      e.target.classList.add("was-validated")
      if(localStorage.getItem('token') == null){
        Swal.fire({
          title : "Action Failed",
          text : "You need to login first before you can add comment",
          icon : "error"
        })
        return router.push('/login')
      }
      if (comment_content.value != null) {
        create_comment(comment_content.value, modalData.value)
      }
    }
    const dropdown21 = ref(false);
    const route = useRoute();
    const comment_content = ref();
     const router = useRouter();
    const fetch_data = getCurrentInstance().appContext.config.globalProperties.$http
    const store = useStore();
    const notification = ref([])
    const modalOpened = ref(false)
    const listToShow = ref(5);
    const modalData = ref()
    const modalDataMoment = ref()
    const selectedSort = ref();
    const moment_list = ref();
    const modalMoment = ref(false)
    const planner_list = ref()
    const offsetPlanner = ref(0)
    const pageSizePlanner = ref(5)
    const currentPagePlanner = ref(1)
    const tooltip1 = ref(false)
    const tooltip2 = ref(false)
    const user = computed(() => store.getters.user);
    const { currentPage, lastPage, next, prev, offset, pageSize, total } =
      usePagination({
        currentPage: 1,
        pageSize: 6,
        total: 1000
      })
    const userProfile = ref({
      name: null,
      tglLahir : 'Data not available',
      location : 'Data not available',
    });
    let uri_profile =
      process.env.VUE_APP_ROOT_API + "users/profile/" + route.params.username;
    let uri_moment = 
    process.env.VUE_APP_ROOT_API + "moment/user/" + route.params.username;
    fetch_data.get(uri_moment).then((response) => {
      moment_list.value = response.data
    })
    get_plan( )
    fetch_data
      .get(uri_profile)
      .then((response) => {
        userProfile.value = response.data;
        document.title = userProfile.value.name + ' - Mytour'
      }).catch((err) => {
        if(err.response.status == 404){
          router.push('/404')
        }
      });
    if(localStorage.getItem('token') != null){
    if(user.value?.user.username == route.params.username){
       get_notification()
    }
    }
    function get_notification(){
      let uri_notification = process.env.VUE_APP_ROOT_API + "notification"
      fetch_data.get(uri_notification,config).then((response) => {
        notification.value = response.data
      })
    }
    const momentComputed = computed({
      get: () =>
        moment_list.value?.slice(0,1500).sort((a,b) => {
          let modifier = -1;
          if(a['created_at'].valueOf() < b['created_at'].valueOf()){
            
            return -1 * modifier;
          }
          if(a['created_at'].valueOf() > b['created_at'].valueOf()){
            return 1 * modifier
          }
        }).slice(offset.value,offset.value + pageSize.value)
    });
    const plannerComputed = computed({
      get: () =>
        planner_list.value?.slice(offsetPlanner.value,offsetPlanner.value + pageSizePlanner.value)
    });
    const commentComputed = computed({
      get: () =>
        modalData.value?.id_comments.slice(0,1500).sort((a,b) => {
          let modifier = 1;
          if(selectedSort.value == "desc")modifier = -1
          if(a['created_at'].valueOf() < b['created_at'].valueOf()){
            return -1 * modifier;
          }
          if(a['created_at'].valueOf() > b['created_at'].valueOf()){
            return 1 * modifier
          }
        }).slice(0,listToShow.value)
    });
    function openModal(data) {
      
        let uri_discussion =
      process.env.VUE_APP_ROOT_API +
      "wisata/" +
      route.params.slug +
      "/discussion/" + data
      fetch_data.get(uri_discussion).then((response) => {
        modalData.value = response.data
        listToShow.value = 5
        modalOpened.value = true
      })
      
      
    

    
      // get_comment(comment_list, modalData.value)
    }
    function get_plan(){
        let uri_planner =  process.env.VUE_APP_ROOT_API  + "planner/plan_list/" + route.params.username
       
        fetch_data.get(uri_planner,config).then(response => {
        planner_list.value = response.data
        })
    }
    function openModalMoment(data){
      modalDataMoment.value = data
      modalMoment.value = true
    }
    function openModelMomentByID(id){
    let uri_moment = process.env.VUE_APP_ROOT_API + "moment/" + id
    fetch_data.get(uri_moment).then((response)=> {
      modalDataMoment.value = response.data
      modalMoment.value = true
    })
     
    }
    function create_comment(comment_content, data) {
     
      let uri_comment =
        process.env.VUE_APP_ROOT_API +
        "wisata/" +
        data.id_wisata.slug +
        "/discussion/" +
        data._id
      const config = {
        headers: authHeader()
      }
      fetch_data
        .post(
          uri_comment,
          { content: comment_content, id_discussion: data._id },
          config
        )
        .then((response) => {
          if (response.status == 201) {
            get_comment(modalData, data._id)
            Swal.fire({
              title: "Comment Created Successfully",
              icon: "success"
            })
          }
        }).catch((err) => {
          console.log(err)
        })
    }
    function get_comment(data, id_disc) {
      let uri_comment =
        process.env.VUE_APP_ROOT_API +
        "wisata/" +
        route.params.slug +
        "/discussion/" +
        id_disc
      return fetch_data
        .get(uri_comment)
        .then((response) => {
          data.value = response.data
        })
        .catch((err) => {
          console.log(err.status)
        })
    }
    function get_moment(){
      return fetch_data.get(uri_moment).then((response) => {
        moment_list.value = response.data
      })
    }

    function deleteNotification(id){
      Swal.fire({
        title: "Do you want to delete your notification?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Save"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let uri = ''
      if(id == 'all'){
      uri =  process.env.VUE_APP_ROOT_API + 'notification/remove/all'
      }else{
      uri = process.env.VUE_APP_ROOT_API + 'notification/' + id
      }
      fetch_data.delete(uri,config).then((response) => {
        if(response.status == 201){
          get_notification()
          Swal.fire({
            title : 'Notification Deleted',
            icon : 'success'
          })
        }
      }).catch((err)=> {
        console.log(err.status)
      })
          }
      })
      
    }

    function getSpecificMoment(id,data){
      let uri_moment = process.env.VUE_APP_ROOT_API + "moment/" + id 
      fetch_data.get(uri_moment).then((response) => {
        data.value = response.data
      })
    }

    function likeMoment(id){
      if(localStorage.getItem('token') == null){
        Swal.fire({
          title : "Action Failed",
          text : "You need to login first before you can do this action",
          icon : "error"
        })
        return router.push('/login')
      }else{
         let uri_thumbsMoment = process.env.VUE_APP_ROOT_API + "moment/" + id +"/thumbs"
         fetch_data.post(uri_thumbsMoment,config,config).then(()=> {
           getSpecificMoment(id,modalDataMoment)
         })
      }
    }

    function deleteMoment(id){
       Swal.fire({
        title: "Do you want to delete your Moment?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Save"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const config = {
            headers: authHeader()
          }
          let uri_singleMoment = process.env.VUE_APP_ROOT_API + "moment/" + id
          fetch_data
            .delete(uri_singleMoment, config)
            .then(() => {
              modalMoment.value = false
              Swal.fire("Moment Deleted", "", "success")
               get_moment()
            })
         
        }
      })
      
    }
    function redirect(data,type){
      if(type=='wisata'){
      router.push({name : 'WisataDetails', params : {slug : data }})
      }else if(type=='planner'){
        router.push({name : 'PlannerDetails',params: { id: data } });
      }
    }
    function nextPagination(type) {
      console.log(type)
      if(type == 'moment'){
      if (moment_list.value.length > offset.value + momentComputed.value.length) {
        next()
     
        if(momentComputed.value.length == 0) prev()
        

      }
      }
      else if(type =='planner'){
        if(planner_list.value.length > offsetPlanner.value + plannerComputed.value.length){
          offsetPlanner.value += 5
          currentPagePlanner.value += 1
        }
        if(plannerComputed.value.length == 0){
          currentPagePlanner.value -= 1
          offsetPlanner.value -= 5
        }
      }
    }
    function prevPagination(){
      if(offsetPlanner.value > 4){
      currentPagePlanner.value -= 1
      offsetPlanner.value -= 5}
    }
      function confirmDeleteComment(discussion_id, comment_id) {
      Swal.fire({
        title: "Do you want to delete your discussion?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Save"
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let uri_deleteDiscussion =
            process.env.VUE_APP_ROOT_API +
            "wisata/" +
            route.params.slug +
            "/discussion/" +
            discussion_id +
            "/" +
            comment_id
          fetch_data.delete(uri_deleteDiscussion, config).then((response) => {
            if (response.status == 201) {
              Swal.fire("Comment Deleted", "", "success")
              get_comment(modalData, discussion_id)
            }
          })
        }
      })
    }
    function likeDiscussion(id) {
      let uri_likeDiscussion =
        process.env.VUE_APP_ROOT_API +
        "wisata/" +
        route.params.slug +
        "/discussion/" +
        id +
        "/thumbs"
      fetch_data.post(uri_likeDiscussion, config, config).then((response) => {
        console.log(response.data)
        getSpecificDiscussion(id, modalData)
      })
    }
      function getSpecificDiscussion(id, data) {
      let uri_discussion =
        process.env.VUE_APP_ROOT_API +
        "wisata/" +
        route.params.slug +
        "/discussion/" +
        id
      fetch_data.get(uri_discussion).then((response) => {
        data.value = response.data
      })
    }
    function likeComment(id,id_comment) {
      console.log(id)
      let uri_likeComment =
        process.env.VUE_APP_ROOT_API +
        "wisata/" +
        route.params.slug +
        "/discussion/" +
        id + "/" + id_comment + 
        "/thumbs"
      fetch_data.post(uri_likeComment, config, config).then((response) => {
        console.log(response.data)
        getSpecificDiscussion(id, modalData)
      })
    }
    function editMoment(id){
      router.push({name : 'EdMoment',params: { id: id } });
    }
   

    return {
      dropdown21,editMoment,
      userProfile,
      user,
      notification,
      moment: moment,
      openModal,
      commentComputed,
      modalData,
      listToShow,
      modalOpened,
      selectedSort,
      comment_content,
      checkFormComment,
      create_comment,
      get_comment,
      sortType,
      moment_list,
      deleteNotification,
      openModalMoment,
      modalMoment,
      modalDataMoment,
      deleteMoment,
      likeMoment,
      openModelMomentByID,
      redirect,
      currentPage,
      lastPage,
      next,
      prev,total,
      nextPagination,
      momentComputed,
      planner_list,
      plannerComputed,
      prevPagination,
      currentPagePlanner,
      offsetPlanner,
      confirmDeleteComment,
      likeDiscussion,getSpecificDiscussion,likeComment,
      tooltip1,tooltip2
      
};
  },
};
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
body {
  background-color: #f0f2f5;
}
.dropdown-list-image {
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
}
.dropdown-list-image img {
  height: 2.5rem;
  width: 2.5rem;
}
.btn-light {
  color: #2cdd9b;
  background-color: #e5f7f0;
  border-color: #d8f7eb;
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