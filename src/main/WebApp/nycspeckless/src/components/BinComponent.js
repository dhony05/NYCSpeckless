import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Bins from "./Bins";
import { Button } from "react-bootstrap";


const BinComponent = props => {
  const [bins, setBins] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);


  useEffect(() => {
    //  const { data, loading } = props.location.state;
    if (localStorage.getItem("apiRes")) {
      setBins(JSON.parse(localStorage.getItem("apiRes")));
      setLoaded(true);
    }


  }, []);
 
  
  //sortingBy Borough
  const sortByBorough = (borough) =>{
     return (JSON.parse(localStorage.getItem("apiRes"))).filter((bin ) => bin.borough === borough)
     

}

  
  // Get Current Post
  const indexOfLastBin = currentPage * postsPerPage;
  const indexOfFirstBin = indexOfLastBin - postsPerPage;
  let currentBins = null;
  const value = "allboroughs";
 

  let handleChange =  null;

  if (isLoaded) {

    currentBins = bins.slice(indexOfFirstBin, indexOfLastBin);

  
   

  handleChange = (borough)=>{
      console.log("clicked");
   
    if(borough === value){
        setBins((JSON.parse(localStorage.getItem("apiRes"))));
        currentBins = bins.slice(indexOfFirstBin, indexOfLastBin);


    // }else if(sortByBorough(borough).length === 0){
    //     console.log(" is 0")
    //     setBins((JSON.parse(localStorage.getItem("apiRes"))));
    //     currentBins = sortByBorough(borough).slice(indexOfFirstBin, indexOfLastBin);
    
    }else { 
        
         setBins(sortByBorough(borough));
         currentBins = sortByBorough(borough).slice(indexOfFirstBin, indexOfLastBin);
         setCurrentPage(1);
         console.log(currentBins);

   
    }
    

 }
}
  
  // change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  if (!isLoaded) {
    return (
      <div>
        <h1>Loading Data...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className=" text-center">Public Recycling Bin List</h1>
      <Pagination
        postPerPage={postsPerPage}
        totalPost={bins.length}
        paginate={paginate}
      /> 
      
      <Button onClick={() => handleChange("allboroughs")} >All Boroughs</Button>
      <Button onClick={() => handleChange("Bronx")} >Bronx</Button>
      <Button onClick={() => handleChange("Brooklyn")} >Brooklyn</Button>
      <Button onClick={() => handleChange("Manhattan")} >Manhattan</Button>
      <Button onClick={() => handleChange("Queens")} >Queens</Button>
      <Button onClick={() => handleChange("Staten Island")} >Staten Island</Button>
      
      
    
      <Bins isLoaded={isLoaded} bins={currentBins} />
    </div>
  );
};

export default BinComponent;
