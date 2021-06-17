
import BlogList from "./BlogList";
import useFetch from "./useFetch"


const Home = () => {
const {data:blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/praveen-malviya/fake-rest-api/blogs/')
     
    return( 

        <div className="home">
        { error && <h4> { error } </h4>}
        { isPending && <h3>Loading.....</h3>} 
        { blogs && <BlogList blogs={ blogs } title = "All Blogs"/> }
        
          
        </div>

     );
}
 
export default Home;