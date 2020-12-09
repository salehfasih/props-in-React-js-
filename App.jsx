//  import React, { Component } from 'react';


//  class App extends Component {
   
//    state={
//      value:"",
//     todos:[]
  
//   }

//   handleChange=(e)=>{
//     this.setState({
//       value :e.target.value,
//           // id: 1 + Math.random(), 
//     })

//     // console.log(this.state.value);
//   }
//   list=()=>{
//     return(
//       <>
//       {}
      
//       </>
//     )
//     }

//    display=()=>{
//        const newItem = {
//     id: 1 + Math.random(),
//     value: this.state.value
//   };
//        this.setState()
//       //  const newTodo =this.state.value
//       //  console.log(value);
//           //copy current list of items
//      const list = [...this.state.todos];

//      //add new item to the list
//    list.push(newItem);
//       this.setState({
//         value:""
//       })

//     }
   
// deleteItem(id) {
//   console.log(id);
//   //copy list
//   const list = [...this.state.todos];

//   //filter out deleted object
//   //remember that the list (each object) gets assigned a value and id when its added to list
//   const updatedList = list.filter(item => item.id !== id);

//   //update state
//   this.setState({ list: updatedList });
// }
  
//   render() {
//     // {console.log(this.state.todos)}
//     return (
      
//       <div>
    
//          <input type="text"  value={this.state.value} onChange={this.handleChange} />
//          <button onClick={this.display}>add</button>
         
//         {
//           this.state.todos.map((todo)=>{
//             return(
//               <div>
//                 <li key={todo.id}>
//                 {todo.value}
//                 <button onClick={() => this.deleteItem(todo.id)}>X</button>
//                 </li>
//               </div>
//             )
//           })
//         }
//         <ul>
//          {}
//         </ul>
        
//       </div>
//     );
//   }
// }

// export default App;


// 2nd todo app


// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newItem: "",
//       list: []
//     };
//   }

//   //this is for the onChange (updates state) - everytime the user types something, the updateInput function will run
//   //with two inputs (key and value which corresponds to newItem object and the string (which is event.target.value))
//   //updateInput then updates the newItem state.
//   updateInput(key, value) {
//     this.setState({
//       [key]: value
//     });
//   }


//   addItem() {
//     //create the new item with unique id
//     //so a state object itself can be assigned new objects to it
//     const newItem = {
//       id: 1 + Math.random(),
//       value: this.state.newItem
//     };

//     //copy current list of items
//     const list = [...this.state.list];

//     //add new item to the list
//     list.push(newItem);
//     console.log(list)

//     //update state with new list and reset new item
//     this.setState({
//       list,
//       newItem: ""
//     });
//   }

//   deleteItem(id) {
//     console.log(id);
//     //copy list
//     const list = [...this.state.list];

//     //filter out deleted object
//     //remember that the list (each object) gets assigned a value and id when its added to list
//     const updatedList = list.filter(item => item.id !== id);

//     //update state
//     this.setState({ list: updatedList });
//   }

//   render() {
//     return (
//       <div className="App">
//         <div>Add an Item</div>
//         <br />
//         <input
//           type="text"
//           placeholder="type the item here"
//           //once the input is entered, the object will be assigned a value = user's input
//           //we also need this value later for the list also
//           value={this.state.newItem}
//           onChange={e => this.updateInput("newItem", e.target.value)}
//         />
//         <button onClick={() => this.addItem()}>Add</button>
//         <br />
//         <ul>
//           {this.state.list.map(item => {
//             return (
//               <li key={item.id}>
//                 {item.value}
//                 <button onClick={() => this.deleteItem(item.id)}>X</button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       newItem: "",
//      list: []
//     }
//   }
//    updateInput(key, value) {
//      this.setState({
//        [key]: value
//      });
//        }
//     // console.log(this.state.value)
  
  
//   display=()=>{
//     const newItem = {
//          id: 1 + Math.random(),
//            value: this.state.newItem
           
//          };
//         //  console.log(newItem.value);
//   // const list=[...this.state.list];
//   // list.push[newItem];
//   console.log(newItem);
//   this.setState({
//     value:"",
//   })

// console.log(list)
// }



       
  

//   render() {
//     return (
//       <div>

// <input type="text"      placeholder="please enter your todo"   value={this.state.value} onChange={e=>this.updateInput("newItem",e.target.value)} />
// <button  onClick={this.display}>add</button>
        
//       </div>
//     );
//   }
// }
// import { Description } from '@material-ui/icons';
// import React from 'react'
// // import Img from './images/img5.jpg'

// const App=()=> {

  // const name=["1st ","2nd","3rd"];
  //  const  newNames= name.map((names)=>{
  //   return  <h1>{names}</h1>
    
  // })

  
// const Book=()=>{
//   return(
//     <div>
//    <Image></Image>
//    <Title></Title>
//    <Author></Author>
//    </div>
//   )
// }
//     const Image=()=> <img  src="https://images-na.ssl-images-amazon.com/images/I/91r5UtdC7tL._AC_UL320_SR246,320_.jpg" />
//    const Title=()=> <p>my name  us sualeh</p>
//    const   Author =()=><p>hello deae</p>
    

import React from 'react'

// import React from 'react'

function App() {
  const array=[{
    id:1,
    img:"https://images-na.ssl-images-amazon.com/images/I/91r5UtdC7tL._AC_UL320_SR246,320_.jpg",
    title:"If Animals Kissed Good Night",
       Author:"Ann Whitford Paul"

},

{
  id:2,
  img:"https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL160_SR160,160_.jpg" ,
     title:"The Very Hungry Caterpillar" ,
       Author:"Eric Carle" 
}]
  return (
    <div>
      {array.map((value,index)=>{
        return(
         <Book key={value.id}  {...value}  ></Book>
        )
      })}
      
    </div>
  )
}

const Book=({img,title,Author})=>{
  return(
  <div>
    
  <h1>{title}</h1>
    <img src={img} alt=""/>
  <p>{Author}</p>
  
  
  </div>
  )
}

export default App


// export default App

