const React = require('react');

require('react-safe-render')(React, {
  errorHandler: function (errReport) {
    
    alert(`Component "${errReport.displayName}" reports: ${errReport.error.message}`);
  }
});

var {bootstrap} = require('./bootstrap');
bootstrap(React);