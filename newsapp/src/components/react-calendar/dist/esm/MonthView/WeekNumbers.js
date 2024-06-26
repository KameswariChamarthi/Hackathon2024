import { jsx as _jsx } from "react/jsx-runtime";
import { getYear, getMonth, getDate, getDaysInMonth } from '@wojtekmaj/date-utils';
import WeekNumber from './WeekNumber.js';
import Flex from '../Flex.js';
import { getBeginOfWeek, getDayOfWeek, getWeekNumber } from '../shared/dates.js';
export default function WeekNumbers(props) {
    var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var numberOfWeeks = (function () {
        if (showFixedNumberOfWeeks) {
            return 6;
        }
        var numberOfDays = getDaysInMonth(activeStartDate);
        var startWeekday = getDayOfWeek(activeStartDate, calendarType);
        var days = numberOfDays - (7 - startWeekday);
        return 1 + Math.ceil(days / 7);
    })();
    var dates = (function () {
        var year = getYear(activeStartDate);
        var monthIndex = getMonth(activeStartDate);
        var day = getDate(activeStartDate);
        var result = [];
        for (var index = 0; index < numberOfWeeks; index += 1) {
            result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
        }
        return result;
    })();
    var weekNumbers = dates.map(function (date) { return getWeekNumber(date, calendarType); });
    return (_jsx(Flex, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: 'calc(100% * (1 / 8)', flexShrink: 0 }, children: weekNumbers.map(function (weekNumber, weekIndex) {
            var date = dates[weekIndex];
            if (!date) {
                throw new Error('date is not defined');
            }
            return (_jsx(WeekNumber, { date: date, onClickWeekNumber: onClickWeekNumber, weekNumber: weekNumber }, weekNumber));
        }) }));
}
