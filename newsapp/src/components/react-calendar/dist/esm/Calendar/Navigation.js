'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getUserLocale } from 'get-user-locale';
import { getCenturyLabel, getDecadeLabel, getBeginNext, getBeginNext2, getBeginPrevious, getBeginPrevious2, getEndPrevious, getEndPrevious2, } from '../shared/dates.js';
import { formatMonthYear as defaultFormatMonthYear, formatYear as defaultFormatYear, } from '../shared/dateFormatter.js';
var className = 'react-calendar__navigation';
export default function Navigation(_a) {
    var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear = _b === void 0 ? defaultFormatMonthYear : _b, _c = _a.formatYear, formatYear = _c === void 0 ? defaultFormatYear : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? '' : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? '' : _e, _f = _a.next2Label, next2Label = _f === void 0 ? '»' : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? '' : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? '›' : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? '' : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? '«' : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? '' : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? '‹' : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
    var drillUpAvailable = views.indexOf(view) > 0;
    var shouldShowPrevNext2Buttons = view !== 'century';
    var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
    var previousActiveStartDate2 = shouldShowPrevNext2Buttons
        ? getBeginPrevious2(view, activeStartDate)
        : undefined;
    var nextActiveStartDate = getBeginNext(view, activeStartDate);
    var nextActiveStartDate2 = shouldShowPrevNext2Buttons
        ? getBeginNext2(view, activeStartDate)
        : undefined;
    var prevButtonDisabled = (function () {
        if (previousActiveStartDate.getFullYear() < 0) {
            return true;
        }
        var previousActiveEndDate = getEndPrevious(view, activeStartDate);
        return minDate && minDate >= previousActiveEndDate;
    })();
    var prev2ButtonDisabled = shouldShowPrevNext2Buttons &&
        (function () {
            if (previousActiveStartDate2.getFullYear() < 0) {
                return true;
            }
            var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
            return minDate && minDate >= previousActiveEndDate;
        })();
    var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
    var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
    function onClickPrevious() {
        setActiveStartDate(previousActiveStartDate, 'prev');
    }
    function onClickPrevious2() {
        setActiveStartDate(previousActiveStartDate2, 'prev2');
    }
    function onClickNext() {
        setActiveStartDate(nextActiveStartDate, 'next');
    }
    function onClickNext2() {
        setActiveStartDate(nextActiveStartDate2, 'next2');
    }
    function renderLabel(date) {
        var label = (function () {
            switch (view) {
                case 'century':
                    return getCenturyLabel(locale, formatYear, date);
                case 'decade':
                    return getDecadeLabel(locale, formatYear, date);
                case 'year':
                    return formatYear(locale, date);
                case 'month':
                    return formatMonthYear(locale, date);
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        })();
        return navigationLabel
            ? navigationLabel({
                date: date,
                label: label,
                locale: locale || getUserLocale() || undefined,
                view: view,
            })
            : label;
    }
    function renderButton() {
        var labelClassName = "".concat(className, "__label");
        return (_jsxs("button", { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button", children: [_jsx("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"), children: renderLabel(activeStartDate) }), showDoubleView ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "".concat(labelClassName, "__divider"), children: " \u2013 " }), _jsx("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"), children: renderLabel(nextActiveStartDate) })] })) : null] }));
    }
    return (_jsxs("div", { className: className, children: [prev2Label !== null && shouldShowPrevNext2Buttons ? (_jsx("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button", children: prev2Label })) : null, prevLabel !== null && (_jsx("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button", children: prevLabel })), renderButton(), nextLabel !== null && (_jsx("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button", children: nextLabel })), next2Label !== null && shouldShowPrevNext2Buttons ? (_jsx("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button", children: next2Label })) : null] }));
}
