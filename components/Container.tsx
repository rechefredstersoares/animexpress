"use client";
interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
    return <div className="w-full max-w-screen-xl">{children}</div>;
};

export default Container;
