import IndexGenres from "./genres/indexGenres";
import LandingPage from "./movies/LandingPage";

const routes = [
    {path: '/genres', component: IndexGenres},
    {path: '/', component: LandingPage}
];

export default routes