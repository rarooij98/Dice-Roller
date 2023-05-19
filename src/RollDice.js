import React, {Component} from 'react';
import './RollDice.css';
import Dice from './Dice';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {
            die1: 'two',
            die2: 'three',
            die3: 'five',
            die4: 'one',
            rolling: false,
            dice: 2
        }
    }
    roll = (e) => {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie3 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie4 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({die1: newDie1, die2: newDie2, die3: newDie3, die4: newDie4, rolling: true});
        setTimeout(() => {
            this.setState({rolling: false});
        }, 500);
    }
    
    handleChange = (e) => {
        this.setState({dice: parseInt(e.target.value, 10)});
    }

    render(){
        return(
        <div className='RollDice'>
            <h1> Dice Roller </h1>
            <div className={this.state.rolling ? 'RollDice-animation' : 'RollDice-dices'}>
                <Dice icon={this.state.die1} />
                <Dice icon={this.state.die2} />
                {this.state.dice === 3 && <Dice icon={this.state.die3} />}
                {this.state.dice === 4 && <div className='RollDice-four'> <Dice icon={this.state.die3} /> <Dice icon={this.state.die4} /> </div> }
            </div>
            <div>
                <button disabled={this.state.rolling} onClick={this.roll} type='button' className={this.state.rolling ? 'RollDice-rolling' : 'RollDice-passive'}> 
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'} 
                </button>
                <form>
                    <select onChange={this.handleChange} value={this.state.dice} name="numDice" id="numDice">
                      <option value='2'>2 dice</option>
                      <option value='3'>3 dice</option>
                      <option value='4'>4 dice</option>
                    </select>
                </form>
            </div>
        </div>
        )
    }
}

export default RollDice;