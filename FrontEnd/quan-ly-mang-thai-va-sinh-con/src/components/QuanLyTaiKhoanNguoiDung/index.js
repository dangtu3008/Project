import React, { useEffect, useState } from 'react'
import QLBCTC from '../CSS/TableStyle.module.scss'
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';

export default function QuanLyTaiKhoanNguoiDung() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const url = "http://nhatkymebau.vn:8080/api/user/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    return (
        <div>
            <div>
                <Link to="/">
                    <button className={QLBCTC.btn}>
                        Thêm mới
                    </button>
                </Link>
            </div>
            <table className={`${QLBCTC.tableStyle}`} >
                <thead>
                    <tr style={{ background: '#aee8ff' }}>
                        <th style={{ width: '5%' }}>STT</th>
                        <th style={{ width: '27%' }}>Tên người dùng</th>
                        <th style={{ width: '27%' }}>Số điện thoại</th>
                        <th style={{ width: '27%' }}>Nhóm quyền</th>
                        <th style={{ width: '6%' }}>Chi tiết</th>
                        <th style={{ width: '8%' }}>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.ID}>
                                <td className={QLBCTC.center}>
                                    {items.indexOf(item) + 1}
                                </td>
                                <td className={QLBCTC.center}>
                                    {item.name}
                                </td>
                                <td className={QLBCTC.center}>
                                    {item.phone}
                                </td>
                                <td className={QLBCTC.center}>
                                    {item.roles}
                                </td>
                                <td className={QLBCTC.center}>
                                    <Link to="/">
                                        <BiDetail className={QLBCTC.marginStyle} style={{ color: '#000000' }} />
                                    </Link>
                                </td>
                                <td className={QLBCTC.center}>
                                    <Link to="/">
                                        <FiEdit className={QLBCTC.marginStyle} style={{ color: '#000000' }} />
                                    </Link>
                                    <Link to="/">
                                        <AiFillDelete className={QLBCTC.marginStyle} style={{ color: '#000000' }} />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
