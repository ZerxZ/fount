@echo off
setlocal enabledelayedexpansion
set fount_dir=%~dp0/..
if not exist node_modules (
	deno install --allow-all --entrypoint=%fount_dir%/src/server/index.mjs --node-modules-dir=auto
)
deno run --allow-all %fount_dir%/src/server/index.mjs %*
@echo on
