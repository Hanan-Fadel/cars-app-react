import { createSlice, nanoid } from "@reduxjs/toolkit";
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            //Assumption:
            //action.payload === {name: 'ab', cost: 140}
            state.data.push({
                id: nanoid(), //used to create a random id
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, actions) {
            //Assumption: action.payload === id of the care we want to remove
            const updated = state.data.filter((car)=> {return car.id !== actions.payload});
            state.data = updated;
        }
    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;