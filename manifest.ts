import { echo } from "./intents"
import { compileToExpression } from "./lib/compile"
import { Manifest } from "./types"

const manifest: Manifest = {
	id: 'arturo',
	name: 'arturo',
	metadata: {},
	version: '0.0.1',
	title: 'Arturo',
	description: 'Arturo is a tool for building and deploying AI applications.',
	prerelease: true,
	gatingArturo: compileToExpression('test.ts'),
	entities: {},
	intents: [
		echo
	],
	// triggers: [],
	// settings: [],
	// fields: [],
}

export default manifest
