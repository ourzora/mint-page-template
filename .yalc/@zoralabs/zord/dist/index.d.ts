import * as _vanilla_extract_private from '@vanilla-extract/private';
import * as _vanilla_extract_sprinkles_dist_declarations_src_createSprinkles from '@vanilla-extract/sprinkles/dist/declarations/src/createSprinkles';
import { ClassValue } from 'clsx';
import React, { ReactNode, CSSProperties, ElementType, SVGProps, Dispatch, SetStateAction, MouseEventHandler } from 'react';
import { PolymorphicPropsWithRef, PolymorphicForwardRefExoticComponent } from 'react-polymorphic-types';
import * as _vanilla_extract_recipes_dist_declarations_src_types from '@vanilla-extract/recipes/dist/declarations/src/types';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import * as Dialog from '@radix-ui/react-dialog';

declare const colorTheme: _vanilla_extract_private.MapLeafNodes<{
    foreground: {
        primary: string;
        secondary: string;
        tertiary: string;
        reverse: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        destructive: string;
    };
    border: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        primaryInverse: string;
    };
    error: {
        light: string;
        default: string;
        dark: string;
        background: string;
    };
}, _vanilla_extract_private.CSSVarFunction>;
declare const lightTheme: string;
declare const darkTheme: string;
declare const baseTheme: string;
declare const vars: _vanilla_extract_private.MapLeafNodes<{
    color: _vanilla_extract_private.MapLeafNodes<{
        foreground: {
            primary: string;
            secondary: string;
            tertiary: string;
            reverse: string;
        };
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            destructive: string;
        };
        border: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            primaryInverse: string;
        };
        error: {
            light: string;
            default: string;
            dark: string;
            background: string;
        };
    }, _vanilla_extract_private.CSSVarFunction>;
    space: {
        x0: string;
        x1: string;
        x2: string;
        x3: string;
        x4: string;
        x5: string;
        x6: string;
        x7: string;
        x8: string;
        x9: string;
        x10: string;
        x11: string;
        x12: string;
        x13: string;
        x14: string;
        x15: string;
        x16: string;
        x17: string;
        x18: string;
        x19: string;
        x20: string;
        x21: string;
        x22: string;
        x23: string;
        x24: string;
        x25: string;
        x26: string;
        x27: string;
        x28: string;
        x29: string;
        x30: string;
        auto: string;
    };
    size: {
        readonly '100vw': "100vw";
        readonly '100vh': "100vh";
        readonly '100%': "100%";
        readonly unset: "unset";
        readonly x0: string;
        readonly x1: string;
        readonly x2: string;
        readonly x3: string;
        readonly x4: string;
        readonly x5: string;
        readonly x6: string;
        readonly x7: string;
        readonly x8: string;
        readonly x9: string;
        readonly x10: string;
        readonly x11: string;
        readonly x12: string;
        readonly x13: string;
        readonly x14: string;
        readonly x15: string;
        readonly x16: string;
        readonly x17: string;
        readonly x18: string;
        readonly x19: string;
        readonly x20: string;
        readonly x21: string;
        readonly x22: string;
        readonly x23: string;
        readonly x24: string;
        readonly x25: string;
        readonly x26: string;
        readonly x27: string;
        readonly x28: string;
        readonly x29: string;
        readonly x30: string;
        readonly auto: string;
    };
    radii: {
        readonly small: "4px";
        readonly normal: "5px";
        readonly curved: "10px";
        readonly phat: "20px";
        readonly round: "9999px";
    };
    border: {
        style: {
            solid: string;
            dashed: string;
            dotted: string;
        };
        width: {
            none: string;
            thin: string;
            normal: string;
            thick: string;
        };
    };
    ease: {
        in: string;
        out: string;
        inOut: string;
    };
}, _vanilla_extract_private.CSSVarFunction>;
declare const root: string;

