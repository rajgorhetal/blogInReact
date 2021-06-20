import { useState } from "react";





const Home = () => {

    const [name,setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () =>{
        setName('luigi');
        setAge(30);
     }
    // const handleClickAgain = (name,e) => {
    //     console.log('Hello '+ name, e.target);
    // }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>click me again</button> */}
        </div>
     );
}
 
export default Home;
