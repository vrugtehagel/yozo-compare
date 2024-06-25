<svelte:options
	customElement={{
		tag: 'click-counter',
		props: {
			amount: { reflect: true, type: 'Number' }
		}
	}}
/>

<script>
export let amount = 0;
export function reset(){
	amount = 0;
}
</script>

<button on:click={() => amount++}>
	clicks: { amount }
</button>

<style>
button {
	padding: .75rem 1.5rem;
	border: none;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: .75rem;
	color: #181823;
	background-color: #FFB86C;
	cursor: pointer;
}
</style>
