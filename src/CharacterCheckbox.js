import {Component} from 'react';

class CharacterCheckbox extends Component {
    constructor(props) {
        super(props);
        this.name = props.character.name;
        this.state = { isChecked: false };
    }
    render() {
        return (<label ><input type="checkbox" defaultChecked={this.state.isChecked} onChange={() => prevState => !prevState} id={this.id} name={this.name} />{this.name}</label>);
    }
}

export default CharacterCheckbox;
