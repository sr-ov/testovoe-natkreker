<script setup lang="ts">
interface Props {}

// defineProps<Props>()
</script>

<template>
	<Transition
		:enter-from-class="$style['fade-enter']"
		:enter-active-class="$style['fade-enter-active']"
		:leave-active-class="$style['fade-leave-active']"
		:leave-to-class="$style['fade-leave-to']"
	>
		<slot></slot>
	</Transition>
</template>

<style module>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
