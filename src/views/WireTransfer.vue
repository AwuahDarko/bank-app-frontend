/* eslint-disable */
<template>
  <div class="wire-container">
    <snackbar
      ref="snackbar"
      :baseSize="Utility.snacbarBaseSize"
      :holdTime="Utility.snackbarHoldTime"
      :multiple="true"
      :position="Utility.snackbarPosition"
    />
    <vue-progress-bar></vue-progress-bar>
    <div class="bk-breadcrumb mb-2">
      <div class="k-row small-gap">
        <small class="bread-item">Profile</small>
        <i class="fa small-icon fa-angle-double-right"></i>
        <small class="bread-item">Wire Transfer</small>
      </div>
    </div>
    <hr />
    <h3 class="mt-3">Wire Transfer</h3>
    <h6 class="headings">INFORMATION</h6>
    <p class="bold">
      Make local and cross-border payments with SCBC Internet Banking Secure
      funds transfer services. Transfer funds across the world quickly, with
      minimum paperwork or hassle.
    </p>

    <ul>
      <li class="item">
        <strong>Online bank transfers.</strong> Log in to your online account
        and select the option for wire transfer.
      </li>
      <li class="item">
        Provide the beneficiary's bank details (SWIFT / IBAN code and the
        account number at that bank). If you don’t have that information, either
        get it on a check or from the bank.
      </li>
      <li class="item">
        After submitting that information, you’ll need to confirm that all
        details submitted are accurate. Note:( SCBC Internet Banking will not be
        liable for misinformation provider by the sender )
      </li>
      <li class="item">
        Confirm transfer code to finalise the transfer process.
      </li>
    </ul>
    <p>
      <strong>NOTE: </strong> Kindly verify all data entered. SCBC Internet
      Banking Bank would not be liable for any incorrect information entered.
    </p>
    <h6 class="headings mt-5">ACCOUNT HOLDER PERSONAL DATA</h6>
    <form class="mb-5" @submit="submitForm">
      <div class="m-col">
        <div class="bk-row">
          <label>Account holder name:</label>
          <input type="text" v-model="account_name" />
        </div>
        <div class="bk-row">
          <label>Account holder Phone:</label>
          <input type="text" v-model="account_phone_number" />
        </div>
        <div class="bk-row">
          <label>Account holder Email:</label>
          <input type="email" v-model="account_email" />
        </div>
        <div class="bk-row">
          <label>Account holder address:</label>
          <input type="text" v-model="account_address" />
        </div>
      </div>
      <h6 class="headings mt-4">ACCOUNT HOLDER PERSONAL DATA</h6>
      <div class="m-col">
        <div class="bk-row">
          <label>Account number</label>
          <input
            type="number"
            @keypress="allowOnlyNumberInput"
            v-model="account_number"
          />
        </div>
        <div class="bk-row">
          <label>Account Type</label>
          <input type="text" v-model="account_type" />
        </div>
        <div class="bk-row">
          <label>Account Currency</label>
          <input type="text" v-model="account_currency" />
        </div>
        <div class="bk-row">
          <label> <span class="text-danger">*</span> Amount To Transfer:</label>
          <input
            type="number"
            @keypress="allowOnlyNumberInput"
            required
            v-model="amount_to_transfer"
          />
        </div>
      </div>
      <h6 class="headings mt-4">BENEFICIARY PERSONAL DATA</h6>
      <div class="m-col">
        <div class="bk-row">
          <label><span class="text-danger">*</span> Beneficiary name</label>
          <input type="text" required v-model="beneficiary_name" />
        </div>
        <div class="bk-row">
          <label><span class="text-danger">*</span> Beneficiary Phone</label>
          <input type="tel" required v-model="beneficiary_phone" />
        </div>
        <div class="bk-row">
          <label><span class="text-danger">*</span> Beneficiary Email</label>
          <input type="email" required v-model="beneficiary_email" />
        </div>
        <div class="bk-row">
          <label>
            <span class="text-danger">*</span> Beneficiary address:</label
          >
          <input type="text" required v-model="beneficiary_address" />
        </div>
        <div class="bk-row">
          <label> <span class="text-danger">*</span> Country:</label>
          <div class="country">
            <Dropdown
              :options="countryOptions"
              :disabled="false"
              name="countdrop"
              :maxItem="256"
              placeholder=""
              ref="countdropdown"
              v-on:selected="onCountry"
              v-bind:class="{ 'is-empty': invalidCountry }"
            >
            </Dropdown>
          </div>
        </div>
      </div>
      <h6 class="headings mt-4">BENEFICIARY BANK DATA</h6>
      <div class="m-col">
        <div class="bk-row">
          <label
            ><span class="text-danger">*</span> Beneficiary Bank Name</label
          >
          <input type="text" required v-model="beneficiary_bank_name" />
        </div>
        <div class="bk-row">
          <label
            ><span class="text-danger">*</span> Beneficiary Bank Address</label
          >
          <input type="text" required v-model="beneficiary_bank_address" />
        </div>
        <div class="bk-row">
          <label
            ><span class="text-danger">*</span> Beneficiary Account
            number</label
          >
          <input
            type="number"
            @keypress="allowOnlyNumberInput"
            required
            v-model="beneficiary_account_number"
          />
        </div>
        <div class="bk-row">
          <label>
            <span class="text-danger">*</span> Beneficiary Account Type</label
          >
          <select required v-model="beneficiary_account_type">
            <option value="0">--- Select Account Type ---</option>
            <option value="Savings Account">Savings Account</option>
            <option value="Current Account">Current Account</option>
            <option value="Offshore Account">Offshore Account</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div class="bk-row">
          <label
            ><span class="text-danger">*</span> Beneficiary Account
            Currency</label
          >
          <input type="text" required v-model="beneficiary_account_currency" />
        </div>
        <div class="bk-row">
          <label
            ><span class="text-danger">*</span> Beneficiary Bank SWIFT /
            IBAN:</label
          >
          <input type="text" required v-model="beneficiary_bank_swift_iban" />
        </div>
      </div>
      <hr />
      <div class="k-row bk-align-right">
        <input type="submit" value="Make Transfer" />
      </div>
    </form>
    <SecurityInfo />
  </div>
