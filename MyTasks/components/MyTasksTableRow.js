import React from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";
import SocialMedia from "../../Common/Users/SocialMedia";
import {TableCost} from "../../Common/Table/TableCost";
import {IconButton} from "../../Common/Buttons/IconButton";
import GoTo from "../../Common/Buttons/GoTo";

export const MyTasksTableRow = ({task}) => {
    function clickHandle() {
        console.log("CLICKED!!!")
    }

    return (
        <tr>
            <td>
                <Checkbox/>
            </td>
            <td>
                {task.title}
            </td>
            <td>
                <SocialMedia
                    socialMediaType={task.socialMediaType}
                    socialMediaUrl={task.socialMediaUrl}/>
            </td>
            <td>
                <TableCost
                    number={task.budget}/>
            </td>
            <td>
                <IconButton
                    icon={"icon-trash"}
                    clickHandle={clickHandle.bind(this)}
                />
                <IconButton
                    icon={"icon-settings"}
                    clickHandle={clickHandle.bind(this)}
                />
                <GoTo/>
            </td>
        </tr>
    )
}