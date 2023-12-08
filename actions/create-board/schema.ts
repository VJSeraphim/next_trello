import { z } from "zod";

export const CreateBoard = z.object({
    title: z.string({
        required_error: " Title is required.",
        invalid_type_error: "Title is required or null."
    }).min(3, {
        message: "Title is too short. (Minimum of 3 letters)"
    })
})