declare const atoms: _vanilla_extract_sprinkles_dist_declarations_src_createSprinkles.SprinklesFn<[{
    conditions: never;
    styles: {
        color: {
            values: {
                primary: {
                    defaultClass: string;
                };
                secondary: {
                    defaultClass: string;
                };
                tertiary: {
                    defaultClass: string;
                };
                reverse: {
                    defaultClass: string;
                };
            };
        };
        backgroundColor: {
            values: {
                primary: {
                    defaultClass: string;
                };
                secondary: {
                    defaultClass: string;
                };
                tertiary: {
                    defaultClass: string;
                };
                destructive: {
                    defaultClass: string;
                };
            };
        };
        borderRadius: {
            values: {
                small: {
                    defaultClass: string;
                };
                normal: {
                    defaultClass: string;
                };
                curved: {
                    defaultClass: string;
                };
                phat: {
                    defaultClass: string;
                };
                round: {
                    defaultClass: string;
                };
            };
        };
        borderColor: {
            values: {
                primary: {
                    defaultClass: string;
                };
                secondary: {
                    defaultClass: string;
                };
                tertiary: {
                    defaultClass: string;
                };
            };
        };
        borderStyle: {
            values: {
                solid: {
                    defaultClass: string;
                };
                dashed: {
                    defaultClass: string;
                };
                dotted: {
                    defaultClass: string;
                };
            };
        };
        borderWidth: {
            values: {
                normal: {
                    defaultClass: string;
                };
                none: {
                    defaultClass: string;
                };
                thin: {
                    defaultClass: string;
                };
                thick: {
                    defaultClass: string;
                };
            };
        };
    };
}, {
    conditions: {
        defaultCondition: "@initial";
        conditionNames: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[];
        responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
            length: 6;
        };
    };
    styles: {
        display: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                grid: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "inline-block": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "inline-flex": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        position: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                sticky: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        alignSelf: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        justifySelf: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        flexDirection: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                column: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "column-reverse": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                row: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "row-reverse": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        justifyContent: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                "space-around": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "space-between": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                stretch: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        alignItems: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                stretch: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                end: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                start: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                baseline: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        placeItems: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        userSelect: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        flexWrap: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                wrap: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "wrap-reverse": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        flex: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        flexShrink: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        textAlign: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                left: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                justify: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        fontFamily: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                sans: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                mono: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        fontSize: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                [x: string]: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        fontWeight: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                [x: number]: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        gap: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        top: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        left: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        bottom: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        right: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        paddingTop: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        paddingBottom: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        paddingLeft: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        paddingRight: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        marginTop: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        marginBottom: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        marginLeft: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        marginRight: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        width: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vw": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vh": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        height: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vw": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vh": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        minWidth: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vw": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vh": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        minHeight: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vw": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vh": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        maxWidth: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vw": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vh": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        maxHeight: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vw": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100vh": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "100%": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        inset: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x0: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x1: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x2: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x3: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x4: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x5: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x6: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x7: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x8: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x9: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x10: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x11: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x12: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x13: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x14: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x15: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x16: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x17: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x18: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x19: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x20: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x21: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x22: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x23: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x24: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x25: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x26: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x27: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x28: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x29: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                x30: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        objectFit: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                contain: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                cover: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                fill: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "scale-down": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        overflow: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                hidden: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                visible: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                scroll: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        overflowY: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                hidden: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                visible: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                scroll: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        overflowX: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                hidden: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                visible: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                scroll: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        pointerEvents: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                all: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        textTransform: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                capitalize: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                lowercase: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                uppercase: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        cursor: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "not-allowed": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                pointer: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        backgroundSize: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                initial: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                revert: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                contain: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                cover: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        gridAutoRows: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        gridAutoColumns: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                auto: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        wordBreak: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                normal: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "break-word": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "break-all": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "keep-all": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        listStyle: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
        whiteSpace: {
            responsiveArray: ("@initial" | "@480" | "@576" | "@768" | "@1024" | "@1440")[] & {
                length: 6;
            };
            values: {
                unset: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                inherit: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                revert: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                normal: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "break-spaces": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                pre: {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "pre-line": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
                "pre-wrap": {
                    defaultClass: string;
                    conditions: {
                        readonly '@initial': string;
                        readonly '@480': string;
                        readonly '@576': string;
                        readonly '@768': string;
                        readonly '@1024': string;
                        readonly '@1440': string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        minW: {
            mappings: "minWidth"[];
        };
        minH: {
            mappings: "minHeight"[];
        };
        maxW: {
            mappings: "maxWidth"[];
        };
        maxH: {
            mappings: "maxWidth"[];
        };
        margin: {
            mappings: ("marginTop" | "marginBottom" | "marginLeft" | "marginRight")[];
        };
        m: {
            mappings: ("marginTop" | "marginBottom" | "marginLeft" | "marginRight")[];
        };
        mx: {
            mappings: ("marginLeft" | "marginRight")[];
        };
        my: {
            mappings: ("marginTop" | "marginBottom")[];
        };
        mt: {
            mappings: "marginTop"[];
        };
        mb: {
            mappings: "marginBottom"[];
        };
        ml: {
            mappings: "marginLeft"[];
        };
        mr: {
            mappings: "marginRight"[];
        };
        pos: {
            mappings: "position"[];
        };
        padding: {
            mappings: ("paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight")[];
        };
        p: {
            mappings: ("paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight")[];
        };
        px: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        py: {
            mappings: ("paddingTop" | "paddingBottom")[];
        };
        pt: {
            mappings: "paddingTop"[];
        };
        pb: {
            mappings: "paddingBottom"[];
        };
        pl: {
            mappings: "paddingLeft"[];
        };
        pr: {
            mappings: "paddingRight"[];
        };
        w: {
            mappings: "width"[];
        };
        h: {
            mappings: "height"[];
        };
        t: {
            mappings: "top"[];
        };
        l: {
            mappings: "left"[];
        };
        b: {
            mappings: "bottom"[];
        };
        r: {
            mappings: "right"[];
        };
        size: {
            mappings: ("width" | "height")[];
        };
    };
}]>;
declare type Atoms = Parameters<typeof atoms>[0];

/**
 *  Position & transforms
 */
declare const left: {
    '50%': string;
};
declare const top: {
    '50%': string;
};
declare const translateX: {
    '-50%': string;
};
declare const translateY: {
    '-50%': string;
};
declare const translate: {
    '-50%': string;
};
declare const center: {
    x: string;
    y: string;
    xy: string;
};
/**
 *  Display
 */
declare const display: {
    none: string;
    block: string;
    inline: string;
    flex: string;
    grid: string;
    "inline-block": string;
    "inline-flex": string;
};
/**
 *  Dimensions and positioning
 */
declare const objectFit: {
    contain: string;
    cover: string;
    fill: string;
    scaleDown: string;
};
/**
 *  Pointer events
 */
declare const pointerEvents: {
    none: string;
    auto: string;
};
/**
 *  Overflow
 */
declare const overflow: {
    auto: string;
    hidden: string;
    scroll: string;
};
/**
 *  Text
 */
declare const textTransform: {
    uppercase: string;
    capitalize: string;
    none: string;
};
declare const whiteSpace: {
    nowrap: string;
};
declare const ellipsis: string;
/**
 *  Cursor
 */
declare const cursor: {
    pointer: string;
};
declare const fadeIn: {
    '0.2': string;
    '0.3': string;
    '0.4': string;
};
declare const transitionOpacity: {
    '0.2': string;
};
declare const hoverFadeOut: string;
declare const hoverFadeIn: string;
/**
 *  Debug
 */
declare const test: {
    red: string;
    blue: string;
};

declare const styles_left: typeof left;
declare const styles_top: typeof top;
declare const styles_translateX: typeof translateX;
declare const styles_translateY: typeof translateY;
declare const styles_translate: typeof translate;
declare const styles_center: typeof center;
declare const styles_display: typeof display;
declare const styles_objectFit: typeof objectFit;
declare const styles_pointerEvents: typeof pointerEvents;
declare const styles_overflow: typeof overflow;
declare const styles_textTransform: typeof textTransform;
declare const styles_whiteSpace: typeof whiteSpace;
declare const styles_ellipsis: typeof ellipsis;
declare const styles_cursor: typeof cursor;
declare const styles_fadeIn: typeof fadeIn;
declare const styles_transitionOpacity: typeof transitionOpacity;
declare const styles_hoverFadeOut: typeof hoverFadeOut;
declare const styles_hoverFadeIn: typeof hoverFadeIn;
declare const styles_test: typeof test;
declare namespace styles {
  export {
    styles_left as left,
    styles_top as top,
    styles_translateX as translateX,
    styles_translateY as translateY,
    styles_translate as translate,
    styles_center as center,
    styles_display as display,
    styles_objectFit as objectFit,
    styles_pointerEvents as pointerEvents,
    styles_overflow as overflow,
    styles_textTransform as textTransform,
    styles_whiteSpace as whiteSpace,
    styles_ellipsis as ellipsis,
    styles_cursor as cursor,
    styles_fadeIn as fadeIn,
    styles_transitionOpacity as transitionOpacity,
    styles_hoverFadeOut as hoverFadeOut,
    styles_hoverFadeIn as hoverFadeIn,
    styles_test as test,
  };
}

declare type Mixins = typeof styles;
declare type MixinsProp<M = Mixins> = {
    [P in keyof M]: Partial<keyof M[P]> | undefined | true;
};
declare function mixins(mixinsProp: Partial<MixinsProp>): string;

declare const MODAL_BACKDROP_LAYER = 20;

declare const MAX_GRID_WIDTH = 1440;

declare const fontWeight: {
    display: number;
    heading: number;
    label: number;
    paragraph: number;
};

declare const transitions: {
    in: string;
    out: string;
    inOut: string;
};

interface BoxProps {
    className?: ClassValue;
    children?: ReactNode;
    style?: CSSProperties;
    aspectRatio?: React.CSSProperties['aspectRatio'] | number;
    center?: MixinsProp['center'];
    display?: Atoms['display'];
    flex?: Atoms['flex'];
    flexShrink?: Atoms['flexShrink'];
    alignSelf?: Atoms['alignSelf'];
    justifySelf?: Atoms['justifySelf'];
    color?: Atoms['color'];
    cursor?: Atoms['cursor'];
    borderColor?: Atoms['borderColor'];
    borderStyle?: Atoms['borderStyle'];
    borderWidth?: Atoms['borderWidth'];
    backgroundColor?: Atoms['backgroundColor'];
    borderRadius?: Atoms['borderRadius'];
    fontFamily?: Atoms['fontFamily'];
    fontSize?: Atoms['fontSize'];
    objectFit?: Atoms['objectFit'];
    position?: Atoms['position'];
    pos?: Atoms['pos'];
    p?: Atoms['p'];
    px?: Atoms['px'];
    py?: Atoms['py'];
    pt?: Atoms['pt'];
    pr?: Atoms['pr'];
    pb?: Atoms['pb'];
    pl?: Atoms['pl'];
    m?: Atoms['m'];
    mx?: Atoms['mx'];
    my?: Atoms['my'];
    mt?: Atoms['mt'];
    mr?: Atoms['mr'];
    mb?: Atoms['mb'];
    ml?: Atoms['ml'];
    top?: Atoms['top'];
    right?: Atoms['right'];
    bottom?: Atoms['bottom'];
    left?: Atoms['left'];
    w?: Atoms['width'];
    h?: Atoms['height'];
    width?: Atoms['width'];
    height?: Atoms['height'];
    minW?: Atoms['minW'];
    minH?: Atoms['minH'];
    maxW?: Atoms['maxW'];
    maxH?: Atoms['maxH'];
    listStyle?: Atoms['listStyle'];
    inset?: Atoms['inset'];
    overflow?: Atoms['overflow'];
    overflowX?: Atoms['overflowX'];
    overflowY?: Atoms['overflowY'];
    pointerEvents?: Atoms['pointerEvents'];
    wordBreak?: Atoms['wordBreak'];
}
declare const BoxDefaultElement = "div";
declare type BoxComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<BoxProps, E>;
declare const Box: PolymorphicForwardRefExoticComponent<BoxProps, typeof BoxDefaultElement>;

declare const buttonVariants: {
    loading: {
        true: string;
    };
    pill: {
        true: string;
    };
    size: {
        sm: (string | {
            width: string;
            fontSize: "14px";
            fontWeight: number;
        })[];
        md: (string | {
            height: string;
            fontSize: "16px";
            fontWeight: number;
        })[];
        lg: (string | {
            fontSize: "16px";
            fontWeight: number;
        })[];
    };
    variant: {
        primary: {
            color: _vanilla_extract_private.CSSVarFunction;
            backgroundColor: _vanilla_extract_private.CSSVarFunction;
            selectors: {
                '&:not([disabled]):hover': {
                    backgroundColor: _vanilla_extract_private.CSSVarFunction;
                };
            };
        };
        secondary: {
            color: _vanilla_extract_private.CSSVarFunction;
            backgroundColor: _vanilla_extract_private.CSSVarFunction;
            selectors: {
                '&:not([disabled]):hover': {
                    backgroundColor: _vanilla_extract_private.CSSVarFunction;
                };
            };
        };
        destructive: {
            color: _vanilla_extract_private.CSSVarFunction;
            backgroundColor: _vanilla_extract_private.CSSVarFunction;
            selectors: {
                '&:not([disabled]):hover': {
                    backgroundColor: _vanilla_extract_private.CSSVarFunction;
                };
            };
        };
        outline: {
            color: _vanilla_extract_private.CSSVarFunction;
            borderColor: _vanilla_extract_private.CSSVarFunction;
            borderWidth: _vanilla_extract_private.CSSVarFunction;
            backgroundColor: string;
            selectors: {
                '&:not([disabled]):hover': {
                    backgroundColor: _vanilla_extract_private.CSSVarFunction;
                };
            };
        };
        ghost: {
            color: _vanilla_extract_private.CSSVarFunction;
            borderColor: string;
            backgroundColor: string;
            selectors: {
                '&:hover, &:not([disabled]):hover': {
                    backgroundColor: _vanilla_extract_private.CSSVarFunction;
                };
            };
        };
        unset: {
            backgroundColor: string;
            gap: string;
            borderColor: string;
            borderWidth: string;
            borderStyle: string;
            minWidth: string;
            padding: string;
            height: string;
            fontSize: string;
            fontWeight: string;
        };
    };
};

declare const iconVariants: {
    color: {
        primary: string[];
    };
    size: {
        sm: {
            width: _vanilla_extract_private.CSSVarFunction;
            height: _vanilla_extract_private.CSSVarFunction;
        };
        md: {
            width: _vanilla_extract_private.CSSVarFunction;
            height: _vanilla_extract_private.CSSVarFunction;
        };
        lg: {
            width: _vanilla_extract_private.CSSVarFunction;
            height: _vanilla_extract_private.CSSVarFunction;
        };
    };
    rotate: {
        true: string[];
    };
};

interface ButtonProps extends FlexProps {
    disabled?: boolean;
    variant?: keyof typeof buttonVariants['variant'];
    size?: keyof typeof buttonVariants['size'];
    icon?: IconProps['id'];
    type?: 'submit' | 'reset' | 'button';
    iconSize?: keyof typeof iconVariants['size'];
    loading?: boolean;
    pill?: boolean;
}
declare const ButtonDefaultElement = "button";
declare const Button: PolymorphicForwardRefExoticComponent<ButtonProps, typeof ButtonDefaultElement>;

interface GridProps extends BoxProps {
    gap?: Atoms['gap'];
    align?: Atoms['alignItems'];
    justify?: Atoms['justifyContent'];
    columns?: React.CSSProperties['gridTemplateColumns'] | 'auto';
    rows?: React.CSSProperties['gridTemplateRows'] | 'auto';
    autoRows?: Atoms['gridAutoRows'] | true;
    autoColumns?: Atoms['gridAutoColumns'] | true;
}
declare const Grid: PolymorphicForwardRefExoticComponent<GridProps, typeof BoxDefaultElement>;

interface FlexProps extends BoxProps {
    alignSelf?: Atoms['alignSelf'];
    gap?: Atoms['gap'];
    wrap?: Atoms['flexWrap'] | boolean;
    direction?: Atoms['flexDirection'];
    align?: Atoms['alignItems'];
    justify?: Atoms['justifyContent'];
    placeItems?: Atoms['placeItems'];
    flexChildren?: boolean;
}
declare const Flex: PolymorphicForwardRefExoticComponent<FlexProps, typeof BoxDefaultElement>;

interface StackProps extends FlexProps {
}
declare const Stack: PolymorphicForwardRefExoticComponent<StackProps, typeof BoxDefaultElement>;

declare const textVariants: {
    readonly textAlign: {
        readonly left: {
            readonly textAlign: "left";
        };
        readonly right: {
            readonly textAlign: "right";
        };
        readonly center: {
            readonly textAlign: "center";
        };
    };
    readonly variant: {
        readonly code: {
            readonly fontSize: "14px";
            readonly lineHeight: "14px";
        };
        readonly eyebrow: {
            readonly color: _vanilla_extract_private.CSSVarFunction;
            readonly fontSize: "12px";
            readonly fontWeight: number;
            readonly letterSpacing: "0.05em";
            readonly lineHeight: "20px";
            readonly textTransform: "uppercase";
        };
        readonly 'heading-xs': {
            readonly fontSize: "20px";
            readonly fontWeight: number;
            readonly lineHeight: "30px";
        };
        readonly 'heading-sm': {
            readonly fontSize: "30px";
            readonly fontWeight: number;
            readonly lineHeight: "40px";
        };
        readonly 'heading-md': {
            readonly fontSize: "35px";
            readonly fontWeight: number;
            readonly lineHeight: "50px";
        };
        readonly 'heading-lg': {
            readonly fontSize: "40px";
            readonly fontWeight: number;
            readonly lineHeight: "55px";
        };
        readonly 'heading-xl': {
            readonly fontSize: "50px";
            readonly fontWeight: number;
            readonly lineHeight: "70px";
        };
        readonly 'label-xs': {
            readonly fontSize: "12px";
            readonly fontWeight: number;
            readonly lineHeight: "20px";
        };
        readonly 'label-sm': {
            readonly fontSize: "14px";
            readonly fontWeight: number;
            readonly lineHeight: "24px";
        };
        readonly 'label-md': {
            readonly fontSize: "16px";
            readonly fontWeight: number;
            readonly lineHeight: "25px";
        };
        readonly 'label-lg': {
            readonly fontSize: "18px";
            readonly fontWeight: number;
            readonly lineHeight: "30px";
        };
        readonly 'menu-lg': {
            readonly fontSize: "28px";
            readonly fontWeight: number;
            readonly lineHeight: "34px";
        };
        readonly 'paragraph-xs': {
            readonly fontSize: "12px";
            readonly fontWeight: number;
            readonly lineHeight: "20px";
        };
        readonly 'paragraph-sm': {
            readonly fontSize: "14px";
            readonly fontWeight: number;
            readonly lineHeight: "24px";
        };
        readonly 'paragraph-md': {
            readonly fontSize: "16px";
            readonly fontWeight: number;
            readonly lineHeight: "25px";
        };
        readonly 'paragraph-lg': {
            readonly fontSize: "18px";
            readonly fontWeight: number;
            readonly lineHeight: "30px";
        };
        readonly 'display-xs': {
            readonly fontSize: "40px";
            readonly fontWeight: number;
            readonly lineHeight: "50px";
        };
        readonly 'display-sm': {
            readonly fontSize: "50px";
            readonly fontWeight: number;
            readonly lineHeight: "65px";
        };
        readonly 'display-md': {
            readonly fontSize: "65px";
            readonly fontWeight: number;
            readonly lineHeight: "85px";
        };
        readonly 'display-lg': {
            readonly fontSize: "80px";
            readonly fontWeight: number;
            readonly lineHeight: "95px";
        };
        readonly link: {
            readonly fontSize: "14px";
            readonly fontWeight: number;
            readonly lineHeight: "20px";
            readonly textDecoration: "underline";
            readonly textUnderlineOffset: "0.15em";
        };
    };
    readonly fontWeight: {
        readonly display: {
            readonly fontWeight: number;
        };
        readonly heading: {
            readonly fontWeight: number;
        };
        readonly label: {
            readonly fontWeight: number;
        };
        readonly paragraph: {
            readonly fontWeight: number;
        };
    };
    readonly italic: {
        readonly true: {
            readonly fontStyle: "italic";
        };
    };
};

interface TextProps extends BoxProps {
    align?: keyof typeof textVariants['textAlign'];
    fontWeight?: keyof typeof textVariants['fontWeight'];
    inline?: boolean;
    italic?: boolean;
    textTransform?: Atoms['textTransform'];
    variant?: keyof typeof textVariants['variant'];
}
declare const Text: PolymorphicForwardRefExoticComponent<TextProps, typeof BoxDefaultElement>;
interface ParagraphProps extends Omit<TextProps, 'variant'> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
declare type ParagraphComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<ParagraphProps, E>;
declare function Paragraph<E extends ElementType = typeof BoxDefaultElement>({ size, variant, ...props }: ParagraphComponentProps<E>): JSX.Element;
interface HeadingProps extends Omit<TextProps, 'variant'> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare type HeadingComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<HeadingProps, E>;
declare function Heading<E extends ElementType = typeof BoxDefaultElement>({ size, variant, ...props }: HeadingComponentProps<E>): JSX.Element;
interface DisplayProps extends Omit<TextProps, 'variant'> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
declare type DisplayComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<DisplayProps, E>;
declare function Display<E extends ElementType = typeof BoxDefaultElement>({ size, variant, ...props }: DisplayComponentProps<E>): JSX.Element;
interface EyebrowProps extends Omit<TextProps, 'variant'> {
}
declare type EyebrowComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<EyebrowProps, E>;
declare function Eyebrow<E extends ElementType = typeof BoxDefaultElement>({ variant, ...props }: EyebrowComponentProps<E>): JSX.Element;
interface LabelProps extends Omit<TextProps, 'variant'> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
declare type LabelComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<LabelProps, E>;
declare function Label<E extends ElementType = typeof BoxDefaultElement>({ size, ...props }: LabelComponentProps<E>): JSX.Element;
interface MenuProps extends TextProps {
}
declare type MenuTextComponentProps<E extends ElementType = typeof BoxDefaultElement> = PolymorphicPropsWithRef<MenuProps, E>;
declare function MenuText<E extends ElementType = typeof BoxDefaultElement>({ ...props }: MenuTextComponentProps<E>): JSX.Element;

declare const SvgArrowRightAngle: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgArrowRight: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgAuction: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgBell: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgCheck: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgChevronDown: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgChevronLeft: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgChevronRight: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgChevronUp: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgClose: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgCoinbase: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgCopy: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgCreate: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgDiscord: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgDownload: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgEllipsis: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgEmbed: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgInstagram: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgKebab: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgLogout: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgMetamask: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgPlus: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgQuestion: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgRainbow: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgSearch: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgShield: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgSpinner: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgTag: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgTwitter: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgWalletConnect: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare const SvgWarning: (props: SVGProps<SVGSVGElement>) => JSX.Element;

declare namespace iconComponents {
  export {
    SvgArrowRightAngle as ArrowRightAngle,
    SvgArrowRight as ArrowRight,
    SvgAuction as Auction,
    SvgBell as Bell,
    SvgCheck as Check,
    SvgChevronDown as ChevronDown,
    SvgChevronLeft as ChevronLeft,
    SvgChevronRight as ChevronRight,
    SvgChevronUp as ChevronUp,
    SvgClose as Close,
    SvgCoinbase as Coinbase,
    SvgCopy as Copy,
    SvgCreate as Create,
    SvgDiscord as Discord,
    SvgDownload as Download,
    SvgEllipsis as Ellipsis,
    SvgEmbed as Embed,
    SvgInstagram as Instagram,
    SvgKebab as Kebab,
    SvgLogout as Logout,
    SvgMetamask as Metamask,
    SvgPlus as Plus,
    SvgQuestion as Question,
    SvgRainbow as Rainbow,
    SvgSearch as Search,
    SvgShield as Shield,
    SvgSpinner as Spinner,
    SvgTag as Tag,
    SvgTwitter as Twitter,
    SvgWalletConnect as WalletConnect,
    SvgWarning as Warning,
  };
}

declare type IconType = keyof typeof iconComponents;
declare const icons: ("ArrowRightAngle" | "ArrowRight" | "Auction" | "Bell" | "Check" | "ChevronDown" | "ChevronLeft" | "ChevronRight" | "ChevronUp" | "Close" | "Coinbase" | "Copy" | "Create" | "Discord" | "Download" | "Ellipsis" | "Embed" | "Instagram" | "Kebab" | "Logout" | "Metamask" | "Plus" | "Question" | "Rainbow" | "Search" | "Shield" | "Spinner" | "Tag" | "Twitter" | "WalletConnect" | "Warning")[];
interface IconProps extends BoxProps {
    id?: IconType;
    size?: keyof typeof iconVariants['size'];
}
declare function Icon({ id, size, ...props }: IconProps): JSX.Element;

declare const inputVariants: {
    sizeVariant: {
        lg: {
            fontSize: "35px";
            fontWeight: number;
        };
        sm: {
            height: string;
            paddingTop: number;
            paddingBottom: number;
        };
    };
};

interface InputProps extends BoxProps {
    size?: keyof typeof inputVariants['sizeVariant'];
}
declare type InputComponentProps<E extends ElementType> = PolymorphicPropsWithRef<InputProps, E>;
declare function Input<E extends ElementType = 'input'>({ className, sizeVariant, ...props }: InputComponentProps<E>): JSX.Element;

interface InputFieldProps extends BoxComponentProps<'input'> {
    name: string;
    value?: string;
    placeholder?: string;
    label?: string;
    affix?: string;
    type?: 'text' | 'number';
    step?: number;
    min?: number;
    max?: number;
    icon?: IconProps['id'];
    className?: string;
    disabled?: boolean;
    error?: string;
    description?: string;
}
declare function InputField({ value, label, name, icon, type, description, error, step, min, max, className, placeholder, affix, disabled, ...props }: InputFieldProps): JSX.Element;

declare const inputField: string;
declare const inputFieldLabel: _vanilla_extract_recipes_dist_declarations_src_types.RuntimeFn<{
    disabled: {
        true: {
            cursor: string;
        };
    };
}>;
declare const inputFieldBaseInput: _vanilla_extract_recipes_dist_declarations_src_types.RuntimeFn<{
    icon: {
        true: {
            paddingLeft: _vanilla_extract_private.CSSVarFunction;
        };
    };
    error: {
        true: {
            bgColor: _vanilla_extract_private.CSSVarFunction;
            borderColor: _vanilla_extract_private.CSSVarFunction;
        };
    };
}>;

interface TextAreaProps extends BoxComponentProps<'textarea'> {
    value?: string;
    name: string;
    placeholder?: string;
    label?: string;
    className?: string;
    initialHeight?: number;
    disabled?: boolean;
    error?: string;
    description?: string;
}
declare function TextArea({ value, label, name, description, error, className, placeholder, disabled, initialHeight, ...props }: TextAreaProps): JSX.Element;

declare const selectVariants: {
    size: {
        lg: {
            fontSize: "30px";
            fontWeight: number;
        };
    };
};

interface SelectProps extends FlexProps {
    autoFocus?: boolean;
    defaultValue?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    size?: keyof typeof selectVariants['size'];
}
declare const Select: ({ className, children, size, ...props }: SelectProps) => JSX.Element;

interface SliderProps extends SliderPrimitive.SliderProps {
    range?: boolean;
    showLabel?: boolean;
    unitName?: string;
    unitNamePlural?: string;
    showInlineUnits?: boolean;
    selectedValue?: any;
}
declare function Slider({ name, range, showLabel, showInlineUnits, unitName, unitNamePlural, selectedValue, ...props }: SliderProps): JSX.Element;

interface TagProps extends TextProps {
    active?: boolean;
    inactive?: boolean;
    showDot?: boolean;
}
declare function Tag({ active, className, children, inactive, showDot, ...props }: TagProps): JSX.Element;

interface CheckboxProps {
    label?: string;
    name: string;
    id: string;
    checked?: CheckboxPrimitive.CheckedState | boolean;
    className?: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    onChange?: Dispatch<SetStateAction<CheckboxPrimitive.CheckedState>>;
    onClick?: () => void;
}
declare function Checkbox({ label, id, name, className, checked, defaultChecked, disabled, onClick, onChange, ...props }: CheckboxProps): JSX.Element;

interface RadioButtonGroupProps extends RadioGroupProps {
    items: Omit<RadioButtonProps, 'id'>[];
}
interface RadioButtonProps {
    id: string;
    value: string;
    label?: string;
    disabled?: boolean;
}
declare function RadioButtonGroup({ className, items, ...props }: RadioButtonGroupProps): JSX.Element;

/**
 * Ported from radix-ui
 * https://github.com/radix-ui/primitives/blob/main/packages/react/separator/src/Separator.tsx
 */

declare const ORIENTATIONS: readonly ["horizontal", "vertical"];
declare type Orientation = typeof ORIENTATIONS[number];
interface SeparatorProps extends BoxProps {
    orientation?: Orientation;
    decorative?: boolean;
}
declare type SeparatorComponentProps<E extends ElementType> = PolymorphicPropsWithRef<SeparatorProps, E>;
declare function Separator<E extends ElementType>({ orientation, decorative, ...props }: SeparatorComponentProps<E>): JSX.Element;

interface AccordionProps extends BoxProps {
    label?: string;
    enableDeselectAll?: Boolean;
    defaultState?: 'open' | 'closed';
    onDeselectAll?: MouseEventHandler;
}
declare function Accordion({ defaultState, // Hack to allow AccordionItem with value="open" to be opened by default
label, enableDeselectAll, onDeselectAll, ...props }: AccordionProps): JSX.Element;

interface ModalContentProps extends Dialog.DialogContentProps {
    title?: string;
    showClose?: boolean;
    removePadding?: boolean;
    children?: JSX.Element;
}
interface ModalProps extends Dialog.DialogProps {
    trigger?: React.ReactNode;
}
declare function Modal({ trigger, children, ...props }: ModalProps): JSX.Element;
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;

interface WellProps extends StackProps {
    label?: string;
}
declare function Well({ label, className, children, ...props }: WellProps): JSX.Element;

interface ThemeProviderProps extends BoxProps {
    theme?: ClassValue;
}
declare function themeClass({ theme }: {
    theme: ClassValue;
}, className?: ClassValue): string;
declare function ThemeProvider({ theme, className, ...props }: ThemeProviderProps): JSX.Element;

declare const color: {
    black100: string;
    black70: string;
    black50: string;
    black30: string;
    black10: string;
    black5: string;
    white100: string;
    white70: string;
    white50: string;
    white30: string;
    white10: string;
    white5: string;
    transparent: string;
    errorLight: string;
    errorDefault: string;
    errorDark: string;
    errorBackground: string;
    successLight: string;
    successDefault: string;
    successDark: string;
    warningLight: string;
    warningDefault: string;
    warningDark: string;
};

declare const space: {
    x0: string;
    x1: string;
    x2: string;
    x3: string;
    x4: string;
    x5: string;
    x6: string;
    x7: string;
    x8: string;
    x9: string;
    x10: string;
    x11: string;
    x12: string;
    x13: string;
    x14: string;
    x15: string;
    x16: string;
    x17: string;
    x18: string;
    x19: string;
    x20: string;
    x21: string;
    x22: string;
    x23: string;
    x24: string;
    x25: string;
    x26: string;
    x27: string;
    x28: string;
    x29: string;
    x30: string;
    auto: string;
};
declare const size$1: {
    readonly '100vw': "100vw";
    readonly '100vh': "100vh";
    readonly '100%': "100%";
    readonly unset: "unset";
    readonly x0: string;
    readonly x1: string;
    readonly x2: string;
    readonly x3: string;
    readonly x4: string;
    readonly x5: string;
    readonly x6: string;
    readonly x7: string;
    readonly x8: string;
    readonly x9: string;
    readonly x10: string;
    readonly x11: string;
    readonly x12: string;
    readonly x13: string;
    readonly x14: string;
    readonly x15: string;
    readonly x16: string;
    readonly x17: string;
    readonly x18: string;
    readonly x19: string;
    readonly x20: string;
    readonly x21: string;
    readonly x22: string;
    readonly x23: string;
    readonly x24: string;
    readonly x25: string;
    readonly x26: string;
    readonly x27: string;
    readonly x28: string;
    readonly x29: string;
    readonly x30: string;
    readonly auto: string;
};

declare const breakpoints: number[];
declare const media: {
    [k: string]: string;
};
declare const themeBreakpoints: {
    [k: string]: {
        '@media': string;
    };
};

declare const radii: {
    readonly small: "4px";
    readonly normal: "5px";
    readonly curved: "10px";
    readonly phat: "20px";
    readonly round: "9999px";
};

declare const border: {
    style: {
        solid: string;
        dashed: string;
        dotted: string;
    };
    width: {
        none: string;
        thin: string;
        normal: string;
        thick: string;
    };
};

declare const ease: {
    in: string;
    out: string;
    inOut: string;
};

declare const font: {
    inter: string;
    robotoMono: string;
};
declare const size: string[];
declare const leading: string[];
declare const weight: number[];

declare const typography_font: typeof font;
declare const typography_size: typeof size;
declare const typography_leading: typeof leading;
declare const typography_weight: typeof weight;
declare namespace typography {
  export {
    typography_font as font,
    typography_size as size,
    typography_leading as leading,
    typography_weight as weight,
  };
}

export { Accordion, AccordionProps, Atoms, Box, BoxComponentProps, BoxProps, Button, ButtonProps, Checkbox, CheckboxProps, Display, DisplayProps, Eyebrow, EyebrowProps, Flex, FlexProps, Grid, GridProps, Heading, HeadingProps, Icon, IconProps, IconType, Input, InputComponentProps, InputField, InputFieldProps, InputProps, Label, LabelProps, MAX_GRID_WIDTH, MODAL_BACKDROP_LAYER, MenuProps, MenuText, Mixins, MixinsProp, Modal, ModalContent, ModalProps, Paragraph, ParagraphProps, RadioButtonGroup, RadioButtonProps, Select, SelectProps, Separator, SeparatorProps, Slider, SliderProps, Stack, StackProps, Tag, TagProps, Text, TextArea, TextAreaProps, TextProps, ThemeProvider, ThemeProviderProps, Well, WellProps, atoms, baseTheme, border, breakpoints, color, colorTheme, darkTheme, ease, fontWeight, icons, inputField, inputFieldBaseInput, inputFieldLabel, lightTheme, media, mixins, radii, root, size$1 as size, space, textVariants, themeBreakpoints, themeClass, transitions, typography, vars };
