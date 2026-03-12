import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const EditBlog = () => {
    const {id} = useParams();
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:5000/blogs/${id}`)
        .then((response) => {
            setAuthor(response.data.author);
            setTitle(response.data.title);
            setCategory(response.data.category);
            setContent(response.data.content);
        })
    }, [id])

    const handleUpdate = (e) => {
        
        e.preventDefault();

       const updateBlog = {author, title, category, content}
        setIsPending(true);
        axios
        .put(`http://localhost:5000/blogs/${id}`, updateBlog)
        .then(() => {
            navigate("/");j
        })
    }

    return ( 
        <div className="container mt-3">
            <div className="row justify-content-center p-2">
                <div className="col-md-7 card shadow-lg">
                    <h4 className="text-center text-muted">
                        Create New Blog Here !
                    </h4>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label className="form-label">
                                Author's Name
                            </label>
                            <input
                             className="form-control"
                             type="text"
                             required
                             placeholder="e.g John Doe"
                             value={author}
                             onChange={(e) => setAuthor(e.target.value) }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Blog Title
                            </label>
                            <input
                             className="form-control"
                             type="text"
                             required
                             placeholder="Enter a blog Title"
                             value={title}
                             onChange={(e) => setTitle(e.target.value) }
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Select Category
                            </label>
                            <select 
                            className="form-select"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            >
                            <option value="">Select Category</option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Type Your content Here!
                            </label>
                            <textarea 
                            className="form-control"
                            required
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            >

                            </textarea>
                        </div>
                        <div className="mb-3">
                            {!isPending && <button className="btn btn-outline-primary w-100 btn-sm">
                                Publish Blog
                            </button>}
                            {isPending && <button className="btn btn-outline-danger w-100 btn-sm disabled">
                                Publishing Blog . . .
                            </button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default EditBlog;