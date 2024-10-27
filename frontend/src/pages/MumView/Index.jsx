import React from "react";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
const Index = () => {
	return (
		<>
			<div className="container-fluid view min-vh-100 d-flex flex-column">
				{/* Header */}
				<header className="  bg-light py-2">
					<div className="d-flex justify-content-between">
						<h1>Week 37</h1>
						<Header />
					</div>
				</header>

				{/* Main Content */}
				<div className="row flex-grow-1">
					{/* Sidebar */}
					<aside className="col-md-2 bg-light p-3 d-flex flex-column collapse collapse-horizontal show">
						<Sidebar />
					</aside>
					{/* Button to toggle the sidebar on smaller screens */}
					<button
						className="btn btn-primary d-md-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#sidebar"
						aria-expanded="false"
						aria-controls="sidebar"
					>
						Toggle Sidebar
					</button>
					<main className="col-md-10">
						<div className="hero row align-items-center d-flex flex-row">
							{/* Image Section */}
							<div className="col-md-6">
								<h2 className="py-2">Nanaa Section</h2>
								<div className="picture-box">
									<img
										src="../../../img/cutebaby.jpg"
										className="img-fluid rounded mx-auto d-block custom-image"
									/>
								</div>
							</div>

							{/* Baby Data Section */}
							<div className="col-md-6">
								{/* Heart Rate */}
								<div className="heart-rate mb-4">
									<h2 className="rate-label">Baby's heart rate:</h2>
									<p className="rate-value text-danger">
										<FontAwesomeIcon icon={faHeart} /> 124 bpm
									</p>
								</div>

								{/* Trend Table */}
								<div className="heart-rate-trend">
									<h2 className="trend-label">Trend:</h2>
									<table className="table table-bordered table-striped">
										<thead className="thead-dark">
											<tr>
												<th>Period</th>
												<th>Monday</th>
												<th>Tuesday</th>
												<th>Wednesday</th>
												<th>Thursday</th>
												<th>Friday</th>
												<th>Saturday</th>
												<th>Sunday</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>123</td>
												<td>123</td>
												<td>123</td>
												<td>123</td>
												<td>123</td>
												<td>123</td>
												<td>123</td>
											</tr>
										</tbody>
									</table>

									{/* Analysis Section */}
									<div className="analysis mt-3">
										<p>
											<strong>Condition:</strong> None
										</p>
										<p>
											<strong>Doctor's Comment:</strong> Good
										</p>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>

				{/* Footer */}
				<footer className="row bg-dark text-white py-3 mt-4">
					<div className="col text-center">
						<Footer />
					</div>
				</footer>
			</div>
		</>
	);
};
export default Index;
