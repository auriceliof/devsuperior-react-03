import Navbar from "components/Navbar";
import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetail from "pages/Private/MovieDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    
    <BrowserRouter>
        <Navbar />
        <Switch>
           
            <Route path="/" exact>
                <Home />
            </Route>
           
            <Route path="/movies" exact>
                <MovieCatalog />
            </Route>

            <Route path="/movies/:movieid" exact>
                <MovieDetail />
            </Route>

        </Switch>

    </BrowserRouter>
)

export default Routes;
