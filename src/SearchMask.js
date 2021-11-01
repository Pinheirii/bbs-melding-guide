import { Component } from "react";
import CharacterCheckbox from './CharacterCheckbox';
import Characters from './characters.json';
import MeldingRules from "./meldingrules.json";

class SearchMask extends Component {
    constructor() {
        super();
        this.meldingRules = MeldingRules.recipes;
        this.typemapping = MeldingRules.typemapping; 
        this.characterArray = Characters.characters;
    }
    onClickButton() {
        console.log("button clicked!")
    }
    render() {
        return (
            <div>
                <div className="CommandDropdown">
                    <p>Commands</p>
                    <select name="commands" id="commands">
                        <SelectItem item={null} />
                        {this.meldingRules.map(rule => rule.command).filter((value, index, self) => self.indexOf(value) === index).map((command => {
                            return <SelectItem item={command} />
                        }))}
                    </select>
                </div>
                <div className="AbilityDropdown">
                    <p>Abilities</p>
                    <select name="abilities" id="abilities">
                        <SelectItem item={null} />
                        {this.typemapping.map(typemapping => typemapping.outcome).filter((value, index, self) => self.indexOf(value) === index).map((type => {
                            return <SelectItem item={type} />
                        }))}
                    </select>
                </div>
                <div className="Characterfilter">
                    {this.characterArray.map((character) => {
                        return <CharacterCheckbox character={character} key={character.name} />
                    })}
                </div>
                <div className="SearchButton">
                    <button onClick={this.onClickButton}>Search</button>
                </div>
            </div>
        );
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
