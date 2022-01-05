import React from 'react'
import signUp from '../SignUp/SignUp.module.scss'
import { BiChevronDown } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function LoginInvalid() {
    const onChange = (date) => {
        console.log(date.toString());
    };
    return (
        <div className={signUp.contentHeader3}>
            <h3>Thông báo</h3>

        </div>
    )
}
