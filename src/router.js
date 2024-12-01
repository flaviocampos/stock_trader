import Vue from 'vue'
import Router from 'vue-router'

import Home from './componentes/Home'
import Portfolio from './componentes/portfolio/Portfolio.vue'
import Sobre from './componentes/Sobre'
import Equipe from './componentes/sobre/Equipe'
import Historia from './componentes/sobre/Historia'
import Stocks from './componentes/stocks/Stocks'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
        {
            path: '/sobre',
            component: Sobre,
            children: [
                { path: 'equipe', component: Equipe },
                { path: 'historia', component: Historia }
            ]
        },
    ]
})






