import React from "react";

export const TableCost = ({number}) => {
    function convertNumber (e) {
        return e.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')+" ₽"
    }
    return (convertNumber(number))
}