import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoding, setIsLoading] = useState(true);
   

    const getImages = async() =>{
         const newImages = await getGifs( category );
         setImages(newImages);
         setIsLoading(false);
    }
 
     useEffect(() =>{
         getImages();
 
     },)
    
    return {
        images,
        isLoding
    }
}

export default useFetchGifs