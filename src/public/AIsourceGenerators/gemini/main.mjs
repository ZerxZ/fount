import { exec } from '../../../server/exec.mjs'

export default {
	Init: async () => exec('npm install --no-save @google/generative-ai'),
	GetSource: async (config) => import('./build.mjs').then(({ default: build }) => build(config))
}
