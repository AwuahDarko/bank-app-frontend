<template>
  <div>
    <div class="card">
      <h4 v-if="is_logged_in">Welcome</h4>
      <h4 v-else>Sign in now</h4>
      <button v-if="is_logged_in" class="btn btn-blue">Sign In</button>
      <form class="mt-2" v-else @submit="onFormSubmit">
        <input
          type="number"
          name="userId"
          id="userId"
          class="form-control mb-2"
          placeholder="Enter your user ID"
          required
          v-model="user_id"
          @keypress="Utility.allowOnlyNumberInput2($event)"
        />
        <input
          type="text"
          name="pin"
          id="pin"
          class="form-control mb-2"
          placeholder="Enter your pin"
          required
          v-model="pin"
        />
        <div class="bk-row bk-align-right">
          <button type="submit" class="btn btn-primary" :disabled="disable_btn">
            <img v-if="loading" class="loading-on-btn" src="../assets/logo.png" alt="loading..." />
            Sign In
          </button>
        </div>
      </form>
      <router-link to="/register-one" class="text-blue mb-2 enroll-text">
        Not enrolled? Sign up now. <i class="fa fa-angle-right arrow"></i>
      </router-link>
    </div>
  </div>
</template>



<script>
import { Utility } from "../utils/utility";
import { network } from "../utils/network";
import { mapActions } from "vuex";


export default {
  name: "SignIn",
  props: {
    is_logged_in: Boolean,
  },
  components: {},
  data() {
    return {
      Utility: Utility,
      loading: false,
      disable_btn: false,
      user_id: "",
      pin: "",
    };
  },
  methods: {
     ...mapActions(["setUserData"]),

    onFormSubmit(evt) {
      evt.preventDefault();

      const body = {
        user_id: this.user_id,
        pin: this.pin,
      };

      this.loading = true;
      this.disable_btn = true;
      network
        .makePOSTRequest("/user-login", body)
        .then((res) => {
          this.$emit("onMessage", res.data.message);
          this.loading = false;
          this.disable_btn = false;
          this.setUserData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.disable_btn = false;
        });
    },
  },
  computed: {},
  created() {},

  mounted() {},
};
</script>


<style lang="css" scoped>
.btn-blue {
  background-color: #0b6efd;
  color: #fff;
}

.text-blue {
  color: #0b6efd;
}

.enroll-text {
  font-size: 14px;
}

.card {
  width: 60%;
  margin: auto;
  height: 70%;
  padding: 2rem 2rem 0.5rem 2rem;
}
</style>