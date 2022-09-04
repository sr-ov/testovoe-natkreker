export const usePageStart = (cb: VoidFunction) => {
	const nuxtApp = useNuxtApp()
	nuxtApp.hook('page:start', cb)
}
