import z from "zod";

export const SignupInputSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().optional()
})

export type SignupInput = z.infer<typeof SignupInputSchema>; 


export const SigninInputSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export type SigninInput = z.infer<typeof SigninInputSchema>; 

const CreateblogInputSchema = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateblogInput = z.infer<typeof CreateblogInputSchema>;


const UpdateblogInputSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type UpdateblogInput = z.infer<typeof UpdateblogInputSchema>;