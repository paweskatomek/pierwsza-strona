

import React, { Component } from 'react';
import { Navigation } from 'react-mdl';
class AppNavigation extends Component  {
    render(){
        return (
            <Navigation>
            <a href="https://onet.pl">Onet.pl</a>
            <a href="https://wp.pl">wp.pl</a>
            <a href="https://google.com">google.com</a>
            <a href="https://github.com/paweskatomek">mój github</a>
          </Navigation>
        );
    }
}
export default AppNavigation;