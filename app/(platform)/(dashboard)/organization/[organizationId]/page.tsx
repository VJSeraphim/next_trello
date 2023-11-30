import { create } from "@/actions/create-board"

const OrganizationIdPage = () => {
    
    return (
        <div>
            <form>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board Title"
                    className="border-black border"
                />
            </form>
        </div>
    )
}

export default OrganizationIdPage