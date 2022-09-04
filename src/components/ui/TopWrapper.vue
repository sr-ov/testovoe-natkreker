<template>
	<div :class="st.top_wrapper">
		<slot></slot>
	</div>
</template>

<style module="st">
.top_wrapper {
	margin-bottom: 40px;
	padding-bottom: 10px;
	border-bottom: 1px solid #c4c4c4;
}
</style>
