<template>
    <nav class="navbar fixed-bottom  navbar-light" style="background-color: #def1eb;">
    <span class="navbar-text mr-auto">
        <strong>vuejsegitim.com</strong> | buketnurastan
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger" style="opacity:0.5;">{{getTradeResult.purchase | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success" style="opacity:0.5">{{getTradeResult.sale | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary" style="opacity:0.5">{{getTradeResult.balance | currency}}</span>
    </span>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    computed : mapGetters(["getTradeResult"]),

}

</script>
