import { Component } from "react";

class SearchresultTable extends Component {
    render() {
        return (
            <div>
                <p>Melding Recipes</p>
                <table>
                    <thead>
                    <tr>
                        <th>Command</th>
                        <th>First Ingredient</th>
                        <th>Second Ingredient</th>
                        <th>Type</th>
                        <th>Used By</th>
                        <th>%</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.searchresults.map((searchresult) => {
                        return <RecipeTableRow recipe={searchresult} key={searchresult.identifier} />
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

class RecipeTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: props.recipe.command,
            ingredient1: props.recipe.ingredient1,
            ingredient2: props.recipe.ingredient2,
            type: props.recipe.type,
            usedBy: props.recipe.usedBy,
            percentage: props.recipe.percentage
        }
    }
    render() {
        return (
            <tr>
                <td>{this.state.command}</td>
                <td>{this.state.ingredient1}</td>
                <td>{this.state.ingredient2}</td>
                <td>{this.state.type}</td>
                <td>{this.state.usedBy}</td>
                <td>{this.state.percentage}</td>
            </tr>
        );
    }
}

export default SearchresultTable;
