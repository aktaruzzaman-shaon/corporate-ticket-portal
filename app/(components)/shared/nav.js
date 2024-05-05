"use client"

import Link from "next/link";

const Nav = () => {
    const navItems = ['All Tickets', "Open", "Dashboard"]
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems.map((navItem, index) => <Link className="pt-3 mx-3" href="/allTicket" key={index}>{navItem}</Link>)
                    }

                    <li>
                        <details>
                            <summary>
                                Account
                            </summary>
                            <ul className="p-2 bg-black-500 rounded-t-none bg-zinc-600">
                                <li> <Link href="/settings">Settings</Link></li>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/logout">logout</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;