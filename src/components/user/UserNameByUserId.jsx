import { useFetch } from 'src/hooks/useFetch';
import { API_URL } from 'src/utils/const';

export const UserNameByUserId = (props) => {
	const { data, error, isLoading } = useFetch(props.id ? `${API_URL}/users/${props.id}` : null);

	if (isLoading) {
		return <div>ローディング中</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return <div className="text-lg">Creted By {data.name}</div>;
};
