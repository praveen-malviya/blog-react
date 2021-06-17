import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario')
    
    const [ispending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
     
        setIsPending(true);
        const blog = { title, body, author };
        console.log(blog);

        fetch('https://my-json-server.typicode.com/praveen-malviya/fake-rest-api/blogs/', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            // history.go(-2);
            // history.push('/Blogs/:id')
            history.push('/')
        })

    }
    return ( 
 
        <div className="create">
            <h3>Add a New Blog</h3>
            <form onSubmit = { handleSubmit }>
                <label>Blog Title:</label> 
                <input 
                    type="text"
                    required
                value={title}
                onChange = {(e) =>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option>Mario</option>
                    <option>yoshi</option>
                </select>
                {!ispending && <button>Save Blog</button> }
                {ispending && <button disabled >Saving Blog...</button> }
            </form>
        </div>

     );
}
 
export default Create;