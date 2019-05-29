import React from 'react';


// console.log('hello from singlebox');
const SingleBox = (props) => {
  // console.log('this is PROPS FROM SINGLEBOX', props.info);
  // console.log(props.info[1].name);
 
  let individualBox = props.info;
  
  

  // console.log('!!!', props.info);

  const styles = {
    name: {
      fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '24px'
    },
    rating: {
      fontFamily: 'BrandonText,Helvetica Neue,Helvetica,Arial,sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      margin: '0 0 0 .25rem'
    },
    cuisineLocation: {
      fontFamily: 'BrandonText,Helvetica Neue,Helvetica,Arial,sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px'
    }
  };
  
  return (
    <div className="singleBoxContainer">
      <div className="restaurantName" style={styles.name}>{props.info[1].name}</div>
      <div className="rating" style={styles.rating}> <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><title>Star_8_</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="star-full" fillRule="nonzero" fill="#DA3743"><path d="M3.213,15.984 C3.15,15.984 3.109,15.974 3.088,15.953 C2.984,15.89 2.952,15.817 2.994,15.734 L3.87,10.218 L0.083,6.331 C-5.27355937e-16,6.247 -0.021,6.164 0.021,6.08 C0.042,6.017 0.104,5.965 0.209,5.923 L5.465,5.14 L7.781,0.125 C7.864,0.042 7.937,0 8,0 C8.104,0 8.177,0.042 8.219,0.125 L10.566,5.14 L15.792,5.924 C15.875,5.945 15.938,5.997 15.98,6.081 C16.021,6.164 16,6.247 15.917,6.331 L12.131,10.217 L13.038,15.733 C13.038,15.817 13.007,15.89 12.944,15.952 C12.84,16.015 12.756,16.015 12.694,15.952 L8,13.383 L3.338,15.953 C3.317,15.974 3.275,15.984 3.213,15.984 L3.213,15.984 Z" id="Star_8_"></path></g></g></svg>
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><title>Star_8_</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="star-full" fillRule="nonzero" fill="#DA3743"><path d="M3.213,15.984 C3.15,15.984 3.109,15.974 3.088,15.953 C2.984,15.89 2.952,15.817 2.994,15.734 L3.87,10.218 L0.083,6.331 C-5.27355937e-16,6.247 -0.021,6.164 0.021,6.08 C0.042,6.017 0.104,5.965 0.209,5.923 L5.465,5.14 L7.781,0.125 C7.864,0.042 7.937,0 8,0 C8.104,0 8.177,0.042 8.219,0.125 L10.566,5.14 L15.792,5.924 C15.875,5.945 15.938,5.997 15.98,6.081 C16.021,6.164 16,6.247 15.917,6.331 L12.131,10.217 L13.038,15.733 C13.038,15.817 13.007,15.89 12.944,15.952 C12.84,16.015 12.756,16.015 12.694,15.952 L8,13.383 L3.338,15.953 C3.317,15.974 3.275,15.984 3.213,15.984 L3.213,15.984 Z" id="Star_8_"></path></g></g></svg>
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><title>Star_8_</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="star-full" fillRule="nonzero" fill="#DA3743"><path d="M3.213,15.984 C3.15,15.984 3.109,15.974 3.088,15.953 C2.984,15.89 2.952,15.817 2.994,15.734 L3.87,10.218 L0.083,6.331 C-5.27355937e-16,6.247 -0.021,6.164 0.021,6.08 C0.042,6.017 0.104,5.965 0.209,5.923 L5.465,5.14 L7.781,0.125 C7.864,0.042 7.937,0 8,0 C8.104,0 8.177,0.042 8.219,0.125 L10.566,5.14 L15.792,5.924 C15.875,5.945 15.938,5.997 15.98,6.081 C16.021,6.164 16,6.247 15.917,6.331 L12.131,10.217 L13.038,15.733 C13.038,15.817 13.007,15.89 12.944,15.952 C12.84,16.015 12.756,16.015 12.694,15.952 L8,13.383 L3.338,15.953 C3.317,15.974 3.275,15.984 3.213,15.984 L3.213,15.984 Z" id="Star_8_"></path></g></g></svg>
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><title>Star_8_</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="star-full" fillRule="nonzero" fill="#DA3743"><path d="M3.213,15.984 C3.15,15.984 3.109,15.974 3.088,15.953 C2.984,15.89 2.952,15.817 2.994,15.734 L3.87,10.218 L0.083,6.331 C-5.27355937e-16,6.247 -0.021,6.164 0.021,6.08 C0.042,6.017 0.104,5.965 0.209,5.923 L5.465,5.14 L7.781,0.125 C7.864,0.042 7.937,0 8,0 C8.104,0 8.177,0.042 8.219,0.125 L10.566,5.14 L15.792,5.924 C15.875,5.945 15.938,5.997 15.98,6.081 C16.021,6.164 16,6.247 15.917,6.331 L12.131,10.217 L13.038,15.733 C13.038,15.817 13.007,15.89 12.944,15.952 C12.84,16.015 12.756,16.015 12.694,15.952 L8,13.383 L3.338,15.953 C3.317,15.974 3.275,15.984 3.213,15.984 L3.213,15.984 Z" id="Star_8_"></path></g></g></svg>
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1"><title>Star_8_</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="star-full" fillRule="nonzero" fill="#DA3743"><path d="M3.213,15.984 C3.15,15.984 3.109,15.974 3.088,15.953 C2.984,15.89 2.952,15.817 2.994,15.734 L3.87,10.218 L0.083,6.331 C-5.27355937e-16,6.247 -0.021,6.164 0.021,6.08 C0.042,6.017 0.104,5.965 0.209,5.923 L5.465,5.14 L7.781,0.125 C7.864,0.042 7.937,0 8,0 C8.104,0 8.177,0.042 8.219,0.125 L10.566,5.14 L15.792,5.924 C15.875,5.945 15.938,5.997 15.98,6.081 C16.021,6.164 16,6.247 15.917,6.331 L12.131,10.217 L13.038,15.733 C13.038,15.817 13.007,15.89 12.944,15.952 C12.84,16.015 12.756,16.015 12.694,15.952 L8,13.383 L3.338,15.953 C3.317,15.974 3.275,15.984 3.213,15.984 L3.213,15.984 Z" id="Star_8_"></path></g></g></svg> {props.info[1].reviews} reviews</div>
      <div className="cuisine" style={styles.cuisineLocation}>
        {props.info[1].cuisine} <span>&#8226;</span> $$$$ <span>&#8226;</span> {props.info[1].location}
      </div>
    </div>
  );
};

export default SingleBox;