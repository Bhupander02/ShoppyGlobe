import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <>
      <div className="error-page">
        <div className="error-box">
          <p>Status: {err.status}</p>
          <p>{err.statusText}</p>
          <p>{err.data}</p>
        </div>

        <div className="error-link">
          <Link to="/">Go back to Home Page</Link>
        </div>
      </div>
    </>
  );
}

export default Error;
