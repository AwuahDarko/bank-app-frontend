<template>
<div class="summary-container">
    <div class="bk-breadcrumb mb-2">
        <div class="bk-row small-gap">
            <small class="bread-item">Online Money Transfer</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Transfer Summary</small>
        </div>
    </div>
    <hr>
    <h3 class="mt-3">Transfer Summary</h3>
    <p class="bold">Make local and cross-border payments with SCBC Internet
        Banking Secure funds transfer services. Transfer
        funds across the world quickly, with minimum paperwork or hassle.</p>
    <p>A summary of your details has been shown below.
        <strong>Note: </strong> SCBC Internet Banking will not be liable for misinformation provided by the sender</p>

    <table class="mb-2">
        <thead>
            <tr>
                <th class="left-b">Item</th>
                <th class="right-b">Details</th>
            </tr>
        </thead>
        <tr>
            <td class="left-b"> <strong>Gender</strong> </td>
            <td class="right-b">Male</td>
        </tr>
        <tr>
            <td class="left-b"> <strong>Phone</strong></td>
            <td class="right-b">4354655664</td>
        </tr>
        <tr>
            <td class="left-b"> <strong>Address</strong> </td>
            <td class="right-b">ds dffew der3r</td>
        </tr>
        <tr>
            <td class="left-b"><strong>Email</strong></td>
            <td class="right-b">Male@hshs.cmj</td>
        </tr>
    </table>
    <form>
        <div>
            <input id="privacy" type="checkbox" required>
            <label for="privacy">I have read and agree to the Privacy Policy</label>
        </div>
        <div class="bk-row bk-align-right bk-gap-1">
            <button class="btn-b-black" type="submit">Proceed</button>
            <button class="btn-blue">Go Back</button>
            <button class="btn-red">Cancel Transfer</button>
        </div>
    </form>
    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';
// https://www.scbc-intl.com/account/transfer-summary?transfer=598900256
export default {
    name: 'TransferSummary',
    title: 'Transfer Summary',
    components: {
        SecurityInfo
    }
}
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
