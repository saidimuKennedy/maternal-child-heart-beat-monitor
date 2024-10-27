import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthModals from "../Modal/AuthModals";

const Header = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const labels = [
		// { label: "login", path: "/login" },
		// { label: "register", path: "/register" },
	];
	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<>
			<AuthModals />
		</>
	);
};

export default Header;
