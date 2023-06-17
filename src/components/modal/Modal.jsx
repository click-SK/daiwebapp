import React from 'react';
import '../../style/modal.scss';

const Modal = ({ handleClose, show }) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";

	const handleCloseOnOverlay = (e) => {
		if (e.target.className === showHideClassName) {
			handleClose();
		}
	};
	return (
		<div className={showHideClassName} onClick={handleCloseOnOverlay}>
			<section className='modal-main'>
				<button onClick={handleClose}>Close</button>
			</section>
		</div>
	);
};

export default Modal;
