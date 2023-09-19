import { useEffect, useState } from "react";
import api from "../utils/api";

function Picture(props) {

    console.log(props);
    
    return (<div>
        <img src={props.src} alt="image"/>
        {props.id}</div> 
    )
}

function ImageView() {

    const [listImage, setListImage] = useState([]);

    useEffect(() => {
        api(null).get('').then((res) => {
            setListImage(res.data.hits);
        }
        ).catch((err) => {
            console.log(err);
        });
    }, []);



    return (
        <div>
            <ul>
                {listImage.map((item) => ( 
                    <li>1{item.id}</li>
                ))}
            </ul>
        </div>
    );
}


export default ImageView;

