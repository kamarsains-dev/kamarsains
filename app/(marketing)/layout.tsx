import InfoBar from "@/components/infobar";
import { Header } from "./header";

type Props = {
    children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
    return (
        <div>
            <InfoBar/>
            <Header/>
            <main className="flex-1 flex-col items-center justify-center">
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout;