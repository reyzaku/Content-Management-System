import React, { useState } from 'react';
import { useEffect } from 'react';
import ArticleCard from '../ArticleCard';
import { publicRequest } from '../../utils/AxiosInstance';
import { Link } from 'react-router-dom';
import Error401 from '../error-notice/Error401';

const Timeline = () => {
	const [article, setArticle] = useState([]);

	// useEffect(() => {
	// 	const getArticle = async () => {
	// 		try {
	// 			const res = await publicRequest.get(`/articles`);
	// 			setArticle(res.data);
	// 			console.log(article)
	// 		} catch (err) {}
	// 	};
	// 	getArticle();
	// }, []);
	return (
		<div className="grow">
			{article.length < 1 && (
					<Error401 />
			)}
			{article.map((item, index) => (
				<div key={index + 1}>
					<Link to={`/article/${item._id}`}>
						<ArticleCard />
					</Link>
				</div>
			))}
		</div>
	);
};

export default Timeline;
