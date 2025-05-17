import Card from "./Card";
function HeadBar(){
    return(
<header>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <h1 >
My Task Tracker
    </h1 >
    <button style={{justifyContent:"flex-end"}} >
New Task
    </button>
  
    </div>
    <hr></hr>
</header>
    );
}
export default HeadBar;