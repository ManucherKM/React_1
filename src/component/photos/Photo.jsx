import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import PhotoItem from "./photoItem/PhotoItem";


const Photo = () => {

    const [photos, setPhotos] = useState([]);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos");
                setPhotos(data);
            } catch (error) {
                console.log(error);
            }
            setLoader(false);
        }
        fetchData()
    }, [])
    return (
        <div className="container my-4">
            {loader && <Loader />}
            {
                photos.map(photo => {
                    return <PhotoItem photo={photo} />
                })
            }
        </div>
    )
}
export default Photo;