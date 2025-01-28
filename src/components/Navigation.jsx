import { useNavigate, useLocation } from "react-router-dom";
import sidebarData from "../data/sidebarData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const flattenLinks = (pages) => {
        const links = [];

        pages.forEach((page) => {
            page.navLinks.forEach((link) => {
                if (link.subItems && link.subItems.length > 0) {
                    links.push(...link.subItems);
                } else {
                    links.push(link);
                }
            });
        });

        return links;
    };

    const sections = sidebarData.map((section) => ({
        title: section.title,
        links: flattenLinks(section.pages),
    }));

    const currentSection = sections.find((section) =>
        section.links.some((link) => link.href === location.pathname)
    );

    const sectionLinks = currentSection?.links || [];

    const currentIndex = sectionLinks.findIndex(
        (link) => link.href === location.pathname
    );

    const previousLink = currentIndex > 0 ? sectionLinks[currentIndex - 1] : null;
    const nextLink =
        currentIndex < sectionLinks.length - 1
            ? sectionLinks[currentIndex + 1]
            : null;

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between my-4 mx-2">
                <button
                    className={`btn btn-${previousLink ? "success" : "secondary"} ${!previousLink && "disabled"
                        }`}
                    onClick={() => previousLink && navigate(previousLink.href)}
                    disabled={!previousLink}
                >
                    <ChevronLeft /> Previous
                </button>

                <button
                    className={`btn btn-${nextLink ? "success" : "secondary"} ${!nextLink && "disabled"
                        }`}
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
