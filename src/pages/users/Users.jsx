
import Loader from "../../components/loader/Loader";
import CardLoader from "../../components/cardLoader/CardLoader";
import useFetch from "../../hooks/useFetch";

export default function Users() {
  const {data, isLoader, error} = useFetch(`${import.meta.env.VITE_BURL}/users`);

  
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
