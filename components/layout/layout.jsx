import * as React from "react";
import { WrapperLayout } from "./layout.styles";

export default function Layout({children}) {
  return <WrapperLayout>{children}</WrapperLayout>;
}
