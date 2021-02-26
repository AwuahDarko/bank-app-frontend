<template>
<div class="dashboard-container">
    <div class="bk-breadcrumb mb-2">
        <div class="bk-row small-gap">
            <small class="bread-item">Profile</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Account Profile</small>
        </div>
    </div>
    <h4 class="name">Mr. Glenn Jens</h4>
    <div class="info-box">
        <p class="te"> <strong class="info-label">Date of Birth:</strong> July 15, 2829</p>
        <p class="te"> <strong class="info-label">Country:</strong> GHANA</p>
        <p class="te"> <strong class="info-label">Occupation:</strong> Self-Employed</p>
    </div>
    <div class="bk-row mt-3">
        <div class="bk-row bk-align-center bk-gap-1">
            <p class="p-t mr-4">Current Balance: </p>
            <div class="btn-cart">
                $3,399,737.00
            </div>
        </div>
    </div>
    <hr>
    <div class="heading">
        <p>Last Login: | February 25 2021, 9:17pm </p>
    </div>
    <div class="head-container">
        <h6 class="a-head">ACCOUNT</h6>
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
    <div class="head-container mt-5">
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
    <div class="head-container">
        <h6 class="a-head a-head-2">SECURITY INFORMATION</h6>
    </div>
    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';

export default {
    name: "Dashboard",
    title: "Dashboard",
    components: {
        SecurityInfo
    }
}
</script>

<style scoped>
.name {
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--bk-gray);
    font-size: 1.1rem;
}

p {
    margin-bottom: 0;
    font-size: 0.9rem;
}

.te {
    font-size: 0.85rem;
}

.info-label {
    font-size: 0.85rem;
}

.info-box {
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--bk-gray);
}

.heading {
    width: 100%;
    height: 40px;
    background-color: var(--bk-gray);
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
}

.heading p {
    font-size: 0.8rem;
}

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

.p-t {
    margin-bottom: 0;
    font-size: 0.8rem;
    font-weight: bold;
    padding-top: 10px;
}
</style>
