
![logo][]
[Back To - Home][]

# System - CLI Commands

This page will walk you through each command that can be executed with the
__nscale__ CLI.

## help
Lists all commands available to use.

    usage:     nscale help

## use
Sets the host and port to be used by nscale.

    usage:     nscale use [HOST] [PORT]
    example:   nscale use localhost 3223

## login
Authenticates nscale against Github.

    usage:     nscale login
    prompt:    username: <username>
    prompt:    password: <password>

## logout
Logs user out from nscale, login is required to use nscale after logout.

    usage:     nscale logout

## system create
Creates a new blank system.

    usage:     nscale system create
    prompt:    name: <name>
    prompt:    namespace: <namespace>
    prompt:    confirm (y/n): <y or n>

## system list
Lists all systems currently managed by nscale on the current machine.

    usage:     nscale system list

## system current
Gets the system definition of a currently deployed revision.

    usage:     nscale system current [SYSNAME] [TARGET]
    example:   nscale system current nscale-demo process

## system analyze
Runs an analysis of a system.

    usage:     nscale system analyze [SYSNAME] [TARGET]
    example:   nscale system analyze nscale-demo process

## system check
Runs and verifies an analysis of a system.

    usage:     nscale system check [SYSNAME] [TARGET]
    example:   nscale system check nscale-demo process

## system fix
Fixes any issues raised by a system check.

    usage:     nscale system fix [SYSNAME] [TARGET]
    example:   nscale system fix sudc-system aws

## container list
Lists all containers of a given system.

    usage:     nscale container list [SYSNAME]
    example:   nscale container list nscale-demo

## container build
Builds a single container, if no target is supplied all targets are built.

    usage:     nscale container build [SYSNAME] [CONTAINER] [REVISION] [TARGET]
    example:   nscale container build nscale-demo web latest development

## container buildall
Builds all containers, if no target is supplied all targets are built.

    usage:     nscale container buildall [SYSNAME] [REVISION] [TARGET]
    example:   nscale container buildall sudc-system latest aws

## revision list
Lists all revisions of a given system.

    usage:     nscale revision list [SYSNAME]
    example:   nscale revision list nscale-demo

## revision get
Gets a given system revision.

    usage:     nscale revision get [SYSNAME] [REVISION]
    example:   nscale revision get nscale-demo cf66a4cf

## revision deploy
Deploys a given system revision.

    usage:     nscale revision deploy [SYSNAME] [REVISION] [TARGET]
    example:   nscale revision deploy nscale-demo cf66a4cf development

## revision mark
Mark a given system revision as deployed.

    usage:     nscale revision mark [SYSNAME] [REVISION]
    example:   nscale revision mark nscale-demo cf66a4cf

## revision preview
Create a preview workflow for a potential deployment.

    usage:     nscale revision preview [SYSNAME] [REVISION] [TARGET]
    example:   nscale revision preview nscale-demo cf66a4cf development

## remote add
Download and add a system from GitHub.

    usage:     nscale remote add [SYSNAME] [REPO]
    example:   nscale remote add nscale-demo git@github.com:nearform/nscale-demo

## timeline list
Get a timeline for a given system.

    usage:     nscale timeline list [SYSNAME]
    example:   nscale timeline list nscale-demo

[Back To - Home][]

[logo]: ../_imgs/logo.png
[Back To - Home]: ../README.md
