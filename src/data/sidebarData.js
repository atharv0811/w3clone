const sidebarData = [
    {
        id: "html",
        path: "/html",
        pages: [
            {
                heading: "HTML Tutorial",
                navLinks: [
                    { title: "HTML Home", href: "/html" },
                    { title: "HTML Intro", href: "/html-intro" },
                    { title: "HTML Editors", href: "/html-editors" },
                    { title: "HTML Basics", href: "/html-basics" },
                    { title: "HTML Elements", href: "/html-elements" },
                    { title: "HTML Attributes", href: "/html-attributes" },
                    { title: "HTML Headings", href: "/html-headings" },
                    {
                        title: "HTML Colors",
                        href: "/html-colors",
                        subItems: [
                            { title: "Colors", href: "/html-colors/colors" },
                            { title: "RGB", href: "/html-colors/rgb" },
                            { title: "HEX", href: "/html-colors/hex" },
                            { title: "HSL", href: "/html-colors/hsl" },
                        ],
                    },
                ],
            },
            {
                heading: "HTML Forms",
                navLinks: [
                    { title: "HTML Forms", href: "/html-forms" },
                    { title: "HTML Form Attributes", href: "/html-form-attributes" },
                    { title: "HTML Form Elements", href: "/html-form-elements" },
                    { title: "HTML Input Types", href: "/html-input-types" },
                    { title: "HTML Input Attributes", href: "/html-input-attributes" },
                    {
                        title: "Input Form Attributes",
                        href: "/html-input-form-attributes",
                    },
                ],
            },
        ],
    },
    {
        id: "css",
        path: "/css",
        pages: [
            {
                heading: "CSS Tutorial",
                navLinks: [
                    { title: "CSS Home", href: "/css" },
                    { title: "CSS Intro", href: "/css-intro" },
                    { title: "CSS Syntax", href: "/css-syntax" },
                    { title: "CSS Selectors", href: "/css-selectors" },
                    { title: "CSS How To", href: "/css-how-to" },
                    { title: "CSS Comments", href: "/css-comments" },
                    { title: "CSS Colors", href: "/css-colors" },
                ],
            },
            {
                heading: "CSS Advanced",
                navLinks: [
                    { title: "CSS Rounded Corners", href: "/css-rounded-corners" },
                    { title: "CSS Border Images", href: "/css-border-img" },
                    { title: "CSS Backgrounds", href: "/css-bg" },
                    { title: "CSS Colors", href: "/css-colors-advance" },
                    { title: "CSS Color Keywords", href: "/css-color-keywords" },
                    { title: "CSS Gradients", href: "/css-gradients" },
                ],
            },
        ],
    },
    {
        id: "js",
        path: "/js",
        pages: [
            {
                heading: "JS Tutorial",
                navLinks: [
                    { title: "JS Home", href: "/js" },
                    { title: "JS Intro", href: "/js-intor" },
                    { title: "JS Where To", href: "/js-where-to" },
                    { title: "JS Output", href: "/js-output" },
                    { title: "JS Statements", href: "/js-statements" },
                    { title: "JS Syntax", href: "/js-syntax" },
                    { title: "JS Comments", href: "/js-comments" },
                ],
            },
            {
                heading: "JS Objects",
                navLinks: [
                    { title: "Object Definations", href: "/js-defination" },
                    { title: "Object Prototypes", href: "/js-prototypes" },
                    { title: "Object Methods", href: "/js-methods" },
                    { title: "Object Properties", href: "/js-properties" },
                    { title: "Object Get/Set", href: "/js-get-set" },
                    { title: "Object Protection", href: "/js-protection" },
                ],
            },
        ],
    },
    {
        id: "react",
        path: "/react",
        pages: [
            {
                heading: "React Tutorial",
                navLinks: [
                    { title: "React Home", href: "/react" },
                    { title: "React Intro", href: "/react-intro" },
                    { title: "React Get Started", href: "/react-get-started" },
                    { title: "React Upgrade", href: "/react-upgrade" },
                    { title: "React ES6", href: "/react-es6" },
                    { title: "React Render HTML", href: "/react-render-html" },
                    { title: "React JSX", href: "/react-jsx" },
                ],
            },
            {
                heading: "React Hooks",
                navLinks: [
                    { title: "What is a Hook?", href: "/react-hooks" },
                    { title: "useState", href: "/react-usestate" },
                    { title: "useEffect", href: "/react-useeffect" },
                    { title: "useContext", href: "/react-usecontext" },
                    { title: "useRef", href: "/react-useref" },
                    { title: "useReducer", href: "/react-usereducer" },
                    { title: "useCallback", href: "/react-usecallback" },
                    { title: "useMemo", href: "/react-usemomo" },
                    { title: "Custom Hooks", href: "/react-custom-hooks" },
                ],
            },
        ],
    },
    {
        id: "bootstrap",
        path: "/bootstrap",
        pages: [
            {
                heading: "Bootstrap 5 Tutorial",
                navLinks: [
                    { title: "BS5 Home", href: "/bootstrap" },
                    { title: "BS5 Get Started", href: "/bootstrap-get-started" },
                    { title: "BS5 Containers", href: "/bootstrap-containers" },
                    { title: "BS5 Grid Basic", href: "/bootstrap-grid-basic" },
                    { title: "BS5 Typography", href: "/bootstrap-typography" },
                    { title: "BS5 Colors", href: "/bootstrap-colors" },
                    { title: "BS5 Tables", href: "/bootstrap-tables" },
                ],
            },
            {
                heading: "Bootstrap 5 Forms",
                navLinks: [
                    { title: "BS5 Forms", href: "/bootstrap-forms" },
                    { title: "BS5 Select Menus", href: "/bootstrap-select" },
                    { title: "BS5 Checks and Radios", href: "/bootstrap-check-radios" },
                    { title: "BS5 Range", href: "/bootstrap-range" },
                    { title: "BS5 Input Groups", href: "/bootstrap-input-groups" },
                    { title: "BS5 Floating Labels", href: "/bootstrap-floating-labels" },
                    { title: "BS5 Form Validation", href: "/bootstrap-form-validation" },
                ],
            },
        ],
    },
];

export default sidebarData;
