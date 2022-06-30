import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function index() {
    return (
        <div className='view index'>
            <Link to="/choose">
                <h1>Click here, Go to choose plan!</h1>
            </Link>
        </div>
    )
}