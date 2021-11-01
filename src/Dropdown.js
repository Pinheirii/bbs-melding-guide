import { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dropdown">
                <p>Abilities</p>
                <select name="abilities" id="abilities">
                    <SelectItem item={null} />
                    {this.typemapping.map(typemapping => typemapping.outcome).filter((value, index, self) => self.indexOf(value) === index).map((type => {
                        return <SelectItem item={type} />
                    }))}
                </select>
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

export default Dropdown;
