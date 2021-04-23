import React from 'react';

const ImgDetail = (props) => {
    if(props != null){
        return(
            <div className="container card">
                <h3>{props.detail.city}</h3>
                <p>{props.detail.state}</p>
                <img src={props.detail.url} alt={props.detail.city}/>
                <p>{props.detail.population}</p>
                <p>{props.detail.abstract}</p>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default ImgDetail;