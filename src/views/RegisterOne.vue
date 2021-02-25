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
            <form class="bk-col bk-gap-1-5" @submit="createAccount">
                <select name="title" v-model="title">
                    <option value="0">Title</option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr.</option>
                    <option value="Prof">Prof.</option>
                    <option value="Eng">Eng.</option>
                </select>
                <input name="first" type="text" placeholder="First name" required v-model="first_name">
                <input type="text" name="middle" placeholder="Middle name" v-model="middle_name">
                <input type="text" placeholder="Last name (Surname)" v-model="last_name">
                <input type="email" name="last" placeholder="Email address" v-model="email">
                <div class="bk-row bk-align-right">
                    <button class="bk-btn" type="submit" :disabled="disable_btn"> <img v-if="loading" class="loading-on-btn" src="../assets/images/loading.gif" alt="loading..." /> CREATE ACCOUNT</button>
                </div>
            </form>
        </div>
        <div class="">

        </div>
    </div>

</section>
</template>

<script>
import {
    network
} from "../utils/network";
import Snackbar from "vuejs-snackbar";

export default {
    name: "RegisterOne",
    title: 'Personal Information',
    components: {
        snackbar: Snackbar,
    },
    data() {
        return {
            title: "0",
            first_name: "",
            last_name: "",
            email: "",
            middle_name: '',
            disable_btn: false,
            loading: false,
            position: "top-right",
        }
    },

    methods: {

        createAccount(evt) {
            evt.preventDefault();

            if (this.title == "0") {
                this.$refs.snackbar.warn('Please select your title');
                return;
            }

            const body = {
                "first_name": this.first_name,
                "last_name": this.last_name,
                "middle_name": this.middle_name,
                "title": this.title,
                "email": this.email
            }

            this.disable_btn = true;
            this.loading = true;
            network.makePOSTRequest('/register-one', body)
                .then((res) => {
                    this.loading = false;
                    this.disable_btn = false;

                    

                    if (res.status == 201) {
                        this.$refs.snackbar.info(res.data.message)
                        setTimeout(() => {
                            this.$router.push({
                                path: "register-two",
                                query: {
                                    q: res.data.data._id
                                }
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
        },

    },

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
input[type='email'] {
    padding: 5px 10px;
    border: none;
}

input[type='text']:focus,
input[type='email']:focus,
select:focus {
    outline: none;
}

select {
    padding: 8px 10px;
    border: none;
}

input[type='text']::placeholder,
input[type='email']::placeholder,select  {
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
    background: rgb(56, 114, 241); 

}  */

@media(max-width: 768px) {
    .small-width {
        width: 80%;
    }
}
</style>
