<template>
<div class="online-container">
    <div class="bk-breadcrumb mb-2">
        <div class="bk-row small-gap">
            <small class="bread-item">Profile</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Online Statement</small>
        </div>
    </div>
    <form class="row" action="">
        <div class="col-md-4 pt-1">
            <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Enter date FROM">
        </div>
        <div class="col-md-4 pt-1">
            <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Enter date TO">
        </div>
        <div class="col-md-3 mt-2">
            <input type="submit" value="Get Statement">
        </div>
    </form>
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

    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';

export default {
    name: 'OnlineStatement',
    title: 'Online Statement',
    components: {
        SecurityInfo
    },

}
</script>

<style scoped>
form {
    border: 1px solid var(--bk-deep-gray);
    padding: 8px 5px
}

.row {
    margin-right: 0;
    margin-left: 0;
}

input {
    background: #F8F8F8;
    border: 1px solid #E4E4E4;
    padding: 7px;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 14px;
    width: 100%;
}

input[type='submit'] {
    /* margin: 0;
    height: 26px;
    line-height: 26px;
    padding: 0px 10px; */
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    background: #1a2c3a;
    border: none;
    width: 70%;
    margin: auto;
}
</style>
