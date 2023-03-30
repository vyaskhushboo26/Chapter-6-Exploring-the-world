import { restrauntList } from "../constants";
import RestrauntCart from "./RestrauntCart";
import { useState } from "react";

function filterData(searchText, restaurants) {

  return restaurants.filter( (result) => 
    result.data.name.includes(searchText)
  )
}



const Body = () => {
  const [restaurants, setRestaurants] = useState(restrauntList);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {console.log(searchText)}
        <button
          className="search-btn"
          onClick={() => {
            if(searchText !== ''){
              const data = filterData(searchText, restaurants)
              setRestaurants(data);
              // console.log(data)
              }else{
               setRestaurants(restrauntList);
              }
            
          }}
        >
          Search
        </button>
      </div>
      <div className="restranunt-list">
        {restaurants.map((restraunt) => {
          return <RestrauntCart {...restraunt.data} key={restraunt.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
