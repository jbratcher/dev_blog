/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Modules

import Vue from 'vue';
import VueRouter from 'vue-router';
import Editor from 'v-markdown-editor';
import VueMarkdown from 'vue-markdown';

Vue.use( VueRouter );
Vue.use( Editor );
Vue.use( VueMarkdown );

// Styles

import 'v-markdown-editor/dist/index.css';

// Views

import App from './views/App';
import Home from './views/Home';
import Blog from "./views/Blog";
import BlogPost from "./views/BlogPost";
import Create from "./views/Create";
import Portfolio from "./views/Portfolio";
import PortfolioItem from "./views/PortfolioItem";
import Tutorials from "./views/Tutorials";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import EditPost from "./views/EditPost";
import EditPortfolioItem from "./views/EditPortfolioItem";

// Global components

Vue.component('global-header', require('./views/GlobalHeader').default);
Vue.component('global-footer', require('./views/GlobalFooter').default);
Vue.component('vue-markdown', require('vue-markdown').default);

// Router

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },
        {
            path: "/blog/view/:post_slug/:post_id",
            name: "blog-post",
            component: BlogPost,
            props: true,
        },
        {
            path: "/blog/create",
            name: "create",
            component: Create
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio
        },
        {
            path: '/portfolio/view/:portfolio_item_slug/:portfolio_item_id',
            name: "portfolio-item",
            component: PortfolioItem,
            props: true,
        },
        {
            path: "/tutorials",
            name: "tutorials",
            component: Tutorials
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin
        },
        {
            path: '/blog/edit/view/:post_slug/:post_id',
            name: "edit-post",
            component: EditPost,
            props: true,
        },
        {
            path: '/portfolio/edit/view/:portfolio_item_slug/:portfolio_item_id',
            name: "edit-portfolio-item",
            component: EditPortfolioItem,
            props: true,
        },
    ]
})

// Global Mixins

Vue.mixin({
    /**
     * Caution: Global mixins affect ever Vue instance and can have unexpected consequences.
     * Only use in for certain use cases like custom option handling.
    */
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {
        App,
        Admin
    },
    router,
});
