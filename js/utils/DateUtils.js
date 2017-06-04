"use strict";

export function date2String(date) {
    if (date !== null && date instanceof Date) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    } else {
        return ''
    }
}