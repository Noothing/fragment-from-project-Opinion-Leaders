import React from "react";
import {MobileMyTasksBlock} from "./MobileMyTasksBlock";

export const MobileMyTasksTable = ({currentRows}) => {
    return (
        <div className="my-task__mobile-column">
            {currentRows.map((row) => {
                return (
                    <MobileMyTasksBlock
                        key={row.id}
                        task={row}/>
                )
            })}
        </div>
    )
}