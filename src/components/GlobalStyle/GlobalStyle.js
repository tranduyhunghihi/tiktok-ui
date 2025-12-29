import React from 'react';
import PropTypes from 'prop-types';
import './GloBalStyle.scss'


function GloBalStyle({children}) {
    return React.Children.only(children )

}

GloBalStyle.propTypes = {
    children: PropTypes.node.isRequired
}

export default GloBalStyle  