import LandingPage from "./movies/LandingPage";

import IndexGenres from "./genres/indexGenres";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActors from "./actors/CreateActors";
import EditActors from "./actors/EditActors";

import IndexMovieTheather from "./movietheathers/IndexMovieTheathers";
import CreateMovieTheater from "./movietheathers/CreateMovieTheaters";
import EditMovieTheater from "./movietheathers/EditMovieTheather";

import EditMovie from "./movies/EditMovie";
import FilterMovie from "./movies/FilterMovies";
import CreateMovie from "./movies/CreateMovie";

import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/', component: LandingPage },


    {path: '/genres', component: IndexGenres},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre},


    {path: '/actors', component: IndexActors},
    {path: '/actors/create', component: CreateActors},
    {path: '/actors/edit/:id(\\d+)', component: EditActors},


    {path: '/moviestheaters', component: IndexMovieTheather},
    {path: '/moviestheaters/create', component: CreateMovieTheater},
    {path: '/moviestheaters/edit/:id(\\d+)', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},
    {path: '/movies/filter', component: FilterMovie},

    {path: '*', component: RedirectToLandingPage}
    
];

export default routes