type JSExpression = string

// An Intent usually means a REST request
export type Intent = {
	name: string
	title: string
	description: string
	prerelease: boolean // TODO: probably remove this for a public release
	url: string
	httpMethod: string
	parameters: IntentParameter[]
	response: any // spec.Schema // TODO: json schema type?
}

export type IntentParameter = {
	name: string
	title: string
	description: string
	in: IntentParameterIn
	required: boolean
	source?: Source
	// schema: spec.Schema
}

export type Manifest = {
	id: string
	name: string
	metadata: { [k: string]: any } // map[string]interface{}
	version: string //semver.Version
	title: string
	description: string
	prerelease: boolean // TODO: probably remove this for a public release
	gatingArturo: string
	// settings: Setting[]
	entities: { [k: string]: any } // TODO: json schema type? map[string]*spec.Schema
	// fields: Field[]
	intents: Intent[]
	// triggers: Trigger[]
}
