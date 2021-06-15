import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+ id);

    const history = useHistory();
    const handleDelete= () => {

        fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
        { error && <p> { error } </p>}
        { isPending && <h3> Loading...</h3>}
        
       { blog && <article>
        <h2>{ blog.title}</h2>
        <h5> Wriiten By { blog.author}</h5>
       <p> {blog.body} </p> 
       <button onClick = { handleDelete }>Delete</button>
       </article>}
        </div>

     );
}
 
export default BlogDetails;