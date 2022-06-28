import React from "react";
import {
  ThemeProvider,
  createTheme,
  type CreateThemeProps,
} from "@useweb/ui-theme";

import colors from "../tokens/colors";
import { variants as typography } from "../tokens/typography/typography";
import Button from "../../lib/components/useweb/Button/Button.defaults";
import IconButton from "../../lib/components/useweb/IconButton/IconButton.defaults";
import Dialog from "../../lib/components/useweb/Dialog/Dialog.defaults";
import Alert from "../../lib/components/useweb/Alert/Alert.defaults";
import Select from "../../lib/components/useweb/forms/fields/Select/Select.defaults";
import Textfield from "../../lib/components/useweb/forms/fields/TextField/Textfield.defaults";
import Link from "../../lib/components/useweb/Link/Link.defaults";

import CssBaseline from "./CssBaseline/CssBaseline.defaults";

const themeData: CreateThemeProps = {
  palette: colors,
  typography,
  // https://mui.com/customization/theme-components/#global-style-overrides
  components: {
    CssBaseline,
    Button,
    Dialog,
    IconButton,
    Alert,
    Select,
    Textfield,
    Link,
  },
};

export const theme = createTheme(themeData);

export default function UsewebThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
