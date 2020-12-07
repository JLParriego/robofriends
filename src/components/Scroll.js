import React from 'react';
//{{}}object inside JSX expression
const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>


    )

}

export default Scroll;