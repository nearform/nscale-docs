<a href='http://nscale.nearform.com'>![logo][]</a>

[Back To - Home](../README.md)

# Setup Guides - OSX

This setup guide will walk you through installing nscale and its prerequisites on OS X.

## Node

Check out our [document](./install-node.md) which outlines our favourite ways of installing node.

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
we can install, if we have homebrew installed we can do

```
brew install git
```

Alternatively we can use the OS X [package installer][git-install]

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


## Docker

Docker provides containers, that can be thought of as isolated environments
that provide the benefits of running virtual machines but at much
lower resource cost (see [What is Docker][] for more).

If you don't have docker installed, follow the [installation guide for OS X][docker-install].

## nscale

The main NPM module for nscale is called nscale.

To install nscale we simply run

```sh
sudo npm i -g nscale
```

This will provide an executable named `nscale`, which is the main tool for managing distrubuted systems deployment.

We can test that the install was successful by attempting to run the executable:

```
nscale
```

This should show the help output.

<br/>
[Back To - Home](../README.md)
[logo]: ../_imgs/logo.png

[OS X Development Quick Start Guide]: OS-X-Development-Quick-Start-Guide

[What is Docker]: https://www.docker.com/whatisdocker/

[git-install]: http://sourceforge.net/projects/git-osx-installer/
[docker-install]: https://docs.docker.com/installation/mac/

[Adding SSH keys to Github]: https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github
