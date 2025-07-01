import { Intent } from "../types";

export const echo: Intent = {
	name: "echo",
	title: "Echo a REST GET request",
	description: "An intent that uses Postman's Echo API to test HTTP requests.",
	prerelease: false,
	url: "https://postman-echo.com/get",
	httpMethod: "GET",
	parameters: [
		{
			name: "foo",
			title: "Foo Parameter",
			description: "A sample query parameter for testing.",
			in: "query",
			required: false,
		},
		{
			name: "bar",
			title: "Bar Parameter",
			description: "Another sample query parameter for testing.",
			in: "query",
			required: false,
		},
	],
	response: {
		type: "object",
		properties: {
			args: {
				type: "object",
				properties: {
					q: {
						type: "string",
						description: "The query string as received by the server"
					}
				}
			},
			headers: {
				type: "object"
			},
			url: {
				type: "string"
			}
		}
	}
};
