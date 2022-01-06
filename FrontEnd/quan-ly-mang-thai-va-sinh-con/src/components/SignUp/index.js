import React from 'react'
import signUp from '../CSS/SignUp.module.scss'
import { BiChevronDown } from 'react-icons/bi';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function SignUp() {
    const onChange = (date) => {
        console.log(date.toString());
    };
    return (
        <div className={signUp.contentHeader3}>
            <h3>1. Thông tin cá nhân:</h3>
            <div className={signUp.contentBody}>
                <div className={signUp.contentList2}>
                    <div className={signUp.bodyItems}>
                        <label >Họ và tên:</label>
                        <input type="text" />
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Số điện thoại:</label>
                        <input type="text" />
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Số CCCD/CMND:</label>
                        <input type="text" />
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Giới tính:</label>
                        <div className={signUp.inputWithIcon}>
                            <input type="text" />
                            <BiChevronDown className={signUp.allIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={signUp.contentBody}>
                <div className={signUp.contentList}>
                    <div className={signUp.bodyItems}>
                        <label >Email:</label>
                        <input type="text" />
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Ngày sinh:</label>
                        <div className={signUp.inputWithIcon}>
                            <input type="text" />
                            <FaRegCalendarAlt className={signUp.allIcon} onClick={onChange} />
                        </div>
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Tỉnh/Thành phố:</label>
                        <div className={signUp.inputWithIcon}>
                            <input type="text" />
                            <BiChevronDown className={signUp.allIcon} />
                        </div>
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Quận/Huyện:</label>
                        <div className={signUp.inputWithIcon}>
                            <input type="text" />
                            <BiChevronDown className={signUp.allIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={signUp.contentBody}>
                <div className={signUp.contentList}>
                    <div className={signUp.bodyItems}>
                        <label >Phường/Xã:</label>
                        <input type="text" />
                    </div>
                    <div className={signUp.bodyItems}>
                        <label >Địa chỉ:</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <h3>2. Thông tin đăng nhập:</h3>
            <div className={signUp.contentFooter}>
                <div className={signUp.bodyItems}>
                    <label >Tên đăng nhập:</label>
                    <input type="text" />
                </div>
                <div className={signUp.bodyItems}>
                    <label >Mật khẩu:</label>
                    <div className={signUp.inputWithIcon}>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <button className={signUp.signUpBtn}>Đăng ký</button>
                </div>
            </div>
        </div>
    )
}
