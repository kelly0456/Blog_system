import { Link } from "react-router-dom";


const BlogList = ({blogs, title}) => {


    return ( 
        <div className="container mt-5">
            <h4 className="text-muted text-center">{title}</h4>
                {blogs.map((blog) =>(
                <div className="row" key={blog.id}>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-lg h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">
                                    {blog.title}
                                </h5>
                            </div>
                            <p className="text-muted card-text p-2">
                                {blog.content.substring(0, 70)} . . .
                            </p>
                            <Link to={`/blogs/${blog.id}`} className="btn btn-outline-primary btn-sm mb-3 mx-2">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
        </div>
     );
}
 
export default BlogList;