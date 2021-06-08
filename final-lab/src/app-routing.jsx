import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import NotFound from './components/not-found';
import Register from './components/register';
import About from './components/about';
import Nav from './components/nav';
import UserDetails from './components/user-details';

const AppRouting = () => (

    <BrowserRouter>
        <Nav></Nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={Home} />
            <Route exact path="/user/:id" component={UserDetails} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="**" component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default AppRouting;
