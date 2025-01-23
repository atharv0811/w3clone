import { NavLink, useLocation } from "react-router-dom";
import sidebarData from "../data/sidebarData";
import '../css/Sidebar.css'

const Sidebar = () => {
    const location = useLocation();

    const currentCourse =
        sidebarData.find(
            (course) => location.pathname.startsWith(course.path)
        ) || sidebarData[0];

    return (
        <div className="d-none d-lg-flex">
            <div className="sidebar">
                <div className="py-3">
                    {currentCourse.pages.map((nav) => {
                        return (
                            <div key={nav.heading} className="mb-4">
                                <h5 className="text-white mb-3 px-3">{nav.heading}</h5>
                                <ul className="nav flex-column">
                                    {nav.navLinks.map((link, idx) => {
                                        return (
                                            <NavLink
                                                key={idx}
                                                to={link.href}
                                                className="nav-link text-white text-decoration-none"
                                            >
                                                <li className="nav-item mx-4">
                                                    {link.title}
                                                </li>
                                            </NavLink>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
