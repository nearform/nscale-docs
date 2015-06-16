---
layout: docs.html
---

# Releases & Updates
__nscale__ is a young project, going through fast iterations. We are currently in version range
`0.x` and it will stay in `0.x` up until needed. We plan to release updates on a __weekly basis__,
and use github issues to track the process.

### Semantic Versioning
The nscale project follows [Semantic Versioning][], which means that given a version number
in the format of `MAJOR.MINOR.PATCH`, we increment:

- __MAJOR -__ when making incompatible API changes,
- __MINOR -__ when adding functionality in a backwards-compatible manner, and
- __PATCH -__ when making backwards-compatible bug fixes.

With nscale still in `0.x` we may change the public API as needed to evolve the project. If you are
worried about backward compatibility or need guidance we would love you get in touch via email at
___nscale@nearform.com___. We can support you through any updates as well as provide professional
support.

### Change Log
We  are committed to maintaining a Change Log which will be updated with each and every release.
This log contains a summarized list of changes and release notes along with links back to any
issues if applicable.

- [Go To Change Log][]

## Modules
Many modules make up the nscale project, each is listed below along with version and build
status information.

### Core Modules
Modules that make up the core of nscale

#### nscale
[![][v-nscale]][npm-nscale]

[npm-nscale]: https://npmjs.org/package/nscale
[v-nscale]: https://img.shields.io/npm/v/nscale.svg?style=flat-square

#### nscale-api
[![][v-nscale]][npm-nscale-api]

[npm-nscale-api]: https://npmjs.org/package/nscale-api
[v-nscale-api]: https://img.shields.io/npm/v/nscale-api.svg?style=flat-square

#### nscale-client
[![][v-nscale-client]][npm-nscale-client]

[npm-nscale-client]: https://npmjs.org/package/nscale-client
[v-nscale-client]: https://img.shields.io/npm/v/nscale-client.svg?style=flat-square

#### nscale-compiler
[![][v-nscale-compiler]][npm-nscale-compiler]

[npm-nscale-compiler]: https://npmjs.org/package/nscale-compiler
[v-nscale-compiler]: https://img.shields.io/npm/v/nscale-compiler.svg?style=flat-square

#### nscale-kernel
[![][v-nscale-kernel]][npm-nscale-kernel]

[npm-nscale-kernel]: https://npmjs.org/package/nscale-kernel
[v-nscale-kernel]: https://img.shields.io/npm/v/nscale-kernel.svg?style=flat-square

#### nscale-noauth
[![][v-nscale-noauth]][npm-nscale-noauth]

[npm-nscale-noauth]: https://npmjs.org/package/nscale-noauth
[v-nscale-noauth]: https://img.shields.io/npm/v/nscale-noauth.svg?style=flat-square

#### nscale-process-handler
[![][v-nscale-process-handler]][npm-nscale-process-handler]

[npm-nscale-process-handler]: https://npmjs.org/package/nscale-process-handler
[v-nscale-process-handler]: https://img.shields.io/npm/v/nscale-process-handler.svg?style=flat-square

#### nscale-protocol
[![][v-nscale-protocol]][npm-nscale-protocol]

[npm-nscale-protocol]: https://npmjs.org/package/nscale-protocol
[v-nscale-protocol]: https://img.shields.io/npm/v/nscale-protocol.svg?style=flat-square

#### nscale-sdk
[![][v-nscale-sdk]][npm-nscale-sdk]

[npm-nscale-sdk]: https://npmjs.org/package/nscale-sdk
[v-nscale-sdk]: https://img.shields.io/npm/v/nscale-sdk.svg?style=flat-square

#### nscale-util
[![][v-nscale-util]][npm-nscale-util]

[npm-nscale-util]: https://npmjs.org/package/nscale-util
[v-nscale-util]: https://img.shields.io/npm/v/nscale-util.svg?style=flat-square

#### nscale-web
[![][v-nscale-web]][npm-nscale-web]

[npm-nscale-web]: https://npmjs.org/package/nscale-web
[v-nscale-web]: https://img.shields.io/npm/v/nscale-web.svg?style=flat-square

### Analyzers
An analyzer is a module that pulls information from nscale deployments, nscale uses a platform
specific analyzer to pull deployment information from live deployments, they are used internally
by nscale and are auto discovered so there is now need to work with it directly.

