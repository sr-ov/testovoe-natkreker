import { watch, type Ref } from 'vue'

export const useBodyScrollLock = (value: Ref<boolean>) => {
	if (!process.client) return

	const isLocked = useScrollLock(document.body)
	watch(value, (newValue) => {
		isLocked.value = newValue
	})
}
