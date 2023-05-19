import React, {Component} from 'react';
import './Dice.css';

class Dice extends Component {
    render(){
    // let num = this.props.number;
    // let icon;
    //     if (num === 1){
    //         icon = 'fas fa-dice-one';
    //     } else if (num === 2){
    //         icon = 'fas fa-dice-two';
    //     } else if (num === 3){
    //         icon = 'fas fa-dice-three'; 
    //     } else if (num === 4){
    //         icon = 'fas fa-dice-four';
    //     } else if (num === 5){
    //         icon = 'fas fa-dice-five';
    //     } else if (num === 6) {
    //         icon = 'fas fa-dice-six'; 
    //     }
        return(
        <div className='Dice'>
            <i className={`fas fa-dice-${this.props.icon}`}></i>
            {/* <i className={icon}></i> */}
        </div>
        )
    }
}

export default Dice;