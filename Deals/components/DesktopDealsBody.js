import React from "react";
import {DesktopDealsRow} from "./DesktopDealsRow";

export const DesktopDealsBody = ({currentRows}) => {
    return (
        <tbody>
        {currentRows.map((row, index) => {
            return (
                <DesktopDealsRow deal={row} key={index}/>
            )
        })}
        </tbody>
    )
}