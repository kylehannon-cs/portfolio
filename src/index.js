import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


//function MyApp() {
//
//	return (<ul>
//				<li> 1 </li>
//				<li> 2 </li>
//				<li> 3 </li>
//				<li> 4 </li>
//			</ul>
//		)
//}

function MyInfo() {

	return( 
		<div> 
		<h1 style={{color:'red'}}>Kyle Hannon's Computer Science Portfolio </h1>
		<p>I am a student at Oregon State University - Cascades and am persuing a computer science degree</p>
		<p> This site is under construction. Please come back soon </p>
		</div>
		)

}




ReactDOM.render(<MyInfo/>, document.getElementById('root'))