import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './SliderStyle.css'

const slides = [
  {
    title:'First slide label',
    description:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    price:234,
    imgSrc : 'https://clickthis.blog/wp-content/uploads/2022/03/samsung-galaxy-a23-wallpapers.webp',
    imgAlt:'First slide'
  },
  {
    title:'Second slide label',
    description:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    price:123,
    imgSrc : 'https://clickthis.blog/wp-content/uploads/2022/03/samsung-galaxy-a23-wallpapers.webp',
    imgAlt:'Second slide'
  },
  {
    title:'Third slide label',
    description:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    price:456,
    imgSrc : 'https://clickthis.blog/wp-content/uploads/2022/03/samsung-galaxy-a23-wallpapers.webp',
    imgAlt:'Third slide'
  }
]
function Slider() {
  return (
    <Carousel variant="dark">
      {slides.map((slide)=>{
        return <Carousel.Item>
        <div className='d-flex justify-content-around'>
          <Carousel.Caption>
            <h2 className='mb-4 text-start'>{slide.title}</h2>
            <p className='mb-4 text-start'>{slide.description}</p>
            <p className='mb-0 pb-0 text-start'>from</p>
            <h1 className='text-start mt-0 ms-1'>${slide.price}</h1>
            <div className='text-start'>
              <Button outline type='submit'  className='mt-4 btn-warning text-white'>
                  Start Buying
                </Button>
            </div>
            
          </Carousel.Caption>
          <img
            className="w-50"
            src={slide.imgSrc}
            alt= {slide.alt}
          />
        </div>
      </Carousel.Item>

      })}
    </Carousel>
  );
}

export default Slider;