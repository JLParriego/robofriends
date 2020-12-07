import React from "react";

/*
- Write JSX code inside return()
- Call robohash API
- Return only returns one element
- Apply tachyons classes to the div className (css)
- Add props id, name and email to the card (dynamic source of data {})
- Destructure the props:
    const name = props.name
    const email = props.email
    const id = props.id
is equivalent to:
    const { name, email, id } = props;

and equivalent to instead of use:
        const Card = (props) => {
        const { name, email, id } = props;
use this:
         const Card = ({name, email, id})   

         */

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
