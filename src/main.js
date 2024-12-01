import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import './plugins/vuetify'

import router from './router'
import store from './store/store'
Vue.config.productionTip = false

Vue.filter(
	'currency', value => {
		return 'R$ ' + value.toLocaleString()
	}
)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
