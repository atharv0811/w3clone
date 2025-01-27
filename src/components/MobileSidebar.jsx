import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import sidebarData from "../data/sidebarData";

const MobileSidebar = () => {
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

  const currentCourse =
    sidebarData.find((course) => location.pathname.startsWith(course.path)) ||
    sidebarData[0];

  const handleToggle = (idx) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div
      className="offcanvas offcanvas-start d-block d-lg-none"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="h-100 mobileSidebar">
        <div className="py-3">
          {currentCourse.pages.map((nav, navIdx) => (
            <div key={nav.heading} className="mb-4">
              <h5 className="mb-3 px-3" style={{ color: 'var(--text-color)' }}>{nav.heading}</h5>
              <ul className="nav flex-column">
                {nav.navLinks.map((link, idx) => (
                  <div key={idx}>
                    {link.subItems ? (
                      <>
                        <NavLink
                          to={link.href}
                          className="nav-link text-decoration-none"
                          onClick={(e) => handleToggle(`${navIdx}-${idx}`)}
                        >
                          <li className="nav-item ms-4">
                            {link.title}{" "}
                            {link.subItems && (
                              <ChevronDown className="float-end" />
                            )}
                          </li>
                        </NavLink>

                        {expanded[`${navIdx}-${idx}`] && (
                          <ul className="nav flex-column ms-4">
                            {link.subItems.map((subLink, subIdx) => (
                              <NavLink
                                key={subIdx}
                                to={`${subLink.href}`}
                                className="nav-link text-decoration-none sub-nav-link"
                              >
                                <li className="nav-item mx-4">
                                  {subLink.title}
                                </li>
                              </NavLink>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={link.href}
                        className="nav-link text-decoration-none"
                      >
                        <li className="nav-item mx-4">{link.title}</li>
                      </NavLink>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
