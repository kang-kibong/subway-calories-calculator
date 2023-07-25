import { ThemeProvider, Global } from "@emotion/react";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GlobalThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeProvider>
  );
}

export default GlobalThemeProvider;
