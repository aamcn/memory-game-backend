const express = require('express')

function getTest(req, res){
    res.send('test')
    return ''
}

module.exports = {
    getTest,
} 