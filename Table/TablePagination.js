import React from "react";
import Button from "../Buttons/Button";

const TablePagination = ({currentPage, offset, totalRows, setCurrentPage}) => {

    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalRows / offset); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="table-pagination">
            <button
                className="table-pagination__button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage-1)}>
                <svg width="3" height="6" viewBox="0 0 3 6" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.11311 3.34662L2.10482 5.85367C2.17817 5.95124 2.26976 6 2.37977 6C2.48979 6 2.58138 5.95118 2.65473 5.85367L2.8869 5.5648C2.96227 5.4698 2.99996 5.35432 2.99996 5.21825C2.99996 5.08475 2.96228 4.9679 2.8869 4.8678L1.40225 2.99999L2.88697 1.12833C2.96232 1.03333 3 0.91785 3 0.781763C3 0.648279 2.96233 0.531386 2.88697 0.431327L2.65478 0.142495C2.57942 0.0474944 2.48773 4.33099e-07 2.37982 4.23885e-07C2.27187 4.14668e-07 2.1802 0.0474943 2.10486 0.142495L0.11311 2.64955C0.0377179 2.74968 4.20698e-08 2.8665 3.01201e-08 3C-1.07109e-05 3.13607 0.0377178 3.25162 0.11311 3.34662Z"/>
                </svg>
            </button>
            {
                pageNumbers.map(number => {
                    return (
                        <p className={currentPage === number ? 'active' : null}
                           key={number}
                           onClick={() => setCurrentPage(number)}>
                            {number}
                        </p>
                    )
                })
            }
            <Button
                className="table-pagination__button"
                disabled={currentPage === pageNumbers.length}
                onClick={() => setCurrentPage(currentPage+1)}>
                <svg width="3" height="6" viewBox="0 0 3 6" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.11311 3.34662L2.10482 5.85367C2.17817 5.95124 2.26976 6 2.37977 6C2.48979 6 2.58138 5.95118 2.65473 5.85367L2.8869 5.5648C2.96227 5.4698 2.99996 5.35432 2.99996 5.21825C2.99996 5.08475 2.96228 4.9679 2.8869 4.8678L1.40225 2.99999L2.88697 1.12833C2.96232 1.03333 3 0.91785 3 0.781763C3 0.648279 2.96233 0.531386 2.88697 0.431327L2.65478 0.142495C2.57942 0.0474944 2.48773 4.33099e-07 2.37982 4.23885e-07C2.27187 4.14668e-07 2.1802 0.0474943 2.10486 0.142495L0.11311 2.64955C0.0377179 2.74968 4.20698e-08 2.8665 3.01201e-08 3C-1.07109e-05 3.13607 0.0377178 3.25162 0.11311 3.34662Z"/>
                </svg>
            </Button>
        </div>
    )
}

export default TablePagination