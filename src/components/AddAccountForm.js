import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {CreateResource} from '../services/resourceservices'
import {BaseHandler} from "../services/accountservices";
import {addNewResource} from "../redux/actions/resourceAction";
import {useDispatch, useSelector} from "react-redux";


export const AddAccountForm = function (props) {
    return (
        <div className={`tile is-child `} onClick={() => console.log("Hello")}>
            <div className="card">
                <header className="card-header has-text-centered">
                    <p className="card-header-title ">

                    </p>
                    <a className="card-header-icon" aria-label="more options">
                          <span className="icon">
                            <i className="delete is-medium" aria-hidden="true"/>
                          </span>
                    </a>
                </header>

                <div className="card-content">
                    <div className=" content ">
                        <nav className="level">
                            <div className="level-item  has-text-centered">
                                <div>
                                    <p className="heading has-text-success">Remain</p>
                                    <p className="title is-4 "></p>
                                </div>
                            </div>
                            <div className="level-item  has-text-centered">
                                <div>
                                    <p className="heading has-text-danger">Spent</p>
                                    <p className="title is-4 "></p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item has-text-primary ">
                        <p className="has-icons-left">
                            <p className="control is-left">
                                <i className="fas fa-exchange-alt is-large"/>
                            </p>

                        </p>
                    </p>
                    <p className="card-footer-item has-text-info ">
                        <i className="fas fa-info is-large"/>
                    </p>
                </footer>
            </div>
        </div>
    )
}


