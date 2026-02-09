import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import CardLoader from "../../components/cardLoader/CardLoader";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setError] = useState(false);

  const getUsers = async ()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
      
      setUsers(response.data.users);
      console.log(response);
    } catch (err) {
      setError(true);
      console.log(error + err);
    } finally {
      setIsLoader(false);
    }
  }

  useEffect(() => {
      getUsers();
    }, []);
  
    if (isLoader) {
        return (
            <>
            <Loader />
            <CardLoader />
            </>
        );
      }
      if (error) {
        return <h2 className="text-danger">{error}</h2>;
      }

  return (
    <section className="users py-5 text-center">
      <div className="container">
        <div className="row g-3">
          {users.map((user) => {
            return (
              <div className="col-md-4">
                <div className="card user py-4">
                  <img src={user.imageUrl} className="card-img-top"/>
                  <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
