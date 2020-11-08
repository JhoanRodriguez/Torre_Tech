import './App.css';
import React from 'react';
import Header from './Components/Header';
import Resume from "./Components/Resume"
import Footer from "./Components/Footer"
import "./Components/Styles.css"

function App() {
	return (
		<React.Fragment>
			<Header />
			<Resume />
			<Footer />
		</React.Fragment >
	);
}

export default App;
