"use client"

import { Button } from "@/components/ui/button"
import { create } from "@/actions/create-board"

export const Form = () => {
    return (
        <form action={create}>
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