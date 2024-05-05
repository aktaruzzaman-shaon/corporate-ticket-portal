export default function AuthLayout({children}){
    return (
        <div className="flex flex-col items-center  bg-green-500 h-screen justify-center">
            {children}
        </div>
    )
}