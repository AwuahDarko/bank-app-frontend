/* eslint-disable */
<template>
  <div class="summary-container">
    <snackbar
      ref="snackbar"
      :baseSize="Utility.snacbarBaseSize"
      :holdTime="Utility.snackbarHoldTime"
      :multiple="true"
      :position="Utility.snackbarPosition"
    />
    <vue-progress-bar></vue-progress-bar>
    <div class="bk-breadcrumb mb-2">
      <div class="bk-row small-gap">
        <small class="bread-item">Online Money Transfer</small>
        <i class="fa small-icon fa-angle-double-right"></i>
        <small class="bread-item">Transfer Summary</small>
      </div>
    </div>
    <hr />
    <h3 class="mt-3">Transfer Summary</h3>
    <p class="bold">
      Make local and cross-border payments with SCBC Internet Banking Secure
      funds transfer services. Transfer funds across the world quickly, with
      minimum paperwork or hassle.
    </p>
    <p>
      A summary of your details has been shown below.
      <strong>Note: </strong> SCBC Internet Banking will not be liable for
      misinformation provided by the sender
    </p>

    <table class="mb-2">
      <thead>
        <tr>
          <th class="left-b">Item</th>
          <th class="right-b">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left-b"><strong> Account holder name</strong></td>
          <td class="right-b">{{ wired_data.account_name_holder }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Account holder Phone</strong></td>
          <td class="right-b">{{ wired_data.account_holder_phone }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Account holder Email</strong></td>
          <td class="right-b">{{ wired_data.account_holder_email }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Account holder address</strong></td>
          <td class="right-b">{{ wired_data.account_holder_address }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Account number</strong></td>
          <td class="right-b">{{ wired_data.account_number }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Account Type</strong></td>
          <td class="right-b">{{ wired_data.account_type }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Account Currency</strong></td>
          <td class="right-b">{{ wired_data.account_currency }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Amount To Transfer</strong></td>
          <td class="right-b">{{ wired_data.amount_to_transfer }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary name</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_name }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Phone</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_phone }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Email</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_email }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary address</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_address }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Country</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_country }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Bank Name</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_bank_name }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Bank Address</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_bank_address }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Account number</strong></td>
          <td class="right-b">
            {{ wired_data.beneficiary_bank_account_number }}
          </td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Account Type</strong></td>
          <td class="right-b">
            {{ wired_data.beneficiary_account_type }}
          </td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Account Currency</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_account_currency }}</td>
        </tr>
        <tr>
          <td class="left-b"><strong>Beneficiary Bank SWIFT / IBAN</strong></td>
          <td class="right-b">{{ wired_data.beneficiary_bank_swift_iban }}</td>
        </tr>
      </tbody>
    </table>
    <form>
      <div>
        <input id="privacy" type="checkbox" required />
        <label for="privacy">I have read and agree to the Privacy Policy</label>
      </div>
      <div class="bk-row bk-align-right bk-gap-1">
        <button class="btn-b-black" type="submit">Proceed</button>
        <button class="btn-blue" @click="goBack">Make Changes</button>
        <button class="btn-red">Cancel Transfer</button>
      </div>
    </form>
    <SecurityInfo />
  </div>
</template>

<script>
import SecurityInfo from "../components/SecurityInfo";
import { network } from "../utils/network";
import { Utility } from "../utils/utility";
import Snackbar from "vuejs-snackbar";

// https://www.scbc-intl.com/account/transfer-summary?transfer=598900256
export default {
  name: "TransferSummary",
  title: "Transfer Summary",
  components: {
    SecurityInfo,
    snackbar: Snackbar,
  },
  data() {
    return {
      id: "",
      Utility: Utility,
      wired_data: new Object(),
      allKeys: [],
    };
  },
  methods: {
    getWiredTransfer() {
      this.$Progress.start();
      network
        .makeGETRequest(`/wire-transfer?id=${this.id}`)
        .then((res) => {
          this.$Progress.finish();
          this.wired_data = res.data.data;
        })
        .catch((err) => {
          this.$Progress.finish();
          console.log(err);
        });
    },

    goBack(){
        this.$router.push({
            path: "/account/wire-transfer",
                query: {
                  edit: this.id
                },
        });
    }
  },
  beforeCreate() {},
  created() {
    this.id = this.$route.query.wired;
    if (this.id == undefined) {
      this.$router.push("/account/wire-transfer");
    }
    this.getWiredTransfer();
  },
  mounted() {},
};
</script>

<style scoped>
p {
  font-size: 0.8rem;
}

.bold {
  font-weight: bold;
}

label {
  font-size: 0.8rem;
  margin: 0;
  margin-left: 5px;
}

button {
  margin: 0;
  height: 26px;
  line-height: 26px;
  padding: 0px 10px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  font-weight: bold;

  border: none;
}

.btn-red {
  background-color: #990000;
}

.btn-b-black {
  background: #1a2c3a;
}

.btn-blue {
  background-color: #66afe9;
}
</style>
