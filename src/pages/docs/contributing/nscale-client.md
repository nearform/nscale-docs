---
layout: docs.html
---

# nscale Client

The nscale client is the command line interface for nscale. It is a fairly straightforward script which sends commmands to the kernel.

This guide is designed to help you get up and running with a development version of the nscale-client.

## Pre-Requisites
You should have a working vesrion of the kernel installed on your machine.

You could just use your globally installed kernel but __ideally__ you should have a [development kernel][dev-kernel] set up.

For the purposes of this guide, we will assume a development kernel is set up.

## Fork and Clone

Head over to the ![nscale-client][] repo and fork it.

clone your repo:

```bash
git clone git@github.com:your-username/nscale-client
```

cd into the folder and add the nearform repo as a remote in case there are updates you need to pull:

```bash
git remote add nearform git@github.com:nearform/nscale-client
```

install dependencies with `npm install`.

## Start the Client

The entry point for the nscale-client is the `nscale.js` script. This is what gets started when you normally run an `nscale` command.

```bash
./nscale.js
```

Will give you the help output.

The client is _useless_ on its own. We need to open up another terminal window and start the kernel.

if you have a `dev-kernel` symlink set up simply run:

```bash
dev-kernel -c ~/.nscale/config/config.json
```
otherwise cd to wherever you have your kernel located and run:

```bash
bin/nscale-kernel.js -c ~/.nscale/config/config.json
```
Once the kernel is running try issue a command from the client script:

```bash
./nscale.js login
```

You should see some logging output in the kernel terminal window.

## Pro Tip - Symbolic Link

If we have a `dev-kernel` link set up, why not set up one for our client?
Now we can have a full development version of nscale that we can start on the fly. No need for typing ridiculous paths or jumping from folder to folder.

To create the link, from the nscale-client directory run:

```bash
ln -s nscale.js /usr/local/bin/nclient
```

this creates a link called `nclient`. Choose whatever name you wish!

You are now ready to hack the nscale-client!

To chat with the owners/contributors visit the [nscale gitter][gitter] page.

If you make any improvements please check out our general guidelines for submitting a [pull request.][pull-requests]

[Back To - Home][]

[gitter]: https://gitter.im/nearform/nscale
[pull-requests]: ./pull-requests.md
[nscale-client]: https://github.com/nearform/nscale-client
[dev-kernel]: ./nscale-kernel.md
[Back To - Home]: ./README.md
[logo]: ../_imgs/logo.png
