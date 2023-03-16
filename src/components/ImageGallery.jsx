import React from "react";
import { images } from "./images";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import './ImageGallery.css'

const ImageGallery = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  return (

    <>

     <div className="section-divider"></div>
     <div>
      <div className="row general-gallery">
        {images &&
          images.map((image, id) => (
            <div className="col-lg-3 col-6 col-md-4"  key={id}
            >
              <div className="gallery-card">
                <img
                  className="image-gal gallery-card-image"
                  onClick={() => showImage(image)}
                  src={image}
                />

                <button
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="modal-search"
                >
                  <BiSearch />
                </button>
              </div>
            </div>
          ))}
      </div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </div>
    </>
  );
};

export default ImageGallery;