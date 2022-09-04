<script setup lang="ts">
import { getMovies } from '@/api'
import { IMovie } from '@/types'

interface Props {}

defineProps<Props>()

const { data: movies } = await useAsyncData(getMovies)
if (movies.value === null) {
	throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const {
	setSortKey,
	sortedArray: sortedMovies,
	sortKey,
} = useSort<IMovie>({
	arrToSort: movies.value,
	initialSortKey: '',
})
</script>

<template>
	<main class="main">
		<div class="container">
			<h1 :class="st.title">Фильмы</h1>
			<UiTopWrapper :class="st.sort">
				<UiButtonCheckbox @click="setSortKey('title')" :active="sortKey === 'title'">
					Отсортировать по названию
				</UiButtonCheckbox>
				<UiButtonCheckbox @click="setSortKey('year')" :active="sortKey === 'year'">
					Отсортировать по году
				</UiButtonCheckbox>
			</UiTopWrapper>

			<MovieCardList :movies="sortedMovies" />
		</div>
	</main>
</template>

<style module="st" lang="scss">
.title {
	font-weight: 500;
	font-size: 32px;
	line-height: 32px;
	color: #ffffff;
	margin-bottom: 16px;

	@media (max-width: 576px) /* mobile */ {
		font-size: 26px;
		line-height: 26px;
		margin-bottom: 10px;
	}
}
.sort {
	display: flex;
	align-items: center;
	gap: 32px;

	@media (max-width: 576px) /* mobile */ {
		flex-direction: column;
		align-items: start;
		gap: 0;
	}
}
</style>
