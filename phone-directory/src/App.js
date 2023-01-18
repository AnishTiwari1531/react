import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {

  // let contacts = [{
  //   id: 1,
  //   name: "Anish",
  //   phone: "8888888888"
  // },
  // {
  //   id: 2,
  //   name: "Soumya",
  //   phone: "9999999999"
  // }]

  // deleteHandler(message) {
  //   alert(message);
  // }
  // sum of two elements using normal variable form the input tag with default value;
  // let x = 1;
  // let y = 2;

  constructor() {
    super();
    this.state = {
      contactsListToShow: []
    }
  }
  render() {
    return (

      // normal phone directory
      // <div>
      //   <div className='header'>
      //     Phone Directory
      //   </div>
      //   <button>Add</button>
      //   <div>
      //     <span>Name</span><br />
      //     <span>Phone</span>
      //   </div>


      //   {/* <label htmlFor='name'>Name:</label>
      // //   <input id='name' type="text" placeholder="Type here" defaultValue={x + y}></input> */}

      // </div>

      // JSX Code getting coverted into Javascript Both are doing the same thing 

      // <div id='module'>
      //   <p>React Js</p>
      // </div>

      // React.createElement("div", { id: "module" },
      //   React.createElement("p", null, "React Js")
      // )


      // <>
      //   <h1>Welcome to React</h1>
      //   <div>Hi</div>
      // </>
      <div>
        <Header heading="Phone Directory" />

        <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span>
            <span className='grid-item phone-heading'>Phone</span>
          </div>

          {/* <div className='grid-container'>
          <span className='grid-item'>Anish</span>
          <span className='grid-item'>8888888888</span>
        </div>

        <div className='grid-container'>
          <span className='grid-item'>Soumya</span>
          <span className='grid-item'>9999999999</span>
        </div> */}

          {
            // contacts.map(sub => {
            this.state.contactsListToShow.map(sub => {
              return <div key={sub.id} className='grid-container'>
                <span className='grid-item'>{sub.name}</span>
                <span className='grid-item'>{sub.phone}</span>
                <span className='grid-item action-btn-container'>
                  {/* <button className='custom-btn delete-btn' onClick={deleteHandler.bind(this, 'You clicked delete.')}>Delete</button> */}
                  <button className='custom-btn delete-btn'>Delete</button>
                </span>
              </div>
            })
          }

        </div>
      </div>
    );
  }
}


export default App;
