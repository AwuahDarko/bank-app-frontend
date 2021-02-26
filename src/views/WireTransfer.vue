<template>
<div class="wire-container">
    <div class="bk-breadcrumb mb-2">
        <div class="k-row small-gap">
            <small class="bread-item">Profile</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Wire Transfer</small>
        </div>
    </div>
    <hr>
    <h3 class="mt-3">Wire Transfer</h3>
    <h6 class="headings">
        INFORMATION
    </h6>
    <p class="bold"> Make local and cross-border payments with SCBC Internet Banking Secure funds transfer services.
        Transfer funds across the world quickly, with minimum paperwork or hassle. </p>

    <ul>
        <li class="item"> <strong>Online bank transfers.</strong> Log in to your online
            account and select the option for wire transfer.
        </li>
        <li class="item">Provide the beneficiary's bank details (SWIFT / IBAN code and the account number at that bank).
            If you don’t have that information, either get it on a check or from the bank.</li>
        <li class="item">After submitting that information, you’ll need to confirm that all details submitted are accurate.
            Note:( SCBC Internet Banking will not be liable for misinformation provider by the sender )</li>
        <li class="item">Confirm transfer code to finalise the transfer process.</li>
    </ul>
    <p> <strong>NOTE: </strong> Kindly verify all data entered. SCBC Internet
        Banking Bank would not be liable for any incorrect information entered.</p>
    <h6 class="headings mt-5">
        ACCOUNT HOLDER PERSONAL DATA
    </h6>
    <form class="mb-5">
        <div class="m-col">
            <div class="bk-row">
                <label>Account holder name:</label>
                <input type="text">
            </div>
            <div class="bk-row">
                <label>Account holder Phone:</label>
                <input type="text">
            </div>
            <div class="bk-row">
                <label>Account holder Email:</label>
                <input type="email">
            </div>
            <div class="bk-row">
                <label>Account holder address:</label>
                <input type="text">
            </div>
        </div>
        <h6 class="headings mt-4">
            ACCOUNT HOLDER PERSONAL DATA
        </h6>
        <div class="m-col">
            <div class="bk-row">
                <label>Account number</label>
                <input type="number" @keypress="allowOnlyNumberInput">
            </div>
            <div class="bk-row">
                <label>Account Type</label>
                <input type="text">
            </div>
            <div class="bk-row">
                <label>Account Currency</label>
                <input type="text">
            </div>
            <div class="bk-row">
                <label> <span class="text-danger">*</span> Amount To Transfer:</label>
                <input type="number" @keypress="allowOnlyNumberInput" required>
            </div>
        </div>
        <h6 class="headings mt-4">
            BENEFICIARY PERSONAL DATA
        </h6>
        <div class="m-col">
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary name</label>
                <input type="text" required>
            </div>
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary Phone</label>
                <input type="tel" required>
            </div>
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary Email</label>
                <input type="email" required>
            </div>
            <div class="bk-row">
                <label> <span class="text-danger">*</span> Beneficiary address:</label>
                <input type="text" required>
            </div>
            <div class="bk-row">
                <label> <span class="text-danger">*</span> Country:</label>
                <div class="country">
                <Dropdown 
                :options="countryOptions" 
                :disabled="false" name="countdrop" 
                :maxItem="256" placeholder="" 
                ref="countdropdown" v-on:selected="onCountry" 
                v-bind:class="{ 'is-empty': invalidCountry}">
                </Dropdown>
                </div>
            </div>
        </div>
         <h6 class="headings mt-4">
            BENEFICIARY BANK DATA
        </h6>
        <div class="m-col">
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary Bank Name</label>
                <input type="text" required>
            </div>
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary Bank Address</label>
                <input type="text" required>
            </div>
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary Account number</label>
                <input type="number" @keypress="allowOnlyNumberInput" required>
            </div>
            <div class="bk-row">
                <label> <span class="text-danger">*</span> Beneficiary Account Type</label>
                <select required>
                    <option value="0">--- Select Account Type ---</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Current Account">Current Account</option>
                    <option value="Offshore Account">Offshore Account</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div class="bk-row">
                <label><span class="text-danger">*</span> Beneficiary Account Currency</label>
                <input type="text" required>
            </div>
            <div class="bk-row">
                <label><span class="text-danger">*</span>  Beneficiary Bank SWIFT / IBAN:</label>
                <input type="text" required>
            </div>
        </div>
        <hr>
        <div class="k-row bk-align-right">
            <input type="submit" value="Make Transfer">
        </div>
    </form>
    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';
import Dropdown from "vue-simple-search-dropdown";
import countries from "../utils/countries";


export default {
    name: "WireTransfer",
    title: "Wire Transfer",
    components: {
        SecurityInfo,
        Dropdown
    },
    data() {
        return {
            countryOptions: countries,
        }
    },

    methods: {
        allowOnlyNumberInput(evt){
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
        }
    }

}
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
    background: #F8F8F8;
    border: 1px solid #E4E4E4;
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

.country{
    width: 300px;
}

select {
    background: #F8F8F8;
    border: 1px solid #CCCCCC;
    padding: 7px 2px;
    width: 300px;
}

input[type='submit']{
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    background: #1a2c3a;
    border: none;
    /* box-shadow: inset 0 0 5px rgb(0 0 0 / 10); */
}

.k-row{
    display: flex;
}

</style>
