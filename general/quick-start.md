
![nscale](../_imgs/logo.png)

[Back To - Documentation](../README.md)

# General - Quick Start

This guide is designed to get you up and running with nscale
on Linux or OSX as quickly as possible.

## Requirements
If you don't have all of the below requirements you can use
the [Linux Setup Guide]() or the [OS X Setup Guide]() to prepare
your system for use.

* Node
* Git
* Docker
* nscale

## Booting the nscale kernel
The `nsd` executable is a command line client app, it interacts
with a kernel server. Most `nsd` commands rely on the
kernel server, so the first thing we need to do is start it:

```
nsd server start
```

> In a production scenario (or as a convenience) we could
> create a small script to run the kernel server on start up.

## Login to nsd
First you must login to nsd.

```
nsd login
```

## Cloning a System

To get up and running straight away we're going to clone an
existing system, for a longer explanation of how to get started
from scratch see [Getting Started From Scratch][]

We'll be using nearForm's canonical "Hello World" example.

To clone the system we do,

```
nsd system clone git@github.com:nearform/nscaledemo.git
```

It doesn't matter what directory we're in when we do this. nscale
manages any imported files internally - we simply interact with
the system those files represent through the `nsd` command line interface.

## Listing Systems

Let's make sure our system was installed

```
nsd system list
```

This should output something like this

```
Name                           Id
nscaledemo                        e1144711-47bb-5931-9117-94f01dd20f6f
```

## Listing Containers

Our cloned system has two containers (see [Containers][]), let's list
them:

```
nsd container list e1144711-47bb-5931-9117-94f01dd20f6f
```

The nsd help for `nsd container list` requires a `systemid`, however
we can also reference our system by name

```
nsd container list nscaledemo
```

In both cases, `nsd`  should output

```
Name                 Type            Id                                                 Version         Dependencies
Machine              virtualbox      85d99b2c-06d0-5485-9501-4d4ed429799c                               ""
web                  boot2docker     9ddc6c027-9ce2-5fdg-9936-696d2b3789bb              0.0.1           {}
```

## Building a Container

Our `Machine` is a virtualbox container, a virtually emulated operating
system. This can be thought of as the equivalent of a physical server,
or a "machine" in a virtual hosting plan (such as AWS).

The second container (`web`) is a Docker container, this an isolated OS-like
environment that can be run on a host system (in this case our `Machine`).

So, for this system, the `Machine` container contains the `web` container,
which contains a microservice (see [Microservices][]) which provides
a web server, that responds to requests with an HTML file containing "Hello World!".

```
nsd container build nscaledemo web
```

## Deploying a System

Any time we build a container, our system is modified, this is reflected
in the revision list

```
nsd revision list nscaledemo
```

To deploy our system in it's latest state, we take the top revision number
use it with `revision deploy`. So if the latest revision id was `2a934f8e9cf8c98f2ac`
we would do:

```
nsd revision deploy nscaledemo 2a934f8e9cf8c98f2ac
```

If that was successful, if we list our revisions again with `nsd revision list nscaledemo` the revision we have deployed should have `true` in the `deployed` column:

```
revision             deployed who                                                     time                      description
2a934f8e9cf8c98f2ac… true     davidmarkclements <me@me.com>                                2014-09-03T09:15:23.000Z  built container: 920718f8542201f9d8daf2f430ce0001…
```

Finally, we can request a page from our web containers web server,
we just need to know the address.

The [web microservice][web-app] is an express app that listens on port `8000`.

This port is mapped to our host machine make a request to localhost at port `8000`.

```
curl http://localhost:8000

open http://localhost:8000
```

We should see "Hello World!".


## Next Steps


[Linux Setup Guide]: Linux-Setup-Guide
[Getting Started From Scratch]: Getting-Started-From-Scratch
[Getting Started Migrating]: Getting-Started-Migrating

[Containers]: Concept-Containers
[Microservices]: Concept-Microservices

[web-app]:https://github.com/nearform/nscaledemo/blob/master/web/app.js
