import { Link } from "react-router-dom"

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>You seem to be Lost</h2>
            <p>The page requested cannot be found </p>
           <Link to='/'>Let's get you to home...</Link>
        </div>
    
    );
}
 
export default NotFound;
