import React from 'react';
import { useSelector } from 'react-redux';
import {
	Route,
	BrowserRouter as Router,
	Routes,
	Navigate,
} from 'react-router-dom';
import AddPost from './pages/AddPost';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

const MainRouter = () => {
	const user = useSelector((state) => state.user.currentUser);

	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					exact
					path="/register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
				<Route exact path="/editor" element={user ? <AddPost /> : <Navigate to={"/login"}/>} />
				<Route exact path="/article/:id" element={<SinglePost />} />
				{/* <Route exact path="/article" element={<SinglePost />} /> */}
			</Routes>
		</Router>
	);
};

export default MainRouter;
