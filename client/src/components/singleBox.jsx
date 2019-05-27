import React from 'react';


console.log('hello from singlebox');
const SingleBox = (props) => {
  const styles = {
    
  };

  console.log('this is PROPS FROM SINGLEBOX', props.info);

  return (
    <div className="singleBoxContainer">
      <div className="restaurantName">{props.info.name}</div>
      <div className="cuisine">{props.info.cuisine}</div>
      <div className="rating">{props.info.reviews}</div>
      <div className="location">{props.info.location}</div>
    </div>
  );
};

export default SingleBox;