import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChannelAnalytics from "./Pages/Auth/ChannelAnalytics";
import ChannelPage from "./Pages/Auth/ChannelPage";
import DashboadHome from "./Pages/Auth/ChannelRequest/DashboadHome";
import HomePage from "./Pages/Auth/HomePage";
import ProfilePage from "./Pages/Auth/ProfilePage";
import SingleVideo from "./Pages/Auth/SingleVideo";
import Login from "./Pages/Guest/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard-home" element={<DashboadHome />} />
				<Route path="/video/:id" element={<SingleVideo />} />
				<Route path="/analytics/:id" element={<ChannelAnalytics />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/channel" element={<ChannelPage />} />
				<Route path="/dashboard" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
