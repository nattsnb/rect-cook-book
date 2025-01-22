import '@mui/material/styles';
import '@mui/material/Typography';
import {PropTypes} from "@mui/material";
import Color = PropTypes.Color;

type ColorPartial = Partial<Color>;

declare module '@mui/material/styles/createTypography' {
    interface PaletteColor {
        subtitle3: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    export interface TypographyOptions {
        subtitle3?: React.CSSProperties;
        label?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        pageTittle: true;
        recipesBarTittle: true;
        recipeTittle: true;
        ingredientsTittle: true;
        allergens: true;
        recipeSteps: true;
        stepsCounter: true;
        formSection: true;
        formErrorMessage: true;
    }
}

declare module '@mui/material/' {
    export interface Palette {
        customGrey: Record<number, string>;
        primary: Record<number, string>;
        secondary: Record<number, string>;
        green: Record<number, string>;
        grey: Record<number, string>;
        yellow: Record<number, string>;
    }

    export interface Color {
        1000: string;
    }

    export interface PaletteColor {
        customGrey: Record<number, string>;
        primary: Record<number, string>;
        secondary: Record<number, string>;
        green: Record<number, string>;
        grey: Record<number, string>;
        yellow: Record<number, string>;
    }

    export interface InputBasePropsSizeOverrides {
        large: true;
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        label: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        label?: React.CSSProperties;
    }

    interface Theme {
        variables: {
            sidebarWidth: string;
            headerHeight: string;
            input: {
                height: Record<string, string | number>;
                padding: Record<string, string | number>;
            };
            button: {
                height: Record<string, string | number>;
                padding: Record<string, string | number>;
                fontSize: Record<string, string | number>;
            };
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        variables: {
            sidebarWidth: string;
            headerHeight: string;
            input: {
                height: Record<string, string | number>;
                padding: Record<string, string | number>;
            };
            button: {
                height: Record<string, string | number>;
                fontSize: Record<string, string | number>;
            };
        };
    }
    interface PaletteColorOptions {
        lighter?: string;
        main?: string;
        light?: string;
        lightest?: string;
        dark?: string;
        contrastText?: string;
        darker?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
        1000?: string;
    }

    interface TypeBackground {
        white?: string;
        lightGrey?: string;
    }

    interface TypeAction {
        primary?: string;
        white?: string;
    }

    interface Palette {
        primary: Record<number, string>;
        secondary: Record<number, string>;
    }
}

declare module '@mui/material/Button' {
    export interface ButtonPropsSizeOverrides {
        xLarge: true;
    }
    export interface ButtonPropsVariantOverrides {
        'outlined-secondary': true;
    }
}

declare module '@mui/material/TextField' {
    interface TextFieldPropsSizeOverrides {
        large: true;
    }
}

declare module '@mui/material/styles/createPalette' {
    interface SimplePaletteColorOptions {
        lightest?: string;
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;
    }
}
