import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/loader/Loader";
import CardLoader from "../../components/cardLoader/CardLoader";
import Card from "../card/Card";

export default function User() {
  const { id } = useParams();
  const { data, isLoader, error } = useFetch(
    `${import.meta.env.VITE_BURL}/users/${id}`,
  );
  console.log(data);
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
    <div className="col-md-4">
      <div className="card user py-4">
        <div className="card-body">
          <h2 className="card-title">Name:{data.data.name}</h2>
          <p className="card-title">age:{data.data.age}</p>
          <p className="card-title">email:{data.data.email}</p>
        </div>
      </div>
    </div>
  );
}
