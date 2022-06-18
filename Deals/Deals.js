import React, {useState} from "react";
import {DesktopDealsTable} from "./components/DesktopDealsTable";
import {MobileDealsTable} from "./components/MobileDealsTable";
import {dealsList} from "../../simpledata/deals-list";
import {TableLayout} from "../Common/Table/TableLayout";
import {MyTaskDialog} from "../MyTasks/MyTaskDialog";
import PageTitle from "../Common/PageTitle/PageTitle";
import {useSelector} from "react-redux";

export const Deals = () => {

    const [showedDialog, setShowedDialog] = useState(false)

    const theme = useSelector(state => state.theme.isBlogger)

    function onClickHandler() {
        setShowedDialog(true)
    }

    return (
        <React.Fragment>
            <TableLayout
                title={
                    <PageTitle
                        title="Сделки"
                        hasButton={!theme}
                        icon="icon-pen"
                        text="Создать задание"
                        onClickHandler={onClickHandler.bind(this)}/>
                }
                pageOffset={7}
                initialRows={dealsList}
                desktopTable={<DesktopDealsTable/>}
                mobileTable={<MobileDealsTable/>}
            />

            <MyTaskDialog
                showed={showedDialog}
                setShowed={setShowedDialog.bind(this)}/>
        </React.Fragment>
    )
}