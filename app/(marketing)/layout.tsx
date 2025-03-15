"use client"

import dynamic from "next/dynamic";
import { Header } from "./header";

const InfoBar = dynamic(() => import("@/components/infobar"), { ssr: false });

type Props = {
    children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
    return (
        <div>
            <InfoBar/>
            <Header />
            <main className="flex-1 flex-col items-center justify-center">
                {children}
            </main>
        </div>
    );
};

export default MarketingLayout;
