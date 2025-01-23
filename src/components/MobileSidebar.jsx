import { NavLink, useLocation } from "react-router-dom";
import sidebarData from "../data/sidebarData";
import "../css/MobileSidebar.css";

const MobileSidebar = () => {
    const location = useLocation();
    console.log(location);

    const currentCourse =
        sidebarData.find((course) => location.pathname.startsWith(course.path)) ||
        sidebarData[0];

    return (
        <div
            className="offcanvas offcanvas-start d-block d-lg-none"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
        >
            <div
                className="mobileSidebar"
            >
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
                                                <li className="nav-item mx-4">{link.title}</li>
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

export default MobileSidebar;
