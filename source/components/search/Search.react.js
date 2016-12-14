var React = require('react');
var $ = require('jquery');
var Suggests = require('./Suggests.react');

// require('./search.css');

var Search = React.createClass({

    getInitialState: function() {
        return {searchPlaceholderValue: null, keywords: '', suggests: {}, focus: false};
    },

    handleKeywordChange: function(event) {
        var currentInputValue = event.target.value;

        this.setState({keywords: currentInputValue});

        this.getSearchSuggestRequest = $.ajax({
            url: 'http://car.diandong.com/api/chexi_fuzzysearch',
            data: {
                keywords: currentInputValue
            },
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (result.state.err) {
                    this.setState({suggests: {}});
                } else {
                    var resultLength = result.data.length;
                    var resultObject = {};

                    for (var i = 0; i < resultLength; i++) {
                        var keyIndex = result.data[i].cxid;
                        var keyValue = result.data[i].name;

                        resultObject[keyIndex] = keyValue;
                    }

                    this.setState({suggests: resultObject});
                }
            }.bind(this)
        });
    },

    handleKeyUp: function(event) {
        if (event.keyCode === 13) {
            this.handleSubmit();
        }
    },

    handleSubmit: function() {
        var searchKeywords;

        searchKeywords = this.state.keywords
            ? this.state.keywords
            : this.state.searchPlaceholderValue;

        window.open('http://search.diandong.com/zonghe/?words=' + searchKeywords);
    },

    componentWillMount: function() {
        this.getSearchPlaceholderRequest = $.ajax({
            url: 'http://car.diandong.com/api/getSectionData?sectionid=296',
            data: {},
            dataType: 'jsonp',
            type: 'POST',
            success: function(result) {
                var searchPlaceholderValue = result.data[0].title || '';

                this.setState({searchPlaceholderValue: searchPlaceholderValue});
            }.bind(this)
        });

        $(document).on('click', function(e) {
            if ($(e.target).attr('id') !== 'search-wrapper') {
                this.setState({suggests: {}});
            }
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.getSearchPlaceholderRequest.abort();
        this.getSearchSuggestRequest.abort();
    },

    render: function() {
        return (
            <div className="search-wrapper" id="search-wrapper">
                <div className="search-bar">
                    <input className="search-input" type="text" value={this.state.keywords} onChange={this.handleKeywordChange} onKeyUp={this.handleKeyUp} placeholder={this.state.searchPlaceholderValue}/>
                    <a className="search-submit-btn" onClick={this.handleSubmit} href="javascript:;">
                        <i className="icon">&#xe60a;</i>
                    </a>
                </div>
                <Suggests suggests={this.state.suggests}/>
            </div>
        );
    }
});

module.exports = Search;
