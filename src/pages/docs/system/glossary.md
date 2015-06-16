---
layout: docs.html
---

# System - Glossary
This page will walk you through some of the domain language used in the context
of nscale and other related projects in alphabetical order.

## container
An isolated host environment that can contain other containers and/or
microservices. May be a virtual machine, a docker container or some other
process that provides an isolated OS-like system.

## kernel
A server-based RPC kernel that supports the `nscale-protocol`.

## microservice
A small, light-weight, independently deployable service having a single focused
purpose, designed to communicate with other microservices via a well defined
interface to provide business value.

## nscale
The project, module, and CLI tool name of a container based deployment and
management tool developed and maintained by [nearForm][] and other contributors.

## nscale-protocol
A well-defined server side protocol used by nscale. May be reimplemented outside
of nscale for use with 3rd party products and/or services.

## revision
A recorded system snapshot, automatically saved whenever there are system changes.

## system
A collection of containers representing a topological deployment strategy.

## topology
A logical arrangement of containers in a tree like fashion representing a
sensical deployment mapping.

[nearForm]: www.nearform.com
