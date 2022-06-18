import React, {useState} from "react";
import {IconButton} from "../Common/Buttons/IconButton";
import Blur from "../Common/Blur/Blur";
import LabeledInput from "../Common/LabeledInput/LabeledInput";
import {LabeledTextArea} from "../Common/LabeledTextArea/LabeledTextArea";
import {InputFile} from "../Common/InputFile/InputFile";
import GradientButton from "../Common/Buttons/GradientButton";
import {Popup} from "../Common/Popup/Popup";
import Icon from "../Common/Icon/icon";

export const MyTaskDialog = ({showed, setShowed}) => {

    const [socialMediaUrl, setSocialMediaUrl] = useState("")
    const [socialMediaUrlInvalid, setSocialMediaUrlInvalid] = useState(false)

    function invalidateUrl(e) {
        if (e.length > 0) {
            try {
                new URL(e)
            } catch (_) {
                setSocialMediaUrlInvalid(true)
                checkForError()
                return
            }
            setSocialMediaUrlInvalid(false)
        } else {
            setSocialMediaUrlInvalid(false)
        }
        checkForError()
    }

    const [advertsCost, setAdvertsCost] = useState()
    const [advertsCostInvalid, setAdvertsCostInvalid] = useState(false)

    function invalidateCost(e) {
        if (e.length > 0) {
            const regex = /^\d+$/

            if (!regex.test(e)) {
                setAdvertsCostInvalid(true)
            } else if (!e > 0) {
                setAdvertsCostInvalid(true)
            } else {
                setAdvertsCostInvalid(false)
            }
        } else {
            setAdvertsCostInvalid(false)
        }
        checkForError()

    }

    const [keywords, setKeywords] = useState("")
    const [keywordsArray, setKeywordsArray] = useState([])
    const [keywordsInvalid, setKeywordsInvalid] = useState(false)

    function invalidateKeywords(e) {
        if (e.length > 0) {
            console.log(e)
            const array = e.split(" ")
            console.log(array.length)
            console.log(array.length >= 3)

            if (array.length >= 3) {
                setKeywordsArray(array)
                setKeywordsInvalid(false)
            } else {
                setKeywordsInvalid(true)
            }
        } else {
            setKeywordsInvalid(false)
        }
        checkForError()
    }

    const [description, setDescription] = useState("")
    const [descriptionInvalid, setDescriptionInvalid] = useState(false)

    const body = document.querySelector('body')

    if (showed) {
        body.classList.add('dialog-opened')
    }

    function offDialog() {
        setSocialMediaUrl("")
        setAdvertsCost()
        setKeywords("")

        setSocialMediaUrlInvalid(false)
        setAdvertsCostInvalid(false)
        setKeywordsInvalid(false)
        setShowed(false)
        body.classList.remove('dialog-opened')
    }

    function onClickHandler() {
        console.log("CLICK!!")
        offDialog()
    }

    const [fileList, setFileList] = useState([])

    const [totalError, setTotalError] = useState(false)

    function checkForError() {
        setTotalError(socialMediaUrlInvalid || advertsCostInvalid || keywordsInvalid || descriptionInvalid)
    }

    return (
        <React.Fragment>
            {showed
                ? <React.Fragment>
                    <div className="modal-window my-task__dialog">
                        <IconButton
                            icon="icon-close"
                            clickHandle={offDialog.bind(this)}/>
                        <header className="my-task__dialog-header">
                            <h4>Нужна реклама в инстаграм</h4>
                        </header>
                        <div className="my-task__dialog-body">
                            <LabeledInput
                                label={
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        Ссылка на рекламируемую страницу
                                        <Popup
                                            element={
                                                <div className="question">?</div>
                                            }
                                            popup={
                                                <p style={{
                                                    padding: 10,
                                                    background: "black",
                                                    color: "white"
                                                }}>fksjflsdfjdslflsdfjsdl;fj</p>
                                            }
                                        />
                                    </div>
                                }
                                name="socialMediaUrl"
                                type="url"
                                placeholder="https://"
                                value={socialMediaUrl}
                                changeHandler={setSocialMediaUrl}
                                isValid={socialMediaUrlInvalid}
                                loseFocusHandler={invalidateUrl.bind(this)}
                                errorText="Невалидная ссылка"/>

                            <LabeledInput
                                label={"Цена"}
                                name="advertsCost"
                                type="text"
                                placeholder="20 000"
                                value={advertsCost}
                                changeHandler={setAdvertsCost}
                                isValid={advertsCostInvalid}
                                loseFocusHandler={invalidateCost.bind(this)}
                                errorText="Некорректная стоимость"/>

                            <LabeledInput
                                label={"Ключевые слова"}
                                name="keywords"
                                type="text"
                                placeholder="Минимум 3"
                                value={keywords}
                                changeHandler={setKeywords}
                                isValid={keywordsInvalid}
                                loseFocusHandler={invalidateKeywords.bind(this)}
                                errorText="Некорректный ввод. Формат ввода: 'Lorem impus dollar'"/>

                            <LabeledTextArea
                                label={"Описание"}
                                name="description"
                                placeholder=""
                                value={description}
                                changeHandler={setDescription}
                                isValid={descriptionInvalid}
                                loseFocusHandler={null}
                                errorText=""/>

                            <InputFile
                                setFiles={setFileList.bind(this)}
                            />
                        </div>
                        <footer className="my-task__dialog-footer">
                            <GradientButton
                                icon={null}
                                text="Сохранить и предложить"
                                disabled={totalError}
                                onClickHandler={onClickHandler.bind(this)}/>
                        </footer>
                    </div>
                    <Blur toggle={offDialog.bind(this)} zIndex={150}/>
                </React.Fragment>
                : null
            }
        </React.Fragment>
    )
}