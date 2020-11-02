import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {renderResult} from "../Helpers/CalculationAndRenderResult";
import s from './antdStyles.css'
import {Button, Form, InputNumber, Modal} from "antd";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 16,
    },
};

const ModalWindow = () => {

    const [result, setResult] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [total, setTotal] = useState('');

    const validateMessages = {
        number: {
            range: 'Значение должно быть от ${min} до ${max}'
        }
    };
    const onFinish = (values) => {
        if (values.salary) {
            const calculation = (values.salary * 12) * 0.13;
            setResult(calculation)
            setTotal('Итого можете внести в качестве досрочных :')
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            boxSizing: 'borderBox',
            alignItems: 'center',
            height: '800px',
            backgroundColor: '#FF5E56',

        }}>
            <Button
                style={{
                    fontSize: '16px',
                    background: '#FF5E56',
                    color: '#fff',
                    weight: '500px',
                    border: '1px #fff solid',
                }} onClick={() => setShowModal(true)}>
                Налоговый вычет
            </Button>
            <Modal
                visible={showModal}
                onCancel={() => setShowModal(false)}
                closable={true}
                width={552}
                footer={null}
                title='Налоговый вычет'
                fontSize={'30px'}
                style={s.antModalTitle}
            >
                <p>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не
                    более
                    13% от своего официального годового дохода.</p>
                <div>
                    <Form
                        {...layout}
                        name='basic'
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        validateMessages={validateMessages}
                        layout='vertical'
                        style={s.antModalContent}
                    >
                        <Form.Item
                            label='Ваша зарплата в месяц'
                            name='salary'
                            style={{fontWeight: '500'}}
                            rules={[
                                {
                                    type: 'number',
                                    min: 10000,
                                    max: 900000,
                                },
                            ]}
                        >
                            <InputNumber
                                defaultValue='Введите данные'
                                size='small'
                                style={s.antInputNumberSm}
                            />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button
                                style={{
                                    background: 'none',
                                    color: '#EA0029',
                                    border: '#EA0029',
                                    padding: '0',
                                }} type='primary'
                                htmlType='submit'>
                                Рассчитать
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{marginBottom: '40px'}}>
                        {total}
                        {renderResult(result)}
                    </div>
                    <div style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        boxSizing : 'border-box'
                    }}>
                        Что уменьшаем? {` `}
                        <Button style={s.antBtn}>Платеж</Button>
                        <Button style={s.antBtn}>Срок</Button>
                    </div>
                    <div>
                        <Button style={{
                            background: '#FF5E56',
                            color: '#fff',
                            width: '100%',
                            height: '56px',
                            borderRadius: '6px',
                            fontsize: '16px',
                        }} type='primary' key='add-button'>
                            Добавить
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default ModalWindow;