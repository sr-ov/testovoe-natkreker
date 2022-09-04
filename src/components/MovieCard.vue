<script setup lang="ts">
import DurationIcon from '@/assets/icons/duration.svg'

interface Props {
	id: number
	poster: string
	title: string
	description: string | null
	actors: string[] | null
	genres: string[]
	directors: string[] | null
	year: number
	collapse: {
		duration: string[] | null
	}
}

defineProps<Props>()
const emit = defineEmits<{
	(e: 'setCurrentMovie'): void
}>()

const route = useRoute()
const isIndexPage = computed(() => route.name === 'index')
</script>

<template>
	<div :class="st.card">
		<div :class="st.img">
			<img
				src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
				alt="постер фильма"
			/>
		</div>
		<div :class="st.info">
			<div :class="st.duration" v-if="collapse.duration">
				<span>{{ collapse.duration?.join(' ') }}</span>
				<DurationIcon />
			</div>

			<NuxtLink
				:class="st.title"
				v-if="isIndexPage"
				:to="`/${id}`"
				@click="emit('setCurrentMovie')"
			>
				{{ title }}
			</NuxtLink>
			<h1 :class="st.title" v-else>
				{{ title }}
			</h1>

			<div :class="st.year_genre">{{ year }}, {{ genres?.join(', ') }}</div>
			<div :class="st.director" v-if="st.director">
				режиссёр: {{ directors?.join(', ') }}
			</div>
			<div :class="st.actors" v-if="st.actors">
				<span :class="st.actors_label">Актёры:</span>
				{{ actors?.join(', ') }}
			</div>
			<div :class="st.desc" v-if="description">
				{{ description }}
			</div>
		</div>
	</div>
</template>

<style module="st" lang="scss">
.card {
	display: grid;
	grid-template-columns: 168px 1fr;
	background-color: #4d4747;

	@media (max-width: 576px) /* mobile */ {
		display: block;
	}
}
.img {
	background-color: #c4c4c4;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 576px) /* mobile */ {
		position: relative;
		padding-top: 55%;
	}

	img {
		width: 112px;
		height: 168px;
		display: block;

		@media (max-width: 576px) /* mobile */ {
			object-fit: cover;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
		}
	}
}
.info {
	padding: 32px 24px;
	position: relative;
	overflow: hidden;

	@media (max-width: 768px) /* tablet_sm */ {
		padding: 20px;
	}
	@media (max-width: 576px) /* mobile */ {
		padding: 20px 15px;
	}
}
.duration {
	position: absolute;
	top: 28px;
	right: 0;
	z-index: 1;
	clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
	background-color: #c4c4c4;
	padding: 3px 24px 3px 18px;
	font-weight: 700;
	font-size: 12px;
	line-height: 1;
	text-transform: uppercase;
	color: #000000;
	display: flex;
	align-items: center;
	gap: 5px;

	@media (max-width: 768px) /* tablet_sm */ {
		top: 0;
	}

	@media (max-width: 576px) /* mobile */ {
		position: static;
		margin-bottom: 10px;
		background: transparent;
		padding: 0;
		clip-path: none;
		color: #988f8f;
	}
}
.title {
	font-weight: 700;
	font-size: 36px;
	line-height: 36px;
	color: #ffffff;
	display: inline-block;
	margin-bottom: 12px;

	@media (max-width: 768px) /* tablet_sm */ {
		font-size: 26px;
		line-height: 26px;
	}
	@media (max-width: 576px) /* mobile */ {
		font-size: 22px;
		line-height: 22px;
	}
}
.year_genre,
.director,
.actors_label {
	font-weight: 700;
	font-size: 12px;
	line-height: 12px;
	text-transform: uppercase;
	color: #988f8f;
}
.year_genre,
.director {
	margin-bottom: 8px;
}
.actors {
	font-size: 12px;
	line-height: 16px;
	color: #e5e5e5;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 6px;
	align-items: baseline;

	@media (max-width: 768px) /* tablet_sm */ {
		display: block;
	}
}
.desc {
	font-size: 16px;
	line-height: 20px;
	color: #ffffff;
	margin-top: 16px;
}
</style>
