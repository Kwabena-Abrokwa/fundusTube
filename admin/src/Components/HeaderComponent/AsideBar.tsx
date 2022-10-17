import React from "react";
import { useLocation } from "react-router-dom";

interface AsideBarProps {}

const AsideBar: React.FC<AsideBarProps> = () => {
	const { pathname } = useLocation();

	return (
		<aside className="bg-gray-100 h-screen flex-row justify-center items-center fixed overflow-scroll w-1/6 pt-10">
			
		</aside>
	);
};

export default AsideBar;
