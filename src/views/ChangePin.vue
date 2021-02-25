<template>
<div class="change-container">
    <div class="bk-breadcrumb mb-2">
        <div class="bk-row small-gap">
            <small class="bread-item">Profile</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Change Pin</small>
        </div>
    </div>
    <hr>
    <h3 class="mt-3">Change Login PIN</h3>
    <div class="row">
        <div class="col-md-6">
            <h6 class="headings">
                INFORMATION
            </h6>
            <p class="text-bold">To change your Online Banking User PIN:</p>
            <ul>
                <li class="liest-item">Login to your account using your current User ID and Password</li>
                <li class="liest-item">Select the Change Log In PIN from My Account Menu</li>
                <li class="liest-item">Enter your desired new User PIN</li>
                <li class="liest-item">Confirm your new User PIN</li>
                <li class="liest-item">Click change PIN button</li>
            </ul>
        </div>
        <div class="col-md-6">
            <h6 class="headings">
                CHANGE LOGIN PIN
            </h6>

            <form class="bk-col bk-gap-1-5">
                <!-- <div class="bk-col">
                    <label for="pin">Current PIN:</label>
                    <input type="text" name="pin" id="pin" readonly placeholder="Current PIN">
                </div> -->
                <div class="bk-col">
                    <label for="pnin">New PIN:</label>
                    <input type="text" name="npin" id="npin" placeholder="New PIN">
                </div>
                <div class="bk-col">
                    <label for="cpin">Confirm New PIN:</label>
                    <input type="text" name="cpin" id="cpin" placeholder="Confirm PIN">
                </div>
                <input type="submit" value="Change PIN">
            </form>
        </div>
    </div>
    <div class="space">

    </div>
    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';

export default {
    name: 'ChangePin',
    title: 'Change Pin',
    components: {
        SecurityInfo
    },
}
</script>

<style scoped>
hr {
    margin: 2px 0;
    border-color: rgb(243, 239, 239);
}

.headings {
    width: 100%;
    background-color: var(--bk-gray);
    padding: 3px 5px;
    font-size: 0.95rem;
}

.text-bold {
    font-weight: bold;
    font-size: 0.8rem;
    padding-left: 10px;
}

.liest-item {
    list-style-type: decimal;
    font-size: 0.8rem;
}

.col-md-6 ul {
    padding: 0 20px;
    margin-left: 10px;
}

label{
    font-size: 0.8rem;
    margin-bottom: 0;
    font-weight: bold;
}

input{
    background: #F8F8F8;
    border: 1px solid #E4E4E4;
    padding: 7px;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 14px;
    border-radius: 2px;
}

input[type='submit']{
    width: 50%;
    margin: auto;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    background: #1a2c3a;
    border: none;
    -webkit-box-shadow: inset 0px 0px 5px rgb(0 0 0 / 10%);
    -moz-box-shadow: inset 0 0 5px rgba(0, 0, 0, .10);
    box-shadow: inset 0 0 5px rgb(0 0 0 / 10%);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}


</style>
