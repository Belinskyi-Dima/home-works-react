import React from "react";


const modalWindowData = [
	  {
	    id: 1,
	    	header: "Do you want to delete this file?",
			closeButton: true,
			text: "Once you delete this file, it won't be possible to undo this action. Are you sure want to delete it?",
	    description: 'description for modal 1',
			action:  <div className={"modal_body-buttons"}>
							<button  className="btn">Ok</button>
							<button  className="btn">Cancel</button>
	  					</div>
	  },
	  {
	    id: 2,
	    header: "Lorem ipsum dolor sit amet, consectetur",
			closeButton: false,
			text: "Lorem ipsum dolor sit amet, consecteturadipisicing elit. A adipisci, aperiam blanditiisdolores maiores neque rem veritatis.",
	    description: 'description for modal 2',
	action:  <div className={"modal_body-buttons"}>
							<button  className="btn">Ok</button>
							<button  className="btn">Cancel</button>
	  					</div>
	  },
	 {
		    id: 3,
		    header: "vaedvgferasum dolor sit amet, consectetur",
				closeButton: false,
				text: "eaerww ipsum dolor sit amet, consecteturadipisicing elit. A adipisci, aperiam blanditiisdolores maiores neque rem veritatis.",
		    description: 'description for modal 3',
		action:  <div className={"modal_body-buttons"}>
							<button  className="btn">Ok</button>
							<button  className="btn">Cancel</button>
	  					</div>
		  },
	  {
		    id:4,
		    header: " dolor sit amet, consectetur",
				closeButton: false,
				text: "gfhfghrfghyfg Lorem ipsum dolor sit amet, consecteturadipisicing elit. A adipisci, aperiam blanditiisdolores maiores neque rem veritatis.",
		    description: 'description for modal 3',
		action:  <div className={"modal_body-buttons"}>
							<button  className="btn">Ok</button>
							<button  className="btn">Cancel</button>
	  					</div>
		  }
	]
	export default modalWindowData;