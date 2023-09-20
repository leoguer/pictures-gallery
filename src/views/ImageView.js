import { useEffect, useState } from "react";
import api from "../utils/api";
import SearchBarView from "./SearchBarView";

function ImageView() {

    const noContentObject = { GB: "No pictures found", FR: "Pas d'images trouvées" };
    const [listImage, setListImage] = useState([]);
    const [language, setLanguage] = useState('GB');

    const fetchdata = async (params = '') => {
        const response = await api().get(params);
        console.log(response.data.hits);
        setListImage(response.data.hits);
    }

    const handleParamChange = (path,language) => {
        fetchdata(path);
        setLanguage(language);
    }

    useEffect(() => {
        fetchdata();
    }, []);



    return (
        <div>
            <SearchBarView onParamsChange={handleParamChange}/>
            <div className="m-8">
                <ul className="grid grid-cols-4 gap-4">
                    {listImage.length > 0 ? listImage.map((item) => ( 
                        <li key={item.id} className="">
                        <img src={item.webformatURL} alt={item.tags} className="block h-full w-full rounded-lg object-cover object-center"/> 
                        </li>
                    )) 
                    : <div className="absolute z-0 top-0 left-0 w-screen h-screen flex justify-center items-center text-black/30 font-bold text-5xl">{noContentObject[language]}</div> 
                }
                </ul>
            </div>
        </div>
        
    );
}


export default ImageView;

