<template>
  <Navbar />
  <MDBContainer style="margin: 5vh auto">
    <MDBRow>
      <MDBCol col="12">
        <MDBCard>
          <MDBContainer>
            <MDBContainer>
              <MDBCardBody>
                <MDBCardTitle class="fs-1" style="margin: 2vh auto">
                  Cara Penggunaan Fitur MyTour
                </MDBCardTitle>
                <MDBTabs
                  v-model="activeTabId2"
                  vertical
                  style="margin: 5vh auto"
                >
                  <!-- Tabs navs -->
                  <MDBTabNav fill tabsClasses="mb-3">
                    <MDBTabItem
                      tabId="ex2-1"
                      href="ex2-1"
                      style="margin-bottom: 4vh"
                      >Akun</MDBTabItem
                    >
                    <MDBTabItem
                      tabId="ex2-2"
                      href="ex2-2"
                      style="margin-bottom: 4vh"
                      >Wisata</MDBTabItem
                    >
                    <MDBTabItem
                      tabId="ex2-3"
                      href="ex2-3"
                      style="margin-bottom: 4vh"
                      >Planner</MDBTabItem
                    >
                    <MDBTabItem
                      tabId="ex2-4"
                      href="ex2-4"
                      style="margin-bottom: 4vh"
                      >Moment</MDBTabItem
                    >
                    <MDBTabItem
                      tabId="ex2-5"
                      href="ex2-5"
                      style="margin-bottom: 4vh"
                      >Diskusi</MDBTabItem
                    >
                    <MDBTabItem
                      tabId="ex2-6"
                      href="ex2-6"
                      style="margin-bottom: 4vh"
                      >Favorite</MDBTabItem
                    >
                  </MDBTabNav>
                  <MDBTabContent>
                    <MDBTabPane tabId="ex2-1">
                      <MDBCard
                        text="white"
                        style="background-color: rgb(50, 224, 196)"
                        class="mb-3"
                      >
                        <MDBCardBody>
                          <MDBCardTitle>
                            <p class="fs-1">
                              Cara Membuat Akun di website MyTour!
                            </p></MDBCardTitle
                          >
                          <MDBCardText>
                            <p class="fs-3">1. Akses website MyTour.</p>
                            <p class="fs-3">
                              2. Klik gambar kanan atas di bagian navbar, lalu
                              pilih "Register".
                            </p>
                            <p class="fs-3">
                              3. Isi data diri, dan centang "I agree to the
                              Terms and Conditions".
                            </p>
                            <p class="fs-3">4. Akun anda berhasil dibuat!</p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBTabPane>
                    <MDBTabPane tabId="ex2-2">
                      <MDBCard
                        text="white"
                        style="background-color: rgb(50, 224, 196)"
                        class="mb-3"
                      >
                        <MDBCardBody>
                          <MDBCardTitle>
                            <p class="fs-1">
                              Cara Mencari Tempat Wisata di website MyTour!
                            </p></MDBCardTitle
                          >
                          <MDBCardText>
                            <p class="fs-3">1. Akses website MyTour.</p>
                            <p class="fs-3">
                              2. Untuk mencari tempat wisata, anda bisa langsung
                              mencari melalui halaman "Home" atau bisa membuka
                              halaman "Explore".
                            </p>
                            <p class="fs-3">
                              3. Untuk membuka halaman "Explore", anda bisa
                              memilih "Explore" dari menu navbar.
                            </p>
                            <p class="fs-3">
                              4. Disarankan untuk mencari tempat wisata dari
                              halaman "Explore" untuk pengalaman yang lebih
                              baik.
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBTabPane>
                    <MDBTabPane tabId="ex2-3">
                      <MDBCard
                        text="white"
                        style="background-color: rgb(50, 224, 196)"
                        class="mb-3"
                      >
                        <MDBCardBody>
                          <MDBCardTitle>
                            <p class="fs-1">
                              Cara Menggunakan Planner di website MyTour!
                            </p></MDBCardTitle
                          >
                          <MDBCardText>
                            <p class="fs-3">1. Akses website MyTour.</p>
                            <p class="fs-3">
                              2. Untuk menggunakan fitur "Planner", anda harus
                              terlebih dahulu melakukan "Registrasi" atau
                              "Login".
                            </p>
                            <p class="fs-3">
                              3. Untuk membuka halaman "Planner", anda bisa
                              memilih "Planner" dari menu navbar.
                            </p>
                            <p class="fs-3">
                              4. Pada halaman "Planner", anda bisa menambahkan
                              rencana rencana liburan anda dengan menekan button
                              yang ada pada halaman tersebut. Contohnya adalah
                              liburan pertama yaitu rencana jalan - jalan
                              dibali, lalu liburan yang kedua yaitu jalan -
                              jalan dijogja.
                            </p>
                            <p class="fs-3">
                              5. Setelah Nama dari judul liburan anda berhasil
                              di tambahkan, anda bisa menekan logo mata pada
                              menu action untuk membuka detail dari rencana
                              liburan anda.
                            </p>
                            <p class="fs-3">
                              6. Lalu akan terbuka halaman baru yang bernama
                              "Planner Details". Disini anda bisa mengatur
                              tempat - tempat wisata apa saja yang ingin anda
                              kunjungi saat rencana liburan anda.
                            </p>
                            <p class="fs-3">
                              7. Anda bisa menambahkan nama dari tempat wisata,
                              jam di tempat wisata, dan tanggal. Untuk
                              menambahkan tempat wisata anda bisa menekan button
                              yang ada pada halaman tersebut.
                            </p>
                            <p class="fs-3">
                              8. Selamat anda sudah berhasil mengatur jadwal
                              dari liburan anda!
                            </p>
                            <p class="fs-3">
                              *ps: Pada bagian action ada 3 jenis icon. Pertama
                              mata yang memiliki arti "See Details", kedua yaitu
                              pensil yang memiliki arti "Edit", dan terakhir
                              yaitu tempat sampah yang memiliki arti "Detele".
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBTabPane>
                    <MDBTabPane tabId="ex2-4">
                      <MDBCard
                        text="white"
                        style="background-color: rgb(50, 224, 196)"
                        class="mb-3"
                      >
                        <MDBCardBody>
                          <MDBCardTitle>
                            <p class="fs-1">
                              Cara Menggunakan Moment di website MyTour!
                            </p></MDBCardTitle
                          >
                          <MDBCardText>
                            <p class="fs-3">1. Akses website MyTour.</p>
                            <p class="fs-3">
                              2. Untuk menggunakan fitur "Moment", anda harus
                              terlebih dahulu melakukan "Registrasi" atau
                              "Login".
                            </p>
                            <p class="fs-3">
                              3. Untuk menambahkan "Moment", anda harus membuka
                              halaman "Profile" terlebih dahulu dari foto anda
                              pada menu navbar.
                            </p>
                            <p class="fs-3">
                              4. Setelah membuka halaman "Profile", disana ada
                              button untuk menambahkan atau upload moment anda.
                            </p>
                            <p class="fs-3">
                              5. Isi data data yang dibutuhkan, lalu tekan
                              button upload moment.
                            </p>
                            <p class="fs-3">
                              6. Untuk melihat list dari moment moment anda,
                              anda dapat melihat pada halaman "Profile".
                            </p>
                            <p class="fs-3">
                              7. Anda juga bisa melihat "Moment" orang lain dari
                              halaman tempat wisata yang anda lihat.
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBTabPane>
                    <MDBTabPane tabId="ex2-5">
                      <MDBCard
                        text="white"
                        style="background-color: rgb(50, 224, 196)"
                        class="mb-3"
                      >
                        <MDBCardBody>
                          <MDBCardTitle>
                            <p class="fs-1">
                              Cara Menggunakan Discussion di website MyTour!
                            </p></MDBCardTitle
                          >
                          <MDBCardText>
                            <p class="fs-3">1. Akses website MyTour.</p>
                            <p class="fs-3">
                              2. Untuk menggunakan fitur "Discussion", anda
                              harus terlebih dahulu melakukan "Registrasi" atau
                              "Login".
                            </p>
                            <p class="fs-3">
                              3. Untuk menambahkan "Discussion", anda harus
                              membuka halaman tempat wisata yang anda inginkan
                              terlebih dahulu.
                            </p>
                            <p class="fs-3">
                              4. Setelah membuka halaman wisata, disana ada tab
                              "Discussion" untuk melihat diskusi anda dan juga
                              orang lain. Untuk menambahkan "Discussion" anda
                              dapat menekan button yang ada pada tab tersebut.
                            </p>
                            <p class="fs-3">
                              5. Isi data data yang dibutuhkan, lalu tekan
                              button post discussion.
                            </p>
                            <p class="fs-3">
                              6. Selamat anda berhasil membuat diskusi mengenai
                              suatu tempat wisata!
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBTabPane>
                    <MDBTabPane tabId="ex2-6">
                      <MDBCard
                        text="white"
                        style="background-color: rgb(50, 224, 196)"
                        class="mb-3"
                      >
                        <MDBCardBody>
                          <MDBCardTitle>
                            <p class="fs-1">
                              Cara Menggunakan Favorite di website MyTour!
                            </p></MDBCardTitle
                          >
                          <MDBCardText>
                            <p class="fs-3">1. Akses website MyTour.</p>
                            <p class="fs-3">
                              2. Untuk menggunakan fitur "Moment", anda harus
                              terlebih dahulu melakukan "Registrasi" atau
                              "Login".
                            </p>
                            <p class="fs-3">
                              3. Untuk menambahkan "Favorite", anda harus
                              membuka halaman tempat wisata yang anda inginkan
                              terlebih dahulu.
                            </p>
                            <p class="fs-3">
                              4. Setelah membuka halaman wisata, disana ada
                              button "Favorite" untuk menambahkan tempat wisata
                              tersebut ke favorite anda.
                            </p>
                            <p class="fs-3">
                              5. Untuk Menghapus "Favorite", anda bisa menekan
                              button yang sama seperti untuk menambahkan
                              "Favorite".
                            </p>
                            <p class="fs-3">
                              6. Selamat anda berhasil menambahkan suatu tempat
                              wisata menjadi favorite anda!
                            </p>
                            <p class="fs-3">
                              7. Untuk melihat list favorite, anda dapat
                              menggunakan "Filter" pada halaman "Explore" untuk
                              menunjukan tempat wisata yang sudah anda tambahkan
                              menjadi favorite.
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBTabs>
              </MDBCardBody>
            </MDBContainer>
          </MDBContainer>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbarcopy.vue"
import Footer from "../components/Footer copy.vue"
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane
} from "mdb-vue-ui-kit"
import { ref } from "vue"
export default {
  components: {
    Navbar,
    Footer,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBContainer,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane
  },
  setup() {
    const activeTabId2 = ref("ex2-1")

    return {
      activeTabId2
    }
  }
}
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
</style>