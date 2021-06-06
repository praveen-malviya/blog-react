import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [name, setName] = useState('Praveen');

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'React tutorial', body: 'lorem ipsum...', author: 'praveen', id: 4 }
]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Rendred');
        console.log(name);
        
    }, [name])
    
    
    return( 

        <div className="home">
          
        <BlogList blogs={ blogs } title = "All Blogs" handleDelete = { handleDelete } /> ,<br />
        
        <button onClick={() => setName('Malviya')}>Change Name</button>
        <p>{ name }</p>
          
        </div>

     );
}
 
export default Home;