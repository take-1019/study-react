import { useRouter } from 'next/router';
import PostListByUserId from 'src/components/Post/PostListByUserId';
import { useFetch } from 'src/hooks/useFetch';
import { API_URL } from 'src/utils/const';
import { fetcher } from 'src/utils/fetcher';

export const UserDetail = () => {
	const router = useRouter();
	const { data, error, isLoading } = useFetch(router.query.id ? `${API_URL}/users/${router.query.id}` : null, fetcher);

	if (isLoading) {
		return <div>ローディング中</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<h1 className="font-bold text-3xl">{data.name}</h1>
			<h2 className="text-xl font-bold mt-10">詳細</h2>
			<ul className="list-inside list-disc mt-2 text-xl">
				<li>メール：{data.email}</li>
				<li>アカウント名：{data.username}</li>
				<li>住所：{data.address.city}</li>
				<li>電話番号：{data.phone}</li>
			</ul>
			<h2 className="text-xl font-bold mt-10">投稿</h2>
			<div className="mt-2">
				<PostListByUserId id={data.id} />
			</div>
		</div>
	);
};

export default UserDetail;
