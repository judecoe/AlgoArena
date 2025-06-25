import { Link } from "react-router-dom";
import { Button } from "./components";
import { Panel } from "./components";
import { Dashboard } from "./components";

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
