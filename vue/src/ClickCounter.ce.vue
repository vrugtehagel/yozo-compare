<template>
	<button @click="props.amount++">
		clicks: {{ props.amount }}
	</button>
</template>
<script setup>
const props = defineProps({
	amount: { type: Number, default: 0 },
});

const reset = () => {
	props.amount = 0;
};

defineExpose({ reset });
</script>
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
