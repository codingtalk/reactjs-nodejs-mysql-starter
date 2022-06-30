import React from 'react';
import { Button } from 'antd';
import './index.scss';

export default function choose() {
    return (
        <div className='view choose'>
            <div className="choose_box">
                <div className="box_title">
                    <h1>Choose a plan</h1>
                </div>
                <div className="box_toolbar">
                    <div className="toolbar_left"></div>
                    <div className="toolbar_right">
                        <div className="right_item">
                            <Button type="primary">Standard Plan</Button>
                        </div>
                        <div className="right_item">
                            <Button type="primary">Premium Plan</Button>
                        </div>
                    </div>
                </div>
                <div className="box_content"></div>
                <div className="box_footer"></div>
            </div>
        </div>
    )
}