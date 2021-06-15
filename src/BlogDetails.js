import { useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {

    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+ id);

    return ( 
        <div className="blog-details">
        { error && <p> { error } </p>}
        { isPending && <h3> Loading...</h3>}
        
       { blog && <article>
        <h2>{ blog.title}</h2>
        <h5> Wriiten By { blog.author}</h5>
       <p> {blog.body} </p> 
       </article>}
        </div>

     );
}
 
export default BlogDetails;