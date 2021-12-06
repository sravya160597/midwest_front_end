import Login from "./views/auth/Login.js";
import Dashboard from "./views/Index";
import Users from "./views/users/Users";
import Cinemas from "./views/cinemas/Cinemas";
import Movies from "./views/movies/Movies";
import Bookings from "./views/bookings/Bookings";

var routes = [
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-ui-04 text-info",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/users",
        name: "Users",
        icon: "ni ni-circle-08 text-info",
        component: Users,
        layout: "/admin",
    },
    {
        path: "/cinemas",
        name: "Cinemas",
        icon: "ni ni-building text-info",
        component: Cinemas,
        layout: "/admin",
    },
    {
        path: "/movies",
        name: "Movies",
        icon: "ni ni-button-play text-info",
        component: Movies,
        layout: "/admin",
    },
    {
        path: "/bookings",
        name: "Bookings",
        icon: "ni ni-archive-2 text-info",
        component: Bookings,
        layout: "/admin",
    },
];
export default routes;
