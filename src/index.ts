import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().optional()
})

export type signupInput = z.infer<typeof signupInput>; 


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export type signinInput = z.infer<typeof signinInput>; 

const createblogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type createblogInput = z.infer<typeof createblogInput>;


const updateblogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type updateblogInput = z.infer<typeof updateblogInput>;