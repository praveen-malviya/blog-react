import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario')
    return ( 
 
        <div className="create">
            <h3>Add a New Blog</h3>
            <form>
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
                <lable>Blog Author:</lable>
                <select
                    value={ author }
                    onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option>Mario</option>
                    <option>yoshi</option>
                </select>
                <button>Save Blog</button>
                <h5>{ title }</h5>
                <p>{ body }</p>
                <i>{ author }</i>


            </form>
        </div>

     );
}
 
export default Create;