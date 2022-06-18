import React, {useState} from "react";
import {MyTaskDialog} from "./MyTaskDialog";
import {TableLayout} from "../Common/Table/TableLayout";
import {MobileMyTasksTable} from "./components/MobileMyTasksTable";
import {DesktopMyTasksTable} from "./components/DesktopMyTasksTable";
import {userData} from "../../simpledata/user-data";
import PageTitle from "../Common/PageTitle/PageTitle";

const MyTasks = () => {

    const [showedDialog, setShowedDialog] = useState(false)

    function onClickHandler() {
        setShowedDialog(true)
    }

    return (
        <React.Fragment>
            <TableLayout
                title={
                    <PageTitle
                        title="Мои задания"
                        hasButton={true}
                        text="Создать задание"
                        icon={"icon-pen"}
                        onClickHandler={onClickHandler.bind(this)}/>
                }
                pageOffset={7}
                initialRows={userData.tasks}
                desktopTable={<DesktopMyTasksTable/>}
                mobileTable={<MobileMyTasksTable/>}/>

            <MyTaskDialog
                showed={showedDialog}
                setShowed={setShowedDialog.bind(this)}/>
        </React.Fragment>
    )
}

export default MyTasks