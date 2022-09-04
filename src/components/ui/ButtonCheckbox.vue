<script setup lang="ts">
import CheckedIcon from '@/assets/icons/checked.svg'

interface Props {
	active: boolean
}

defineProps<Props>()
</script>

<template>
	<button :class="[st.button, { [st.active]: active }]">
		<span :class="st.checked">
			<CheckedIcon />
		</span>
		<span :class="st.text">
			<slot></slot>
		</span>
	</button>
</template>

<style module="st" lang="scss">
.button {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	padding: 10px 0;
}
.button.active .checked {
	border: 1px solid var(--c-red-light);
	background-color: var(--c-red-light);

	svg {
		opacity: 1;
	}
}
.checked {
	border: 1px solid #c4c4c4;
	height: 15px;
	width: 15px;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		opacity: 0;
	}
}
.text {
	font-size: 16px;
	line-height: 16px;
	color: #c4c4c4;

	@media (max-width: 576px) /* mobile */ {
		font-size: 13px;
		line-height: 13px;
	}
}
</style>
