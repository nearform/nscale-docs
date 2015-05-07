![logo][]
[Back To - Home][]

# Contributing - nScale Kernel

This is a quick guide to help you get set up with a 'development kernel' for nscale.

## Pre-requisite

You must have some way of issuing commands to the kernel. There are two ways of doing this:

 1. Globally install nscale with `npm install -g nscale`. This will give you the `nscale` client executable which can issue commands to the running kernel.

 2. Get set up with a [development client][client-setup].

The first method is easy, requires less setup and automatically creates the `.nscale` directory structure which includes a config file as well as folders for logs etc.

The second method is necessary if you want to contribute to the [nscale client][nscale-client] as well.

To make life easy, follow step 1 now and follow step 2 later if you need to.  

## Fork and Clone

Firstly, head over to the [nscale-kernel] repo and fork it.

Decide on a location where the nscale-kernel folder _should always be (explained below)_ e.g. `~/dev/node`

Clone the repo so it will now exist as `~/dev/node/nscale-kernel`

```bash
git clone git@github.com:your-username/nscale-kernel
```

We are constantly working to improve nscale so it is recommended you add the nearform repo as a remote so you can pull the latest changes.

```bash
git remote add nearform git@github.com:nearform/nscale-kernel
```

check that it worked:

```bash
git remote -v

nearform	git@github.com:nearform/nscale-kernel (fetch)
nearform	git@github.com:nearform/nscale-kernel (push)
origin	git@github.com:your-username/nscale-kernel (fetch)
origin	git@github.com:your-username/nscale-kernel (push)
```

## Setup

cd into the `nscale-kernel` folder and run

```bash
npm install
```

Stretch your legs while it installs. Optionally, follow the next step to make life __even easier.__

## Make a Symbolic Link _(Optional)_

The main entry point for the nscale kernel is located under `bin/nscale-kernel.js`
It becomes a pain typing out a long path to the executable or having to cd into the kernel folder so instead make a symlink called `dev-kernel`:

```bash
ln -s ~/dev/node/nscale-kernel/bin/nscale-kernel.js /usr/local/bin/dev-kernel
```

As long as you keep the kernel in the same directory the symlink will work. _No problem_.

## Start the Kernel

Once the `npm install` command has completed the kernel can be started. __Make sure any other instances of nscale are stopped first.__ 
The exectuable `bin/nscale-kernel.js` takes the path to an nscale config file as its only argument.
If you've already installed nscale globally your config file will exist in `~/.nscale/config/config.json`

Start it like so:

```bash
dev-kernel -c ~/.nscale/config/config.json
```

or if you didn't create a symlink, from the `nscale-kernel` folder run:

```bash
bin/nscale-kernel.js -c ~/.nscale/config/config.json
```

You should see out put similar to the following:
```bash
{"name":"nfd-kernel","hostname":"dara-ubuntu","pid":25058,"level":30,"msg":"booting","time":"2015-05-07T11:09:55.351Z","v":0}
{"name":"nfd-kernel","hostname":"dara-ubuntu","pid":25058,"module":"docker","level":30,"port":8011,"path":"/home/dara/.nscale/data/registry","msg":"registry started","time":"2015-05-07T11:09:56.481Z","v":0}
{"name":"nfd-kernel","hostname":"dara-ubuntu","pid":25058,"level":30,"msg":"starting operations","time":"2015-05-07T11:09:56.494Z","v":0}
```

The 'starting operations' message means the kernel is ready to take commands.

in a separate terminal window, try run a command such as `nscale login` and you should see more logging output.

## Pro Tip - Debug Logs
Let's make nscale display more verbose logging output. Open your config file `~/.nscale/config/config.json`

The kernel section currently looks similar to this:

```js
"kernel": {
    "port": "3223",
    "root": "/home/dara/.nscale"
  },
```
Change it to look like this:

```js
"kernel": {
    "port": "3223",
    "root": "/home/dara/.nscale",
    "logger": {"level": "debug"}
  },
```

Now when the kernel is started a lot more information is displayed.

You are now ready to hack away at the kernel!

To chat with the owners/contributors visit the [nscale gitter][gitter] page.

If you make any improvements please check out our general guidelines for submitting a [pull request.][pull-requests]

[Back To - Home][]

[gitter]: https://gitter.im/nearform/nscale
[pull-requests]: ./pull-requests.md
[nscale-kernel]: https://github.com/nearform/nscale-kernel
[nscale-client]: https://github.com/nearform/nscale-client
[client-setup]: ./nscale-client.md
[Back To - Home]: ./README.md
[logo]: ../_imgs/logo.png