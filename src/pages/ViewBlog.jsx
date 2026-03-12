import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewBlog = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);

    const handleDelete = () => {
        axios
        .delete(`http://localhost:5000/blogs/${id}`)
        .then(() =>{
            navigate("/"); 
        })
    }

    useEffect(() => {
        axios
        .get(`http://localhost:5000/blogs/${id}`)
        .then((response) =>{
            setBlog(response.data);
        }) 
    }, [id])

    return ( 
        <div>
            {blog &&
            <div className="container mt-3 card p-3 shadow-lg"> 
                <h3 className="text-muted">
                    {blog.title}
                </h3>
                <p>
                    Written By : {blog.author}
                </p>
                <p>
                    {blog.content}
                </p>
                <button onClick={handleDelete} className="btn btn-outline-danger btn-sm mb-3">
                    Delete Blog
                </button>
                <Link to={`/edit/${id}`} className="btn btn-outline-primary btn sm">
                    Edit Blog
                </Link>
            </div>
            }
        </div>
     );
}
 
export default ViewBlog;