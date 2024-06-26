var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { getYearStart, getYearEnd, getDecadeStart } from '@wojtekmaj/date-utils';
import Tile from '../Tile.js';
import { formatYear as defaultFormatYear } from '../shared/dateFormatter.js';
var className = 'react-calendar__decade-view__years__year';
export default function Year(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c = _a.formatYear, formatYear = _c === void 0 ? defaultFormatYear : _c, otherProps = __rest(_a, ["classes", "currentDecade", "formatYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    var classesProps = [];
    if (classes) {
        classesProps.push.apply(classesProps, classes);
    }
    if (className) {
        classesProps.push(className);
    }
    if (getDecadeStart(date).getFullYear() !== currentDecade) {
        classesProps.push("".concat(className, "--neighboringDecade"));
    }
    return (_jsx(Tile, __assign({}, otherProps, { classes: classesProps, maxDateTransform: getYearEnd, minDateTransform: getYearStart, view: "decade", children: formatYear(locale, date) })));
}
