"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@ionic/react");
// import classNames from 'classnames'
const header_1 = __importDefault(require("../components/header"));
require("./layout.css");
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Global style override */
require("../styles/overrides.css");
exports.Layout = ({ title, children }) => (react_1.default.createElement(react_2.IonApp, null,
    react_1.default.createElement(react_2.IonPage, null,
        react_1.default.createElement(header_1.default, { siteTitle: title }),
        react_1.default.createElement(react_2.IonContent, { className: 'ion-padding' }, children),
        react_1.default.createElement(react_2.IonFooter, { "data-testid": "contentinfo" },
            react_1.default.createElement(react_2.IonToolbar, null,
                react_1.default.createElement(react_2.IonTitle, { size: "small" },
                    "\u00A9 ",
                    new Date().getFullYear(),
                    ", Built with",
                    ` `,
                    react_1.default.createElement("a", { href: "https://www.gatsbyjs.org" }, "Gatsby")))))));
exports.default = exports.Layout;
//# sourceMappingURL=index.js.map