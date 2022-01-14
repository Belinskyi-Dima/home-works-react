import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './components/Button/Button.scss'
import { Header } from "./components/Header";
import { Wishlist } from "./components/Wishlist";
import { All }  from "./components/Add";
import { Basket } from "./components/Basket";
import { GlobalProvider } from './components/context/GlobalState.jsx';
import "./App.scss";


		
		function App() {
			const[results, setResults] = useState([]);
		
// console.log(results);
	useEffect(()=> {
			async function fetchData(){
				const cartResponse = await fetch('list.json')
		.then((respons)=> respons.json())
		.then((data) =>{
			// console.log(data);
			if(!data.errors) {
				setResults(data);
							
			} else {
				setResults([]);
					
				}
		})
		}
		fetchData()
	},[])


		return (
			 <GlobalProvider>
				 <Router>	
					<Header />
					
					<Routes>
						<Route exact path="/" element={ 
							<All results={results} />
					  }/>

						 <Route path="/wishlist" element={
							<Wishlist 
							results={results}
							// onFavorite={onFavorite}
							/>
						 }/>

						 <Route path="/basket" element={
							<Basket dat={results}/> 
						 }/>
						 </Routes>
			
				 </Router>
		 </GlobalProvider>
			 
			 
				);
			 }
			 
			 export default App;
			