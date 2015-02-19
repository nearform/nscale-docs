# Node

First we need to ensure we have the latest stable version of
Node installed. A quick way to check is to open terminal.app
and run

```sh
node -v
```

If the command isn't found or the version is less than 0.10.x
then we'll need install or upgrade Node. 

## Installing Node
We can head over to <http://nodejs.org> and click the install button, 
this will download a `.pkg` installer, all we need to do is run it and
follow the installer steps.

## Upgrading Node

A great way to quickly upgrade is to run the following in our terminal

```sh
sudo npm i -g n
sudo n stable
```

# Git

`nscale` also depends on Git, we can check whether this is installed
by opening a terminal and typing

```
git --version
```

If we recieve a command not found error, then there's a number of ways
we can install, if we have homebrew installed we can do

```
brew install git
```

Alternatively we can use the OS X [package installer][git-install]

# Github

`nscale` uses both git and Github extensively, in order for commands
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

If we don't have docker installed, plugin the USB provided and follow the [Boot2docker OSX Installation guide](https://github.com/nearform/nscale-workshop/blob/master/boot2docker-osx.md).

Alternatively follow the 
[installation guide for OS X][docker-install] but this setup will take much longer.

# `nscale`

The main NPM module for `nscale` is called `nscale`. 

To install `nscale` we simply run

```sh
sudo npm i -g nscale
```

This will provide an executable named `nsd` (standing for `nscale` Deployer), 
which is the main tool for managing distrubuted systems deployment. 

We can test that the install was successful by attempting to run the executable:

```
nsd
```

This should show the help output. 

# Next Steps

* [OS X Development Quick Start Guide][]



[OS X Development Quick Start Guide]: OS-X-Development-Quick-Start-Guide

[What is Docker]: https://www.docker.com/whatisdocker/

[git-install]: http://sourceforge.net/projects/git-osx-installer/
[docker-install]: https://docs.docker.com/installation/mac/

[Adding SSH keys to Github]: https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github