/** @jsx React.DOM */
'use strict';
let React = require('react');
let reactDOM = require('react-dom');

let LinkedList = require('./dataStructures/LinkedList');

let ds = require('../shared/dataStructures/linkedList');
var ll = ds.ll;
var list = ll();
list.insert(3);
list.insert(6);
list.insert(5);

//Render our top level component here
reactDOM.render(
    <LinkedList list={list}/>,
    document.getElementById('content')
);