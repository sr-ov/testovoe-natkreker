<script setup lang="ts">
import { IMovie } from '@/types'

interface Props {
	movies: IMovie[]
}

defineProps<Props>()

const currentMovie = useCurrentMovie()

const setCurrentMovie = (movie: IMovie) => {
	const isSame = currentMovie.value === movie
	!isSame && (currentMovie.value = movie)
}
</script>

<template>
	<ul>
		<li :class="st.item" v-for="movie in movies" :key="movie.id">
			<MovieCard
				:class="st.card"
				:id="movie.id"
				:poster="movie.poster"
				:title="movie.title"
				:description="movie.description"
				:actors="movie.actors"
				:genres="movie.genres"
				:directors="movie.directors"
				:year="movie.year"
				:collapse="movie.collapse"
				@set-current-movie="setCurrentMovie(movie)"
			></MovieCard>
		</li>
	</ul>
</template>

<style module="st" lang="scss">
@media (any-hover: hover) {
	.item:hover .card {
		transform: translate(0 /* X */, -8px /* Y */);
		box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
	}
}
.item:not(:last-child) {
	margin-bottom: 24px;
}
.card {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	transition: transform 0.3s, box-shadow 0.3s;
}
</style>
