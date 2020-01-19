import { ReactNode } from 'react';
import './layout.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '../styles/overrides.css';
interface LayoutProps {
    title: string;
    children: ReactNode;
}
export declare const Layout: ({ title, children }: LayoutProps) => JSX.Element;
export default Layout;
