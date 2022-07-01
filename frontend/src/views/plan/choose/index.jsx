import React, { useEffect, useState, Fragment } from 'react';
import { Radio } from 'antd';
import { Close, Check } from '@icon-park/react';
import './index.scss';
import api from '../../../api';

const { Request } = api;
const request = new Request();

export default function choose() {
    const [planTypeList, setPlanTypeList] = useState([]);
    const [palnChecklist, setPalnChecklistList] = useState([]);

    useEffect(() => {
        initPage();
    }, [])

    const initPage = () => {
        request.do('api', 'page', 'info', { params: { key: 'planChoose' }, data: {} }).then(res => {
            const { code, data } = res;
            if (code === 2000) {
                const { planTypeList, palnChecklist } = data;
                setPlanTypeList(planTypeList);
                setPalnChecklistList(palnChecklist);
            }
        });
    }
    return (
        <div className='view choose'>
            <div className="choose_box">
                <div className="box_title">
                    <h1>Choose a plan</h1>
                </div>
                <div className="box_content">
                    <table border="0" cellPadding="0" cellSpacing="0">
                        <thead>
                            <tr>
                                <th width="400"></th>
                                {
                                    planTypeList.map(function (v, k) {
                                        return <th align="center" key={k}>
                                            <span>{v.name}</span>
                                        </th>
                                    })
                                }

                            </tr>
                        </thead>
                        <tbody>
                            {
                                palnChecklist.map(function (v, k) {
                                    return <tr key={k}>
                                        <td>
                                            <span>{v.name}</span>
                                        </td>
                                        {
                                            planTypeList.map(function (v1, k1) {
                                                return <Fragment key={k1}>
                                                    <td align="center" key={k1}>
                                                        {
                                                            v1.valid_checklist_ids.split(',').map(i => Number(i)).includes(v.id)
                                                                ? <Check theme="outline" size="24" fill="#1890ff" />
                                                                : <Close theme="outline" size="24" fill="#ff4d4f" />
                                                        }
                                                    </td>
                                                </Fragment>
                                            })
                                        }
                                    </tr>
                                })
                            }
                            <tr>
                                <td></td>
                                {
                                    planTypeList.map(function (v, k) {
                                        return <th align="center" key={k}>
                                            <Radio>{`HK$${v.amount_per_month}/Month`}</Radio>
                                        </th>
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="box_footer"></div>
            </div>
        </div>
    )
}