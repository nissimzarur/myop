import { PropsWithChildren } from "react";

function Screen({ children }: PropsWithChildren) {
  return <div className="pl-10 pr-10">{children}</div>;
}

export default Screen;
