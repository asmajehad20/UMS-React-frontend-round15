import Loader from "../../components/loader/Loader";
import CardLoader from "../../components/cardLoader/CardLoader";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/card/Card";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

export default function Users() {
  const { data, isLoader, error } = useFetch(
    `${import.meta.env.VITE_BURL}/users`,
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
      toast.success("deleted successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
          {data.users.map((user) => {
            return <Card data={user} onDelete={handleDelete} />;
          })}
        </div>
      </div>
    </section>
  );
}
