
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
   
    const { images, isLoding } = useFetchGifs(category);


  return (
    <>
        <h3> { category } </h3>
        {
            isLoding && (<h2>Loading...</h2>)
        }
        
        <div className="card-grid">
            {
                images.map( ( image )=>(
                    <GifItem key={image.id}
                             title={image.title}
                             url = {image.url}
                    />
                    ))
            }
        </div>
    </>
  )
}

