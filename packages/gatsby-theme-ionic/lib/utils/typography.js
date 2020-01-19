"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typography_1 = __importDefault(require("typography"));
const typography_theme_github_1 = __importDefault(require("typography-theme-github"));
typography_theme_github_1.default.overrideThemeStyles = () => {
    return {
        'a.gatsby-resp-image-link': {
            boxShadow: `none`,
        },
    };
};
delete typography_theme_github_1.default.googleFonts; // eslint-disable-line
const typography = new typography_1.default(typography_theme_github_1.default);
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}
exports.default = typography;
exports.rhythm = typography.rhythm;
exports.scale = typography.scale;
//# sourceMappingURL=typography.js.map