import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: "e20c1667-70de-45e6-b29a-818fcce8648b", // Get this from tina.io
	token: "6405ba46a0b38e0c7edecc219241518bf80984bd", // Get this from tina.io
	build: {
		outputFolder: "admin",
		publicFolder: "/",
	},
	media: {
		tina: {
			mediaRoot: "uploads",
			publicFolder: "assets"
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "_posts",
				ui: {
					filename: {
						readonly: false,
						slugify: values => {
							const date = new Date();
							const day = date.getDate();
							const month = date.getMonth() + 1;
							const year = date.getFullYear();

							let currentDate = `${year}-${month}-${day}`;

							return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
						}
					}
				},
				fields: [
					{
						type: "string",
						name: "layout",
						label: "Layout",
						required: true,
					},
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "datetime",
						name: "date",
						label: "Date",
						required: true,
					},
					{
						type: "string",
						name: "categories",
						label: "Categories",
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
});
