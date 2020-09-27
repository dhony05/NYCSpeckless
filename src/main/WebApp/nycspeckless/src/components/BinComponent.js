import React, { useEffect, useState } from 'react';

 const BinComponent = (props) =>{

 const [bins,setBins] = useState(null);
 const [isLoaded,setLoaded] = useState(true);


 useEffect ( () => {
    //  const { data, loading } = props.location.state;
    if(localStorage.getItem('apiRes')){
        setBins(JSON.parse(localStorage.getItem('apiRes')));
        setLoaded(false);
    }
    
     

 }, [] );
//     constructor(props){
//         super(props)


        // this.state ={
        //     isLoaded:true,
        //     bins:[]
            
        // }
        //  console.log(this.props.state.data)


        
    // }

    


    //  componentDidMount(){
    //     console.log(this.state.bins.length);
    //     BinService.getBins().then((response) =>{
    //         this.setState({bins: response.data,isLoaded:true})
            
    //     });
    // }
    

   
    // componentDidMount(){
    //       let data = this.props.location.state.data
    //       console.log(data);
    //     let isLoaded = this.props.location.state.loading
    //     console.log(isLoaded);
    // this.setState({bins:data, isLoaded: isLoaded});
        // const data = this.props.location;
        // console.log(data)
        // const loading = this.props.location.loading;
        // console.log(loading);
        // console.log(this.props.location.state)

        // this.setState({bins:this.props.location.state, isLoaded:this.props.location.loading});
        // console.log(this.state)
       // console.log(this.props.location.data);
        // console.log(this.props.data);
        // console.log(this.props.loading);
    // }
  
       
        if(isLoaded){
            return (<div>
                <h1>Loading Data...</h1>
            </div>)
        }
        return(
            
            <div>
                <h1 className=" text-center">
                   Public Recycling Bin List
                </h1>
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

export default BinComponent