<script setup lang="ts">
const isLoading = ref(true)

useBodyScrollLock(isLoading)

usePageStart(() => {
	isLoading.value = true
})
usePageFinish(() => {
	isLoading.value = false
})
</script>

<template>
	<UiSpinner :active="isLoading" />
</template>

<style scoped>
/*  */
</style>
