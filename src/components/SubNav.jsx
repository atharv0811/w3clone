import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
    { title: "HTML", href: "/html" },
    { title: "React", href: "/react" },
    { title: "CSS", href: "/css" },
    { title: "JavaScript", href: "/js" },
    { title: "Bootstrap", href: "/bootstrap" },
];

const SubNav = () => {
    return (
        <nav
            className="d-flex align-items-center navbar-expand-lg px-0 py-0 "
            style={{ backgroundColor: "#282A35" }}
        >
            <div
                className="mx-2 d-lg-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
            >
                <Menu className="text-white" size={25} />
            </div>
            <div className="overflow-auto no-scrollbar">
                <ul className="m-0 p-0 d-flex align-items-center">
                    {navLinks.map((link, idx) => {
                        return (
                            <Link key={idx} to={link.href} className="text-decoration-none text-white">
                                <li
                                    className="list-unstyled text-white px-3 py-2 subnavhover"
                                    style={{ cursor: "pointer" }}
                                >
                                    {link.title}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default SubNav;
