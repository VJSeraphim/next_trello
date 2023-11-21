const MarketingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-slate-100">
            {/* Navbar Here! */}
            <main className="pt-40 bg-20 bg-slate-100">
                {children}
            </main>
            {/* Footer Here! */}
        </div>
    )
}

export default MarketingLayout