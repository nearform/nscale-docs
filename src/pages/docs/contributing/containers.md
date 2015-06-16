---
layout: docs.html
---

# Containers and Dependencies

nscale uses the concept of containers for deploying apps. The container can be thought of as an abstraction for various resources required to deploy an app.
When deploying to AWS for example, we would make use of resources such as the aws-elb-container, the aws-ami-container and so on.

When working locally, we might make use of the process-container or indeed the docker-container.

This guide is designed to help you get started with contributing to existing containers. As an example we will use the process container.

__NOTE__ _this guide is also appropriate for contributing to other nscale-kernel dependencies._

The basic premise is you take a working nscale-kernel and you wire up the container you're modifying to the kernel.

## Pre-requisite
Ideally you should have a [development kernel][dev-kernel] already set up.
You could use your globally installed nscale kernel but you may or may not break something.

For the purpose of this exercise, we will assume a development kernel has been set up.

## Fork and Clone

First go to a container repo that you want to contribute to, e.g the [process-container][process] repo.

Fork the repo and clone your fork to an appropriate directory, e.g `~/dev/node/process-container`

```bash
git clone git@github.com:your-username/process-container
```

cd into the folder and add the nearForm repo as a remote in case you need to pull updates:

```bash
git remote add nearform git@github.com:nearform/process-container
```

Install the dependencies with `npm install`.

## Wire up the Container with the Kernel

Let's review:

 - we currently have the process container with all its dependencies located in `~/dev/node/process-container`.
 - Let's say we have the dev kernel with all its dependencies located in `~/dev/node/nscale-kernel`.

We need to remove the process-container located in the kernel and link up our one.

- From our newly cloned process container run:

```bash
npm link
```

_This creates a symbolic link to the process container module in your global node_modules folder._


- cd into the nscale-kernel directory and run the following:

```bash
rm -rf node_modules/process-container
npm link process-container
```

_This removes the process container contained within the kernel and links up the one we cloned._

You are now ready to contribute to nscale containers!

To chat with the owners/contributors visit the [nscale gitter][gitter] page.

If you make any improvements please check out our general guidelines for submitting a [pull request.][pull-requests]

[Back To - Home][] | [Set up a development version of the nscale client][nscale-client]

[gitter]: https://gitter.im/nearform/nscale
[pull-requests]: ./pull-requests.md
[nscale-client]: ./nscale-client.md
[process]: http://github.com/nearform/process-container
[dev-kernel]: ./nscale-kernel.md
[Back To - Home]: ./README.md
[logo]: ../_imgs/logo.png
