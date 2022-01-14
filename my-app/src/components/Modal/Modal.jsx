import React, {useContext,useState} from "react";
import './Modal.scss'
// import Button from "./components/Button/Button.jsx";
import { GlobalContext } from "../context/GlobalState"
import Portal from "../Portal"



const Modal =({closeModal,  text, type,data, results})=>{

	// const [isOpen, setIsOpen] = useState(true);

	// const {basket, addToBasket} = useContext(GlobalContext);


		return (
			<>
			<Portal>
				<div onClick={closeModal} className='modalOverlay'>
					<div className='modalWindow'>
						<div className='modalHeader'>
						
							<button 
								className= "btn-add btn" 
								name='times'>add
							</button>
							<button 
								onClick={closeModal} 
								className= "btn-close btn" 
								name='times'>close
							</button>
							
						</div>
						<div className='modalBody'>
							{text}
						</div>
						{/* <p>{this.props.description}</p> */}
						<div className='modalFooter'>
							{/* {this.props.action}	 */}
						</div>

					</div>
				</div>
			</Portal>
			</>
		)
	}
// }
export default Modal;
 
