import './SearchBar.css'
import { useState } from "react";
function SearchBar({onSubmit}){
    const [term,setTerm]=useState('');
   const handleFormSubmit=(event)=>{
    event.preventDefault();
    onSubmit(term)
   }
//    const handleChange=(event)=>{

// 
//    }
    return(
         <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter search term</label>
           <input value={term} onChange={(event)=>setTerm(event.target.value)}/>
         
        </form>
    </div>
    );
}
export default SearchBar ;