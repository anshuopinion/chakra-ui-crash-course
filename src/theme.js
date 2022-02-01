import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const replaceExsiting = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },

    fonts: {
      heading: `Montserrat, ${base.fonts.heading} `,
      body: "Inter",
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            rounded: "none",
            _focus: {
              ring: 2,
              ringColor: "brand.500",
            },
            backgroundColor: mode("brand.600", "brand.300")(props),
            color: mode("brand.900", "brand.700")(props),
            _hover: {
              backgroundColor: mode("brand.400", "brand.400")(props),
              color: mode("brand.900", "brand.700")(props),
            },
          }),
        },
      },
      Textarea: {
        variants: {
          filled: {
            _focus: {
              borderColor: "brand.500",
            },
          },
        },
        sizes: {
          md: {
            borderRadius: "none",
          },
        },
      },
      Input: { ...replaceExsiting },
      Select: { ...replaceExsiting },
      Checkbox: {
        baseStyle: {
          control: {
            _focus: {
              ring: 2,
              ringColor: "brand.500",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;
