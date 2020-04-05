import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Row, Col, Button, Typography, Switch } from 'antd';
import { AnyAction } from '@reduxjs/toolkit';
import { actions } from '../../utils';
import { State } from '../../interfaces/state.interface';

const { Item } = Form;
const { Title } = Typography;
const INPUT_LIMIT = 80;

interface Props {
    dispatch(action: AnyAction): void;
    app: {
        isProcessing: boolean;
        shouldSaveOffline: boolean;
    };
}

const AddTodoField: FC<Props> = (props): JSX.Element => {
    const {
        dispatch,
        app,
    } = props;

    const [form] = Form.useForm();
    const [charsLeft, setCharsLeft] = useState(INPUT_LIMIT);

    const addTodo = (values: any): void => {
        const { title } = values;
        dispatch({ type: actions.TOGGLE_PROCESSING_STATE });
        dispatch({
            type: actions.ADD_TODO,
            payload: {
                title,
            },
        });
        setTimeout(() => {
            dispatch({ type: actions.TOGGLE_PROCESSING_STATE });
        }, 500);
        form.resetFields();
        setCharsLeft(INPUT_LIMIT);
    };

    return (
        <div className="p-8 my-4 shadow-lg rounded-lg">

            <Title level={2}>
                Add new todo
            </Title>

            <Form form={form} size="large" onFinish={addTodo}>

                <Row gutter={[12,0]}>

                    <Col xs={24} lg={20}>
                        <Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'What? A ghost task? Not allowed here, sorry.',
                                },
                                {
                                    max: INPUT_LIMIT,
                                },
                            ]}
                            extra={
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <span
                                        style={{
                                            opacity: 0.7,
                                        }}
                                    >
                                        {charsLeft} characters left
                                    </span>
                                </div>
                            }
                        >
                            <Input
                                placeholder="The world is your oyster"
                                onChange={(e): void => {
                                    const value = (INPUT_LIMIT >= e.target.value.length)
                                        ? INPUT_LIMIT - e.target.value.length
                                        : 0;
                                    setCharsLeft(value);
                                }}
                                maxLength={INPUT_LIMIT}
                            />
                        </Item>
                    </Col>

                    <Col xs={24} lg={4}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={app.isProcessing}
                            block
                        >
                            Save
                        </Button>
                    </Col>

                </Row>
            </Form>

            <div className="px-8">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Item
                        style={{
                            margin: 0,
                        }}
                        colon={false}
                        label={
                            <strong>
                                Save offline
                            </strong>
                        }
                    >
                        <Switch
                            checked={app.shouldSaveOffline}
                            onChange={(): void => {
                                dispatch({
                                    type: actions.TOGGLE_OFFLINE_SAVE,
                                });
                            }}
                        />
                    </Item>
                </div>
            </div>
        </div>
    );
};

const appProps = (state: State): {
    app: {
        isProcessing: boolean;
        shouldSaveOffline: boolean;
    };
} => {
    return {
        app: state.app,
    };
};

export default connect(appProps)(AddTodoField);
