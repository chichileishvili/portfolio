import Slider from 'react-slick'

import CSSIcon from '../../assets/css3.svg'
import React from 'react'
import { SliderContainer, SlidersContainer } from './TechSkill.styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TechSkils = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    vertical: true,
    arrows: false,

    // cssEase: 'linear',
  }
  return (
    <SlidersContainer>
      <SliderContainer>
        <Slider {...settings}>
          <div></div>
          <div>
            <img src={CSSIcon} alt='' height='100' width='100' />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </SliderContainer>

      <SliderContainer>
        <Slider {...settings}>
          <div></div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </SliderContainer>
      <SliderContainer>
        <Slider {...settings}>
          <div></div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </SliderContainer>
    </SlidersContainer>
  )
}

export default TechSkils
