/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'

import { Button, Checkbox, message } from 'antd';
import { Close, Check, Branch, Github, Ghost } from '@icon-park/react';
import './index.scss';
import api from '../../../api';
import { sysStore } from '../../../store';

const { Request, Plan } = api;
const request = new Request();

export default function choose() {
    const { isMobile } = sysStore;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isShowCheck, setIsShowCheck] = useState(false);
    const [planTypeId, setPlanTypeId] = useState(0);
    const [planTypeList, setPlanTypeList] = useState([]);
    const [planChecklist, setPlanChecklistList] = useState([]);

    useEffect(() => {
        initPage();
    }, []);


    /**
     * Call for page render data
     * initPage(): -> {planTypeList: [], planChecklist}
     */
    const initPage = () => {
        request.do('api', 'page', 'info',
            { params: { key: 'planChoose' }, data: {} },
            { showLoading: true }).then(res => {
                const { code, data } = res;
                if (code === 2000) {
                    const { planTypeList, planChecklist } = data;
                    setPlanTypeList(planTypeList);
                    setPlanChecklistList(planChecklist);
                    setTimeout(() => {
                        setIsShowCheck(true);
                    }, 200)
                }
            });
    }
    /**
     * To create new plan
     * body:-> {type_id, .....}
     * createPlan(): -> "operation ok"
     */
    const createPlan = () => {
        if (!planTypeId) {
            message.error('Select plan type first please!')
            return;
        }
        setIsSubmitting(true);
        Plan.sendApi('add', { params: {}, data: { type_id: planTypeId }, }).then(res => {
            const { code } = res;
            setIsSubmitting(false);
            if (code === 2000) {
                message.success('You have created a plan, thx~');
                setPlanTypeId(0);
            }
        })
    }
    return (
        <div className={`view choose ${isMobile ? 'choose--mobile' : ''}`}>
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
                                planChecklist.map(function (v, k) {
                                    return <tr key={k}>
                                        <td>
                                            <span>{v.name}</span>
                                        </td>
                                        {
                                            planTypeList.map(function (v1, k1) {
                                                return <Fragment key={k1}>
                                                    <td align="center" key={k1}>
                                                        <CSSTransition
                                                            in={isShowCheck}
                                                            timeout={500 + (k * 200)}
                                                            classNames='check'
                                                        >
                                                            {
                                                                v1.valid_checklist_ids.split(',').map(i => Number(i)).includes(v.id)
                                                                    ? <Check theme="outline" size="24" fill="#1890ff" />
                                                                    : <Close theme="outline" size="24" fill="#ff4d4f" />
                                                            }
                                                        </CSSTransition>
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
                                            <Checkbox onChange={() => {
                                                setPlanTypeId(v.id);
                                            }} checked={planTypeId === v.id}>{`HK$${v.amount_per_month}/Month`}</Checkbox >
                                        </th>
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="box_footer">
                    <div className="footer_submit">
                        <Button type="primary" block={isMobile} disabled={!planTypeId} loading={isSubmitting} onClick={() => { createPlan() }}>创建方案</Button>
                    </div>
                </div>
            </div>
            {
                !isMobile ? <div className="choose_link">
                    <div className="link_item">
                        <em>More fun here（码上talk|RC）》》》》》》》 </em>
                        <Branch theme="outline" size="20" fill="#d92b2f" strokeLinecap="butt" />
                        <a href="https://gitee.com/running-cat" target="_blank">Gitee</a>
                    </div>
                    <div className="link_item">
                        <Ghost theme="outline" size="20" fill="#1890ff" strokeLinecap="butt" />
                        <a href="https://www.codingtalk.cn/" target="_blank">About</a>
                    </div>
                    <div className="link_item">
                        <Github theme="outline" size="20" fill="#333" strokeLinecap="butt" />
                        <a href="https://github.com/codingtalk" target="_blank">Github</a>
                    </div>
                </div> : ''
            }
        </div>
    )
}