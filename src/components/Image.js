import React from 'react';

const Image = (image) => {
    console.log(image);
    return (
        <div className="card col-lg-5 col-md-12 m-4" >
            <h1>{image.image.city}</h1>
            <p>{image.image.state}</p>
            <img id="image" src={image.image.url} alt={image.image.city}/>
        </div>
    );
};

export default Image;
