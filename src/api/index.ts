import axios from 'axios'

import { API_URL } from '@/constants'
import { IMovie } from '@/types'

type ResponseData<Movie> = { success: true; data: Movie }

const api = axios.create({
	baseURL: API_URL,
})

export const getMovies = async () => {
	const { data } = await api.get<ResponseData<IMovie[]>>('movies')

	return data.data
}

export const getMovie = async (movieId: string) => {
	const { data } = await api.get<ResponseData<IMovie>>(`movie/${movieId}`)

	return data.data
}
