import Vue from "vue";
import ProductList from "./components/products/ProductList.vue";
import ProductSell from "./components/products/ProductSell.vue";
import ProductPurchase from "./components/products/ProductPurchase.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path : "/", component : ProductList},
    { path : "/urun-islemleri", component : ProductPurchase},
    { path : "/urun-cikisi", component : ProductSell},
    { path : "*", redirect : "/"}

];

export const router = new VueRouter({
    mode : "history",
    routes
});