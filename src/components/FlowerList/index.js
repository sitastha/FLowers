import React, { Component } from "react";
import Flower from "../Flower/Flower";
import { FlowerData } from "../FlowerData";
import "../../App.css";


export default class FlowerList extends Component {
  state = {
    flowers: FlowerData
  };
  removeFlower = id => {
   const{ flowers } = this.state;
   const sortedFlowers = flowers.filter(flower=> flower.id !== id);
   this.setState({
     flowers:sortedFlowers
   });

  };

  render() {
    const { flowers } = this.state;

    return (
      <section className="flowerlist">
        {flowers.map(flower => (
            <Flower key={flower.id} flower={flower} removeFlower={this.removeFlower} />
          ))}
      </section>
    );
  }
}
