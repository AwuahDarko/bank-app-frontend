<template>
<div class="internal-container">
    <div class="bk-breadcrumb mb-2">
        <div class="bk-row small-gap">
            <small class="bread-item">Online Transfer</small> <i class="fa small-icon fa-angle-double-right"></i>
            <small class="bread-item">Internal Transfer</small>
        </div>
    </div>
    <hr>
    <h3 class="mt-3">Internal Transfer</h3>
    <p>This account is not configured to make internal transfers.
        To activate internal transfers, use the (Get In Touch) form below to make a request.</p>
    <div class="space"></div>
    <SecurityInfo />

</div>
</template>

<script>
import SecurityInfo from '../components/SecurityInfo';

export default {
    name: 'InternalTransfer',
    title: 'Internal Transfer',
    components: {
        SecurityInfo
    }
}
</script>

<style scoped>
p {
    font-size: 0.85rem;
}
</style>
