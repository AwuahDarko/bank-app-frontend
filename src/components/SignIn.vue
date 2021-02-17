<template>
  <div>
    <div class="card">
      <h4 v-if="is_logged_in">Welcome</h4>
      <h4 v-else>Sign in now</h4>
      <button v-if="is_logged_in" class="btn btn-blue">Sign In</button>
      <form class="mt-2" v-else>
        <input
          type="number"
          name="userId"
          id="userId"
          class="form-control mb-2"
          placeholder="Enter your user ID"
          required
          @keypress="Utility.allowOnlyNumberInput2($event)"
        />
        <input
          type="number"
          name="pin"
          id="pin"
          class="form-control mb-2"
          placeholder="Enter your pin"
          required
          @keypress="Utility.allowOnlyNumberInput2($event)"
        />
        <div class="bk-row bk-align-right">
          <button type="submit" class="btn btn-primary" :disabled="disable_btn">
            <img v-if="loading" src="" alt="loading..." />
            Sign In
          </button>
        </div>
      </form>
      <p class="text-blue mt-2 enroll-text">
        Not enrolled? Sign up now. <i class="fa fa-angle-right arrow"></i>
      </p>
    </div>
  </div>
</template>



<script>
import { Utility } from "../utils/utility";

export default {
  name: "SignIn",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      is_logged_in: true,
      Utility: Utility,
      loading: false,
      disable_btn: false,
    };
  },
  methods: {},
  computed: {},
  created() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.is_logged_in = false;
    }
  },

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