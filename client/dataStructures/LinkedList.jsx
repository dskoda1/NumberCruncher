/** @jsx React.DOM */
'use strict';

let React = require('react');
let _ = require('underscore');

class LinkedList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        var nodes = [];

        var node = this.props.list.head;
        while (node !== null) {
            nodes.push(node.data);
        }

        return (
            <div>
            <h3>Hello from linkedList!</h3>
            {nodes}
            </div>
        );
    }
}

LinkedList.propTypes = {
    list: React.PropTypes.object
};

module.exports = LinkedList;