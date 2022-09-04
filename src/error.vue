<script setup lang="ts">
onUnmounted(() => {
	clearError()
})
</script>

<template>
	<NuxtLayout>
		<div class="container">
			<h1 :class="st.text">
				Произошла ошибка попробуйте перезагрузить странницу или зайти позже.
			</h1>
		</div>
	</NuxtLayout>
</template>

<style module="st">
.text {
	font-size: 30px;
	padding: 30px 0;
}
</style>
