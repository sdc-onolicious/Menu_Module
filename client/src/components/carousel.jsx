import React from 'react';
import axios from 'axios';
import SingleBox from './singleBox.jsx';
// import rightArrow from '../../dist/photos/keyboard-right-arrow-button.svg';
// import leftArrow from '../../dist/photos/left-arrow-key.svg';

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
        'https://resizer.otstatic.com/v2/photos/medium/23687221.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/23671379.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/23671632.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/24094108.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/25012047.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/23673519.jpg',
        'https://resizer.otstatic.com/v2/photos/medium/23688060.jpg'
      ],
      information: []
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
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

  prevSlide() {
    // find the index of the last image in the array
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
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
    
    let myComponent;
    if (this.state.information) {
      myComponent = <SingleBox info={this.state.information}/>;
    } else {
      myComponent = null;
    }
 
    return (
      <div className='restaurantContainer' style={{width: '640px', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={styles.base}>Related Restaurants</div>
        <div style={{paddingTop: '36px', height: '100px', marginRight: '.5rem'}} > 
          {firstThreeVideo.map((image, index) =>
            <img key={index} src={image} alt=""/>
          )} 
          {myComponent}
        </div>
      </div>
       
    );
  }
}


export default Carousel;