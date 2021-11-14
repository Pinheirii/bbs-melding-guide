import { Component } from "react";
import CharacterCheckbox from './CharacterCheckbox';
import Characters from './data/characters.json';
import MeldingRules from "./data/meldingrules.json";
import Typemappings from "./data/typemappings.json";

class SearchMask extends Component {
    constructor(props) {
        super(props);
        this.meldingRules = MeldingRules.recipes;
        this.typemappings = Typemappings.typemappings;
        this.characters = Characters.characters;

        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeCommand = this.onChangeCommand.bind(this);
        this.onChangeAbility = this.onChangeAbility.bind(this);
    }

    render() {
        return (
            <div>
                <div className="CommandDropdown">
                    <p>Commands</p>
                    <select value={this.props.selectedCommand} onChange={this.onChangeCommand}>
                        <SelectItem item={null} />
                        {this.meldingRules.map(rule => rule.command).filter((value, index, self) => self.indexOf(value) === index).map(command => {
                            return <SelectItem item={command} key={command} />
                        })}
                    </select>
                </div>
                <div className="AbilityDropdown">
                    <p>Abilities</p>
                    <select value={this.props.selectedAbility} onChange={this.onChangeAbility}>
                        <SelectItem item={''} />
                        {this.typemappings.map(typemapping => typemapping.outcome).filter((value, index, self) => self.indexOf(value) === index).map(type => {
                            return <SelectItem item={type} key={type} />
                        })}
                    </select>
                </div>
                <div className="Characterfilter">
                    {this.characters.map(char => {
                        return <CharacterCheckbox character={char} key={char.name} isChecked={this.props.checkboxMap.get(char.name)} onCheckboxChange={this.onChangeCheckbox} />
                    })}
                </div>
            </div>
        );
    }

    onChangeCommand(event) {
        this.props.onChangeCommand(event.target.value)
    }

    onChangeAbility(event) {
        this.props.onChangeAbility(event.target.value)
    }

    onChangeCheckbox(name, isChecked) {
        this.props.onChangeCheckbox(name, isChecked);
    }
}

class SelectItem extends Component {
    constructor(props) {
        super(props)
        this.item = props.item;
    }
    render() {
        return (
            <option value={this.item}>{this.item}</option>
        );
    }
}

export default SearchMask;
