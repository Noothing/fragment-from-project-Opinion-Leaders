export const TablePaymentStatus = ({statusID}) => {

    let textStatus
    switch (statusID){
        case 0:
            textStatus = "В обработке"
            break
        case 1:
            textStatus = "Выполнено"
            break
        default:
            textStatus = "Неизвестно"
            break
    }

    return textStatus
}