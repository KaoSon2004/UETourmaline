import classNames from "classnames/bind";
import style from "./TableItem.module.scss";

const cx = classNames.bind(style);

function TableItem({data}) {
    // const rowItems = data.map((item) => {for (let [key, value] of Object.entries(data)) {
    //     <td key={key}>{value}</td>;
    // }})

    //return <tr className={cx('table-element')}>{rowItems}</tr>
    return <tr className={cx('row-element')}>
        <td className={cx('key-col')}>{data[0]}</td>
        <td className={cx('value-col')}>{data[1]}</td>
    </tr>
}

export default TableItem;