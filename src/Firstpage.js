import React from 'react'
import { NavLink } from 'react-router-dom';

 const Firstpage = () => {
    return (
        <div className="fronts">
        <div className="fw">
        <h1>The Ultimate</h1>
           <h1>  Games and Fun</h1> 
           <button><NavLink activeClassName="active_class"  to='/main'><span>Next</span></NavLink></button>
        </div>
           
        </div>
    )
}
export default Firstpage;
