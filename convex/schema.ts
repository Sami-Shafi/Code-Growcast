import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	podcasts: defineTable({
		audioStorageId: v.optional(v.id("_storage")),
		user: v.id("users"),
		title: v.string(),
		description: v.string(),
		audioUrl: v.optional(v.string()),
		imgUrl: v.optional(v.string()),
		imgStorageId: v.optional(v.id("_storage")),
		author: v.string(),
		authorId: v.string(),
		authorImgUrl: v.string(),
		voicePrompt: v.string(),
		imgPrompt: v.string(),
		voiceType: v.string(),
		audioDuration: v.number(),
		views: v.number(),
	})
		.searchIndex("search_author", { searchField: "author" })
		.searchIndex("search_title", { searchField: "title" })
		.searchIndex("search_body", { searchField: "description" }),
	users: defineTable({
		email: v.string(),
		imgUrl: v.string(),
		clerkId: v.string(),
		name: v.string(),
	}),
	tasks: defineTable({
		isCompleted: v.boolean(),
		text: v.string(),
	}),
});
