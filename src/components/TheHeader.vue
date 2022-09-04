<script setup lang="ts"></script>

<template>
	<header :class="st.header">
		<NuxtLink :class="st.link" to="/">#movienow</NuxtLink>
	</header>
</template>

<style module="st" lang="scss">
.header {
	min-height: 100px;
	background: var(--c-red);
	box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 576px) /* mobile */ {
		min-height: 60px;
	}
}
.link {
	font-weight: 700;
	font-size: 48px;
	line-height: 48px;
	letter-spacing: 0.21em;
	text-transform: uppercase;

	@media (max-width: 576px) /* mobile */ {
		font-size: 30px;
		line-height: 30px;
	}
}
</style>
