import React from 'react'
import QLBCTC from '../QuanLyBenhCanTiemChung/QuanLyBenhCanTiemChung.module.scss'
import { Link } from 'react-router-dom';
import { BiDetail } from 'react-icons/bi';

export default class DiseasesForBaby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        const url = "http://103.74.123.192:8080/api/diseases/list"
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
        return (
            <div>
                <table className={`${QLBCTC.tableStyle}`} style={{ marginTop: '50px' }}>
                    <thead>
                        <tr style={{ background: '#aee8ff' }}>
                            <th style={{ width: '10%' }}>Mã bệnh</th>
                            <th style={{ width: '35%' }}>Tên bệnh</th>
                            <th style={{ width: '48%' }}>Mô tả</th>
                            <th style={{ width: '7%' }}>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.diseases.ID}>
                                    <td className={QLBCTC.center}>
                                        {item.diseases.ID}
                                    </td>
                                    <td className={QLBCTC.tdpadding}>
                                        {item.diseases.name}
                                    </td>
                                    <td className={QLBCTC.tdpadding}>
                                        {item.diseases.note}
                                    </td>
                                    <td className={QLBCTC.center}>
                                        <Link to="/">
                                            <BiDetail className={QLBCTC.marginStyle} style={{ color: '#000000' }} />
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
