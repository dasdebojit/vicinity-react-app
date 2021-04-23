import React, {useEffect, useState} from 'react';
import Images from './components/Images';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

// set default state and url
const defImgurl = "https://farm66.staticflickr.com/65535/48720121266_027076f0bf_n.jpg",
    defState = "assam",
    url = "http://localhost:7000/searchbyurl/";

const App = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState({url: defImgurl, state: defState});

    // form submits => query changed => useEffect() runs => getNearImage() fetches data => component renders
    useEffect(() => {
        getNearImages(query.url, query.state);
    }, [query]);

    const getNearImages = async(imgurl, state) => {
        try{
            const requestParams = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({url:imgurl, state: state})
            };
            const response = await fetch(url, requestParams);
            const data = await response.json();
            setImages(data.res);
            console.log(data.res);
        } catch(err){
            console.log(err);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery({url: e.target.elements.url.value, state: e.target.elements.state.value});
    }

    return (
        <div className="App">
            <Header />
            <div className="container">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" name="url" placeholder="Enter url here"/>
                    <input type="text" name="state" placeholder="Enter state here"/>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
            <Images images={images} />
        </div>
    );
};


export default App;


