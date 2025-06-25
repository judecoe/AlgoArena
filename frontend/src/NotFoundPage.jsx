import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page was not found</h1>
      <Link to={"/"}>
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
