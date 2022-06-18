import React from "react";
import {MyTasksTableHeader} from "./MyTasksTableHeader";
import {MyTasksTableBody} from "./MyTasksTableBody";

export const DesktopMyTasksTable = ({currentRows}) => {
    return (
        <table className="my-task__table">
            <MyTasksTableHeader/>
            <MyTasksTableBody tasks={currentRows}/>
        </table>
    )
}