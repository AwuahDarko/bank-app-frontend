<template>
<section>
    <snackbar ref="snackbar" baseSize="50px" :holdTime="5000" :multiple="true" :position="position" />
    <header>
        <div class="hamburger bk-row bk-space-btn bk-v-align-center">
            <div>
                <Slide>
                    <div class="search-container mb-2">
                        <i class="fa fa-search mt-1 mr-1"></i>
                        <input type="text" name="search-box" class="search" id="search-box" placeholder="Search" />
                    </div>
                    <a class="hamburger-menu-list" href="#">
                        <span>Checking & Savings</span>
                    </a>
                    <a class="hamburger-menu-list" href="#">
                        <span>Credit Cards</span>
                    </a>
                    <a class="hamburger-menu-list" href="#">
                        <span>Home Loans</span>
                    </a>
                    <a class="hamburger-menu-list" href="#">
                        <span>Car Loans</span>
                    </a>
                    <a class="hamburger-menu-list" href="#">
                        <span>Investments</span>
                    </a>
                    <a class="hamburger-menu-list" href="#">
                        <span>Investments</span>
                    </a>
                    <router-link to="/register-one" class="hamburger-menu-list" href="#">
                        <span>Open an Account</span>
                    </router-link>
                    <a class="hamburger-menu-list" href="#">
                        <span>Sign In</span>
                    </a>
                </Slide>
            </div>
            <div class="logo">LOGO</div>
            <div>Sign In</div>
        </div>
        <section class="header">
            <div class="first-line">
                <router-link to="/about" class="sm-mar">
                    SCHEDULE A MEEETING
                </router-link>
                <dropdown-menu v-model="show" :right="right" :hover="hover" :interactive="interactive">
                    <a class="dropdown-toggle"> CUSTOMER SERVICE </a>
                    <div slot="dropdown">
                        <a class="dropdown-item" href="#">Get help with your account</a>
                        <a class="dropdown-item" href="#">Find ATM or branch</a>
                        <a class="dropdown-item" href="#">Dispute a charge</a>
                        <a class="dropdown-item" href="#">Replace lost/damaged card</a>
                        <a class="dropdown-item" href="#">Make a payment</a>
                        <a class="dropdown-item" href="#">Reset username/password</a>
                    </div>
                </dropdown-menu>
            </div>
            <div class="second-line bk-row mt-4">
                <div class="logo">LOGO</div>
                <nav class="bk-row bk-v-align-center bk-gap-2">
                    <a class="nav-link" href="#">Checking & Savings</a>
                    <a class="nav-link" href="#">Credit Cards</a>
                    <a class="nav-link" href="#"> Home Loans </a>
                    <a class="nav-link" href="#">Car Loans</a>
                    <a class="nav-link" href="#">Investments</a>
                </nav>
                <i class="fa fa-search icon mt-2"></i>
            </div>
        </section>
    </header>

    <section class="showcase bk-row bk-space-evenly bk-gap-2">
        <div class="enjoy-container">
            <p class="enjoy">Enjoy</p>
            <p class="cash"><span class="currency">$</span> 200</p>
        </div>
        <div class="info-container bk-col bk-gap-2 bk-v-align-centeer">
            <h2 class="bk-white-text">New Chase Customers:</h2>
            <p class="bk-white-text showcase-sm-txt">
                Open a new Chase Total Checking® account and set up direct deposit.
            </p>
            <button class="btn btn-success" @click="goToRegister">Open an account</button>
        </div>
        <div class="auth-container">
            <SignIn :is_logged_in="is_logged_in" v-on:onMessage="showSnackbar" />
        </div>
    </section>

    <section class="action-area">
        <h3 class="text-center large-label">Choose what's right for you</h3>
        <div class="bk-row bk-align-center">
            <button @click="slidePrev" class="btn no-outline">
                <i class="fa fa-angle-left arrow-2"></i>
            </button>
            <div style="width: 80%">
                <VueSlickCarousel v-bind="slide_settings" ref="carousel" :arrows="false" :dots="true" :variableWidth="false">
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-meetup ac-isons"></i>
                        <p class="text-blue slide-item">Schedule a meeting</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-tachometer ac-isons"></i>
                        <p class="text-blue slide-item">Free credit score</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-briefcase ac-isons"></i>
                        <p class="text-blue slide-item">Business</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-credit-card ac-isons"></i>
                        <p class="text-blue slide-item">Credit Cards</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-file-text-o ac-isons"></i>
                        <p class="text-blue slide-item">Checking</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-american-sign-language-interpreting ac-isons"></i>
                        <p class="text-blue slide-item">Savings</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-home ac-isons"></i>
                        <p class="text-blue slide-item">Home Loans</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-car ac-isons"></i>
                        <p class="text-blue slide-item">Car Loans</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-bar-chart ac-isons"></i>
                        <p class="text-blue slide-item">Investments</p>
                    </a>
                    <a href="#" class="bk-col bk-v-align-center bk-align-center">
                        <i class="fa fa-building-o ac-isons"></i>
                        <p class="text-blue slide-item">Commercial</p>
                    </a>
                </VueSlickCarousel>
            </div>
            <button @click="slideNext" class="no-outline btn">
                <i class="fa fa-angle-right arrow-2"></i>
            </button>
        </div>
        <div class="row mt-5 p-4">
            <div class="col-md-4">
                <div class="card p-4">
                    <div class="bk-row">
                        <div class="left-item text-blue">
                            Chase Freedom <br />
                            Unlimited®
                        </div>
                        <div class="right-item">
                            <i class="fa fa-credit-card fa-3x text-gray"></i>
                        </div>
                    </div>
                    <h6 class="text-center mt-2">Enjoy $25 on us</h6>
                    <p class="text-center detail-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, hic.
                    </p>
                    <button class="btn btn-primary">Open an account</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-4">
                    <div class="bk-row">
                        <div class="left-item text-blue">
                            Chase Secure <br />
                            Banking <sup>SM</sup>
                        </div>
                        <div class="right-item">
                            <i class="fa fa-credit-card fa-3x text-gray"></i>
                        </div>
                    </div>
                    <h6 class="text-center mt-2">Enjoy $25 on us</h6>
                    <p class="text-center detail-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, hic.
                    </p>
                    <button class="btn btn-primary">Open an account</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-4">
                    <div class="bk-row">
                        <div class="left-item text-blue">
                            Important <br />
                            Information
                        </div>
                        <div class="right-item">
                            <i class="fa fa-credit-card fa-3x text-gray"></i>
                        </div>
                    </div>
                    <h6 class="text-center mt-2">Enjoy $25 on us</h6>
                    <p class="text-center detail-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos, hic.
                    </p>
                    <button class="btn btn-primary">Open an account</button>
                </div>
            </div>
        </div>
    </section>
    <section class="showcase-2">
        <div class="overlay"></div>
        <div class="show-info bk-col bk-v-align-center">
            <p class="text-white text-center consult">Get free consultations</p>
            <h4 class="text-white on-text">
                Checking your loan options does not affect your credit score
            </h4>
            <button class="btn btn-success pt-2 pb-2 pl-4 pr-4">APPLY NOW</button>
        </div>
    </section>
    <section class="showcase-3">
        <h2 class="text-center large-label">Why Choose SCBC INTERNATIONAL?</h2>
        <p class="text-center small-text">
            Not only do we make banking easy, We provide solutions that would
            perfectly siute your needs
        </p>
        <div class="bk-row img-con bk-gap-2 mt-4 mb-4 wrap">
            <div class="image-box">
                <div class="image-label">No Hidden Fees</div>
            </div>
            <div class="image-box">
                <div class="image-label">Less Documents</div>
            </div>
            <div class="image-box">
                <div class="image-label">Specialist Team</div>
            </div>
        </div>
    </section>
    <section class="showcase-3 light-bg">
        <h2 class="text-center large-label">Simple Loan Process</h2>
        <p class="text-center small-text mb-5">
            Our Support team is always ready to help you solve any banking and
            financial issues you may have.
        </p>
        <div class="bk-row img-con bk-gap-2 mt-4 mb-4 wrap bk-align-center">
            <div class="bk-col bk-v-align-center">
                <div class="avatar">
                    <i class="fa fa-pencil-square-o fa-2x"></i>
                </div>
                <h6 class="mt-2">Choose Loan Amount</h6>
                <p class="light-color text-center">
                    Choose your loan amount and terms to use loan
                </p>
                <div class="small-avatar">1</div>
            </div>
            <div class="bk-col bk-v-align-center">
                <div class="avatar">
                    <i class="fa fa-address-card-o ic fa-2x"></i>
                </div>
                <h6 class="mt-2">Provide Document</h6>
                <p class="light-color text-center">
                    Need to provide some basic document to verification
                </p>
                <div class="small-avatar">2</div>
            </div>
            <div class="bk-col bk-v-align-center">
                <div class="avatar">
                    <i class="fa fa-check-circle-o fa-2x"></i>
                </div>
                <h6 class="mt-2">Approved Loan</h6>
                <p class="light-color text-center">
                    Our loan specialist ask fews question and verify documents.
                </p>
                <div class="small-avatar">3</div>
            </div>
            <div class="bk-col bk-v-align-center">
                <div class="avatar">
                    <i class="fa fa-money ic fa-2x"></i>
                </div>
                <h6 class="mt-2">Get your Money</h6>
                <p class="light-color text-center">
                    Once loan is approved you get loan amount credited.
                </p>
                <div class="small-avatar">4</div>
            </div>
        </div>
    </section>
    <section class="blue-black-bg">
        <div class="bk-row bk-gap-2">
            <div class="pl-4 w ptt-5 pr-4">
                <h3 class="text-white text-center">Loans Calculator</h3>
                <p class="text-white text-center">
                    Apply for a loan, and you will be able to benefit from a decent and
                    comfortable loan.
                </p>
                <form action="" class="pb-5">
                    <div class="bk-row bk-gap-1">
                        <div class="bk-col w-50">
                            <label class="text-white" for="one">I'd like to Borrow</label>
                            <input type="number" name="one" class="text-box" id="one" />
                        </div>
                        <div class="bk-col w-50">
                            <label class="text-white" for="one">I want to pay</label>
                            <input type="number" class="text-box" name="two" id="two" />
                        </div>
                    </div>
                    <div class="bk-col mt-3">
                        <label class="text-white" for="three">Every 2 Weeks</label>
                        <input type="number" class="text-box" name="three" id="three" />
                    </div>
                    <div class="bk-row bk-align-center">
                        <input type="submit" class="btn btn-success mt-4" value="APPLY NOW" />
                    </div>
                </form>
            </div>
            <img class="glenn" src="../assets/images/glenn.jpg" alt="image" />
        </div>
    </section>
    <section class="showcase-3">
        <h2 class="text-center large-label">Testimonials</h2>
        <p class="text-center small-text mb-5">
            Hear what our Customers have to say
        </p>
        <div class="testimonials">
            <VueSlickCarousel :autoplay="true" :arrows="false" :dots="true" :variableWidth="false" v-bind="slide_settings">
                <div>
                    <div class="bk-row bk-gap-1 wrap">
                        <img class="box-image" src="../assets/images/glenn.jpg" alt="testimony" />
                        <div class="bk-col">
                            <h5 class="h-title">Nia Jax</h5>
                            <p class="h-sub-title">IT Manager</p>
                            <p class="h-text mt-3">
                                “SCBC INTERNATIONAL dеlіvеrеd еxасtlу whаt thеу offered. Nоt
                                only dіd thеу оffеr uѕ a better rate.”
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bk-row bk-gap-1 wrap">
                        <img class="box-image" src="../assets/images/glenn.jpg" alt="testimony" />
                        <div class="bk-col">
                            <h5 class="h-title">Nia Jax</h5>
                            <p class="h-sub-title">IT Manager</p>
                            <p class="h-text mt-3">
                                “SCBC INTERNATIONAL dеlіvеrеd еxасtlу whаt thеу offered. Nоt
                                only dіd thеу оffеr uѕ a better rate.”
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bk-row bk-gap-1 wrap">
                        <img class="box-image" src="../assets/images/glenn.jpg" alt="testimony" />
                        <div class="bk-col">
                            <h5 class="h-title">Nia Jax</h5>
                            <p class="h-sub-title">IT Manager</p>
                            <p class="h-text mt-3">
                                “SCBC INTERNATIONAL dеlіvеrеd еxасtlу whаt thеу offered. Nоt
                                only dіd thеу оffеr uѕ a better rate.”
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bk-row bk-gap-1 wrap">
                        <img class="box-image" src="../assets/images/glenn.jpg" alt="testimony" />
                        <div class="bk-col">
                            <h5 class="h-title">Nia Jax</h5>
                            <p class="h-sub-title">IT Manager</p>
                            <p class="h-text mt-3">
                                “SCBC INTERNATIONAL dеlіvеrеd еxасtlу whаt thеу offered. Nоt
                                only dіd thеу оffеr uѕ a better rate.”
                            </p>
                        </div>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
    </section>
    <section class="showcase-3 light-bg">
        <div class="bk-row wrap bk-gap-3 wrap">
            <img class="map" src="../assets/images/map.png" alt="map" />
            <div class="bk-col vvv">
                <h5 class="big-text text-center">Worldwide Network</h5>
                <p class="light-color small-text text-center">
                    We understand that we аrе ореrаtіng in a dynamic environment аnd
                    hаvе evolved our strategy tо maximize the opportunity іn аn
                    іnсrеаѕіnglу digital global world. Wіth our full wоrldwіdе network,
                    wе are еvоlvіng tо mееt thе changing nееdѕ оf millions of сuѕtоmеrѕ
                    асrоѕѕ different borders.
                </p>
                <button class="btn btn-primary w-80">
                    <i class="fa fa-reply-all"></i> CONTACT US
                </button>
            </div>
        </div>
    </section>
    <footer class="blue-black-bg showcase-3">
        <div class="row">
            <div class="col-md-4">
                <h1 class="text-white">LOGO</h1>
                <p class="light-color">
                    SCBC INTERNATIONAL is the leading financial establishment providing
                    high-quality international banking services.Our success is
                    attributed to our loyal customers and to the talent and dedication
                    of our professional and skilled employees. We are always ready to
                    partner with you by offering full financial support to our clients
                    worldwide
                </p>
                <p class="text-white">
                    Any Queries:
                    <a class="text-success" href="mailto:info@scbc-intl.com">info@scbc-intl.com</a>
                </p>
            </div>
            <div class="col-md-4">
                <div class="bk-col bk-gap-1 mob-margin">
                    <h3 class="text-white">Solutions</h3>
                    <a class="text-white" href="#">
                        <i class="fa fa-angle-right"></i> Online Banking
                    </a>
                    <a class="text-white" href="#">
                        <i class="fa fa-angle-right"></i> Car Loan
                    </a>
                    <a class="text-white" href="#">
                        <i class="fa fa-angle-right"></i> Home Loan
                    </a>
                    <a class="text-white" href="#">
                        <i class="fa fa-angle-right"></i> Education Loan
                    </a>
                    <a class="text-white" href="#">
                        <i class="fa fa-angle-right"></i> Business Loan
                    </a>
                    <a class="text-white" href="#">
                        <i class="fa fa-angle-right"></i> Personal Loan
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="bk-col mob-margin">
                    <h3 class="text-white">Newsletter</h3>
                    <p class="light-color">
                        Subscribe to our newsletter and get latest news related to
                        Banking,credit cards,inter rates.
                    </p>
                    <form action="" class="bk-col">
                        <input type="text" name="email-box" id="email-box" class="text-box mb-3" placeholder="Email address" />
                        <input type="submit" class="btn btn-success" value="SUBSCRIBE" />
                    </form>
                </div>
            </div>
        </div>
        <!-- <div class="copy-right-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-left">
              <div class="copyright-text">
                <p class="text-white">
                  <i class="fa fa-copyright"></i> 2021 SCBC INTERNATIONAL Bank.
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div class="col-md-6 text-right">
              <div class="footer-nave">
                <a href="#"><i class="fa fa-facebook-square"></i></a>
                <a href="#"><i class="fa fa-twitter-square"></i></a>
                <a href="#"><i class="fa fa-linkedin-square"></i></a>
                <a href="#"><i class="fa fa-pinterest-square"></i></a>
                <a href="#"><i class="fa fa-vimeo-square"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </footer>
