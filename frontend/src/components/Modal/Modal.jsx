import React from "react";
import "./Modal.css"; // Optional custom styling

const Modal = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h2 className="modal-h2">{title}</h2>
				<button className="close-btn" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
