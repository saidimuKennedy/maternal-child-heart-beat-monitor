import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
	return (
		<section className="content-box">
			<ul className="upper">
				<li>
					<Link to="/">Mother's view</Link>
				</li>
				
				<li>
					<Link to="/docView">Doctor's view</Link>
				</li>
				<li>
					<Link href="#">999</Link>
				</li>
			</ul>
			<ul className="lower">
				<li>
					<Link href="#">about us</Link>
				</li>
				<li>
					<Link href="#">contact us......</Link>
				</li>
			</ul>
		</section>
	);
};

export default Sidebar;
