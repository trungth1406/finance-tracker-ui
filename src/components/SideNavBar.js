import React from 'react'


export default function SideNavBar() {
    return (
        <section className="section column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <div className="container">
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><a>Dashboard</a></li>
                        <li><a>Customers</a></li>
                    </ul>

                </aside>
            </div>
        </section>
    );
}