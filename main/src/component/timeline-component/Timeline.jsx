import React, { useState } from 'react';
import { useEffect } from 'react';
import ArticleCard from '../ArticleCard';
import { publicRequest } from '../../utils/AxiosInstance';
import { Link } from 'react-router-dom';
import Error401 from '../error-notice/Error401';

const Timeline = () => {
	const [article, setArticle] = useState([]);

	useEffect(() => {
		const getArticle = async () => {
			try {
				const res = await publicRequest.get(`/articles`);
				setArticle(res.data.data);
				console.log(res.data)
			} catch (err) {}
		};
		getArticle();
	}, []);
	return (
		<div className="grow">
			{article.length < 1 && (
					<Error401 />
			)}
			{article?.map((item, index) => (
				<div key={index + 1}>
					<Link to={`/article/${item._id}`}>
						<ArticleCard data={item}/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Timeline;
