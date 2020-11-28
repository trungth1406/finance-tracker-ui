import React from 'react'


export const AccountResource = function (props) {
    return (
        <>
            <div className="tile  is-ancestor box">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-primary">
                        <p className="title">{props.accountResource.name}</p>
                        <p className="subtitle">{props.accountResource.total_amount}</p>
                    </article>
                </div>
            </div>
        </>
    );
}
