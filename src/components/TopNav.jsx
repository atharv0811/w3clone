import { ChevronDown, ChevronRight, Code, Moon, Search, ShoppingCart, Sun } from "lucide-react";
import { useState } from "react";

const TopNav = () => {
    const [theme, setTheme] = useState('light')

    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg px-3 d-flex justify-content-between py-0 top-nav">
                <div className="d-flex align-items-center">
                    <img src="/logo.svg" alt="logo" className="logo mx-2 my-2" />

                    <span
                        className="d-lg-none py-3 px-2 menu"
                        data-bs-toggle="collapse"
                        href="#collapseDropdown"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseDropdown"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Menu <ChevronDown />
                    </span>

                    <ul className="m-0 p-0 d-none d-lg-flex align-items-center ms-2">
                        <li className="list-unstyled py-3 px-2 topnavleft">
                            Tutorials <ChevronDown />
                        </li>
                        <li className="list-unstyled py-3 px-2 topnavleft">
                            Exercises <ChevronDown />
                        </li>
                        <li className="list-unstyled py-3 px-2 topnavleft">
                            Certificates <ChevronDown />
                        </li>
                        <li className="list-unstyled py-3 px-2 topnavleft">
                            Services <ChevronDown />
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-1 gap-sm-3 mx-4 mx-sm-0">
                        <div className="position-relative">
                            <input
                                type="text"
                                className="form-control pe-5 rounded-pill d-none ms-2 d-sm-block search-input"
                                placeholder="Search..."
                            />
                            <Search
                                className="position-absolute end-0 top-50 translate-middle-y me-2 search-icon"
                            />
                        </div>
                        {
                            theme === 'light' ? (
                                <Moon className="moon" onClick={handleToggleTheme} />
                            ) : (
                                <Sun className="text-white sun" onClick={handleToggleTheme} />
                            )
                        }

                    </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <div className="d-none d-xl-block align-items-center gap-2">
                        <ul className="d-flex align-items-center m-0 p-0">
                            <li className="list-unstyled d-flex align-items-center px-3 py-1 topnavright">
                                <Code className="me-2 mt-1 spaces-icon" />
                                Spaces
                            </li>
                            <li className="list-unstyled d-flex align-items-center px-3 py-1 topnavright">
                                <ShoppingCart className="me-2 mt-1 cart-icon" />
                                Get Certified
                            </li>
                        </ul>
                    </div>
                    <div className="btn-group" role="group" aria-label="Login options">
                        <button
                            className="btn position-relative rounded-pill text-white d-none d-sm-block"
                            style={{
                                width: "93px",
                                height: "40px",
                                top: "50%",
                                marginRight: "-39px",
                                backgroundColor: "#04AA6D",
                                fontSize: "16px",
                                lineHeight: "1.5",
                                zIndex: 5,
                            }}
                        >
                            Sign Up
                        </button>
                        <button
                            className="btn position-relative rounded-pill d-none d-sm-block"
                            style={{
                                width: "112px",
                                height: "40px",
                                top: "50%",
                                backgroundColor: "#d0e8df",
                                paddingLeft: "39px",
                                fontSize: "16px",
                                lineHeight: "1.5",
                                zIndex: 4,
                                border: "none",
                            }}
                        >
                            Log in
                        </button>
                        <button
                            className="btn position-relative rounded-pill d-sm-none"
                            style={{
                                width: "70px",
                                height: "40px",
                                top: "50%",
                                backgroundColor: "#d0e8df",
                                fontSize: "16px",
                                lineHeight: "1.5",
                                zIndex: 4,
                                border: "none",
                            }}
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </nav>
            <div className="collapse position-absolute w-100 z-1 d-lg-none" id="collapseDropdown">
                <div className="bg-dark text-white p-4 ">
                    <ul className="m-0 p-0 align-items-center gap-4">
                        <li className="d-flex align-items-center justify-content-between list-unstyled text-white py-3 px-2 topnavleft">
                            Tutorials <ChevronRight />
                        </li>
                        <li className="d-flex align-items-center justify-content-between list-unstyled text-white py-3 px-2 topnavleft">
                            Exercises <ChevronRight />
                        </li>
                        <li className="d-flex align-items-center justify-content-between list-unstyled text-white py-3 px-2 topnavleft">
                            Certificates <ChevronRight />
                        </li>
                        <li className="d-flex align-items-center justify-content-between list-unstyled text-white py-3 px-2 topnavleft">
                            Services <ChevronRight />
                        </li>
                        <li className="d-flex align-items-center justify-content-between list-unstyled text-white py-3 px-2 topnavleft">
                            Spaces <Code />
                        </li>
                        <li className="d-flex align-items-center justify-content-between list-unstyled text-white py-3 px-2 topnavleft">
                            Get Certified <ShoppingCart />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TopNav;
