import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://w3farid.cfapps.io/'
axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Accept'] = 'application/json'

axios.get('/')
	.then(function (response) {
		alert(response.data)
	})

/* eslint-disable-next-line no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
