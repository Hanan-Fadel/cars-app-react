import { useSelector } from "react-redux";

function CarValue() {
    
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car)=> {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        
        // let totalCost = 0;
        // for (let car of filteredCars) {
        //     totalCost += car.cost;
        // }
        // return totalCost;

        //This is another way to calculate the total cost using the reduce function ad follows:
        return filteredCars.reduce((accumulator, car)=> {
            return accumulator + car.cost
        },0)

    });

    return( 
    <div className="car-value">
        Total Cost: ${totalCost}
    </div>);
}

export default CarValue;