</template>

<script>
import SecurityInfo from "../components/SecurityInfo";
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";
import { mapGetters, mapActions } from "vuex";
import { network } from "../utils/network";
import { Utility } from "../utils/utility";
import Snackbar from "vuejs-snackbar";
// this.$Progress.start();
// this.$Progress.finish();

export default {
  name: "WireTransfer",
  title: "Wire Transfer",
  components: {
    SecurityInfo,
    Dropdown,
    snackbar: Snackbar,
  },
  data() {
    return {
      Utility: Utility,
      invalidCountry: false,
      countryOptions: countries,
      amount_to_transfer: "",
      beneficiary_name: "",
      beneficiary_phone: "",
      beneficiary_email: "",
      beneficiary_address: "",
      beneficiary_country: "",
      beneficiary_bank_name: "",
      beneficiary_bank_address: "",
      beneficiary_account_number: "",
      beneficiary_account_type: "0",
      beneficiary_account_currency: "",
      beneficiary_bank_swift_iban: "",
      account_phone_number: "",
      account_name: "",
      account_email: "",
      account_address: "",
      account_number: "",
      account_type: "",
      account_currency: "",
      edit: "",
    };
  },

  methods: {
    ...mapActions(["setUserData"]),

    allowOnlyNumberInput(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    getUserData() {
      const body = {
        token: `Bearer ${localStorage.getItem("token")}`,
      };
      this.$Progress.start();
      network
        .makeGETRequest("/auth-token", body)
        .then((data) => {
          this.$Progress.finish();
          if (data.status == 208) {
            this.setUserData(data.data.data);
            this.setData();
          }
        })
        .catch((err) => {
          this.$Progress.finish();
          console.log(err);
        });
    },

    submitForm(evt) {
      evt.preventDefault();

      if (this.edit != "" || this.edit != undefined) {
        const body = {
          id: this.edit,
          user_id: this.userData._id,
          account_name_holder: this.account_name,
          account_holder_phone: this.account_phone_number,
          account_holder_email: this.account_email,
          account_holder_address: this.account_address,
          account_number: this.account_number,
          account_type: this.account_type,
          account_currency: this.account_currency,
          amount_to_transfer: this.amount_to_transfer,
          beneficiary_name: this.beneficiary_name,
          beneficiary_phone: this.beneficiary_phone,
          beneficiary_email: this.beneficiary_email,
          beneficiary_address: this.beneficiary_address,
          beneficiary_country: this.beneficiary_country,
          beneficiary_bank_name: this.beneficiary_bank_name,
          beneficiary_bank_address: this.beneficiary_bank_address,
          beneficiary_bank_account_number: this.beneficiary_account_number,
          beneficiary_account_type: this.beneficiary_account_type,
          beneficiary_account_currency: this.beneficiary_account_currency,
          beneficiary_bank_swift_iban: this.beneficiary_bank_swift_iban,
        };

        this.$Progress.start();

        network
          .makePUTRequest("/wire-transfer", body)
          .then((res) => {
            this.$Progress.finish();
            if (res.status == 200) {
            this.$refs.snackbar.info(res.data.message);
            setTimeout(() => {
              this.$router.push({
                path: "/account/transfer-summary",
                query: {
                  wired: this.edit
                },
              });
            }, 3000);
          } else {
            this.$refs.snackbar.error(res.data.message);
          }
          })
          .catch((err) => {
            this.$Progress.finish();
            console.log(err)
          });
        return;
      }

      if (this.beneficiary_country == undefined) {
        this.$refs.snackbar.error("Select beneficiary country");
        return;
      }

      if (this.beneficiary_account_type == "0") {
        this.$refs.snackbar.error("Select beneficiary account type");
        return;
      }

      const body = {
        user_id: this.userData._id,
        account_name_holder: this.account_name,
        account_holder_phone: this.account_phone_number,
        account_holder_email: this.account_email,
        account_holder_address: this.account_address,
        account_number: this.account_number,
        account_type: this.account_type,
        account_currency: this.account_currency,
        amount_to_transfer: this.amount_to_transfer,
        beneficiary_name: this.beneficiary_name,
        beneficiary_phone: this.beneficiary_phone,
        beneficiary_email: this.beneficiary_email,
        beneficiary_address: this.beneficiary_address,
        beneficiary_country: this.beneficiary_country,
        beneficiary_bank_name: this.beneficiary_bank_name,
        beneficiary_bank_address: this.beneficiary_bank_address,
        beneficiary_bank_account_number: this.beneficiary_account_number,
        beneficiary_account_type: this.beneficiary_account_type,
        beneficiary_account_currency: this.beneficiary_account_currency,
        beneficiary_bank_swift_iban: this.beneficiary_bank_swift_iban,
      };

      this.$Progress.start();
      network
        .makePOSTRequest("/wire-transfer", body)
        .then((res) => {
          this.$Progress.finish();

          if (res.status == 200) {
            this.$refs.snackbar.info(res.data.message);
            setTimeout(() => {
              this.$router.push({
                path: "/account/transfer-summary",
                query: {
                  wired: res.data.data.wired_id,
                },
              });
            }, 3000);
          } else {
            this.$refs.snackbar.error(res.data.message);
          }
        })
        .catch((err) => {
          this.$Progress.finish();
          console.log("err", err);
          this.$refs.snackbar.error(
            "An error occurred, please check internet connection"
          );
        });
    },

    onCountry(country) {
      this.beneficiary_country = country.name;
    },

    setData() {
      this.account_name = `${this.userData.first_name} ${
        this.userData.middle_name == undefined ? "" : this.userData.middle_name
      } ${this.userData.last_name}`;

      let p = this.userData.phone;
      if (p == "" || p == undefined) this.account_phone_number = "";

      if (p.length > 9) {
        p = p.substr(1);
      }
      this.account_phone_number = `${this.userData.phone_code}${p}`;

      this.account_email = this.userData.email;

      this.account_address = this.userData.address;

      this.account_number = this.userData.account_number;

      this.account_type =
        this.userData.account_type == undefined
          ? ""
          : this.userData.account_type;

      this.account_currency =
        this.userData.account_currency == undefined
          ? ""
          : this.userData.account_currency;
    },

    checkTransferInProgress() {
      this.$Progress.start();
      network
        .makeGETRequest("/check-wire-transfer")
        .then((res) => {
          this.$Progress.finish();
          if (res.status == 200) {
            this.$refs.snackbar.info(res.data.message);
            setTimeout(() => {
              if (res.data.data[0].status == "started") {
                this.$router.push({
                  path: "/account/transfer-summary",
                  query: {
                    wired: res.data.data[0]._id,
                  },
                });
              } else if (res.data.data[0].status == "code") {
                this.$router.push({
                  path: "/account/confirm-cot",
                  query: {
                    wired: res.data.data[0]._id,
                  },
                });
              }
            }, 2000);
          }
        })
        .catch((err) => {
          this.$Progress.finish();
          console.log(err);
        });
    },

    getWiredTransfer() {
      this.$Progress.start();
      network
        .makeGETRequest(`/wire-transfer?id=${this.edit}`)
        .then((res) => {
          this.$Progress.finish();
          const wired_data = res.data.data;

          this.account_name = wired_data.account_name_holder;
          this.account_phone_number = wired_data.account_holder_phone;
          this.account_email = wired_data.account_holder_email;
          this.account_address = wired_data.account_holder_address;
          this.account_number = wired_data.account_number;
          this.account_type = wired_data.account_type;
          this.account_currency = wired_data.account_currency;
          this.amount_to_transfer = wired_data.amount_to_transfer;
          this.beneficiary_name = wired_data.beneficiary_name;
          this.beneficiary_phone = wired_data.beneficiary_phone;
          this.beneficiary_email = wired_data.beneficiary_email;
          this.beneficiary_address = wired_data.beneficiary_address;
          this.beneficiary_country = wired_data.beneficiary_country;
          this.$refs.countdropdown.searchFilter =
            wired_data.beneficiary_country;
          this.beneficiary_bank_name = wired_data.beneficiary_bank_name;
          this.beneficiary_bank_address = wired_data.beneficiary_bank_address;
          this.beneficiary_account_number =
            wired_data.beneficiary_bank_account_number;
          this.beneficiary_account_type = wired_data.beneficiary_account_type;
          this.beneficiary_account_currency =
            wired_data.beneficiary_account_currency;
          this.beneficiary_bank_swift_iban =
            wired_data.beneficiary_bank_swift_iban;
        })
        .catch((err) => {
          this.$Progress.finish();
          console.log(err);
        });
    },
  },
  computed: {
    ...mapGetters(["userData"]),
  },

  mounted() {
    this.edit = this.$route.query.edit;
    if (this.edit != undefined) {
      this.getWiredTransfer();
    } else {
      this.checkTransferInProgress();
      if (this.userData.title == undefined) {
        this.getUserData();
      } else {
        this.setData();
      }
    }
  },
};
</script>

<style scoped>
.headings {
  width: 100%;
  background-color: var(--bk-gray);
  padding: 3px 5px;
  font-size: 0.95rem;
}

p {
  font-size: 0.8rem;
}

.bold {
  font-weight: bold;
}

.item {
  list-style-type: decimal;
  font-size: 0.8rem;
}

ul {
  margin-left: 20px;
}

.m-col {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 5px;
}

input {
  background: #f8f8f8;
  border: 1px solid #e4e4e4;
  padding: 7px;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 14px;
  width: 300px;
}

.bk-row label {
  font-size: 0.8rem;
  margin-bottom: 0;
  padding-top: 10px;
}

.bk-row {
  justify-content: space-between;
  width: 60%;
}

.country {
  width: 300px;
}

select {
  background: #f8f8f8;
  border: 1px solid #cccccc;
  padding: 7px 2px;
  width: 300px;
}

input[type="submit"] {
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  background: #1a2c3a;
  border: none;
  /* box-shadow: inset 0 0 5px rgb(0 0 0 / 10); */
}

.k-row {
  display: flex;
}

@media screen and (max-width: 768px) {
  .bk-row {
    width: 100%;
  }

  input {
    width: 90%;
  }

  .country {
    width: 70%;
  }

  input[type="submit"] {
    width: 100%;
  }
}
</style>
