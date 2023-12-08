import { createSlice } from "@reduxjs/toolkit";
import Database from "../Database";
const initialState = {
    programs : Database.calendars,
    program : null,
    current : null

};


const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setProgram : (state, action) => {
      alert(JSON.stringify(action)); 
        state.program = action.payload

    },

    setPrograms : (state, action) => {
      state.programs = action.payload
    },

    setCurrent : (state, action) => {
      state.current = action.payload

  },
    addToPrograms : (state, action) => {
      state.programs.push(action.payload)
    },

    updateProgram : (state, action) => {
      state.programs.push(action.payload)
    },

    incrementDay : (state) => {
      var weeks = state.program.weeks;
      var weekContent = weeks[state.current.week - 1]
      var days = weekContent.days;
      var dayContent = days[state.current.day - 1]
      var exercises = dayContent.exercises; 
      var exerciseContent = exercises[state.current.exercise - 1]
      var sets = exerciseContent.sets;
      var setContent = sets[state.current.day - 1]


      if(state.current.set < sets.length) {
        state.current.set += 1
      }
        else {
          state.current.set = 1 
          state.current.exercise +=1 
          if(state.current.exercise > exercises.length) {
            state.current.exercise = 1
            state.current.day += 1
            if(state.current.day > days.length) {
              state.current.day = 1; 
              state.current.week += 1; 
              if(state.current.week > weeks.length) {
                state.current.day = 0;
                state.current.exercise = 0;
                state.current.week = 0; 
                state.current.set = 0; 
              }
            }
            
          }
        
        }
      




    },

    

  },
  

  

});
export const { setProgram, setCurrent, incrementDay, addToPrograms, setPrograms} = programSlice.actions;
export default programSlice.reducer;