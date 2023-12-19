<script>
	import Header from './Header.svelte';
	import { Router, Route, Link } from 'svelte-routing';
  import Home from './Home.svelte';
  import Login from './Login.svelte';
</script>
<main>
	<Header />
</main>
<Router>
	<Route path="/Home" component={Home} />
	<Route path="/login" component={Login} />
</Router>

<style>
	main {
		text-align: center;
	}

	@media (min-width: 768px) {
		main {
			max-width: 100%;
		}
	}
</style>