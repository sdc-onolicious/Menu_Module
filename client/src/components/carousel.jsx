import React from 'react';
import axios from 'axios';
import SingleBox from './singleBox.jsx';
// import rightArrow from '../../dist/photos/right-arrow-circular-button.svg';
// import leftArrow from '../../dist/photos/back-arrow-circular-symbol.svg';

console.log('hello from carousel');
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: [
        'https://resizer.otstatic.com/v2/photos/medium/25544386.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/25595276.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/25954273.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/24195994.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/23671379.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/24732540.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/24094108.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/25012047.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/24489574.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/23688060.jpg'
      ],
      information: [],
    };

    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    console.log('Carousel working!!');
    axios.get('http://localhost:3040/relatedR')
    //on success
      .then((data) => {
        console.log('THIS IS CAROUSEL:', data.data);
        this.setState({
          information: data.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  nextSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;
    // check if we need to start over from the first index
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    // assign the logical index to currentImageIndex that will use in render method
    this.setState({
      currentImageIndex: index
    });
  }


  mouseEnterButton() {
    this.setState({
      mouseOver: true
    });
  }

  mouseExitButton() {
    this.setState({
      mouseOver: false
    });
  }

  render() {
    const styles = {
      base: {
        fontFamily: 'Brandon-Bold, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '32px',
        color: '#2d333f',
        borderBottom: '1px solid #d8d9db',
        paddingBottom: '16px',
        paddingTop: '36px',
        margin: '0 0 0 0',
        display: 'flex',
        justifyContent: 'space-between'
      },
      buttonNext: {
        height: '48px',
        paddingBottom: '32px',
        padding: '16px',
        border: '1px solid #d8d9db',
        textDecoration: 'none',
        fontSize: '16px',
        lineHeight: '1rem',
        width: '18rem',
        fontWeight: 500,
        borderRadius: '2px',
        color: '#2d333f',
        display: 'inline-block',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontFamily: 'Brandon, Lato,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        border: this.state.mouseOver ? '2px solid #da3743' : '1px solid #d8d9db',
        bottom: this.state.mouseOver ? '-1px' : '0px',
        boxShadow: 'rgba(51,51,51,.2) 0 2px 4px',
        margin: '0 auto 32px auto',
        left: '50%',

      }
    };
  
    // get current image index
    const index = this.state.currentImageIndex;
    // create a new array with 3 images from the source images
    let firstThreeVideo = this.state.images.slice(index, index + 2);
    // check the length of the new array (it’s less than 3 when index is near the end of the array)
    if (firstThreeVideo.length < 2) {
    // if the firstThreeVideo's length is lower than 3 images than append missing images from the beginning of the original array 
      firstThreeVideo = firstThreeVideo.concat(this.state.images.slice(0, 2 - firstThreeVideo.length));
    }
 
    return (
      <div className='restaurantContainer' style={{width: '640px', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={styles.base}>Related Restaurants</div>
        <div style={{paddingTop: '36px', paddingBottom: '36px'}}> 
          {firstThreeVideo.map((image, index) =>
            <img key={index} src={image} alt="" width= '360px' height= '360px' transition= 'transform .5s, filter 1.5s ease-in-out' transform= 'scale(1.1)'/>
          )} 
          <SingleBox info={this.state.information}/>
          <button style={styles.buttonNext} onClick={this.nextSlide} onMouseEnter={this.mouseEnterButton.bind(this)} 
            onMouseLeave={this.mouseExitButton.bind(this)} >
           Next Related Restaurants
          </button>
        </div>
      </div>
       
    );
  }
}


export default Carousel;