import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainClass from './mainClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



// function User(props) {
//   return <h1>Hello, {props.name}</h1>; // Hello, John Doe!
// }

// function Home() {
//   return <User name="John Doe" />
// }

// let person =[
//   {
//     id:23,
//     name:'hari',
//     salaray:20000
//   },
//   {
//     id:34,
//     name:'abi',
//     salaray:50000
//   },
//   {
//     id:345,
//     name:'kamal',
//     salaray: 40000
//   }
// ]

// let Home = ()=>{

// return (
//   <div>
//       {person.map(a => a.salaray>30000 ? <h2 key={a.id}>{a.name}</h2> : null)} 
//   </div>
// );
// }

// class First extends Component{
//   render(){
//     return <div>hello im first</div>
//   }
// }

// class Home extends Component{
//   constructor(){
//     super() //must
//     this.name = 'react';
//     this.getItem = this.getItem.bind(this)
//   }
//   // getItem = () =>{
//   //   console.log('getdata', this)  // this accessable arrow fn
//   // } /

//   getItem() {
//     console.log('getdata', this);
//   }
  
//   render(){
//     console.log('this', this);
//     return <div>class{this.name}
//       <button onClick={this.getItem}>get</button>
//       <MainClass/>
//     </div>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //<Home/>

 <MainClass/> 

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
