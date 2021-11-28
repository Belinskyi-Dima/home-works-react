import React from "react";
import './Modal.scss'
// import Button from "./components/Button/Button.jsx";

import Portal from "../Portal"

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true,
		}
	}
	
	render () {
		return (
			<>
			<Portal>
				<div onClick={this.props.onClick} className='modalOverlay'>
					<div className='modalWindow'>
						<div className='modalHeader'>
							<h2 className="title">{this.props.header}</h2>
							<button onClick={this.props.onClick} className= "btn-close btn" name='times'>close</button>

						</div>
						<div className='modalBody'>
							{this.props.text}
						</div>
						<p>{this.props.description}</p>
						<div className='modalFooter'>
							{this.props.action}	
						</div>

					</div>
				</div>
			</Portal>
			</>
		)
	}
}
export default Modal;
 
