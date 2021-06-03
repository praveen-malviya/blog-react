import { useState } from "react";

const Home = () => {

    
    const [text, setText] = useState("");

    function clicked (e){

        var text = "button clicked: Here I Am";

        setText(text);

        console.log(e)      
    }

    function nowclickme(params) {
        var text = "button clicked: "+params;

        setText(text);
    }

    return ( 

     
        <div className="content">

            <h1>Home Page</h1>

            <button onClick={clicked}>Click me</button>

            <button
                onClick= {() => nowclickme('mario')}
            >Nowclickme</button>

            <p>{text}</p>

        </div>

     );
}
 
export default Home;