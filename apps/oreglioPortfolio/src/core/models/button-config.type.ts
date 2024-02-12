import { CssInline, ThemeColor } from './styles-themes.types';

type BaseBtn = {
    label?: string;
    disabled?: boolean;
    themeColor?: ThemeColor | 'transparent';
    iconPosition?: CssInline;
    iconName?: string;
    svgIcon?: string;
};

export type BtnConfig = BaseBtn & ({ href?: string; routerLink?: never } | { href?: never; routerLink?: string });
