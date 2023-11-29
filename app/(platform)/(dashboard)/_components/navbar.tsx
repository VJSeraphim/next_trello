import { Plus } from "lucide-react"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
        <nav className="fized z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
            <MobileSidebar />
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button variant="primary" size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button variant="primary" size="sm" className='rounded-sm block md:hidden'>
                    <Plus className="w-4 h-4" />
                </Button>
            </div>
            <div className="flex gap-x-2 items-center ml-auto">
                <OrganizationSwitcher 
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        elements:{
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }
                    }}
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements:{
                            avatarBox: {
                                width: 30,
                                height: 30
                            }
                        }
                    }}
                />
            </div>
        </nav>
    )
}