import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgDetail from './ImgDetail';

const Images = (props) => {
    const [infourl, setInfourl] = useState({city: '', state: ''});
    const [detail, setDetail] = useState({});

    useEffect(()=> {
        console.log("hooks running...")
        viewDetails();
    }, [infourl]);

    const viewDetails = async() => {
        console.log('view details running...')
        const url = "http://localhost:7000/viewDetails/" + infourl.city + "/" + infourl.state;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setDetail({
                city: data.city,
                state: data.state,
                url: data.url,
                abstract: data.body.stops[0].wikipedia.abstract,
                population: data.body.stops[0].wikipedia.population
            });
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ImgDetail detail={detail}/>
                </div>
                {props.images.map(image => (
                    <div className="card col-lg-5 col-md-12 m-4" key={image.url}>
                        <h3>{image.city}</h3>
                        <hr/>
                        <p>{image.state}</p>
                        <img id="image" src={image.url} alt={image.city}/>
                        <button onClick={()=>setInfourl({city: image.city, state: image.state})}>View</button>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Images;
