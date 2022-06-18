import React from "react";
import Checkbox from "../../Common/Checkbox/Checkbox";
import {MobileFooterBlock} from "../../Common/MobileTableBlock/MobileFooterBlock";
import SocialMedia from "../../Common/Users/SocialMedia";
import {TableCost} from "../../Common/Table/TableCost";
import {TableControlBlock} from "../../Common/Table/TableControlBlock";
import GoTo from "../../Common/Buttons/GoTo";
import {IconButton} from "../../Common/Buttons/IconButton";
import {MobileInfoBlock} from "../../Common/MobileTableBlock/MobileInfoBlock";
import {MobileBlockFooter} from "../../Common/MobileTableBlock/MobileBlockFooter";
import {MobileBlockBody} from "../../Common/MobileTableBlock/MobileBlockBody";
import {MobileBlockAside} from "../../Common/MobileTableBlock/MobileBlockAside";
import {MobileBlockMain} from "../../Common/MobileTableBlock/MobileBlockMain";

export const MobileMyTasksBlock = ({task}) => {

    function clickHandler() {
        console.log("Click!!!")
    }

    return (
        <div className="mobile-block">
            <MobileBlockAside>
                <Checkbox/>
            </MobileBlockAside>
            <MobileBlockMain>
                <MobileBlockBody>
                    <MobileInfoBlock
                        title={null}
                        value={task.title}/>

                    <TableControlBlock>
                        <IconButton
                            clickHandle={clickHandler.bind(this)}
                            icon={"icon-trash"}/>
                        <IconButton
                            clickHandle={clickHandler.bind(this)}
                            icon={"icon-settings"}/>
                        <GoTo/>
                    </TableControlBlock>
                </MobileBlockBody>

                <MobileBlockFooter>
                    <MobileFooterBlock
                        label="Соц сеть"
                        value={
                        <SocialMedia
                            socialMediaUrl={task.socialMediaUrl}
                            socialMediaType={task.socialMediaType}/>
                        }/>
                    <MobileFooterBlock
                        label="Бюджет"
                        value={<TableCost number={task.budget}/>}/>
                </MobileBlockFooter>
            </MobileBlockMain>
        </div>
    )
}