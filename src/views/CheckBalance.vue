<template>
<div class="check-container">
    <div class="bk-breadcrumb mb-2">
        <div class="bk-row small-gap">
            <small class="bread-item">Profile</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Check Balance</small>
        </div>
    </div>
    <hr>
    <h3 class="mt-3">Check Balance</h3>
    <hr>
    <div class="bk-row bk-align-right mt-2 mb-3">
        <div class="bk-row bk-align-center bk-gap-1">
            <p>Current Balance</p>
            <div class="btn-cart">
                $3,399,737.00
            </div>
        </div>
    </div>
    <div class="head-container">
        <h6 class="a-head a-head">ACCOUNT</h6>
    </div>
    <table class="mb-5">
        <thead>
            <tr>
                <th class="left-b">Item</th>
                <th class="right-b">Details</th>
            </tr>
        </thead>
        <tr>
            <td class="left-b"> <strong>Account Name</strong> </td>
            <td class="right-b">Male</td>
        </tr>
        <tr>
            <td class="left-b"> <strong>Account Number</strong></td>
            <td class="right-b">4354655664</td>
        </tr>
        <tr>
            <td class="left-b"> <strong>Account Type</strong> </td>
            <td class="right-b">ds dffew der3r</td>
        </tr>
        <tr>
            <td class="left-b"><strong>Account Currency</strong></td>
            <td class="right-b">Male@hshs.cmj</td>
        </tr>
    </table>
    <div class="head-container">
        <h6 class="a-head a-head-2">RECENT TRANSACTIONS</h6>
    </div>
    <table class="mb-5">
        <thead>
            <tr>
                <th class="left-b">#</th>
                <th class="right-bb">Date</th>
                <th class="right-bb">Type</th>
                <th class="right-bb">Amount</th>
                <th class="right-bb">Charge</th>
                <th class="right-bb">Balance</th>
                <th class="right-bb">Refernce Number</th>
                <th class="right-b">Description</th>
            </tr>
        </thead>
        <tr>
            <td class="left-b"> <strong>1</strong> </td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">4354655664</td>
            <td class="right-b">Male</td>
        </tr>
        <tr>
            <td class="left-b"> <strong>2</strong></td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">Male</td>
            <td class="right-bb">4354655664</td>
            <td class="right-b">4354655664</td>
        </tr>
    </table>
    <div class="space"></div>
    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';

export default {
    name: 'CheckBalance',
    title: 'Check Balance',
    components: {
        SecurityInfo
    }
}
</script>

<style scoped>
.btn-cart {
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    background: #1a2c3a;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
    min-width: 100px;
    border-radius: 2px;
}

p {
    margin-bottom: 0;
    font-size: 0.85rem;
    font-weight: bold;
    padding-top: 10px;
}

hr {
    margin: 2px 0;
    border-color: rgb(243, 239, 239);
}
</style>
