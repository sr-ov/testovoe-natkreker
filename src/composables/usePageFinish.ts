export const usePageFinish = (cb: VoidFunction) => {
	const nuxtApp = useNuxtApp()
	nuxtApp.hook('page:finish', cb)
}
