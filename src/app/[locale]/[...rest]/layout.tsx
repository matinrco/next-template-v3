import { PropsWithChildren } from "react";

export const generateStaticParams = () => {
    return [{ rest: ["not-found"] }];
};

const Layout = ({ children }: PropsWithChildren) => children;

export default Layout;
