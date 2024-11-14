import React from 'react';
import '../../src/';

const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} alt={`Gallery item ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;