#### nscale-aws-analyzer
[![][v-nscale-aws-analyzer]][npm-nscale-aws-analyzer]

[npm-nscale-aws-analyzer]: https://npmjs.org/package/nscale-aws-analyzer
[v-nscale-aws-analyzer]: https://img.shields.io/npm/v/nscale-aws-analyzer.svg?style=flat-square

#### nscale-direct-analyzer
[![][v-nscale-direct-analyzer]][npm-nscale-direct-analyzer]

[npm-nscale-direct-analyzer]: https://npmjs.org/package/nscale-direct-analyzer
[v-nscale-direct-analyzer]: https://img.shields.io/npm/v/nscale-direct-analyzer.svg?style=flat-square

#### nscale-docker-analyzer
[![][v-nscale-docker-analyzer]][npm-nscale-docker-analyzer]

[npm-nscale-docker-analyzer]: https://npmjs.org/package/nscale-docker-analyzer
[v-nscale-docker-analyzer]: https://img.shields.io/npm/v/nscale-docker-analyzer.svg?style=flat-square

#### nscale-docker-ssh-analyzer
[![][v-nscale-docker-ssh-analyzer]][npm-nscale-docker-ssh-analyzer]

[npm-nscale-docker-ssh-analyzer]: https://npmjs.org/package/nscale-docker-ssh-analyzer
[v-nscale-docker-ssh-analyzer]: https://img.shields.io/npm/v/nscale-docker-ssh-analyzer.svg?style=flat-square

#### nscale-local-analyzer
[![][v-nscale-local-analyzer]][npm-nscale-local-analyzer]

[npm-nscale-local-analyzer]: https://npmjs.org/package/nscale-local-analyzer
[v-nscale-local-analyzer]: https://img.shields.io/npm/v/nscale-local-analyzer.svg?style=flat-square

### Containers
Containers are wrappers around a specific unit of deployment. They are normally expressed as a
resource enclosed in a docker container but they may also be wrappers around functionality.

#### aws-ami-container
[![][v-aws-ami-container]][npm-aws-ami-container]

[npm-aws-ami-container]: https://npmjs.org/package/aws-ami-container
[v-aws-ami-container]: https://img.shields.io/npm/v/aws-ami-container.svg?style=flat-square

#### aws-autoscaling-container
[![][v-aws-autoscaling-container]][npm-aws-autoscaling-container]

[npm-aws-autoscaling-container]: https://npmjs.org/package/aws-autoscaling-container
[v-aws-autoscaling-container]: https://img.shields.io/npm/v/aws-autoscaling-container.svg?style=flat-square

#### aws-elb-container
[![][v-aws-elb-container]][npm-aws-elb-container]

[npm-aws-elb-container]: https://npmjs.org/package/aws-elb-container
[v-aws-elb-container]: https://img.shields.io/npm/v/aws-elb-container.svg?style=flat-square

#### docker-container
[![][v-docker-container]][npm-docker-container]

[npm-docker-container]: https://npmjs.org/package/docker-container
[v-docker-container]: https://img.shields.io/npm/v/docker-container.svg?style=flat-square

#### process-container
[![][v-process-container]][npm-process-container]

[npm-process-container]: https://npmjs.org/package/process-container
[v-process-container]: https://img.shields.io/npm/v/process-container.svg?style=flat-square

### Misc
In the course of creating nscale, we have also created modules that are have a wide and varying range of
usage. These are listed below:

#### nscale-chaos-monkey
[![][v-nscale-chaos-monkey]][npm-nscale-chaos-monkey]

[npm-nscale-chaos-monkey]: https://npmjs.org/package/nscale-chaos-monkey
[v-nscale-chaos-monkey]: https://img.shields.io/npm/v/nscale-chaos-monkey.svg?style=flat-square

#### nscale-planner
[![][v-nscale-planner]][npm-nscale-planner]

[npm-nscale-planner]: https://npmjs.org/package/nscale-planner
[v-nscale-planner]: https://img.shields.io/npm/v/nscale-planner.svg?style=flat-square
[Semantic Versioning]: www.semver.com
[Go To Change Log]: https://github.com/nearform/nscale/blob/master/CHANGELOG.md
