import React from 'react';
import BinComponent from './BinComponent'
import Landing from './landing';
import Map from './map';
import {Switch, Route} from 'react-router-dom';




const Main = (props) => (
   
       
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/map" component={Map}/>
    <Route exact path="/publiclist" component={BinComponent} />
    {/* <Route exact path="/publiclist" render={(props) => <BinComponent {...props}/>} /> */}
 </Switch>
)
export default Main;