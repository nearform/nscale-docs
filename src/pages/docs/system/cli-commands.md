---
layout: docs.html
---

# System - CLI Commands

This page will walk you through each command that can be executed with the
__nscale__ CLI.

## help
Lists all commands available to use.

    usage:     nscale help

## start
Starts the nscale kernel.

    usage:     nscale start

## stop
Stops the kernel process

    usage:     nscale stop

## status
Displays some basic information about the kernel process

    usage:     nscale status
    output:    nscale-kernel { running: true, port: '3223', listening: true, pid: 7398 }

## log
tail the output of the nscale-kernel log

    usage:     nscale log

## use
Sets the host and port to be used by nscale.

    usage:     nscale use <host> <port>
    example:   nscale use localhost 3223

## login
Authenticates nscale against Github.

    usage:     nscale login

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

    usage:     nscale system current <system> <target>
    example:   nscale system current nscaledemo process

## system analyze
Runs an analysis of a system.

    usage:     nscale system analyze <system> <target>
    example:   nscale system analyze nscaledemo process

## system check
Runs and verifies an analysis of a system.

    usage:     nscale system check <system> <target>
    example:   nscale system check nscaledemo process

## system fix
Fixes any issues raised by a system check.

    usage:     nscale system fix <system> <target>
    example:   nscale system fix sudc-system aws

## container list
Lists all containers of a given system.

    usage:     nscale container list <system>
    example:   nscale container list nscaledemo

## container build
Builds a single container, if no target is supplied all targets are built.

    usage:     nscale container build <system> <container> <revision> <target>
    example:   nscale container build nscaledemo web latest development

## container buildall
Builds all containers, if no target is supplied all targets are built.

    usage:     nscale container buildall <system> <revision> <target>
    example:   nscale container buildall sudc-system latest aws

## revision list
Lists all revisions of a given system.

    usage:     nscale revision list <system>
    example:   nscale revision list nscaledemo

## revision get
Gets a given system revision.

    usage:     nscale revision get <system> <revision>
    example:   nscale revision get nscaledemo cf66a4cf

## revision deploy
Deploys a given system revision.

    usage:     nscale revision deploy <system> <revision> <target>
    example:   nscale revision deploy nscaledemo cf66a4cf development

## revision mark
Mark a given system revision as deployed.

    usage:     nscale revision mark <system> <revision>
    example:   nscale revision mark nscaledemo cf66a4cf

## revision preview
Create a preview workflow for a potential deployment.

    usage:     nscale revision preview <system> <revision> <target>
    example:   nscale revision preview nscaledemo cf66a4cf development

## remote add
Download and add a system from GitHub.

    usage:     nscale remote add <system> <repo>
    example:   nscale remote add nscaledemo git@github.com:nearform/nscaledemo

## timeline list
Get a timeline for a given system.

    usage:     nscale timeline list <system>
    example:   nscale timeline list nscaledemo

[Back To - Home][]


[Back To - Home]: ../README.md
[logo]: ../_imgs/logo.png
