import { useState } from "react";

function Card(){
    const[currentVisibility,setVisibility]=useState('block');
   


return(
<div className='Card' style={{display:currentVisibility, backgroundColor:"wheat",padding:"10px"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <label>Title</label>
    <input required>
    </input>
</div>
<br></br>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <label>Description</label>
    <textarea required></textarea>
</div>
<br></br>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <label>Status</label>
   <select>
   <option>New</option>
   <option>In Progress</option>
   <option>COmpleted</option>
   </select>
</div>
<br></br>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <label>Creation Date</label>
    <label></label>
</div>
<br></br>
<div style={{display:"flex",justifyContent:"space-between"}}>
    <label>Completion Date</label>
    <label></label>
</div>
<br></br>   
<div style={{display:"flex",justifyContent:"space-between"}}>
    <label>Priority</label>
   <select>
   <option>High</option>
   <option>Medium</option>
   <option>Low</option>
   </select>
</div>
<br></br> 
<div style={{display:"flex",justifyContent:"space-between"}}>
   <button onClick={()=>{setVisibility("none")}}>Cancel</button>
   <button onClick={()=>{setVisibility("none")}}>Save</button>
</div>

</div>

);
    
}

export default Card;