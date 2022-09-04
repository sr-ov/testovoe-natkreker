import isEmpty from 'lodash.isempty'

import { IMovie } from '@/types'
import { getMovie } from '@/api'

export const useMovie = async (): Promise<IMovie> => {
	const currentMovie = useCurrentMovie()

	if (!isEmpty(currentMovie.value)) {
		return currentMovie.value
	}

	const { params } = useRoute()
	const { data: movie } = await useAsyncData(`movie-${params.movie}`, () =>
		getMovie(params.movie as string)
	)

	return movie.value
}
