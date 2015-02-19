# `nscale`

The origanizational name of the deployment management toolkit

# microservice

A small, light-weight, independantly deployable service 
having a single focused purpose, designed to communicate
with other microservices via a well defined interface to 
provide business value. 

* [Microservices][]

# container

An isolated host environment that can contain other containers and/or 
microservices. May be a virtual machine, a docker container or some
other process that provides an isolated OS-like system.

* [Containers][]

# system 

A collection of containers representing a topological deployment strategy.

* [CLI Readme#system][] 


# nscale

The module name of the deployment management toolkit

* <http://npmjs.org/nscale>
* <http://github.com/nearform/nscale>

# nsd   

The CLI executable installed when the `nscale` module is installed,
the `nscale-client` is the actual module that `nsd` executable links to.

* <http://github.com/nearform/nscale-client>
* [CLI Readme][]


# kernel

A server-based RPC kernel that supports the `nscale-protocol`, this
must be available for the `nscale-client` (the `nsd` executable) to function.

* <http://github.com/nearform/nscale-kernel>
* <http://github.com/nearform/nscale-protocol>
* <http://github.com/nearform/nscale-api>
* [Kernel Readme]





[CLI Readme]: CLI-Readme
[CLI Readme#system]: CLI-Readme#system

[Kernel Readme]: Kernel-Readme
[Microservices]: Concept-Microservices
[Containers]: Concept-Containers
