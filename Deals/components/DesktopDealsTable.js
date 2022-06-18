import React from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";
import {DesktopDealsBody} from "./DesktopDealsBody";

export const DesktopDealsTable = ({currentRows}) => {
    return (
        <table className="deal-table">
            <thead>
            <tr>
                <th><Checkbox/></th>
                <th>Название задания</th>
                <th>Рекламодатель</th>
                <th>Исполнитель</th>
                <th>Статус</th>
                <th>Сроки</th>
                <th></th>
            </tr>
            </thead>
            <DesktopDealsBody currentRows={currentRows}/>
        </table>
    )
}