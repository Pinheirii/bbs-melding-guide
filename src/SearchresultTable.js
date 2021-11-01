import { Component } from "react";
import MeldingRules from "./meldingrules.json";

class SearchresultTable extends Component {
    constructor(props) {
        super(props);
        // TODO Results sollen fertig gefiltert an die Komponente gehangen werden, aktuell werden statisch alle Rezepte angezeigt
        // this.meldingRules = props.results;
        this.meldingRules = MeldingRules.recipes;
        this.state = { results: this.meldingRules };
    }
    render() {
        return (
            <div>
                <p>Melding Recipes</p>
                <table>
                    <tr>
                        <th>Command</th>
                        <th>First Ingredient</th>
                        <th>Second Ingredient</th>
                        <th>Type</th>
                        <th>Used By</th>
                        <th>%</th>
                    </tr>
                    {this.state.results.map((result) => {
                        return <SearchresultTableRow result={result} />
                    })}
                </table>
            </div>
        );
    }
}

class SearchresultTableRow extends Component {
    constructor(props) {
        super(props);
        this.result = props.result;
        this.command = this.result.command;
        this.ingredient1 = this.result.ingredient1;
        this.ingredient2 = this.result.ingredient2;
        this.type = this.result.type;
        this.usedBy = this.result.usedBy;
        this.percentage = this.result.percentage;
    }
    render() {
        return (
            <tr>
                <td>{this.command}</td>
                <td>{this.ingredient1}</td>
                <td>{this.ingredient2}</td>
                <td>{this.type}</td>
                <td>{this.usedBy}</td>
                <td>{this.percentage}</td>
            </tr>
        );
    }
}

export default SearchresultTable;
