import React, { Component } from 'react';
import Box from './Box';

class Container extends Component {
    static defaultProps = {
        numBoxes: 16,
        colorNames: [
            'PaleVioletRed', 
            'RebeccaPurple',
            'RosyBrown',
            'RoyalBlue',
            'PaleTurquoise',
            'GoldenRod',
            'IndianRed',
            'DodgerBlue',
            'DarkSlateGrey',
            'DarkViolet',
            'GreenYellow',
            'Thistle',
            'Wheat',
            'Teal',
            'Sienna',
            'SteelBlue'
        ]
    }

    constructor(props) {
        super(props);
        this.state = { colors: Array.from({length: props.numBoxes}).map(e => this.getRandomColor()) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        let randomBoxIdx = this.getRandomIdx(this.props.numBoxes);
        let newColors = [...this.state.colors];
        newColors[randomBoxIdx] = this.getRandomColor();

        this.setState({colors: newColors});
    }
 
    getRandomIdx(max){
        return Math.floor(Math.random() * max);
    }
    
    getRandomColor(){
        let randomIdx = this.getRandomIdx(this.props.numBoxes);
        return this.props.colorNames[randomIdx];
    }   

    //could put generate inside here since it's not too much logic
    handleClick(evt) {
        this.generate();
    }

    render() {
        return(
            <div>
                {this.state.colors.map(color =>
                    <Box color={color}/>)}
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}

export default Container;

/** Code review notes
 * - this.setState: because we're changing a value independent of current state, we can just use an object
 * - we could move generate code into handleClick (sometimes too much abstraction is ruff)
 */

/** This could be even better if...
 * - moved getRandomIdx, getRandomColor into utils folder and imported them
 * - function to generate colors for "color bank"
 */
