import React, {useState, useEffect} from 'react';
import createEntureService from '@entur/sdk'

const service = createEntureService({clientName: "martin-infoskjerm"})


const Bikes = () => {
    
    const [bikeStations, setBikeStations] = useState([]);


    useEffect(() => {
        service.getBikeRentalStationsByPosition(
            {latitude: 63.417320, longitude: 10.404318},
            240
            )
            .then((data) => setBikeStations(data));
    }, []);
    
    console.log(bikeStations)
    return (
        <div className="BikeStations">
            <h3>Bysykkel</h3>
            {bikeStations.map(stationData => (
                <Station key={stationData.id} station={stationData} />
            ))}
            Bikes</div>
    )
};

export default Bikes;

const Station = (props) => {
    const {station} = props;

    return (
        <div className="station">
            {station.name} - {station.bikesAvailable} : {station.spacesAvailable}
        </div>
    )
}