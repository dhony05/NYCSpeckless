import React from 'react';


const Bins = ({bins,isLoaded}) =>{

    
    return(
    <div>
        <table className="table table-striped table-dark table-hover">
                    <thead>
                        <tr>
                            <td > Bin Borough</td>
                            <td> Bin Site Type</td>
                            <td> Bin Site Name</td>
                            <td> Bin Address</td>
                            <td> Bin Longitude</td>
                            <td> Bin Latitude</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                           bins.map(
                               bin =>
                               <tr key = {bin.id}>
                                  <td>{bin.borough}</td>
                                  <td>{bin.siteType}</td>
                                  <td>{bin.siteName}</td>
                                  <td>{bin.address}</td>
                                  <td>{bin.latitude}</td>
                                  <td>{bin.longitude}</td>
                               </tr>
                           ) 
                        }
                    </tbody>
                </table>
                </div>
    )
}

export default Bins;