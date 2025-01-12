import { ThemedLayoutV2 } from "@refinedev/antd";
import Header from "../layouts/header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
    //   Title={(titleProps) => <ThemedLayoutV2 {...titleProps} text="Refine"/>}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
