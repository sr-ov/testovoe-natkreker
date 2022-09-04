<script setup lang="ts">
import ArrowLeftIIcon from '@/assets/icons/arrow-left.svg'

const movie = await useMovie()
</script>

<template>
	<main class="main">
		<div class="container">
			<UiTopWrapper>
				<NuxtLink :class="st.link" to="/">
					<ArrowLeftIIcon /> Назад к списку
				</NuxtLink>
			</UiTopWrapper>
			<MovieCard
				v-if="movie"
				:id="movie.id"
				:poster="movie.poster"
				:title="movie.title"
				:description="movie.description"
				:actors="movie.actors"
				:genres="movie.genres"
				:directors="movie.directors"
				:year="movie.year"
				:collapse="movie.collapse"
			></MovieCard>

			<div :class="st.not_found" v-else>
				К сожалению, по вашему запросу ничего не найдено...
			</div>
		</div>
	</main>
</template>

<style module="st">
.link {
	padding: 10px 0;
	display: inline-flex;
	align-items: center;
	gap: 18px;
	font-size: 20px;
	line-height: 20px;
	text-decoration-line: underline;
	color: var(--c-red-light);
}
.not_found {
	font-weight: 500;
	font-size: 32px;
	line-height: 32px;
	color: #ffffff;
}
</style>