</section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import DropdownMenu from "@innologica/vue-dropdown-menu";
import {
    Slide
} from "vue-burger-menu";
import VueSlickCarousel from "vue-slick-carousel";
import {
    network
} from "../utils/network";
import SignIn from "../components/SignIn.vue";
import Snackbar from "vuejs-snackbar";
import { mapActions } from "vuex";

// setTitleMethod('title')
//  vue.$refs.snackbar.error('Error function triggered')
// vue.$refs.snackbar.warn('Warn function triggered')
// vue.$refs.snackbar.info('Info function triggered')
// vue.$refs.snackbar.open('Open function triggered')

export default {
    name: "Home",
    title: "Welcome",
    components: {
        DropdownMenu,
        Slide,
        VueSlickCarousel,
        SignIn,
        snackbar: Snackbar,
    },
    data() {
        return {
            show: false,
            right: false,
            hover: true,
            interactive: false,
            slide_settings: {
                dots: true,
                focusOnSelect: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                touchThreshold: 5,
            },
            is_logged_in: false,
            position: "top-right",
        };
    },

    methods: {
         ...mapActions(["setUserData"]),

        slideNext() {
            this.$refs.carousel.next();
        },

        slidePrev() {
            this.$refs.carousel.next();
        },

        authenticateUser() {
            const body = {
                token: `Bearer ${localStorage.getItem("token")}`,
            };

            network
                .makeGETRequest("/auth-token", body)
                .then((data) => {
                    if (data.status == 208) {
                        this.is_logged_in = true;
                        this.setUserData(data.data.data);
                    } else {
                        this.is_logged_in = false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.is_logged_in = false;
                });
        },

        showSnackbar(message) {
            this.$refs.snackbar.info(message);
        },

        goToRegister() {
            this.$router.push({
                name: 'RegisterOne'
            });
        }
    },
    created() {},
    mounted() {
        this.authenticateUser();
    },
};
</script>

<style scoped>
.first-line {
    /* height: 30px; */
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 0px 5rem;
}

.header {
    padding: 0 1rem;
    background-color: #f7f8fa;
}

a:hover {
    text-decoration: none;
}

a {
    font-size: 12px;
    color: #6d6c6c;
}

.sm-mar {
    margin-top: 5px;
}

.logo {
    font-family: "Russo One", sans-serif;
    font-size: 30px;
    width: 15%;
    cursor: pointer;
}

.second-line nav {
    width: 83%;
}

.second-line i {
    width: 2%;
}

.icon {
    font-size: 25px;
    color: #666 !important;
    font-weight: 100 !important;
}

.nav-link {
    font-weight: 400;
}

a.nav-link {
    font-size: 14px;
    padding: 0 0 2px 0;
    color: #000000;
}

a.nav-link:hover {
    border-bottom-style: solid;
    border-color: #0b6efd;
    border-bottom-width: 5px;
}

.showcase {
    background-color: #0047a5;
    height: 400px;
    width: 100%;
    padding: 2rem 2rem;
}

.hamburger {
    display: none;
    height: 60px;
    padding-left: 10px;
    padding-right: 30px;
}

.header {
    display: block;
}

.search-container {
    border: 1px solid #fff;
    padding: 2px 10px;
    border-radius: 5px;
    margin-right: 10px;
}

.search {
    background-color: transparent;
    border: none;
    color: #fff;
}

.search::placeholder {
    color: #fff;
    font-size: 15px;
}

.search:focus {
    outline: none;
}

.hamburger-menu-list {
    background-color: #666;
    margin-right: 10px;
    margin-bottom: 2px;
}

.btn-blue {
    background-color: #0b6efd;
    color: #fff;
}

.text-blue {
    color: #0b6efd;
}

.btn-blue:hover {
    background-color: #044299;
}

.enjoy-container {
    align-self: center;
}

.enjoy {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0;
    position: relative;
    bottom: -40px;
    left: 20px;
    flex: 1;
}

.currency {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    position: relative;
    top: -40px;
    left: 20px;
}

.cash {
    font-size: 6.5rem;
    color: #fff;
    padding: 0;
}

.info-container {
    align-self: center;
    flex: 1;
}

.showcase-sm-txt {
    font-size: 1rem;
}

.auth-container {
    flex: 2;
    align-self: center;
}

.enroll-text {
    font-size: 14px;
}

.arrow {
    font-size: 1rem;
}

.arrow-2 {
    font-size: 4.5rem;
    color: #6d6c6c;
}

.no-outline:focus {
    outline: none !important;
}

.action-area {
    padding: 4.5rem 10px;
}

.ac-isons {
    font-size: 3rem;
    color: #6d6c6c;
    width: 100%;
    text-align: center;
}

.slide-item {
    font-size: 1rem;
    text-align: center;
}

.large-label {
    font-weight: 300;
    font-size: 2.2rem;
    color: #474545;
    /* margin-bottom: 20px; */
}

.left-item {
    border-right: 1px solid #a0a0a0;
    border-bottom: 1px solid #a0a0a0;
    width: 50%;
    text-align: right;
    margin-left: 20px;
    padding-right: 10px;
}

.right-item {
    border-left: 1px solid #a0a0a0;
    border-bottom: 1px solid #a0a0a0;
    width: 50%;
    margin-right: 20px;
    padding-left: 10px;
    padding-bottom: 10px;
}

.text-gray {
    color: #a0a0a0;
}

.detail-text {
    font-size: 12px;
}

.showcase-2 {
    position: relative;
    background-image: url(../assets/images/get-bg.jpg);
    -webkit-background-size: cover;
    background-size: cover;
    height: 400px;
    z-index: 1;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #1c242be0;
    z-index: 2;
}

.show-info {
    position: relative;
    z-index: 3;
    width: 50%;
    margin: auto;
    padding-top: 4.5rem;
}

.on-text {
    font-size: 2.5rem;
    text-align: center;
}

.consult {
    font-size: 20px;
}

.showcase-3 {
    padding: 4.5rem 2rem;
}

.small-text {
    font-size: 0.9rem;
}

.image-box {
    height: 250px;
    width: 100%;
    position: relative;
    background-image: url(../assets/images/choose-1.jpg);
    -webkit-background-size: cover;
    background-size: 120%;
    transition: all 1s;
    background-position: 0px 0px;
    background-repeat: no-repeat;
}

.image-box:hover {
    background-position: 30% 45%;
    background-size: 140%;
}

.img-con {
    width: 80%;
    margin: auto;
}

.image-box {
    position: relative;
}

.image-label {
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(8, 142, 231, 0.637);
    text-align: center;
    padding-top: 20px;
    font-size: 1.4rem;
    color: #fff;
}

.big-text {
    font-size: 2.5rem;
}

.avatar {
    vertical-align: middle;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #e2e2e2;
    position: relative;
}

.avatar:hover {
    background-color: #6ca7fa;
    color: #fff;
}

.avatar i {
    position: absolute;
    top: 20px;
    left: 22px;
    color: #70a9f8;
}

.avatar .ic {
    position: absolute;
    top: 20px;
    left: 18px;
    color: #70a9f8;
}

.avatar i:hover {
    color: #fff;
}

.light-bg {
    background-color: #f7f8fa;
}

.light-color {
    color: #87898a;
}

.text-light-blue {
    color: #6ca7fa;
}

.bk-v-align-centeer {
    align-items: flex-start;
}

.small-avatar {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #202020;
    position: relative;
    color: #fff;
    padding: 3px 10px;
}

.blue-black-bg {
    background-color: #232935;
}

.showcase-4 {
    padding: 3rem 0;
    height: 500px;
}

.text-box {
    width: 100%;
    height: 50px;
    background: #2e3441;
    color: #fff;
    padding-left: 10px;
    border: 1px solid #404755;
    border-radius: 4px;
}

.glenn {
    width: 50%;
    height: 500px;
}

.w {
    width: 50%;
}

.ptt-5 {
    padding-top: 5rem;
}

.box-image {
    width: 130px;
    height: 150px;
    border-radius: 5px;
}

.h-sub-title {
    color: rgb(146, 141, 141);
    margin: 0;
}

.h-title {
    margin: 0;
}

.h-text {
    font-size: 0.7rem;
    color: rgb(146, 141, 141);
    line-height: 2;
}

.testimonials {
    width: 90%;
    margin: auto;
}

.map {
    width: 50%;
}

.vvv {
    width: 30%;
}

.small-text {
    font-size: 1rem;
}

.w-80 {
    width: 80%;
    margin: 0 auto;
}

/* =============== Media QUERIES  ======== */

@media (max-width: 768px) {
    .hamburger {
        display: flex !important;
    }

    .header {
        display: none;
    }

    .auth-container {
        display: none;
    }

    .cash {
        font-size: 4rem;
    }

    .enjoy-container {
        display: none;
    }

    .consult {
        font-size: 1rem;
    }

    .on-text {
        font-size: 1.5rem;
    }

    .show-info {
        width: 100%;
    }

    .show-info .w-25 {
        margin-top: 20px;
        width: 80% !important;
    }

    .wrap {
        flex-wrap: wrap;
    }

    .bk-v-align-centeer {
        align-items: center;
    }

    .glenn {
        display: none;
    }

    .w {
        width: 100%;
    }

    .ptt-5 {
        padding-top: 3rem;
    }

    .testimonials {
        width: 100%;
    }

    .map {
        width: 100%;
    }

    .vvv {
        width: 100%;
    }

    .mob-margin {
        margin-top: 50px;
    }

}
</style>
