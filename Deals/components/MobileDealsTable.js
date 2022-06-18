import {MobileBlocksWrapper} from "../../Common/MobileTableBlock/MobileBlocksWrapper";
import {MobileDealBlock} from "./MobileDealBlock";

export const MobileDealsTable = ({currentRows}) => {
    return (
        <MobileBlocksWrapper>
            {
                currentRows.map((row, index) => {
                    return (
                        <MobileDealBlock
                            deal={row}
                            key={index}/>
                    )
                })
            }
        </MobileBlocksWrapper>
    )
}