import { useState } from "react";
import sty from "./page.module.css";

const ImageSlider = ({slides}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    const slideStyles = slides[currentIndex] && slides[currentIndex].url ? {
        width: "775px",
        height: "477px",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:`url("${slides[currentIndex].url}")` 
      } : null;
      
    //   console.log("hello");
    //   console.log(slides[currentIndex].url);

    const leftArrowStyles = {
        position: 'absolute',
        top:'50%',
        transform: 'translate(0,-50%)',
        left:'32px',
        fontSize:'45px',
        color:'#fff',
        zIndex:1,
        cursor:"pointer",
    }
    const rightArrowStyles = {
        position: 'absolute',
        top:'50%',
        transform: 'translate(0,-50%)',
        right:'1%',
        fontSize:'45px',
        color:'#fff',
        zIndex:1,
        cursor:"pointer",
    }
    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
        width: "105%",
    };
    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0 
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div className={sty.sary} style={sliderStyles}>
          <div style={leftArrowStyles} onClick={goToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div style={rightArrowStyles} onClick={goToNext}>
            <i className="fas fa-chevron-right"></i>
          </div>
          {slides && slides.length > 0 && (
            <div style={slideStyles}></div>
          )}
          <div style={dotsContainerStyles}>
            {slides && slides.map((slide, slideIndex) => (
              <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>
                <i className="fas fa-circle"></i>
                {/* <img src={slide.url} alt="X" /> */}
              </div>
            ))}
          </div>
        </div>
      );
};
export default ImageSlider;