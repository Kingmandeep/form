import React from 'react'
import Main from './Main'
import { Route, Switch } from 'react-router-dom';
import Firstpage from './Firstpage';


const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Firstpage} />
                <Route exact path='/main' component={Main} />
            </Switch>



            {/* <Firstpage/> */}
            {/* <Main /> */}
            {/* <Pokemons/> */}
        </>
    )
}
export default App;
