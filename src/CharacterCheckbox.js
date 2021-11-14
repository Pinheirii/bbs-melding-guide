import { Component } from 'react';

class CharacterCheckbox extends Component {
    constructor(props) {
        super(props);
        this.name = props.character.name;
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }
    onCheckboxChange(event) {
        this.props.onCheckboxChange(event.target.name, event.target.checked)
    }
    render() {
        const name = this.props.character.name;
        return (
            <label><input type="checkbox" checked={this.props.isChecked} onChange={this.onCheckboxChange} name={name} />{name}</label>
        );
    }
}

export default CharacterCheckbox;
