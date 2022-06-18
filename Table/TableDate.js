export const TableDate = ({unix}) => {

    const date = new Date(unix * 1000)

    if (unix === null){
        return "Неизвестно"
    }else {
        return date.toLocaleString('ru', { day: 'numeric', month: 'long' })
    }
}