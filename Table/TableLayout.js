import React, {useState} from "react";
import PageTitle from "../PageTitle/PageTitle";
import TablePagination from "./TablePagination";
import {useWidthSize} from "../../../hooks/useWidthSize";

export const TableLayout = ({title, pageOffset, initialRows, desktopTable, mobileTable}) => {
    const [offset] = useState(pageOffset)
    const [rows] = useState(initialRows)
    const [currentPage, setCurrentPage] = useState(1)

    const size = useWidthSize()

    const lastRowIndex = currentPage * offset
    const firstRowIndex = lastRowIndex - offset
    const currentRows = rows.slice(firstRowIndex, lastRowIndex)

    return (
        <div className="table-wrapper">
            { title }
            {
                size.width > 750
                    ? React.cloneElement(desktopTable, {currentRows: currentRows})
                    : React.cloneElement(mobileTable, {currentRows: currentRows})

            }
            {
                rows.length > offset
                    ? <TablePagination
                        currentPage={currentPage}
                        offset={offset}
                        totalRows={rows.length}
                        setCurrentPage={setCurrentPage.bind(this)}/>
                    : null
            }
        </div>
    )
}