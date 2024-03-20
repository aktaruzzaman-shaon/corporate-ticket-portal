"use client"
const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Open</a></li>
                    <li><a>ALL</a></li>
                    <li><a>Closed</a></li>
                    <li><a>Dashboard</a></li>
                    <li>
                        <details>
                            <summary>
                                Account
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Login</a></li>
                                <li><a>Settings</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;