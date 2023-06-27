import './ImageList.css'
import ImageShow from './ImageShow';
function ImageList ({ images }){
   const renderedImages=images?.map((images)=>{
    
return <ImageShow key={images.id} images={images}/>
    })
    console.log(images);
    return <div>{renderedImages}</div>
   
}
export default ImageList;