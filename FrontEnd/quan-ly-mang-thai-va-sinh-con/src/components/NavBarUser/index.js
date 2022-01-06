import Header from '../CSS/Header.module.scss'
import { Routes, Route, Link } from 'react-router-dom';
import CSYT from '../CSYT';
import DiseasesForBaby from '../DiseasesForBaby';

export default function NavBarUser() {
    return (
        <div>
            <header>
                <nav id={Header.header}>
                    <ul id={Header.nav}>
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                            <Link to="/">Đặt lịch</Link>
                            <ul className={Header.subnav}>
                                <li><Link to="/">Đăng ký khám thai</Link></li>
                                <li><Link to="/">Đăng ký tiêm cho trẻ</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Quản lý</Link>
                            <ul className={Header.subnav}>
                                <li><Link to="/csyt">Cơ sở y tế</Link></li>
                                <li><Link to="/">Bệnh cần tiêm chủng</Link></li>
                                <li><Link to="/">Bệnh thường gặp ở phụ nữ mang thai</Link></li>
                                <li><Link to="/DiseasesForBaby">Bệnh thường gặp ở trẻ</Link></li>
                                <li><Link to="/">Bệnh cần tiêm chủng cho trẻ</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Tra cứu</Link>
                        </li>
                        <li>
                            <Link to="/">Hồ sơ</Link>
                            <ul className={Header.subnav}>
                                <li><Link to="/">Hồ sơ khám thai</Link></li>
                                <li><Link to="/">Hồ sơ trẻ sơ sinh</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/csyt" element={<CSYT />} />
                <Route path="/DiseasesForBaby" element={<DiseasesForBaby />} />
            </Routes>
        </div>
    )
}
