import React from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";

export const MyTasksTableHeader = () => {
    return (
        <thead>
        <tr>
            <th>
                <Checkbox/>
            </th>
            <th>
                Название задания
            </th>
            <th>
                Социальная сесть
            </th>
            <th>
                Бюджет
            </th>
            <th/>
        </tr>
        </thead>
    )
}

