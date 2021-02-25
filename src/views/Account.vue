<template>
<section class="background">
    <div class="card pt-4 pl-3 pr-3">
        <div class="top-head">
            <img class="image" src="../assets/images/bank-logo.png" alt="bank logo">
            <div class="bk-row bk-gap-1 height">
                <p class="msg">Welcome <strong>Mr. Glenn Jens</strong> </p>
                <dropdown-menu v-model="show" :right="right" :hover="hover" :interactive="interactive">
                    <a class="dropdown-toggle"> My Account </a>
                    <div slot="dropdown">
                        <a class="dropdown-item" href="#">My Account</a>
                        <router-link to="/account/change-pin" class="dropdown-item">Change Login PIN</router-link>
                        <a class="dropdown-item" href="#">Log Out</a>
                    </div>
                </dropdown-menu>
            </div>
        </div>
        <div class="account-menu">
            <div style="width: 30px; height: 30px"></div>
            <div class="dropdown">
                <button class="dropbtn">Personal Settings</button>
                <div class="dropdown-content">
                    <router-link to="/account/profile">View Profile</router-link>
                    <router-link to="/account/change-pin">Change User Pin</router-link>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Account Management</button>
                <div class="dropdown-content">
                    <router-link to="/account/online-statement">Online Statment</router-link>
                    <a href="#">Check Balance</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Online Money Transfer</button>
                <div class="dropdown-content">
                    <a href="#">Wire Transfers</a>
                    <a href="#">Internal Transfers</a>
                </div>
            </div>
        </div>
        <div class="account-menu-mob">
            <div class="topnav " id="myTopnav">
                <div class="bk-row bk-align-center mob-menu-con" @click="myFunction">
                    <p class="text-light mr-1 mob-menu-text">MENU</p> <i class="fa fa-sort-desc text-light"></i>
                </div>
                <a>
                    <p class="menu-label bg-light">Personal Settings</p>
                    <div class="card p-2">
                        <ul>
                            <li class="mob-menu-item"><router-link to="/account/profile">View Profile</router-link></li>
                            <li class="mob-menu-item"><a href="#">Change User PIN</a></li>
                        </ul>
                    </div>
                </a>
                <a>
                    <p class="menu-label bg-light">Account Management</p>
                    <div class="card p-2">
                        <ul>
                            <li class="mob-menu-item"><router-link to="/account/online-statement">Online Statements</router-link></li>
                            <li class="mob-menu-item"><a href="#">Check Balance</a></li>
                        </ul>
                    </div>
                </a>
                <a>
                    <p class="menu-label bg-light">Online Money Transfer</p>
                    <div class="card p-2">
                        <ul>
                            <li class="mob-menu-item"><a href="#">Wire Transfers</a></li>
                            <li class="mob-menu-item"><a href="#">Internal Transfers</a></li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
        <div class="bk-row">
            <div class="sidebar">
                <Accordion />
            </div>
            <div class="content bk-col">
                <div class="actual-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
        <footer>
            <hr>
            <p class="text-light">© {{ getYear() }} MYBANK Internet Banking All right reserved.</p>
        </footer>
</section>
</template>

<script>
import DropdownMenu from "@innologica/vue-dropdown-menu";
import Accordion from '../components/Accordion';

export default {
    name: "Account",
    title: "Internet Banking",
    components: {
        DropdownMenu,
        Accordion
    },
    data() {
        return {
            show: false,
            right: false,
            hover: true,
            interactive: false,
        }
    },
    methods: {
        myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },

        getYear(){
            const d = new Date();
            return d.getFullYear();
        }
    }

}
</script>

<style scoped>
.image {
    width: 100px;
    height: 50px;
}

.background {
    padding: 20px 70px;
    background: #f8f8fa url(../assets/images/10.png) left top repeat;
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    min-height: 100vh;
}

.top-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.height {
    height: fit-content;
}

p {
    font-size: 0.8rem;
    margin: 0;
}

.msg {
    margin-top: 3px;
}

a {
    font-size: 0.8rem;
}

.dropdown-toggle {
    color: #666;
    font-size: 0.8rem;
    cursor: pointer;
}

.dropdown-toggle:hover {
    text-decoration: none;
}

.account-menu {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 20px;
}

.drop-container {
    height: fit-content;
}

.menu-i {
    color: #fff;
}

.account-menu {
    background-color: #1a2c3a;
    margin-bottom: 15px;
    height: 40px;
    padding: 5px 5px;
    border-radius: 5px;
    -webkit-border-radius: 5px
}

/* Dropdown Button */
.dropbtn {
    background-color: transparent;
    color: white;
    padding: 5px;
    font-size: 13px;
    border: none;
    font-family: Trebuchet MS;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #1a2c3a;
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-style: solid;
    border-radius: 5px;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: white;
    padding: 5px 10px;
    text-decoration: none;
    display: block;
    background-color: #1a2c3a;
    border-radius: 5px;
    position: relative;
    transition: font-size 0.7s
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
    background-color: #1a2c3a;
    font-size: 13.2px;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */

/* mobile nav */
.topnav {
    overflow: hidden;
    border-radius: 5px 5px 0 0;
}

.topnav a {
    float: left;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
}

.topnav a.active {
    background-color: #4CAF50;
    color: white;
}

.mob-menu-con {
    background-color: #1a2c3a;
    border-radius: 5px;
    padding: 8px;
}

.mob-menu-text {
    font-size: 1rem;
}

.menu-label {
    color: #000;
    font-size: 1rem;
    padding: 5px 10px;
}

ul {
    margin: 0;
}

li {
    list-style-type: none;
}

a {
    color: #000;
}

.mob-menu-item a {
    font-size: 0.9rem;
}

.account-menu-mob {
    display: none;
}

.sidebar {
    width: 240px;
}

.content {
    width: 90%;
    margin: 10px 0px 20px 10px;
}

.actual-content{
    width: 100%;
    height: fit-content;
}

footer{
    width: 100%;
    height: 70px;
    background-color: #1a2c3a;
    border-radius: 0 0 5px 5px;
    padding: 10px 1rem;
}

hr{
    border-color: #fff;
}

@media screen and (max-width: 1200px) {
    .background {
        padding: 20px 10px;
    }
}

@media screen and (max-width: 768px) {
    .topnav a:not(:first-child) {
        display: none;
    }

    .topnav.responsive {
        position: relative;
    }

    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }

    .account-menu-mob {
        display: block;
        margin-bottom: 15px;
    }

    .account-menu {
        display: none;
    }

    .content {
        width: 100%;
    }
    
    .sidebar{
        display: none;
    }
}
</style>
