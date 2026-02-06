import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
  const err = useRouteError();
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full flex-col gap-3">
        <div className="text-red-500 text-2xl flex justify-center gap-2 p-4 m-4 flex-col">
          <div className="flex flex-row gap-2 justify-center">
            <p>Status: {err.status}</p>
            <p>{err.statusText}</p>
          </div>
          <p>{err.data}</p>
        </div>
        <div className="text-2xl text-black bg-purple-500 rounded-xl p-5">
          <p>
            <Link to="/">Go back to Home Page</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Error;
