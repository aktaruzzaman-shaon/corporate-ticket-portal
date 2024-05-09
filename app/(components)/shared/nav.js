"use client"
import Link from "next/link";

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="mt-3"><Link className="mx-3" href="/allTicket">All Tickets</Link></li>
                    <li className="mt-3"><Link className="mx-3" href="/open">Open</Link></li>
                    <li className="mt-3"><Link className="mx-3" href="/dashboard">Dashboard</Link></li>

                   
                        <div className="dropdown dropdown-end mt-1">
                            <div tabIndex={0} role="button" className="btn  rounded-btn">Account</div>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-1 shadow bg-base-300 rounded-box w-42 mt-4">
                                <li> <Link className="pt-2 mx-3" href="login">login</Link></li>
                                <li> <Link className="pt-2 mx-3" href="logout">logout</Link></li>
                                <li> <Link className="pt-2 mx-3" href="signup">Signup</Link></li>
                            </ul>
                        </div>
                   
                    {/* <li>
                        <details>
                            <summary>
                                Account
                            </summary>
                            <span>
                                <ul className="p-2 bg-black-500 rounded-t-none bg-zinc-600">
                                    <li> <Link href="/settings">Settings</Link></li>
                                    <Link className="pt-2 mx-3" href="/login">login</Link>
                                    <li><Link href="/signup">logout</Link></li>
                                    <button type="btn"> <Link className="pt-2 mx-3" href="/login">login</Link></button>
                                </ul>
                            </span>
                        </details>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Nav;