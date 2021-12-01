import React from "react";
import modalWindowData from "./components/modalWindowData";
import Button from "./components/Button/Button";
import './components/Button/Button.scss'
import Modal from "./components/Modal/Modal";
import Card from "./components/Card";
import "./components/Card.css"
import Product from "./components/productlist/productList.jsx";
// import list from "./components/list.json"
// console.log(Modal);
// import './Modal/Modal.css'

// import './Modal/Modal.scss'

// import "./components/Button.css"

// import logo from './logo.svg';
// import './App.css';
// let i = 0;
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalObject: {},
			modalToShow: "none",
			// arrayProduct:[]

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
		modalObject:{...modalDeclaration}
// 		 header: modalDeclaration.header,
// 		closeButton: modalDeclaration.true,
// 		text:  modalDeclaration.text,
//     	description: modalDeclaration.description,
// 		action: modalDeclaration.action,
// 		closeButton: modalDeclaration.Button,
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
	// i++

  }
  secondModal=() =>{
	if (this.firstModal()) {
		// i++
	}

  }

// console.log(this.state.arrayProduct);
  render(){
	  return(
		<>
		  
		  {/* <Button  */}
		{/* // 	dataid='1'
		// 	className=" btn btn-first"
		// 	backgroundColor={{background: "#f8ec02"}} 
		// 	text="Open first modal"
		// 	onClick={this.openModal}
		// 	/>
		 */}
		<Card></Card> 

		
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
