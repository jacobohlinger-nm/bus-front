/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react'

const CompletePage = ({previousPage, profile}) => {

    return (
        <div>
            <h1>All set! We'll let your know when your bus is coming</h1>
            <h3>summary</h3>
            <p>email: {profile.email}</p>
            <p>route: {profile.route}</p>
            <p>direction: {profile.direction}</p>
            <p>bus stop outbound: {profile.busStopOutbound}</p>
            <p>bus stop inbound: {profile.busStopInbound}</p>
            <div>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
            </div>
        </div>);
}

export default CompletePage;