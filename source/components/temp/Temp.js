define(function(require, exports, module) {

    var testdrive = require('testdrive');
    //
    //
    var Temp = function() {
        this.init();
    };

    Temp.prototype = {
        init: function() {
            testdrive.show(0, 0, 0, 0);
        }
    };

    module.exports = Temp;
});
