import React from 'react'
import QLBCTC from '../QuanLyBenhCanTiemChung/QuanLyBenhCanTiemChung.module.scss'
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';

export default class QuanLyVacxin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };

    }
    componentDidMount() {
        const url = "http://103.74.123.192:8080/api/vaccine/list"
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    items: data,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { items } = this.state;
        console.log(items);

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
                            <th style={{ width: '7%' }}>STT</th>
                            <th style={{ width: '15%' }}>Tên Vắc-xin</th>
                            <th style={{ width: '64%' }}>Mô tả</th>
                            <th style={{ width: '6%' }}>Chi tiết</th>
                            <th style={{ width: '8%' }}>Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item._id}>
                                    <td className={QLBCTC.center}>
                                        {items.indexOf(item) + 1}
                                    </td>
                                    <td className={QLBCTC.tdpadding}>
                                        {item.name}
                                    </td>
                                    <td className={QLBCTC.tdpadding}>
                                        {item.note}
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
}
