import React from 'react';
import { HomepageLayout } from '../layouts'

export class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <HomepageLayout />
            </div>
        )
    }
}
