import React, { useEffect, useState } from "react";
import "./DocView.css";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
const DocView = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/patients")
			.then((response) => {
				setPatients(response.data);
			})
			.catch((error) => {
				console.error("Error fetching patients:", error);
			});
	}, []);

	return (
		<>
			<div className="container-fluid view min-vh-100 d-flex flex-column">
				{/* Header */}
				<header className="bg-light py-2">
					<div className="d-flex justify-content-between">
						<h1>Patient View</h1>
						<Header />
					</div>
				</header>

				{/* Main content */}
				<div className="row flex-grow-1">
					{/* Sidebar */}
					<aside
						className="col-md-2 bg-light p-3 d-flex flex-column collapse collapse-horizontal show"
						id="sidebar"
					>
						<Sidebar />
					</aside>

					{/* Button to toggle the sidebar on smaller screens */}
					<button
						className="btn btn-primary d-md-none btn-sm"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#sidebar"
						aria-expanded="false"
						aria-controls="sidebar"
					>
						Toggle Sidebar
					</button>

					<main className="col-md-10">
						<div className="Hero">
							{/* Patient Information */}
							<div className="Hero-image bg-white p-3 mb-4 rounded shadow-sm">
								<h2>Patient X</h2>
								<div>
									<div className="age">
										<p>
											<strong>Age:</strong> 28 yrs
										</p>
									</div>
									<div className="health-condition">
										<p>
											<strong>Existing Condition:</strong> Diabetes
										</p>
									</div>
									<div className="medication">
										<p>
											<strong>Medication:</strong> Insulin
										</p>
									</div>
								</div>
							</div>

							{/* Heart rate and patient data */}
							<div className="b-data">
								<div className="heart-rate bg-white p-3 mb-4 rounded shadow-sm">
									<h2 className="label">Day reading: </h2>
									<p className="rate display-4 text-primary">124 bpm</p>
								</div>

								<div className="patient-data bg-white p-3 rounded shadow-sm">
									{/* Patient trend data */}
									<table className="table table-bordered trend-values">
										<thead className="thead-light">
											<tr>
												<th>Week</th>
												<th>Name</th>
												<th>Age</th>
												<th>Sex</th>
												<th>Temp</th>
												<th>Pressure</th>
											</tr>
										</thead>
										<tbody>
											{patients.map((patient) => (
												<tr key={patient._id}>
													<td className="week">Week 36</td>
													<td>{patient.patients}</td>
													<td>{patient.age}</td>
													<td>{patient.gender}</td>
													<td>{patient.temp}</td>
													<td>{patient.pressure}</td>
												</tr>
											))}
										</tbody>
									</table>

									{/* Analysis */}
									<div className="analysis mt-4">
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

export default DocView;
