type Props = {
    children: React.ReactNode;
};

const MainLayout = ({
    children,
}: Props) => {
    return (
        <main className="pl-[256px]">
            {children}
        </main>
    );
};

export default MainLayout;