import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList'
function App(){
    const [images,setImages]=useState([]);
    
   const handleSubmit= async (term)=>{
//const result= await searchImages(term);
const response=  await axios.get('https://api.unsplash.com/search/photos',{
            headers:{
              Authorization:'Client-ID qrwKXSphZkDm0MSCEReP1dimMXktSG7bGNuSR0HD7l4'
          },
        
         params:{
          query:term,
        }
 });
console.log(response);
// console.log(JSON.parse(result));
setImages(response.data.results);

    }
    return (
    <div>

    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
        </div>
   )
};
export default App;