import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddPost from './pages/AddPost';
import Homepage from './pages/Homepage';
import Login from './pages/Login'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/login" element={<Login/>} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/editor" element={<AddPost />} />
				<Route exact path="/article/:id" element={<SinglePost />} />
				<Route exact path="/article" element={<SinglePost />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;
