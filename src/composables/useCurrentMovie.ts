import { IMovie } from '@/types'

export const useCurrentMovie = () =>
	useState<IMovie>('currentMovie', () => ({} as IMovie))
