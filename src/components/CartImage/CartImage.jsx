import { PureComponent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Arrows,
  ArrowWrap,
  Image,
  ImageWrap,
} from './cart-image.style';
import arrow from '../../assets/images/arrow.svg';

class CartImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };
  }

  setNextImage = length => {
    if (this.state.currentImage === length - 1) {
      this.setState({
        currentImage: 0,
      });
    } else {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
  };

  setPrevImage = length => {
    if (this.state.currentImage === 0) {
      this.setState({
        currentImage: length - 1,
      });
    } else {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
  };

  render() {
    const { images } = this.props;
    return (
      <ImageWrap>
        <Image src={images[this.state.currentImage]} alt="" />
        {images.length > 1 && (
          <Arrows>
            <ArrowWrap onClick={() => this.setPrevImage(images.length)}>
              <ArrowLeft src={arrow} alt="" />
            </ArrowWrap>
            <ArrowWrap onClick={() => this.setNextImage(images.length)}>
              <ArrowRight src={arrow} alt="" />
            </ArrowWrap>
          </Arrows>
        )}
      </ImageWrap>
    );
  }
}

export default CartImage;
