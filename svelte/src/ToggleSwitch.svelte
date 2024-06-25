<svelte:options
	customElement={{
		tag: 'toggle-switch',
		props: {
			on: { reflect: true, type: 'Boolean' },
			name: { reflect: true, type: 'String' },
		},
		extend: CustomElementConstructor => {
			return class extends CustomElementConstructor {
				static formAssociated = true;

				internals = this.attachInternals();
			}
		}
	}}
/>

<script>
export let on = false;
export let value = false;
export let internals;

$: {
	value = on;
	const formValue = on ? 'true' : '';
	internals.setFormValue(formValue);
}

const setOn = value => on = value;
$: setOn(value);

export function toggle(force){
	on = force ?? !on;
}

</script>

<div
	id="track"
	class:on={on}
	on:click={() => toggle()}
>
	<div id="thumb"></div>
</div>

<style>
:host {
	display: inline-block;
	line-height: 0;
	cursor: pointer;
}
#track {
	width: 2.5rem;
	height: 1rem;
	padding: .25rem;
	background-color: #38314b;
	border-radius: 1rem;
	transition: background-color .2s;
	&.on {
		background-color: #7080B0;
		& #thumb { translate: 1.5rem 0; }
	}
}
#thumb {
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background-color: #F8F8F2;
	transition: translate .2s;
}
</style>
