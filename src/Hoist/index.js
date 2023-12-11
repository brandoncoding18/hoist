import { useState, useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import axios from 'axios'
import Links from "./links.js"
import HoistNavigation from "./HoistNavigation/index.js";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Details from "./Details/index.js";
import Home from "./Home/index.js";
import Login from "./Login/index.js";
import Profile from "./Profile/index.js";
import Search from "./Search/index.js";
import store from "./store/index.js";
import WorkoutCalendar from "./Programs/WorkoutCalendar/index.js";
import TodaysWorkout from "./Programs/WorkoutCalendar/todaysworkout.js";
import Creator from "./Programs/Creator/index.js";
function Hoist() {


  return (
    <div className="d-flex">
      <Provider store = {store}>
      <HashRouter>
        <HoistNavigation/>

        <Routes>
        <Route path="/" element={<Navigate to={"Home"} />} />
        <Route path="/Programs/Calendar/:name" element={<WorkoutCalendar/>}/>
        <Route path="/Programs/Creator" element={<Creator/>}/>
        <Route path="/Programs/Calendar/:name/TodaysWorkout" element={<TodaysWorkout/>}/>

        {
            
            Object.keys(Links).map((link, index) => 
            (<Route path={link} element={<h1>{Links[link]}</h1>} />)
            )
            
            }
          
          </Routes>
          </HashRouter>
          </Provider>
          </div>
          
          

  );
  }
  export default Hoist;