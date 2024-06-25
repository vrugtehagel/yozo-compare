<template>
	<div
		id="track"
		:class="{ on: props.on }"
		@click="toggle()"
		ref="track"
	>
		<div id="thumb"></div>
	</div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
	on: { type: Boolean },
	name: { type: String },
});

const track = ref(null);
const value = ref(props.on);
watch(value, () => props.on = value.value);
watch(() => props.on, () => {
	value.value = props.on;
	const formValue = props.on ? 'true' : '';
	internals?.setFormValue(formValue);
})

let mounted = false;
let internals = null;
let host = null;
onMounted(() => {
	if(mounted) return;
	mounted = true;
	const root = track.value.getRootNode();
	host = root.host;
	internals = host.attachInternals();
})

function toggle(force){
	props.on = force ?? !props.on;
	console.log(force, props.on);
};

defineExpose({ toggle, value });
</script>
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
		#thumb { translate: 1.5rem 0; }
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
