import { app } from './server.mjs'
import { __dirname } from './server.mjs'
import { initPart, loadPart, uninstallPart, unloadPart } from './parts_loader.mjs'

export async function loadShell(username, shellname) {
	return loadPart(username, 'shells', shellname, app)
}

export async function unloadShell(username, shellname) {
	unloadPart(username, 'shells', shellname, app)
}

export async function initShell(username, shellname) {
	initPart(username, 'shells', shellname)
}

export function uninstallShell(username, shellname) {
	uninstallPart(username, 'shells', shellname)
}