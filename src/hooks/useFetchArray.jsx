import { API_URL } from 'src/utils/const';
import { fetcher } from 'src/utils/fetcher';
import useSWRImmutable from 'swr/immutable';

const useFetchArray = (url) => {
	const { data, error } = useSWRImmutable(url, fetcher);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEmpty: data && data.length === 0,
	};
};

export const usePosts = () => {
	return useFetchArray(`${API_URL}/posts`, fetcher);
};

export const usePostsByUserId = (id) => {
	return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null, fetcher);
};

export const useCommetnsByPostId = (id) => {
	return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null, fetcher);
};

export const useCommetns = () => {
	return useFetchArray(`${API_URL}/comments`, fetcher);
};

export const useUsers = () => {
	return useFetchArray(`${API_URL}/users`, fetcher);
};
