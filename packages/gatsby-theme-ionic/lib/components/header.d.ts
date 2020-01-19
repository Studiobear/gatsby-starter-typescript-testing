/// <reference types="react" />
import PropTypes from 'prop-types';
interface Props {
    siteTitle: string;
}
declare const Header: {
    ({ siteTitle }: Props): JSX.Element;
    propTypes: {
        siteTitle: PropTypes.Requireable<string>;
    };
    defaultProps: {
        siteTitle: string;
    };
};
export default Header;
