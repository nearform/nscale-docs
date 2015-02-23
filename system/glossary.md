
![nscale](../_imgs/logo.png)

[Back To - Home](../README.md)

# System - CLI Commands

This guide will walk you through some of the domain language used in the context of __nscale__

## nscale

The organisational and module name of a deployment and container management tool. The module can be required via [NPM](http://npmjs.org/nscale), the code is available on [GitHub](http://github.com/nearform/nscale).

## microservice

A small, light-weight, independently deployable service
having a single focused purpose, designed to communicate
with other microservices via a well defined interface to
provide business value.

## container

An isolated host environment that can contain other containers and/or
microservices. May be a virtual machine, a docker container or some
other process that provides an isolated OS-like system.

## system

A collection of containers representing a topological deployment strategy.

## nsd

The CLI executable installed when the __nscale__ module is installed,
the `nscale-client` is the actual module that `nsd` executable links to.

* <http://github.com/nearform/nscale-client>


## kernel

A server-based RPC kernel that supports the `nscale-protocol`, this
must be available for the `nscale-client` (the `nsd` executable) to function.

* <http://github.com/nearform/nscale-kernel>
* <http://github.com/nearform/nscale-protocol>
* <http://github.com/nearform/nscale-api>

<br/>
[Back To - Home](../README.md)
