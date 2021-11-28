import React from "react";
import modalWindowData from "./components/modalWindowData";
import Button from "./components/Button/Button";
import './components/Button/Button.scss'
import Modal from "./components/Modal/Modal";
// console.log(Modal);
// import './Modal/Modal.css'

// import './Modal/Modal.scss'

// import "./components/Button.css"

// import logo from './logo.svg';
// import './App.css';
let i = 0;
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalToShow: "none",
			header: "",
			closeButton: "",
			text: "",
	   	description: '',
			action: ''
		}
		this.modalData = modalWindowData;
  }

//   closeModal= (e)=> {
// 	console.log("close modal");
//   }
  openModal= (e) => {
	const id = e.target.dataset.id;
	const modalDeclaration = this.modalData.find(item => item.id === +id)
	
	this.setState({
		modalToShow: "Open",
		 header: modalDeclaration.header,
		closeButton: modalDeclaration.true,
		text:  modalDeclaration.text,
    	description: modalDeclaration.description,
		action: modalDeclaration.action,
		closeButton: modalDeclaration.Button,
	})
  }

  closeModal= (e) => {
	  const target = e.target.className;
	  if(target === "modalOverlay" ||
		target === "modalWindow" ||
		target === "btn-close btn")
	  this.setState({
		modalToShow: "close",
	  })
	
	  console.log(target,"close modal", this.state.modalToShow);
     
  }

  firstModal=() =>{
	
	// console.log( this.modalData);
//   console.log(this.modalData[i]);
 
	// .map((modal)=>{
	// 	console.log(modal.id[0]);
		
	// 	  });
	i++

  }
  secondModal=() =>{
	if (this.firstModal()) {
		i++
	}

  }
  render(){
	  return(
		  <>
		   {/* data-modal-id={this.props.dataModalId} */}
		<Button 
			dataid='1'
			className=" btn btn-first"
			backgroundColor={{background: "#f8ec02"}} 
			text="Open first modal"
			onClick={this.openModal}
			/>

		<Button
		className=" btn btn-second"
		dataid="2"
		backgroundColor={{background: "#54f802"}}
		text="Open second modal"
		// onClick={this.firstModal}/>
		onClick={this.openModal}
		/>
		<Button
		dataid={3}
		className=" btn btn-second"
		backgroundColor={{background:  "#282c34"}}
		text="Open three modal"
		// onClick={this.firstModal}/>
		onClick={this.openModal}
		/>





		{this.state.modalToShow === "Open"  &&
		<Modal
		 onClick={this.closeModal}
		 header={this.state.header}
		 closeButton={this.closeButton}
		 text={this.state.text}
		 description={this.state.description}
		 action={this.state.action}
		 closeButton={this.state.closeButton}
		 /> }
		 
		
		</>
	  )
  }

}
export default App;
