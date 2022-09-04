import { computed, ref, UnwrapRef } from 'vue'
import orderBy from 'lodash.orderby'

type KeysOrEmptyStr<T> = keyof T | ''

interface IParams<T> {
	initialSortKey?: KeysOrEmptyStr<T>
	arrToSort: T[]
}

export const useSort = <T>({ arrToSort, initialSortKey = '' }: IParams<T>) => {
	const sortKey = ref<KeysOrEmptyStr<T>>(initialSortKey)

	const setSortKey = (newSortKey: KeysOrEmptyStr<T>) => {
		const prevSortKey = sortKey.value
		const isSameKeys = prevSortKey === newSortKey
		sortKey.value = isSameKeys ? '' : (newSortKey as UnwrapRef<keyof T>)
	}

	const sortedArray = computed(() => {
		return !sortKey.value ? arrToSort : orderBy(arrToSort, [sortKey.value], ['asc'])
	})

	return {
		sortedArray,
		setSortKey,
		sortKey,
	}
}
