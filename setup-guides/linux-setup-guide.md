<a href='http://nscale.nearform.com'>![logo][]</a>

[Back To - Home](../README.md)

# Setup Guides - Linux

This setup guide will walk you through installing nscale and its prerequisites on Linux.

###Installing Node
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
we can install. The easiest option install with our distros package manager.

If you're using ubuntu, simply:
```bash
[sudo] apt-get install git
```
The various commands for other package managers are listed [here.][git-install]

Alternatively we can build from source by downloading the latest
release from [git's releases page][git-releases]

```sh
tar -xvf git-2.1.0.tar.gz # <-- example file name
cd git-2.1.0
make prefix=/usr/local all
sudo make prefix=/usr/local install
```

## Github

nscale uses both git and Github extensively, in order for commands
like `nscale system clone` to work. We need to have the git user name and
email set to our Github login and have `ssh-keys` set up with Github.

To set our Github user and email we do:

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

If we're correctly set up, Github will respond that we've been succesfully authenticated.

## Docker

Docker provides containers, that can be thought of as isolated environments
that provide the benefits of running virtual machines but at much
lower resource cost (see [What is Docker][] for more).

If we don't have docker installed, we need to find the appropriate [installation guide][docker-install] for our
distribution.

Ubuntu users (14.04 and above) can paste this curl script:
```bash
curl -sSL https://get.docker.com/ubuntu/ | sudo sh
```
alternatively look at the Ubuntu [installation instructions.][docker-ubuntu]

Make sure docker has root permissions:

```bash
sudo usermod -G docker -a $(whoami)
```
___nscale needs this to work.___

## nscale

The main NPM module for nscale is called nscale.

To install nscale we simply run

```sh
sudo npm i -g nscale
```

This will provide an executable named `nscale`
which is the main tool for managing distributed systems deployment.

We can test that the install was successful by attempting to run the executable:

```
nscale
```

This should show the help output.

## One Last Thing for Linux Users

When making use of process containers for local development on Linux, configuration is needed to support watching a large number of files:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

<br/>
[Back To - Home](../README.md)
[logo]: ../_imgs/logo.png
[Linux Development Quick Start Guide]: Linux-Development-Quick-Start-Guide

[nscale]: #nscale

[What is Docker]: https://www.docker.com/whatisdocker/
[docker-install]: https://docs.docker.com/installation/#installation
[docker-ubuntu]: https://docs.docker.com/installation/ubuntulinux/
[docker-install-binaries]: https://docs.docker.com/installation/binaries/
[git-install]: http://git-scm.com/download/linux
[git-releases]: https://github.com/git/git/releases/

[generating ssh keys article]: https://help.github.com/articles/generating-ssh-keys

[Adding SSH keys to Github]: https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github
