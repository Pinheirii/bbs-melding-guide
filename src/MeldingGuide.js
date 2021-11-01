import { Component } from 'react';
import SearchMask from './SearchMask';
import SearchresultTable from './SearchresultTable';

class MeldingGuide extends Component {
    render() {
        return (
            <div className="App">
                <p>KH BBS Melding Guide</p>
                <SearchMask />
                <SearchresultTable />
            </div>
        );
    }
}

export default MeldingGuide;
