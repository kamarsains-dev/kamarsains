

type Props = {
    children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
    return (
        <div>
            
            <main className="flex-1 flex-col items-center justify-center">
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout;