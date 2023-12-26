import { Link, useLocation } from "react-router-dom";

const passiveClass = "bg-blue-600 shadow text-white";
const activeClass = "bg-white shadow text-blue-600";

const SideBar = () => {
  //
  const location = useLocation();

  function isActive(path) {
    return path === location.pathname;
  }

  //
  return (
    <>
      <div id="sidebar">
        <h1 className="text-white">Dharmsinh Desai University</h1>

        <nav>
          <ul className="grid">
            <li>
              <Link
                to={`/`}
                className={isActive("/") ? activeClass : passiveClass}
              >
                Signin
                <svg
                  className="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                  <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to={`/profile/1`}
                className={isActive("/profile/1") ? activeClass : passiveClass}
              >
                Profile
                <svg
                  className="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to={`/users`}
                className={isActive("/users") ? activeClass : passiveClass}
              >
                Users
                <svg
                  className="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </Link>
            </li>

            <li>
              <Link
                to={`/create-user`}
                className={
                  isActive("/create-user") ? activeClass : passiveClass
                }
              >
                Add User
                <svg
                  className="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to={`/signout`}
                className={isActive("/signout") ? activeClass : passiveClass}
              >
                Sign Out
                <svg
                  className="w-5 h-5 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
