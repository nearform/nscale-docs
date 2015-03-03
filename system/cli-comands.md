
![nscale](../_imgs/logo.png)

[Back To - Home](../README.md)

# System - CLI Commands

This guide will walk you through each command that can be executed with the nscale CLI.

## help
To list available commands execute `nscale help`:

    $ nscale help

## nscale host

The nscale host is the server running the nscale system.

To set the ndf host execute `nscale use`:

    Usage: nscale use HOST [PORT]

    Example:
    $ nscale use localhost 3223

## login

To authenticate with the nscale host execute `nscale login` and either login by username/password or with your github account.

    Usage: nscale login

### username/password login

    $ nscale login
    prompt: nscale username / password login (y/n): y
    prompt: username: <username>
    prompt: password: <password>

### github login

First generate a new github personal access token in [https://github.com/settings/applications](https://github.com/settings/applications), remembering to select the 'repo' and 'user' scopes.

    $ nscale login
    prompt: nscale username / password login (y/n): n
    prompt: github access token: <personal access token>

## logout

To logout from the nscale host execute `nscale logout`:

    Usage: nscale logout

    Example:
    $ nscale logout

## system

A nscale system is represented by a set of connected containers that are configured, built and deployed to constitute a working platform for distributed applications.

### system create

To create a blank system execute `nscale system create`:

    Usage: nscale system create

    Example:
    $ nscale system create
    prompt: name: <name>
    prompt: namespace: <namespace>
    prompt: confirm (y/n): y

### system list

To list all systems execute `nscale system list`:

    Usage: nscale system list

    Example:
    $ nscale system list

### system current

To get the system definition of a currently deployed revision execute: `nscale system current`:

    Usage: nscale system current NAME TARGET

    Example:
    $ nscale system deployed nscale-demo process

### system analyze

To run an analysis of a system execute `nscale system analyze`:

    Usage: nscale system analyze NAME

    Example:
    $ nscale system analyze nscale-demo process

### system check

To run and verify an analysis of a system execute `nscale system check`:

    Usage: nscale system check NAME TARGET

    Example:
    $ nscale system check nscale-demo process

### system fix
Having run a system check, if deviation from the desired system state has been detected, execute `system fix`:

    Usage: nscale system fix NAME TARGET

    Example:
    $ nscale system fix sudc-system aws

## container

A container is a reusable and configurable system resource that can be built and deployed across one or more physical nodes.

The currently supported container types are docker (Docker container), aws-ami (Amazon machine image), aws-sg (Amazon security group), and aws-elb (Amazon load balancer). We have also introduced the __experimental__ process-container.

### container list

To list all containers of a system execute `nscale container list`:

    Usage: nscale container list NAME

    Example:
    $ nscale container list nscale-demo


### container build

To build a single container of a system execute `nscale container build`:

    Usage: nscale container build NAME CONTAINER REVISION TARGET

    Example:
    $ nscale container build nscale-demo web latest development

    Note: Target is optional. The container is built for all targets if none is supplied.

### container buildall

To build all containers for a system execute `nscale container buildall`:
    
    Usage: nscale container buildall NAME REVISION TARGET

    Example:
    $ nscale container buildall sudc-system latest aws

    Note: Target is optional. The container is built for all targets if none is supplied.

## Revision

A revision is a recorded system snapshot, automatically saved whenever there are system changes.

### revision list

To list all revisions of a system execute `nscale revision list`:

    Usage: nscale revision list NAME

    Example:
    $ nscale revision list nscale-demo

### revision get

To get a revision of a system execute `nscale revision get`:

    Usage: nscale revision get NAME REVISION

    Example:
    $ nscale revision get nscale-demo 33417ff8f1299c1b35c40b562c5b8310cf66a4cf

### revision deploy

To deploy a revision of a system execute `nscale revision deploy`:

    Usage: nscale revision deploy NAME REVISION TARGET

    Example:
    $ nscale revision deploy nscale-demo 33417ff8f1299c1b35c40b562c5b8310cf66a4cf development

### revision mark

To mark a revision of a system as being deployed execute `nscale revision mark`:

    Usage: nscale revision mark NAME REVISION

    Example:
    $ nscale revision mark nscale-demo 33417ff8f1299c1b35c40b562c5b8310cf66a4cf

### revision preview

To preview the deploy workflow for a revision of a system execute `nscale revision preview`:

    Usage: nscale revision preview NAME REVISION TARGET

    Example:
    $ nscale revision preview nscale-demo 33417ff8f1299c1b35c40b562c5b8310cf66a4cf development

## remote add

To add a remote git repository to an existing system execute 'remote add':

    Usage: nscale remote add NAME REPO

    Example:
    $ nscale remote add nscale-demo git@github.com:nearform/nscale-demo

## timeline list

To get the system timeline execute 'timeline list':

    Usage: nscale timeline list NAME

    Example:
    $ nscale timeline list nscale-demo


<br/>
[Back To - Documentation](../README.md)
