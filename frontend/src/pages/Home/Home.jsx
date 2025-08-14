// import React from 'react'
// import './Home.css'
// import Header from '../../Components/Header/Header'
// import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
// const  Home = () => {

//     const [category, setCategory] = useState("All");

//   return (
//     <div>
//       <Header/>
//       <ExploreMenu category={category} setCategory={setCategory} />
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';  // Added useState import
import './Home.css';
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
