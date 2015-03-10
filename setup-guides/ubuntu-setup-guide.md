
![nscale](../_imgs/logo.png)

[Back To - Home](../README.md)

# Setup Guides - Ubuntu
This setup guide is specific to ubuntu 14.04, there is also a [Linux](./linux-setup-guide.md) setup guide avaliable.

Some users perfer to use the ubuntu package manager to install dependancies where possiable, this gude focuses on that.

## Before Starting
First we want to ensure that the packages we already have installed are the latest and are up to date, we can do this by
running the command below.
```sh
sudo apt-get update && apt-get upgrade
```

## Packages
There are several packages that we need, so we can isntall them in one go, this covers node, npm and git. We also want to install
docker, but will will install that from dockers repository, we will will add that first.

The below commands will 
- Add docker.com's ubuntu repo to your local machine
- Install node, npm, git and docker
- Add your user to the docker group
- Launch a new terminal session so you get the new gorup permissions.

```sh
sudo sh -c "echo deb https://get.docker.com/ubuntu docker main\
> /etc/apt/sources.list.d/docker.list"
sudo apt-get update && sudo apt-get install npm nodejs-legacy git lxc-docker

sudo usermod -G docker -a `whoami`
exec su -l `whoami`
```

## Github

nscale uses both and git and Github extensively, in order for commands
like `nscale system clone` to work. We need to have the git user name and
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

## nscale

The main NPM module for nscale is called nscale.

To install nscale we simply run

```sh
sudo npm i -g nscale
```

This will provide an executable named `nscale`
which is the main tool for managing distrubuted systems deployment.

We can test that the install was successful by attempting to run the executable:

```
nscale
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