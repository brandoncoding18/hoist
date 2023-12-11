import { createSlice } from "@reduxjs/toolkit";
import Database from "../Database";
const initialState = {
    programs : Database.calendars,
    program : null,
    current : 0

};


const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setProgram : (state, action) => {

        state.program = action.payload

    },

    setPrograms : (state, action) => {
      
      state.programs = action.payload
    },

    setCurrent : (state, action) => {
      state.current = action.payload

  },
    addToPrograms : (state, action) => {
      state.programs = state.programs.filter((p) => p._id !== action.payload._id)
      state.programs.push(action.payload)
    },

    updateProgram : (state, action) => {
      state.programs.push(action.payload)
    },

    incrementDay : (state) => {
      var weeks = state.programs[state.current].weeks;
      var weekContent = weeks[state.programs[state.current].current.week - 1]
      var days = weekContent.days;
      var dayContent = days[state.programs[state.current].current.day - 1]
      var exercises = dayContent.exercises; 
      var exerciseContent = exercises[state.programs[state.current].current.exercise - 1]
      var sets = exerciseContent.sets;
      var setContent = sets[state.programs[state.current].current.day - 1]


      if(state.programs[state.current].current.set < sets.length) {
        state.programs[state.current].current.set += 1
      }
        else {
          state.programs[state.current].current.set = 1 
          state.programs[state.current].current.exercise +=1 
          if(state.programs[state.current].current.exercise > exercises.length) {
            state.programs[state.current].current.exercise = 1
            state.programs[state.current].current.day += 1
            if(state.programs[state.current].current.day > days.length) {
              state.programs[state.current].current.day = 1; 
              state.programs[state.current].current.week += 1; 
              if(state.programs[state.current].current.week > weeks.length) {
                state.programs[state.current].current.day = 0;
                state.programs[state.current].current.exercise = 0;
                state.programs[state.current].current.week = 0; 
                state.programs[state.current].current.set = 0; 
              }
            }
            
          }
        
        }
      




    },

    

  },
  

  

});
export const { setProgram, setCurrent, incrementDay, addToPrograms, setPrograms} = programSlice.actions;
export default programSlice.reducer;