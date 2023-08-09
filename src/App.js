import Props from "./comp/Props";
import Liste from "./comp/Liste";
import "./style.css"


function App() {
  return (
    <div className="App">
      {Liste.map(
        (el)=>{return(
        
       <Props img={el.photo} name={el.name} age={el.age} pay={el.nationality} equipe={el.equipe}/>
        )})}
    </div>
  );
}

export default App;
