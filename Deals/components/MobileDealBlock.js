import React from "react";
import {MobileBlockAside} from "../../Common/MobileTableBlock/MobileBlockAside";
import Checkbox from "../../Common/Checkbox/Checkbox";
import {MobileBlockMain} from "../../Common/MobileTableBlock/MobileBlockMain";
import {MobileBlockBody} from "../../Common/MobileTableBlock/MobileBlockBody";
import {MobileBlockColumn} from "../../Common/MobileTableBlock/MobileBlockColumn";
import {MobileInfoBlock} from "../../Common/MobileTableBlock/MobileInfoBlock";
import {DealDeadLine} from "../../Common/Deadline/DealDeadLine";
import {DealStatus} from "../../Common/DealStatus/DealStatus";
import {TableControlBlock} from "../../Common/Table/TableControlBlock";
import {EmailState} from "../../Common/EmailState/EmailState";
import GoTo from "../../Common/Buttons/GoTo";

export const MobileDealBlock = ({deal}) => {
    const userID = 0

    return (
        <div className="mobile-block">
            <MobileBlockAside>
                <Checkbox/>
            </MobileBlockAside>
            <MobileBlockMain>
                <MobileBlockBody>
                    <MobileBlockColumn>
                        <MobileInfoBlock
                            title="Название задания"
                            value={deal.task.name}/>
                        <MobileInfoBlock
                            title="Рекламодатель"
                            value={deal.advertiser.name}/>
                        <MobileInfoBlock
                            title="Сроки"
                            value={<DealDeadLine deadline={deal.deadline}/>}/>
                    </MobileBlockColumn>

                    <MobileBlockColumn>
                        <MobileInfoBlock
                            title="Статус"
                            value={<DealStatus status={deal.status}/>}/>

                        <MobileInfoBlock
                            title="Исполнитель"
                            value={deal.blogger.name}/>

                        <TableControlBlock>
                            <EmailState
                                messages={deal.messages}
                                userID={userID}/>
                            <GoTo/>
                        </TableControlBlock>
                    </MobileBlockColumn>
                </MobileBlockBody>
            </MobileBlockMain>
        </div>
    )
}