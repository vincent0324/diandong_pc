define(function(require, exports, module) {

    var testdrive = require('testdrive');

    var F = function() {
        this.init();
    };

    F.prototype = {
        init: function() {
            testdrive.show(0,0,0,0);
        }
    }

    module.exports = F;
});
