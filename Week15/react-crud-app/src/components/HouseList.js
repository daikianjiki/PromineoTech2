import React from 'react';
import { housesAPI } from '../rest/HousesApi';
import House from './House'

export default class HouseList extends React.Component {
    state = {
        houses: []
    }
    
    componentDidMount() {
        this.fetchHouse()
    }

    fetchHouse = async () => {
        const houses = await housesAPI.get()
        this.setState({ houses })
    }

    updateHouse = async (updatedHouse) => {
        await housesAPI.put(updatedHouse)
        this.fetchHouse()
    }

render() {
  return (
    <div>
       {this.state.houses.map((house) => (
        <House 
            house={house}
            key={house._id}
            updateHouse={this.updateHouse}    
        />
       ))}
    </div>
    );
    }
}
