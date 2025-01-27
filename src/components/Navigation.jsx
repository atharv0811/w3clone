import { useNavigate, useLocation } from "react-router-dom";
import sidebarData from "../data/sidebarData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const sections = sidebarData.map((section) => ({
        title: section.title,
        links: section.pages.flatMap((page) =>
            page.navLinks.flatMap((link) => {
                if (link.subItems) {
                    return [link, ...link.subItems.map((subLink) => ({ ...subLink, parentHref: link.href }))];
                }
                return [link];
            })
        ),
    }));

    const currentSection = sections.find((section) =>
        section.links.some((link) => link.href === location.pathname || (link.parentHref && location.pathname.startsWith(link.parentHref)))
    );

    const currentIndex = currentSection
        ? currentSection.links.findIndex((link) =>
            link.href === location.pathname || (link.parentHref && location.pathname.startsWith(link.parentHref))
        )
        : -1;

    const previousLink =
        currentIndex > 0 ? currentSection.links[currentIndex - 1] : null;
    const nextLink =
        currentIndex < currentSection.links.length - 1
            ? currentSection.links[currentIndex + 1]
            : null;

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between my-4 mx-2">
                <button
                    className={`btn btn-${previousLink ? "success" : "secondary"} ${!previousLink && "disabled"}`}
                    onClick={() => previousLink && navigate(previousLink.href)}
                    disabled={!previousLink}
                >
                    <ChevronLeft /> Previous
                </button>

                <button
                    className={`btn btn-${nextLink ? "success" : "secondary"} ${!nextLink && "disabled"}`}
                    onClick={() => nextLink && navigate(nextLink.href)}
                    disabled={!nextLink}
                >
                    Next <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Navigation;
