import React from "react";
import {MyTasksTableRow} from "./MyTasksTableRow";

export const MyTasksTableBody = ({tasks}) => {
    return (
        <tbody>
        {tasks.map((task) => {
            return (
                <MyTasksTableRow task={task} key={task.id}/>
            )
        })}
        </tbody>
    )
}