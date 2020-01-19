"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const react_2 = require("@ionic/react");
const Header = ({ siteTitle }) => (react_1.default.createElement(react_2.IonHeader, { "data-testid": "banner" },
    react_1.default.createElement("a", { className: "skip-link", href: "#content" }, "Skip to main content"),
    react_1.default.createElement(react_2.IonToolbar, { role: "navigation" },
        react_1.default.createElement(react_2.IonButtons, { slot: "start" },
            react_1.default.createElement(react_2.IonBackButton, { defaultHref: "/" })),
        react_1.default.createElement(react_2.IonTitle, null, siteTitle),
        react_1.default.createElement(react_2.IonButtons, { slot: "end" },
            react_1.default.createElement(react_2.IonButton, { color: "primary", onClick: () => gatsby_1.navigate('/'), "data-testid": "header-nav" },
                react_1.default.createElement(react_2.IonIcon, { name: "home" }),
                "Home"),
            react_1.default.createElement(react_2.IonButton, { color: "primary", onClick: () => gatsby_1.navigate('/blog'), "data-testid": "header-nav" }, "Blog")))));
Header.propTypes = {
    siteTitle: prop_types_1.default.string,
};
Header.defaultProps = {
    siteTitle: ``,
};
exports.default = Header;
//# sourceMappingURL=header.js.map