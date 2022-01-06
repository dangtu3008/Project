import React, { useEffect, useState } from 'react'
import QLBCTC from '../CSS/TableStyle.module.scss'
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';

export default function QuanLyCSYT() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const url = "http://nhatkymebau.vn:8080/api/hospital/list"
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
                        <th style={{ width: '10%' }}>Mã bệnh viện</th>
                        <th style={{ width: '35%' }}>Tên bệnh viện</th>
                        <th style={{ width: '40%' }}>Địa chỉ</th>
                        <th style={{ width: '7%' }}>Chi tiết</th>
                        <th style={{ width: '8%' }}>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.ID}>
                                <td className={QLBCTC.center}>
                                    {item.ID}
                                </td>
                                <td className={QLBCTC.tdpadding}>
                                    {item.name}
                                </td>
                                <td className={QLBCTC.tdpadding}>
                                    {item.address}
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
