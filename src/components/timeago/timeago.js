import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es';

TimeAgo.addDefaultLocale(es);

export default function ({ date }) {
    return (
        <span className="small">
            <ReactTimeAgo date={date} locale="es"/>
        </span>
    )
}
