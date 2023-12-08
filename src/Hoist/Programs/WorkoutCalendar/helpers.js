import { setProgram } from "../programReducer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { json, useParams, Link } from "react-router-dom";
import Database from "../../Database";
import RPE from "../RpeChart";
import { current } from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client'
import programReducer from "../programReducer";





export const getMax = (exercise, user) => {

    if(exercise === "Squat") {

        return user.maxSquat;

    }
    if(exercise === "Bench") {
        return user.maxBench;

    }
    if(exercise === "Deadlift") {
        return user.maxDeadlift;

    }
    if(exercise === "Overhead Press") {
        return user.setMaxOverhead;

    }
    if(exercise === "Barbell Row") {
        return user.maxRow;

    }
}

export const setMax = (exercise, weight, user) => {

    if(exercise === "Squat") {
        user.maxSquat = weight

    }
    else if(exercise === "Bench") {
        user.maxBench = weight

    }
    else if(exercise === "Deadlift") {
        user.maxDeadlift = weight

    }
    else if(exercise === "Overhead Press") {
        user.maxOverhead = weight

    }
    else if(exercise === "Barbell Row") {
        user.maxRow = weight

    }
}