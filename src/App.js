import {Route, Switch} from 'react-router-dom'

import AllMeetupsPage from "./pages/AllMetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritePage from "./pages/Favourites";
import MainNavigation from "./component/layout/MainNavigation";
function App() {


    return <div>
        <MainNavigation />
        <Switch>
            <Route path='/' exact>
                <AllMeetupsPage/>
            </Route>

            <Route path='/new-meetups'>
                <NewMeetupsPage/>
            </Route>

            <Route path='/favourites'>
                <FavouritePage/>
            </Route>
        </Switch>

    </div>;

}

export default App;
