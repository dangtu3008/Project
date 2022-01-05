import Header from '../Header/Header.module.scss'
import { Routes, Route, Link } from 'react-router-dom';
import QuanLyTKND from '../QuanLyTaiKhoanNguoiDung';
export default function NavBarAdmin() {
    return (
        <div>
            <div>
                <nav id={Header.header}>
                    <ul id={Header.nav}>
                        <li>
                            <Link to="/quanlytaikhoannguoidung">Quản lý tài khoản người dùng</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/quanlytaikhoannguoidung" element={<QuanLyTKND />} />
            </Routes>
        </div>


    )
}