import { Component } from 'react';
import SearchMask from './SearchMask';
import SearchresultTable from './SearchresultTable';
import MeldingRules from "./data/meldingrules.json";
import Typemappings from "./data/typemappings.json";
import Characters from "./data/characters.json";

class MeldingGuide extends Component {
    constructor(props) {
        super(props);
        const checkboxMap = new Map();
        Characters.characters.forEach(char => checkboxMap.set(char.name, false));
        this.state = {
            selectedCommand: '',
            selectedAbility: '',
            checkboxMap: checkboxMap
        };
        this.searchresults = MeldingRules.recipes;
        this.typemappings = Typemappings.typemappings;
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.filterSearchresults = this.filterSearchresults.bind(this);
        this.onChangeSelectedCommand = this.onChangeSelectedCommand.bind(this);
        this.onChangeSelectedAbility = this.onChangeSelectedAbility.bind(this);
    }

    render() {
        this.searchresults = MeldingRules.recipes;
        this.filterSearchresults();
        return (
            <div className="App">
                <p>KH BBS Melding Guide</p>
                <SearchMask checkboxMap={this.state.checkboxMap} selectedCommand={this.state.selectedCommand} selectedAbility={this.state.selectedAbility} onChangeCheckbox={this.onChangeCheckbox} onChangeCommand={this.onChangeSelectedCommand} onChangeAbility={this.onChangeSelectedAbility} />
                <SearchresultTable searchresults={this.searchresults} />
            </div>
        );
    }

    filterSearchresults() {
        if (this.state.selectedCommand !== '') {
            this.searchresults = this.searchresults.filter(recipe => recipe.command === this.state.selectedCommand);
        }
        if (this.state.selectedAbility !== '') {
            const relevantTypes = this.typemappings.filter(typemap => typemap.outcome === this.state.selectedAbility).map(typemap => typemap.type);
            this.searchresults = this.searchresults.filter(result => relevantTypes.includes(result.type));
        }
        this.state.checkboxMap.forEach((isChecked, name) => this.filterByCharacter(isChecked, name));
    }

    filterByCharacter(isChecked, name) {
        if (isChecked) {
            this.searchresults = this.searchresults.filter(result => result.usedBy.includes(name.charAt(0)));
        }
    }

    onChangeCheckbox(name, isChecked) {
        var newCheckboxMap = this.state.checkboxMap;
        newCheckboxMap.set(name, isChecked);
        this.setState({ checkboxMap: newCheckboxMap });
    }

    onChangeSelectedCommand(command) {
        this.setState({ selectedCommand: command });
    }

    onChangeSelectedAbility(ability) {
        this.setState({ selectedAbility: ability });
    }
}

export default MeldingGuide;
