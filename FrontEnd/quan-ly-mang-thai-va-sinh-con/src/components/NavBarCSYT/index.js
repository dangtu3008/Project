import Header from '../CSS/Header.module.scss'
import QuanLyBenhCanTiemChung from '../QuanLyBenhCanTiemChung';
import { Routes, Route, Link } from 'react-router-dom';

export default function NavBarCSYT() {
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
                        </li>
                        <li>
                            <Link to="/">Quản lý</Link>
                            <ul className={Header.subnav}>
                                <li><Link to="/quanlybenhcantiemchung">Quản lý bệnh cần tiêm chủng cho trẻ</Link></li>
                                <li><Link to="/quanlybenhcantiemchung">Quản lý bệnh cần tiêm chủng cho phụ nữ mang thai</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Tra cứu</Link>
                        </li>
                        <li>
                            <Link to="/">Hồ sơ</Link>
                        </li>
                        <li>
                            <Link to="/">Báo cáo thống kê</Link>
                            <ul className={Header.subnav}>
                                <li><Link to="/">Báo cáo thống kê về sức khỏe phụ nữ mang thai</Link></li>
                                <li><Link to="/">Báo cáo thống kê về sức khỏe của trẻ sau sinh</Link></li>
                                <li><Link to="/">Báo cáo về tiêm phòng vắc-xin ở trẻ sau sinh</Link></li>
                                <li><Link to="/">Báo cáo thống kê về số trẻ được sinh ra</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/quanlybenhcantiemchung" element={<QuanLyBenhCanTiemChung />} />
            </Routes>
        </div>
    )
}
