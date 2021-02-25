<template>
<div class="accordion">
    <div class="head-container">
        <h6 class="accordion-head">ACCOUNT MENU</h6>
    </div>
    <div class="accordion-content">
        <p class="dash-b">DASHBOARD</p>
        <hr>
        <ul class="li-con" ref="person" @click="onAction('person')">
            <p class="li-head">PERSONAL SETTINGS <i class="fa fa-plus icon" ref="ic_p"></i> </p>
            <li class="li-item"><router-link to="/account/profile" >View Profile</router-link></li>
            <li class="li-item"><router-link to="/account/change-pin">Change your PIN</router-link></li>
        </ul>
        <hr>
        <ul class="li-con" ref="account" @click="onAction('account')">
            <p class="li-head">ACCOUNT MANAGEMENT <i class="fa fa-plus icon" ref="ic_a"></i> </p>
            <li class="li-item"><router-link to="/account/online-statement">Online Statements</router-link></li>
            <li class="li-item"><router-link to="/account/check-balance">Check Balance</router-link></li>
        </ul>
        <hr>
        <ul class="li-con" ref="online" @click="onAction('online')">
            <p class="li-head">ONLINE MONEY TRANSFER <i class="fa fa-plus icon" ref="ic_o"></i> </p>
            <li class="li-item"><a href="#">Wire Transfers</a></li>
            <li class="li-item"><a href="#">Internal Transfers</a></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'Accordion',

    components: {

    },

    data() {
        return {
            personal_folded: true,
            account_folded: true,
            online_folded: true
        }
    },

    props: {

    },

    computed: {

    },

    methods: {
        onAction(which) {
            this.reset();

            if (which == 'person') {
                if (!this.personal_folded) {
                    this.$refs.person.style.height = "20px";
                    this.$refs.ic_p.classList.add('fa-plus')
                    this.$refs.ic_p.classList.remove('fa-minus')
                    this.personal_folded = !this.personal_folded;
                } else {
                    this.$refs.person.style.height = "75px";
                    this.$refs.ic_p.classList.remove('fa-plus')
                    this.$refs.ic_p.classList.add('fa-minus')
                    this.personal_folded = !this.personal_folded;
                }
            }

            if (which == 'account') {
                if (!this.account_folded) {
                    this.$refs.account.style.height = "20px";
                    this.$refs.ic_a.classList.add('fa-plus')
                    this.$refs.ic_a.classList.remove('fa-minus')
                    this.account_folded = !this.account_folded;
                } else {
                    this.$refs.account.style.height = "75px";
                    this.$refs.ic_a.classList.remove('fa-plus')
                    this.$refs.ic_a.classList.add('fa-minus')
                    this.account_folded = !this.account_folded;
                }
            }

            if (which == 'online') {
                if (!this.online_folded) {
                    this.$refs.online.style.height = "20px";
                    this.$refs.ic_o.classList.add('fa-plus')
                    this.$refs.ic_o.classList.remove('fa-minus')
                    this.online_folded = !this.online_folded;
                } else {
                    this.$refs.online.style.height = "75px";
                    this.$refs.ic_o.classList.remove('fa-plus')
                    this.$refs.ic_o.classList.add('fa-minus')
                    this.online_folded = !this.online_folded;
                }     
            }
        },

        reset() {
            this.$refs.account.style.height = "20px";
            this.$refs.person.style.height = "20px";
            this.$refs.online.style.height = "20px";

            this.$refs.ic_o.classList.add('fa-plus')
            this.$refs.ic_o.classList.remove('fa-minus')

            this.$refs.ic_a.classList.add('fa-plus')
            this.$refs.ic_a.classList.remove('fa-minus')

            this.$refs.ic_p.classList.add('fa-plus')
            this.$refs.ic_p.classList.remove('fa-minus')

            this.personal_folded = true,
            this.account_folded = true,
            this.online_folded = true
        }
    },

    mounted() {

    },

    created() {

    }
}
</script>

<style scoped>
.accordion-head {
    padding-bottom: 5px;
    border-bottom: 2px solid #1a2c3a;
    width: 70%;
    margin-bottom: 0;
    font-family: Trebuchet MS;
}

.head-container {
    border-bottom: 1px solid rgb(243, 239, 239);
}

.accordion-content {
    margin-top: 20px;
}

.dash-b {
    font-size: 0.8rem;
    margin-bottom: 0;
    padding-left: 5px;
}

hr {
    margin: 2px 0;
    border-color: rgb(243, 239, 239);
}

.accordion {
    border-right: 1px solid rgb(243, 239, 239);
    padding-right: 15px;
}

.li-head {
    padding-left: 5px;
    font-size: 0.8rem;
    font-weight: bold;
}

.li-item {
    list-style-type: none;
    margin-left: 10px;
    padding-left: 5px;
    border-top: 1px dashed rgb(243, 239, 239);
    padding-top: 3px;
    padding-bottom: 3px;
    height: 25px;
}

.li-item:hover {
    background-color: rgb(238, 235, 235);
}

a {
    color: #000;
    font-size: 0.8rem;
    width: 100%;
    display: block;
}

a:hover {
    text-decoration: none;
}

.li-head {
    margin-bottom: 5px;
    position: relative;
    height: 18px;
}

ul {
    margin-bottom: 5px;
}

.li-con {
    /* margin-bottom: 30px; */
    height: 20px;
    overflow-y: hidden;
    transition: height 0.7s;
    margin-top: 5px;
    cursor: pointer;
}

.li-head:hover {
    background-color: rgb(250, 249, 249);
}

.icon {
    font-size: 0.3rem;
    position: absolute;
    top: 5px;
    right: 2px
}
</style>
