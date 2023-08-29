








export default function SubscribeLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-card">
            <main className="flex flex-col items-center justify-center flex-1 md:px-20 px-5 text-center">
                {children}
            </main>
        </div>
    )


}