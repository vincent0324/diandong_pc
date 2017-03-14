import React from 'react';

import './suggests.css';

class Suggests extends React.Component {

    constructor(props) {
        super(props);
    }

    getListOfSuggestIds() {
        return Object.keys(this.props.suggests);
    }

    getNumberOfSuggests() {
        return this.getListOfSuggestIds().length;
    }

    getSuggestElement(suggestId) {
        var suggestElementUrl = "http://car.diandong.com/chexi/index/" + suggestId;
        var suggestElementName = this.props.suggests[suggestId];

        // key不能省，会报错
        return (
            <a target="_blank" href={suggestElementUrl} key={suggestId}>{suggestElementName}</a>
        );
    }

    render() {
        var numberOfSuggests = this.getNumberOfSuggests();

        if (numberOfSuggests > 0) {
            var suggestElements = this.getListOfSuggestIds().map(this.getSuggestElement.bind(this));

            return (
                <div className="search-suggest-list">{suggestElements}</div>
            );
        }

        return null;
    }
};

export default Suggests;
