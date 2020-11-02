import {Checkbox} from "antd";
import s from '../Modal/antdStyles.css'

export const renderResult = (result) => {
    const MAX_PAYMENT_SUMM = 200000;

    if (!result) return null;

    let sum = 0;
    let res = [];
    let index = 1;

    const renderCheckbox = (value, key, index) => (
        <div key={key} index={index}>
            <Checkbox style={s.antCheckboxChecked}>{value} в {index} раз</Checkbox>
        </div>
    )
    while ((sum + result) < MAX_PAYMENT_SUMM) {
        res.push(renderCheckbox(result, sum,index++));
        sum += result
    }
    const reminder = MAX_PAYMENT_SUMM - sum;
    res.push(renderCheckbox(reminder, sum,index++))

    return res;
}