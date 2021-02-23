<template>
<section class="screen-width-height background">
    <snackbar ref="snackbar" baseSize="100px" :holdTime="5000" :multiple="true" :position="position" />
    <div class="bk-row bk-space-btn contain">
        <div class="">

        </div>
        <div class="small-width form-box">
            <div class="card-header">
                <h5 class="text-light">LOGO</h5>
            </div>
            <form class="bk-col bk-gap-1-5" @submit="submitForm">
                <input name="SSN" type="text" placeholder="ID/SSN" required v-model="ssn">
                <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Date of birth" required v-model="dob">
                <select name="gender" required v-model="gender">
                    <option value="0">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <Dropdown :options="countryOptions" :disabled="false" name="countdrop" :maxItem="256" placeholder="Country" ref="countdropdown" v-on:selected="onCountry" v-bind:class="{ 'is-empty': invalidCountry}"></Dropdown>
                <div class="bk-row">
                    <select name="code" v-model="code">
                        <option value="+233">+233</option>
                        <option value="+234">+234</option>
                        <option value="+235">+235</option>
                    </select>
                    <input type="number" placeholder="Phone number" v-model="phone_number" required>
                </div>
                <input name="occupation" type="text" placeholder="Your occupation" required v-model="occupation">
                <input type="text" name="Adresss" placeholder="Your address" required v-model="address">
                <div class="bk-row bk-align-right">
                    <button class="bk-btn" type="submit" :disabled="disable_btn"> <img v-if="loading" class="loading-on-btn" src="../assets/images/loading.gif" alt="loading..." /> SUBMIT</button>
                </div>
            </form>
        </div>
        <div class="">

        </div>
    </div>

</section>
</template>

<script>
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
import {
    network
} from "../utils/network";
import Snackbar from "vuejs-snackbar";

export default {
    name: "RegisterTwo",
    title: 'Account Information',
    components: {
        Dropdown,
        snackbar: Snackbar,
    },

    data() {
        return {
            countryOptions: countries,
            invalidCountry: false,
            id: "",
            ssn: "",
            dob: "",
            gender: "0",
            country: "",
            phone_number: "",
            code: "+233",
            occupation: "",
            address: "",
            position: "top-right",
            loading: false,
            disable_btn: false,
        }
    },

    methods: {
        onCountry(country) {
            this.country = country;
        },

        submitForm(evt) {
            evt.preventDefault();
            if (this.gender == "0") {
                this.$refs.snackbar.warn('Please select your gender');
                return;
            }

            if (this.country.name == "" || this.country.name == undefined) {
                this.$refs.snackbar.warn('Please select your country');
                return;
            }


            const body = {
                "phone_code": this.code,
                "gender": this.gender,
                "dob": this.dob,
                "address": this.address,
                "phone": this.phone_number,
                "country": this.country.name,
                "ssn_or_id": this.ssn,
                "id": this.id
            }

            this.disable_btn = true;
            this.loading = true;

            network.makePOSTRequest('/register-two', body)
                .then((res) => {
                    this.loading = false;
                    this.disable_btn = false;

                    if (res.status == 201) {
                        this.$refs.snackbar.info(res.data.message)
                        setTimeout(() => {
                            this.$router.push({
                                path: "/",
                            });
                        }, 2000)

                    }else{
                        this.$refs.snackbar.error(res.data.message)
                    }

                }).catch(err => {
                    this.loading = false;
                    this.disable_btn = false;
                    console.log(err)
                })
        }

    },

    created() {
        this.id = this.$route.query.q;
        if(this.id == undefined){
            this.$router.push('/register-one')
        }
    }
}
</script>

<style scoped>
.small-width {
    width: 400px;
    height: 100%;
}

.contain {
    align-items: center;
    height: 100vh;
}

form {
    width: 100%;
}

.form-box {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

input[type='text'],
input[type='email'],
input[type='date'],
input[type='number'] {
    padding: 5px 10px;
    border: none;
    width: 100%;
}

input[type='text']:focus,
input[type='email']:focus,
input[type='date']:focus,
input[type='number']:focus,
select:focus {
    outline: none;
}

select {

    padding: 8px 10px;
    border: none;
}

input[type='text']::placeholder,
input[type='email']::placeholder,
input[type='date']::placeholder,
input[type='number']::placeholder {
    font-size: 0.9rem;
    color: rgb(167, 165, 165);
}

.background {
    background-color: rgb(44, 70, 94);
}

.bk-btn {
    padding: 5px 10px;
    border: 2px solid rgb(56, 114, 241);
    font-size: 0.8rem;
    color: #fff;
    background: rgb(56, 114, 241);
}

/* .bk-btn:hover {
    background: linear-gradient(to bottom, #55b6e1 0%, #55b6e1 100%);
    border-color: #55b6e1;

} */

.is-empty {
    border-color: red !important;
    border-style: solid !important;
    border-width: 1px;
}

@media(max-width: 768px) {
    .small-width {
        width: 80%;
    }
}
</style>
