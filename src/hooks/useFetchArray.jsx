import { fetcher } from 'src/utils/fetcher';
import useSWRImmutable from 'swr/immutable';

export const useFetchArray = (url) => {
	const { data, error } = useSWRImmutable(url, fetcher);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEmpty: data && data.length === 0,
	};
};
