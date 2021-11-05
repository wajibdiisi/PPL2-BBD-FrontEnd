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
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBContainer>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle class="text-uppercase">notification</MDBCardTitle>
        <MDBCardText class="text-uppercase fs-6 fw-light text-end">
          <a role="button" @click="deleteNotification('all')">
          Clear all notification
          </a>
        </MDBCardText>
        <MDBRow>
          <div class="container">
            <div class="row">
              <div>
                <div class="box shadow-sm rounded bg-white mb-3">
                  <div class="box-title border-bottom p-3">
                    <h6 class="m-0">Recent</h6>
                  </div>
                  <div v-for="notif in notification" :key="notif._id" class="box-body p-0">
                    <div
                      class="
                        p-3
                        d-flex
                        align-items-center
                        bg-light
                        border-bottom
                        osahan-post-header
                      "
                    >
                      <div class="dropdown-list-image mr-3">
                        <img
                          class="rounded-circle"
                          :src="notif.ref_user.profilePicture"
                          alt=""
                        />
                      </div>
                      <div class="mr-3">
                        <div class="font-weight-bold text-truncate">
                          
                          <template v-if="notif.content == 'comment'">
                         {{notif.ref_user.name}} Commented on your <a style="color: rgb(85, 172, 238);" role="button" @click="openModal(notif.id_discussion,notif.content)">Discussion</a>
                         <span class="me-2" style="cursor: pointer">
                                      <a role="button" @click="deleteNotification(notif._id)">
                                      <MDBIcon
                                        icon="trash"
                                        iconStyle="fas"
                                      />
                                      </a>
                                    </span>
                         </template>
                          <template v-if="notif.content == 'likeDiscussion'">
                         {{notif.ref_user.name}} Liked one of your <a style="color: rgb(85, 172, 238);" role="button" @click="openModal(notif.id_discussion,notif.content)">Discussion</a>
                         <span class="me-2" style="cursor: pointer">
                                      <a role="button" @click="deleteNotification(notif._id)">
                                      <MDBIcon
                                        icon="trash"
                                        iconStyle="fas"
                                      />
                                      </a>
                                    </span>
                         </template>
                         
                           <template v-if="notif.content == 'likeMoment'">
                         {{notif.ref_user.name}} Liked one of your <a style="color: rgb(85, 172, 238);" role="button" @click="openModelMomentByID(notif.id_moment)">Moment</a>
                         <span class="me-2" style="cursor: pointer">
                                      <a role="button" @click="deleteNotification(notif._id)">
                                      <MDBIcon
                                        icon="trash"
                                        iconStyle="fas"
                                      />
                                      </a>
                                    </span>
                         </template>
                        </div>
                        <div class="small">
                          {{moment(notif.created_at).fromNow()}}
                          
                        </div>
                      </div>
                      <MDBModal
                      id="Discussion"
                      tabindex="-1"
                      labelledby="Discussion"
                      v-model="modalOpened"
                      centered
                      scrollable
                      size="xl"
                    >
                      <MDBModalBody>
                        <MDBRow class="p-5">
                          <MDBCol md="12">
                            <MDBRow>
                              <h5>{{ modalData.title }}</h5>
                            </MDBRow>
                            <MDBRow>
                              <p class="mt-1">
                                {{ modalData.content }}
                              </p>
                            </MDBRow>
                            <MDBRow>
                              <MDBCol class="mb-3">
                                <span class="me-2">
                                  <MDBIcon icon="comment" iconStyle="fas" />
                                  Posted By {{ modalData.id_user.name }}
                                </span>
                                <span class="me-2">
                                  <MDBIcon icon="comment" iconStyle="fas" />
                                  3 Comments
                                </span>
                                <span class="me-2">
                                  <MDBIcon icon="clock" iconStyle="fas" />
                                  {{ moment(modalData.created_at).fromNow() }}
                                </span>
                                <span class="me-2" style="cursor: pointer">
                                  <MDBIcon icon="share" iconStyle="fas" />
                                  Share
                                </span>
                                <template v-if="modalData.id_user._id == user.user?._id">
                                <a
                                  @click="
                                    confirmDeleteDiscussion(modalData._id)
                                  "
                                  class="m-1"
                                  role="button"
                                  style="color: rgb(255, 0, 0)"
                                >
                                  <MDBIcon
                                    iconStyle="fas"
                                    icon="trash"
                                    size="xs"
                                  ></MDBIcon>
                                  Delete
                                </a>
                                </template>
                              </MDBCol>
                            </MDBRow>
                            <MDBRow
                              class="needs-validation"
                              tag="form"
                              novalidate
                              @submit.prevent="checkFormComment"
                            >
                              <MDBTextarea
                                label="What are your thoughts?"
                                rows="10"
                                class="my-2"
                                v-model="comment_content"
                                invalidFeedback="Please provide comment content"
                                validFeedback="Looks good!"
                                required
                              />
                              <MDBBtn
                                type="submit"
                                style="
                                  background-color: white;
                                  color: black;
                                  border: 1px solid black;
                                  width: 100px;
                                  height: 35px;
                                "
                                class="mt-2 align-content-end"
                              >
                                Submit
                              </MDBBtn>
                              <MDBCol md="3" class="text-end">
                    <MDBSelect v-model:options="sortType" v-model:selected="selectedSort" />
                  </MDBCol>
                            </MDBRow>
                            
                            <hr />
                            <MDBRow
                              v-for="comment in commentComputed"
                              :key="comment._id"
                            >
                              <MDBCol
                                md="1"
                                class="d-flex justify-content-end mb-3"
                              >
                                <img
                                  :src="comment.id_user.profilePicture"
                                  alt="avatar"
                                  width="60"
                                  height="60"
                                />
                              </MDBCol>
                              <MDBCol md="2">
                                <MDBRow>
                                  <p class="mb-0 ms-2" style="font-weight: 500">
                                    {{ comment.id_user.name }}
                                  </p>
                                </MDBRow>
                                <MDBRow>
                                  <p
                                    class="mb-0 ms-2"
                                    style="font-weight: 400; font-size: small"
                                  >
                                    {{ moment(comment.created_at).fromNow() }}
                                  </p>
                                </MDBRow>
                              </MDBCol>
                              <MDBRow>
                                <MDBCol>
                                  <p>
                                    {{ comment.content }}
                                  </p>
                                </MDBCol>
                                <MDBRow class="d-flex justify-content-evenly">
                                  <MDBCol>
                                    <span class="me-2" style="cursor: pointer">
                                      <MDBIcon
                                        icon="thumbs-up"
                                        iconStyle="fas"
                                      />
                                      20
                                    </span>
                                    <template v-if="comment.id_user._id == user.user?._id">
                                    <a
                                      @click="
                                        confirmDeleteComment(
                                          modalData._id,
                                          comment._id
                                        )
                                      "
                                      class="m-1"
                                      role="button"
                                      style="color: rgb(255, 0, 0)"
                                    >
                                      <MDBIcon
                                        iconStyle="fas"
                                        icon="trash"
                                        size="xs"
                                      ></MDBIcon>
                                      Delete
                                    </a>
                                    </template>
                                  </MDBCol>
                                </MDBRow>
                              </MDBRow>
                            </MDBRow>
                            <MDBBtn
                        @click="listToShow +=5"
                            style="
                              background-color: white;
                              color: primary;
                              border: 1px solid black;
                              width: 400px;
                              height: 40px;
                            "
                            class="mt-2 align-content-end"
                          >
                            Load More Comments
                          </MDBBtn>
                          </MDBCol>
                        </MDBRow>
                      </MDBModalBody>
                    </MDBModal>
                      <!-- Default dropstart button -->
                      
                      <!-- <span class="ml-auto mb-auto">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-light btn-sm rounded"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-delete"></i> Delete
                            </button>
                            <button class="dropdown-item" type="button">
                              <i class="mdi mdi-close"></i> Turn Off
                            </button>
                          </div>
                        </div>
                        <br />
                        <div class="text-right text-muted pt-1">3d</div>
                      </span> -->
                    </div>
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="4">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle class="fs-3">Your Plan</MDBCardTitle>
            <MDBRow>
              <div
                class="col-md d-flex align-items-center"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> Plan 1 </MDBCardText>
              </div>
              <div class="col-md d-flex justify-content-end">
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
              <div
                class="d-flex justify-content-between"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> Plan 1 </MDBCardText>
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
              <div
                class="d-flex justify-content-between"
                style="margin: 1vh auto"
              >
                <MDBCardText class="fs-5"> Plan 1 </MDBCardText>
                <MDBBtn tag="a" href="#!" color="link" outline="primary"
                  >Details
                </MDBBtn>
              </div>
            </MDBRow>
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
          <a  @click="prev">&laquo;</a>
          <a href="#" class="active">1</a>
          <!-- <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a> -->
          <a @click="nextPagination()">&raquo;</a>
        </div>
      </div>
        </MDBCard>
      </MDBCol>
      <MDBCol col="8">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle class="fs-3">Your Moment</MDBCardTitle>
            <MDBRow>
              <div v-for="data_moment in moment_list" :key="data_moment._id" class="col-md-6" style="margin: 2vh auto">
                <MDBCard style="cursor: pointer" class="h-100" @click="openModalMoment(data_moment)">
                  <MDBCardImg
                    :src="data_moment.photo"
                    top
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{{data_moment.title}}<small class="text-end"> {{moment(data_moment.created_at).fromNow()}}</small></MDBCardTitle>
                    <MDBBtn size="sm" outline="dark" v-for="wisata in data_moment.id_wisata" :key="wisata._id">
                                  <router-link :to="{name : 'WisataDetails', params :{ slug :  wisata.slug} }">
                                  {{wisata.nama}}
                                  </router-link>
                                </MDBBtn>
                  </MDBCardBody>
                  
                </MDBCard>
              </div>
              
            
            </MDBRow>
          </MDBCardBody>
          <div class="center" style="margin: 4vh">
        <div class="pagination">
          <a  @click="prev">&laquo;</a>
          <a href="#" class="active">1</a>
          <!-- <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a> -->
          <a @click="nextPagination()">&raquo;</a>
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
                            <p>
                              Tanggal : {{modalDataMoment.date}}
                            </p>
                            <p>
                              waktu : {{modalDataMoment.time}}
                            </p>
                             <MDBBtn size="sm" outline="dark" v-for="wisata in modalDataMoment.id_wisata" :key="wisata._id">
                                  <router-link :to="{name : 'WisataDetails', params :{ slug :  wisata.slug} }">
                                  <p style="margin-bottom: 4px">{{wisata.nama}}</p>
                                  </router-link>
                                </MDBBtn>
                            <hr />
                            <MDBCol>
                              <p>
                                <a role="button"  style="color: rgb(0, 0, 255)" @click="likeMoment(modalDataMoment._id)"><MDBIcon icon="thumbs-up" iconStyle="fas" />Like ({{modalDataMoment.thumbs_up.length}}) </a>
                                <a role="button" @click="deleteMoment(modalDataMoment._id)"><MDBIcon icon="trash" iconStyle="fas" />Delete </a>
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
  MDBSelect,
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
    MDBSelect
  
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
    const app = getCurrentInstance();
    const store = useStore();
    const notification = ref([])
    const modalOpened = ref(false)
    const listToShow = ref(5);
    const modalData = ref()
    const modalDataMoment = ref()
    const selectedSort = ref();
    const moment_list = ref();
    const modalMoment = ref(false)
    const user = computed(() => store.getters.user);
    const userProfile = ref({
      name: null,
      tglLahir : 'Data not available',
      location : 'Data not available',
    });
    let uri_profile =
      process.env.VUE_APP_ROOT_API + "users/profile/" + route.params.username;
    let uri_moment = 
    process.env.VUE_APP_ROOT_API + "moment/user/" + route.params.username;
    app.appContext.config.globalProperties.$http.get(uri_moment).then((response) => {
      moment_list.value = response.data
    })
    app.appContext.config.globalProperties.$http
      .get(uri_profile)
      .then((response) => {
        userProfile.value = response.data;
        document.title = userProfile.value.name + '- Mytour'
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
      app.appContext.config.globalProperties.$http.get(uri_notification,config).then((response) => {
        notification.value = response.data
      })
    }
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
    function openModal(data,content) {
      if(content == 'comment'){
        let uri_discussion =
      process.env.VUE_APP_ROOT_API +
      "wisata/" +
      route.params.slug +
      "/discussion/" + data
      app.appContext.config.globalProperties.$http.get(uri_discussion).then((response) => {
        modalData.value = response.data
        listToShow.value = 5
        modalOpened.value = true
      })
      
      }
    

    
      // get_comment(comment_list, modalData.value)
    }
    function openModalMoment(data){
      modalDataMoment.value = data
      modalMoment.value = true
    }
    function openModelMomentByID(id){
    let uri_moment = process.env.VUE_APP_ROOT_API + "moment/" + id
    app.appContext.config.globalProperties.$http.get(uri_moment).then((response)=> {
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
      app.appContext.config.globalProperties.$http
        .post(
          uri_comment,
          { content: comment_content, id_discussion: data._id },
          config
        )
        .then((response) => {
          console.log(response.status)
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
      return app.appContext.config.globalProperties.$http
        .get(uri_comment)
        .then((response) => {
          data.value = response.data
        })
        .catch((err) => {
          console.log(err.status)
        })
    }
    function get_moment(){
      return app.appContext.config.globalProperties.$http.get(uri_moment).then((response) => {
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
      app.appContext.config.globalProperties.$http.delete(uri,config).then((response) => {
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
      app.appContext.config.globalProperties.$http.get(uri_moment).then((response) => {
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
         app.appContext.config.globalProperties.$http.post(uri_thumbsMoment,config,config).then(()=> {
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
          app.appContext.config.globalProperties.$http
            .delete(uri_singleMoment, config)
            .then(() => {
              modalMoment.value = false
              Swal.fire("Moment Deleted", "", "success")
               get_moment()
            })
         
        }
      })
      
    }

    return {
      dropdown21,
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
      openModelMomentByID
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