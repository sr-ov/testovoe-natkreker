<script setup lang="ts"></script>

<template>
	<div :class="st.wrapper">
		<TheHeader />
		<slot></slot>
	</div>
</template>

<style module="st" lang="scss">
.wrapper {
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}
</style>
