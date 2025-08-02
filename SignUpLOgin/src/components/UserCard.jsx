import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserCard = () => {
    const [users, setUsers] = useState([])
    const [currentpage,setCurrentPage]=useState(1)

    const PAGE_SIZE=3

    const Userdata = async () => {
        try {
            const { data } = await axios.get('http://localhost:4000/users')  
                // Awaiting the axios call here
            if (data.success) {
                console.log(data);
                setUsers(data.user)
            } else {
                console.log("Error in fetching data");
                
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        Userdata()
    }, [])

    const totalUsers=users.length
    const noOfPages= Math.ceil(totalUsers/PAGE_SIZE)
    const start=currentpage*PAGE_SIZE
    const end=start+PAGE_SIZE

    const handleChange=(n)=>{
setCurrentPage(n);
    }

    return (
        <div>
            {users && users.length > 0 ? (  // Ensuring users data is available before trying to access it
               <>
    <div className='text-xl  items-center px-4 py-3'>Pages{[...Array(noOfPages).keys()].map((n)=><span onClick={()=>handleChange(n)} className='text-xl border-1 border-black rounded-l gap-4 m-2 px-2 py-1 cursor-pointer'>{n}</span>)}</div>

               
{users.slice(start,end).map((user, index) => (
  <div
    key={index}
    className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-xl mb-4"
  >
    <img
      src={user.ProfilePic}
      alt={user.name}
      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
    />
    <div>
      <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  </div>

))}

<h1 className='text-xl m-8 item-center'>Current Page:{currentpage}</h1>
                </>
           
            ) : (
                <p>Loading...</p>  // Display loading text if data is not yet loaded
            )}
        </div>
    )
}

export default UserCard
