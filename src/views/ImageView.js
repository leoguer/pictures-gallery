import { useEffect, useState } from "react";
import api from "../utils/api";
import SearchBarView from "./SearchBarView";

function Picture(props) {
    
    return (<div>
        <img src={props.src} alt="image"/>
        {props.id}</div> 
    )
}

function ImageView() {

    const [listImage, setListImage] = useState([]);

    const fetchdata = async (params = '') => {
        const response = await api().get(params);
        setListImage(response.data.hits);
    }

    const handleParamChange = (path) => {
        fetchdata(path);
    }

    useEffect(() => {
        fetchdata();
    }, []);



    return (
        <div>
            <SearchBarView onParamsChange={handleParamChange} />
            <div className="m-8">
                <ul className="grid grid-cols-4 gap-4">
                    {listImage.map((item) => ( 
                        <li key={item.id} className="">
                        <img src={item.webformatURL} alt="image" className="block h-full w-full rounded-lg object-cover object-center"/> 
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}


export default ImageView;

