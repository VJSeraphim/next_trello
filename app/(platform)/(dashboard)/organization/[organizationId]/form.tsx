"use client"

import { Button } from "@/components/ui/button"
import { create } from "@/actions/create-board"
import { useFormState } from "react-dom"

export const Form = () => {
    const initialState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(create, initialState)

    return (
        <form action={dispatch}>
            <input
                id="title"
                name="title"
                required
                placeholder="Enter a board Title"
                className="border-black border"
            />
            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}