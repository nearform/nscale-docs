
![nscale](../_imgs/logo.png)

[Back To - Home](../README.md)

# Setup Guides - Linux

This setup guide will walk you through installing nscale and it's prerequisites on Linux.

## Node

First we need to ensure we have the latest stable version of
Node installed. A quick way to check is to open a terminal
and run

```sh
node -v
```

If the command isn't found or the version is less than 0.10.x
then we'll need install or upgrade Node.

### Build dependencies

If you are running on a fresh linux installation, you might miss some packages for building node.js from source.

On a standard Ubuntu 14.04 LTS release (like on AWS):
```bash
$ sudo apt-get install build-essential gcc g++ make
```

### Installing Node from source

Open a terminal, and type:

```sh
curl -O http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
tar -xvf node-v0.10.32.tar.gz
cd node-v0.10.32
./configure
make
sudo make install
```

Check on the [node.js download page](hhttp://nodejs.org/download/) that you are downloading the latest version in the 0.10.x series.

Prefer this method to using a distros installer (like `apt-get`, `yum`, etc)
as versions tend to lag behind the latest release and  Debian-like system in particular install the Node executable as `nodejs` which tends to
break command line scripts (so you have to set up soft links).

Another alternative is to use [nvm](http://github.com/creationix/nvm), which allows you to install any node.js version.

### Upgrading Node

A great way to quickly upgrade is to run the following in our terminal

```sh
sudo npm i -g n
sudo n stable
```

## Git

nscale also depends on Git, we can check whether this is installed
by opening a terminal and typing

```
git --version
```

If we recieve a command not found error, then there's a number of ways
we can install. The easiest option install with our distros package manager,
various commands for different package managers are listed [here][git-install]

Alternatively we can build from source by downloading the latest
release from [git's releases page][git-releases]

```sh
tar -xvf git-2.1.0.tar.gz # <-- example file name
cd git-2.1.0
make prefix=/usr/local all
sudo make prefix=/usr/local install
```

## Github

nscale uses both and git and Github extensively, in order for commands
like `nsd system clone` to work. We need to have the git user name and
email set to our Github login and have `ssh-keys` set up with Github.

To set our Github use and email we do:

```
git config --global user.name "<user name>"
git config --global user.email "<email>"
```

To generate keys:

```
ssh-keygen -t rsa -C "<email>"
```

Finally we can copy the contents of `id_rsa.pub` (having chosen where to store it with `ssh-keygen`) to Github (see [Adding SSH keys to Github][] for help).

We can test if our keys are correctly set up like so:

```
ssh -T -o "VerifyHostKeyDNS yes" git@github.com
```

If we're correctly set up, Github will respond that we're succesfully authenticated.

# Docker

Docker provides containers, that can be thought of as isolated environments
that provide the benefits of running virtual machines but at much
lower resource cost (see [What is Docker][] for more).

If we don't have docker installed, we'll need to locate an
[installation guide][docker-install] for our particular
distro or we can try [downloading the binaries][docker-install-binaries]
(prefer the packages though).


## nscale

The main NPM module for nscale is called nscale.

To install nscale we simply run

```sh
sudo npm i -g nscale
```

This will provide an executable named `nsd` (standing for nscale Deployer),
which is the main tool for managing distrubuted systems deployment.

We can test that the install was successful by attempting to run the executable:

```
nsd
```

This should show the help output.

<br/>
[Back To - Home](../README.md)


[Linux Development Quick Start Guide]: Linux-Development-Quick-Start-Guide

[nscale]: #nscale

[What is Docker]: https://www.docker.com/whatisdocker/
[docker-install]: https://docs.docker.com/installation/#installation
[docker-install-binaries]: https://docs.docker.com/installation/binaries/
[git-install]: http://git-scm.com/download/linux
[git-releases]: https://github.com/git/git/releases/

[generating ssh keys article]: https://help.github.com/articles/generating-ssh-keys

[Adding SSH keys to Github]: https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github
