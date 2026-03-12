
import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
    const {data: blogs, loading, error} = useFetch('http://localhost:5000/blogs');

    return ( 
        <div>
            {loading && <div> Loading ... </div>}
            {error && <div> {error} </div>}
            {/* Mapping to loop throught the data and diplay each as a single item */}
            {blogs && <BlogList blogs={blogs} title="Your Home for All news"/> }
            {/* {blogs && <BlogList blogs={blogs}/> } */}
        </div>
     );
}
 

export default Home;