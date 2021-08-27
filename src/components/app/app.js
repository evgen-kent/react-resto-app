import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Switch} from 'react-router-dom'
import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route path="/cartpage">
                    <CartPage/>
                </Route>
                {/* <Route path="/cartpage/:id">{(
                            { match }
                        ) => {
                            const { id } = match.params;
                           
                            return (<Book bookId={id}/>)
                        }}</Route> */}

            </Switch>
        </div>
    )
}

export default App;