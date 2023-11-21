import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

const headingFont = localFont({
    src:"../../public/fonts/font.woff2"
})

export const logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition gap-x-2 hidden md:flex items-center">
                <Image 
                    src="/logo.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                />
                <p className={cn(
                    "text-lg text-neutral-700 pb-1",
                    headingFont.className
                )}>
                    Taskify
                </p>
            </div>
        </Link>
    )
}