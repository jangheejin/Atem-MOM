define([
    './_Contour'
  , './ContourPoint'
  , './validators'
], function(
    Parent
  , ContourPoint
  , validators
) {
    "use strict";
    /**
     * This Element is the container of all points of a outline contour.
     * It may have some metadata (like an identifier) and contain children
     * of type MOM ContourPoint.
     */
    function Contour() {
        Parent.call(this);
    }
    var _p = Contour.prototype = Object.create(Parent.prototype);
    _p.constructor = Contour;

    Object.defineProperty(_p, 'MOMType', {
        value: 'MOM Contour'
    });

    Object.defineProperty(_p, 'type', {
        /* this is used for CPS selectors*/
        value: 'contour'
    });

    _p._validators = Object.create(null);
    _p._validators.open = validators.validateNumber;

    _p._acceptedChildren = Object.create(null);
    _p._acceptedChildren[ContourPoint.prototype.type] = ContourPoint;

    return Contour;
});

