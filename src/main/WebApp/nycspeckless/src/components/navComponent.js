import React,{useEffect}  from 'react';

import axios from 'axios';
import Main from './main';
import {Link,withRouter} from 'react-router-dom';

    const NavComponent = () => {
        const BINS_REST_API_URL = 'http://localhost:8080/api/allbins';

        useEffect(() => {

            const fetchMyAPI = async() =>{
            axios.get(BINS_REST_API_URL).then(({data}) => {
            // setData(data.data);
            localStorage.setItem('apiRes', JSON.stringify(data))
            });

            }
            fetchMyAPI();
        },[]);
   
        return(
            
            <div style={{height: '100px', position: 'relative'}}>
  
            <Link to="/">Home</Link>
            <Link to="/map">Map</Link>
            <Link to={{pathname:'/publiclist'}}>Public bin list</Link>
           
            <div>
                <Main />
            </div>
</div>
        );
    // }

}

export default withRouter(NavComponent);