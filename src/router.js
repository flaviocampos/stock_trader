import Vue from 'vue'
import Router from 'vue-router'

import Home from './componentes/Home'
import Portfolio from './componentes/portfolio/Portfolio.vue'
import Stocks from './componentes/stocks/Stocks'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})






