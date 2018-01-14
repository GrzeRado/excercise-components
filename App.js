import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Square from './Square';




class App extends Component {
    render() {
        return (
            <Router>
            <div>


            <Route path='/' component={Dashboard} exact={true} />
        <Route path='/list' component={List} />
        <Route path='/add-run' component={AddRun} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/run' component={Run} />
        <Route path='/contact' component={Contact} />
        </div>
        </Router>
    );
    }
}

export default App;
