import { Link } from "react-router-dom";
import { Button, Panel, Dashboard } from "./components";

const NotFoundPage = () => {
  return (
    <div>
      <Dashboard />
      <Panel>
        <h1>Page was not found</h1>
      </Panel>
      <Link to={"/home"}>
        <Button>Go back home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;