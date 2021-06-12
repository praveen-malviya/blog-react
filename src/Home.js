import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [gotError, setGotError] = useState();
        
    

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not find the resources you requested for');
                    }
                    return res.json();
                })
                .then(data =>{
                    setBlogs(data);
                    setIsPending(false);
                    setGotError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setGotError(err.message);
                    
                })
        }, 1000);  
    }, [])
    
    
    return( 

        <div className="home">
        { gotError && <h4> { gotError } </h4>}
        { isPending && <h3>Loading.....</h3>} 
        { blogs && <BlogList blogs={ blogs } title = "All Blogs"/> }
        
          
        </div>

     );
}
 
export default Home;