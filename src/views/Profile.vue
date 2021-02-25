<template>
<div class="profile-container">
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
    <div class="heading">
        <p>Last Login: | February 25 2021, 9:17pm </p>
    </div>
    <div class="head-container">
        <h6 class="a-head">OTHER DETAILS</h6>
    </div>
    <table class="mb-5">
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
    <div class="head-container">
        <h6 class="a-head a-head-2">SECURITY INFORMATION</h6>
    </div>
    <SecurityInfo />
</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';

export default {
    name: 'Profile',
    title: 'View Profile',
    components: {
        SecurityInfo
    },
    methods: {

    },
    mounted() {

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

</style>
