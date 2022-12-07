import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import messiPROFILE from '../../../assets/img/testimonial/Lionel_Messi.jpg'
import neymarPROFILE from '../../../assets/img/testimonial/Neymar_Jr.jpg'
import ronaldoPROFILE from '../../../assets/img/testimonial/Cristiano_Ronaldo.jpg'
import {FaQuoteLeft} from 'react-icons/fa'

export const TestimonialSlider = () => {    
  return (
    <div className="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-sm-10">
            <OwlCarousel loop autoplay items={1} animateIn="flipInX" animateOut="slideOutDown" smartSpeed= "1000" nav dots>
              <div className="single-testimonial item">
                <div className="part-img">
                  <div className="part-pic">
                    <img src={neymarPROFILE} alt="" />
                  </div>
                </div>
                <div className="part-text">
                  <FaQuoteLeft className='icon-for-quot'/>
                  <p>
                    Neymar da Silva Santos Júnior (born 5 February 1992), known
                    as Neymar, is a Brazilian professional footballer who plays
                    as a forward for Ligue 1 club Paris Saint-Germain and the
                    Brazil national team.
                  </p>
                  <span className="position"> Footballer </span>
                  <span className="user-name"> Neymar Jr </span>
                </div>
              </div>
              <div className="single-testimonial item">
                <div className="part-img">
                  <div className="part-pic">
                    <img src={messiPROFILE} alt="" />
                  </div>
                </div>
                <div className="part-text">
                  <FaQuoteLeft className='icon-for-quot'/>
                  <p>
                    Lionel Andrés Messi (born 24 June 1987), also known as Leo
                    Messi, is an Argentine professional footballer who plays as
                    a forward for Ligue 1 club Paris Saint-Germain and captains
                    the Argentina national team.
                  </p>
                  <span className="position"> Footballer </span>
                  <span className="user-name"> Lionel Messi </span>
                </div>
              </div>
              <div className="single-testimonial item">
                <div className="part-img">
                  <div className="part-pic">
                    <img
                      src={ronaldoPROFILE}
                      alt=""
                    />
                  </div>
                </div>
                <div className="part-text">
                    <FaQuoteLeft className='icon-for-quot'/>
                  <p>
                    Ronaldo is a Portuguese given name equivalent to the English
                    Ronald. It became a common name in all Portuguese-speaking
                    countries, being also prevalent in Italy and
                    Spanish-speaking countries.
                  </p>
                  <span className="position"> Footballer </span>
                  <span className="user-name"> Cristiano Ronaldo </span>
                </div>
              </div>
            </OwlCarousel>
            {/* <div className="testimonial-slider owl-carousel owl-theme">
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
