import { useSelector , useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {

    const dispatch = useDispatch();

    // const cars = useSelector((state)=> {
    //     return state.cars.data;
    // });

    //OR use destructure to extract data & searchTerm from state object

    //Note: whenever we try to calculate a dericed state, a really good place to put that
    //is inside useSelector() function
    const {cars, name} = useSelector(({form, cars: {data, searchTerm}})=> {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            cars: filteredCars,
            name: form.name //will be used to evaluate if the car in the list should be bold or no
        };
    });

    const handleCarDelete= (car)=> {
        dispatch(removeCar(car.id));
    };

    const renderedCars =cars.map((car)=> {
        //DECIDE IF THIS CAR SHOULD BE BOLD
        //state.form.name
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return(
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={()=> handleCarDelete(car)}>Delete</button>
            </div>
        );
    });

    return <div className="car-list">
        {renderedCars}
        <hr />
    </div>;
}

export default CarList;