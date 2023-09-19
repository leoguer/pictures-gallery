import { useEffect } from "react";
import api from "../utils/api";

function Picture(props) {
    console.log(props)
    return (
        <img src={props.src} alt="image"/>
    )
}

function ImageView(props) {

    useEffect(() => {
        api.get('').then((res) => {
            console.log(res.data);
        }
        ).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <Picture />
        </div>
    );
}

export default ImageView;