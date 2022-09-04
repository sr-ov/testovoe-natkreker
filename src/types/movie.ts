export interface IMovie {
	id: number
	poster: string
	title: string
	actors: string[]
	genres: string[]
	directors: string[]
	year: number
	description: string | null
	collapse: {
		duration: string[] | null
	}
}
