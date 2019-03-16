
import { List, ListItem, ListItemContent } from 'react-mdl';
import axios from 'axios';

import React, { Component } from 'react';
import { Navigation } from 'react-mdl';
class AppNavigation extends Component {

    constructor() {
        super();
        this.state = {
            links: []
        };

    }

    componentWillMount() {
        axios.get('/links.json')
            .then(res => {
                const links = res.data;
                this.setState({ links });
            });
    }
    render() {
        return (
            <Navigation>
                {this.state.links.map(clink =>
                    <a href={clink.url}>{clink.name}</a>

                )}
            </Navigation>
        );
    }
}
export default AppNavigation;