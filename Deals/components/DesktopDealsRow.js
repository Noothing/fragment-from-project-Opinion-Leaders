import React from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";
import {TableControlBlock} from "../../Common/Table/TableControlBlock";
import GoTo from "../../Common/Buttons/GoTo";
import {EmailState} from "../../Common/EmailState/EmailState";
import {DealStatus} from "../../Common/DealStatus/DealStatus";
import {DealDeadLine} from "../../Common/Deadline/DealDeadLine";
import {useSelector} from "react-redux";
export const DesktopDealsRow = ({deal}) => {

    const userInformation = useSelector(state => state.user.userInformation)
    const currentMode = useSelector(state => state.theme.isBlogger)
    const corePath = currentMode ? "blogger" : "advertiser"

    return (
        <tr>
            <td><Checkbox/></td>
            <td>
                {deal.task.name}
            </td>
            <td>
                {deal.advertiser.name}
            </td>
            <td>
                {deal.blogger.name}
            </td>
            <td>
                <DealStatus status={deal.status}/>
            </td>
            <td>
                <DealDeadLine deadline={deal.deadline}/>
            </td>
            <td>
                <TableControlBlock>
                    <EmailState
                        messages={deal.messages}
                        userID={userInformation.id}
                    />
                    <GoTo path={"/"+corePath+"/deals/"+deal.id}/>
                </TableControlBlock>
            </td>
        </tr>
    )
}