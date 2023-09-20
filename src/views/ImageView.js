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
        <div className="m-8">
            <ul className="grid grid-cols-4 gap-4">
                {listImage.map((item) => ( 
                    <li key={item.id} className="">
                       <img src={item.webformatURL} alt="image" className="block h-full w-full rounded-lg object-cover object-center"/> 
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ImageView;

