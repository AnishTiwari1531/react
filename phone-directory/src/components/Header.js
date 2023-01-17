// functional component 
import React from 'react';
import "../styles/Styles.css"

const Header = (props) => {

    // styling using a variable in functional component
    //const headerStyle = { textAlign: "center", padding: 20, background: "#000", color: "#fff", textTransform: "uppercase" }

    return (
        // inline styling in JSX
        // <div style={{ textAlign: "center", padding: 20, background: "#000", color: "#fff", textTransform: "uppercase" }} className='header'>
        //     Phone Directory
        // </div>

        // connected with the varaiable of the render part
        // <div style={headerStyle}>
        //     Phone Directory
        // </div>

        <div className='header'>
            {props.heading}
        </div>
    )
}

export default Header;


// class component
// import React, { Component } from 'react'

// class Header extends Component {
//     render() {
//         return (
//             <div className='header'>
//                 {this.props.heading}
//             </div>
//         )
//     }
// }

// export default Header
