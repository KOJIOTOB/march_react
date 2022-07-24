import {useDispatch, useSelector,} from "react-redux";
import {useEffect} from "react";

import {Car} from "../car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    return (
        <div className={'block'}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};