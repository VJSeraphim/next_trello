import { OrgControl } from "./_components/org-control"

const ORganizationIdLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <OrgControl />
            {children}
        </>
    )
}

export default ORganizationIdLayout