---
layout: docs.html
---

# Quickstart
Below we have all the steps needed to get up and running with ncscale in the context of local
deployments. For more advance scenarios, check out our [Documentation](/docs) section. Currently
we support both Linux and OSX. We are working hard on Windows support, if you want to help out
with this please open an ticket on [nscale's Github][nscale-github] repo.

## Prerequisites
In order to use nscale, we require the following list of tools installed on your machine, if you
already have these you can skip to the next section, if not, we will walk you through what you
to get each.

- git
- node.js
- docker

### Installing git
nscale is powered by git, our revision infrastructure is built around it and as such, even if you
are using another revision tool it is still a dependency. Lets first check if you already have git,
at the command line, run:

```
git
```

You should receive some status and help information regarding your git installation. If this is not
the case or you receive an error message, use one of the following package managers listed below to
install git.

##### OSX -- _homebrew_
```
brew install git
```

##### Linux -- _apt-get_
```
apt-get install git
```

Alternatively, you can use the official [instruction guide][git-guide] from [https//git-scm.com]()

#### _optional - configure Github access_
If you wish to follow along with the tutorials on this site you will need to have your Github
account linked to git. Run the following, in your terminal, to set your Github username and email
address:

```sh
git config --global user.name "<user name>"
```

```sh
git config --global user.email "<email>"
```

You will need to configure ssh access to github. See [Github's official guide][git-ssh] to correctly
set up ssh key access.

### Installing node.js

We recommend you install node.js using [NVM][] for both Linux and OSX. NVM installs node.js in such
a way that elevated permissions are not required. You could also install node from source to achieve
the same result. If you would like a guide on both, see our guide:

- [Installing Node](/docs/setup-guides/installing-node.html)

### Installing docker
Lets first install docker, skip to your operating system's specific section, we currently support
OSX and Linux, Windows support is being considered.

#### OSX
On OSX you will need to install and run [boot2docker][]. The official documentation is pretty robust
and will show you how to install and start boot2docker.

> __IMPORTANT__ - Follow the instructions given by boot2docker and ensure that the correct
> environment variables are set.

#### Linux
On Linux, you will need to install [docker](http://docker.io) directly. Once you have docker
installed and running you will need to add your user account to the docker group. To do this run
the following:

```sh
sudo usermod -G docker -a `whoami`
```

You may need to log out and log back in again for this change to take effect. To confirm that you have the appropriate permissions run:

```sh
groups
```

You should see that your user is included in the docker group. If this is not apparent you may need to close your current termial session and login again.

### Preflight Check
Before running nscale please ensure that the terminal you are running in is correctly configured with the above pre-requisties.

#### Github
Ensure github is correctly configured by checking the output of the following command

```sh
ssh -T -o "VerifyHostKeyDNS yes" git@github.com
```

#### Docker
Ensure that docker can run correctly by executing the following command

```sh
docker ps
```

Note that this command should run __WITHOUT NEEDING SUDO__.

> __IMPORTANT__ - If the above checks do not run cleanly, please go back and check your
> configuration. Don't even think about starting nscale until this is corrected. Seriously...
> we mean it - We'll be very sad otherwise :(


>__IMPORTANT__ - nscale will not function correctly unless the group permissions are set as above.

## Hello nscale
With your environment set up it's time to create and deploy your first system!

### Installation
nscale can be installed using npm. To install the latest version run:

```sh
[sudo] npm install -g nscale
```

### A look around
First, lets start nscale:

```sh
nscale start
```

If you are running on Linux, you need to add yourself to the `docker`
group before running any `nscale` command. To do that:

```sh
nscale login
```

Finally lets check that nscale is good to go by running:

```sh
nscale system list
```

You should see output similar to the following
```sh
Name                           Id
```

### Run a demo application
You should now be able to clone and run a small demo application. To do this cd into a new empty working directory and clone the repository:

```sh
mkdir ~/work; cd ~/work
```

```sh
git clone git@github.com:nearform/nscaledemo.git
```

This will create a sub directory named nscaledemo. You now need to link this repository into nscale. By running:

```sh
nscale system link nscaledemo
```

Check that the system was linked in correctly by running a system list command again. Which should now contian the linked system:

```sh
nscale system list
```

```sh
Name                           Id
nscaledemo                     e1144711-47bb-5931-9117-94f01dd20f6f
```


#### Compile the system definition
In order to work with the demo system we first need to run a compile.

```sh
nscale system compile nscaledemo
```

Once the compile has completed you should be able to list the available containers in the system. Run:

```sh
nscale container list nscaledemo
```

You should see the following output

```sh
Name                 Type                 Id
root                 container            85d99b2c-06d0-5485-9501-4d4ed429799c
web                  process              web$2f9f7ddadc8bead84de4a74665085d362b1..
```

#### Build the demo container
Next you will need to build the example container. To do this run:

```sh
nscale container build nscaledemo web
```

This command will create a docker container ready for nscale to start.

#### Run the demo
Before we run the system, take a quick look at the revision list:

```sh
nscale revision list nscaledemo
```

This command shows a list of the revisions on this system repository. You will see a number of commits from the repository that was originally cloned plus a fresh commit representing the compile that was executed a few steps above. Go ahead and run the system by executing:

```sh
nscale revision deploy nscaledemo latest development
```

nscale will start the demo container. You can check that all is well by running:

```sh
nscale system check nscaledemo development
```

And check that the web container is running using:

```sh
docker ps
```

You should be able to open a browser and point it to the boot2docker ip address (mac os X) or localhost (linux) port 8000. This should display the string 'hello world'. You can get the boot2docker ip address with the following command:

```sh
boot2docker ip
```

So, you can run:

```sh
open http://`boot2docker ip`:8000
```

## Next steps
If you are interested in learning more about nscale try the nscale [tutorials](../tutorials/README.md)

<br/>

[Linux Setup Guide]: Linux-Setup-Guide
[Getting Started From Scratch]: Getting-Started-From-Scratch
[Getting Started Migrating]: Getting-Started-Migrating

[Containers]: Concept-Containers
[Microservices]: Concept-Microservices

[git-guide]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[git-ssh]: https://help.github.com/articles/generating-ssh-keys/

[NVM]: https://github.com/creationix/nvm

[web-app]:https://github.com/nearform/nscaledemo/blob/master/web/app.js

[boot2docker]: https://github.com/boot2docker/boot2docker
[document]: /setup-guides/install-node/
