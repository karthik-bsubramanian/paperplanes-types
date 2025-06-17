import z from "zod";

export const SignupInputSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  image: z.string(),
  googleId: z.string(),
});

export type SignupInput = z.infer<typeof SignupInputSchema>;

export const SigninInputSchema = z.object({
  email: z.string().email(),
});

export type SigninInput = z.infer<typeof SigninInputSchema>;

export const CreateblogInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  topicId: z.number(),
  authorId: z.string(),
});

export type CreateblogInput = z.infer<typeof CreateblogInputSchema>;

export const UpdateblogInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type UpdateblogInput = z.infer<typeof UpdateblogInputSchema>;

export const CommentSchema = z.object({
  content: z.string(),
  postId: z.string(),
  authorId: z.string(),
});

export type CommentInput = z.infer<typeof CommentSchema>;

export const TopicSchema = z.object({
  name: z.string(),
});

export type TopicInput = z.infer<typeof TopicSchema>;

export const UserSavedPostSchema = z.object({
  userId: z.string(),
  postId: z.string(),
});

export type UserSavedPostInput = z.infer<typeof UserSavedPostSchema>;
