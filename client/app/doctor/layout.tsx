import Navbar from "./component/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[80%] h-[90vh] bg-red-200 flex flex-col">
                <Navbar />
                {children}</div>
        </div>
    );
}