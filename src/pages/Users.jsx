

import useFetch from "../components/useFetch";

const Users = () => {
    const {data: users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

    return ( 
        <div>
            {loading && <div> Loading ... </div>}
            {error && <div> {error} </div>}
            {/* Mapping to loop throught the data and diplay each as a single item */}
            {users && users.map((user) => {
                return (
                    console.log(user.name)
                )
            })}
        </div>
     );
}
 

export default Users;