<template>
  <div>
    <h1>Hello {{ msg }}!</h1>
    <img src="assets/img/vue.png">
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods: {

	}
}
</script>
