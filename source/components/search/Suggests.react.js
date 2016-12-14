var React = require('react');
var ReactDOM = require('react-dom');

require('./suggests.css');

var Suggests = React.createClass({

    getListOfSuggestIds: function() {
        return Object.keys(this.props.suggests);
    },

    getNumberOfSuggests: function() {
        return this.getListOfSuggestIds().length;
    },

    getSuggestElement: function(suggestId) {
        var suggestElementUrl = "http://car.diandong.com/chexi/index/" + suggestId;
        var suggestElementName = this.props.suggests[suggestId]

        // key不能省，会报错
        return (
            <a target="_blank" href={suggestElementUrl} key={suggestId}>{suggestElementName}</a>
        );
    },

    render: function() {
        var numberOfSuggests = this.getNumberOfSuggests();

        if (numberOfSuggests > 0) {
            var suggestElements = this.getListOfSuggestIds().map(this.getSuggestElement);

            return (
                <div className="search-suggest-list">{suggestElements}</div>
            );
        }

        return null;
    }
});

module.exports = Suggests;
