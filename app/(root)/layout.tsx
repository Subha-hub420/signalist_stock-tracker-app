const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen text-gray-400">
            {/*Hader*/}
            <div className="container py-10">
                {children}
            </div>
        </main>
    );
};

export default Layout;