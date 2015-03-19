<a href='http://nscale.nearform.com'>![logo][]<a>

[Back To - Home](../README.md)

## Quickstart
These quickstart instructions will get you up and running with nscale in a local development configuration. For more advanced use cases including production configrations on top of AWS please see the documentation.

nscale requires the following to be installed on your machine:

- Docker
- Node.js
- Git

### Install docker

#### Mac
If you are on Mac OS X, you need to install and run [boot2docker](https://github.com/boot2docker/boot2docker). Once you have installed boot2docker start it using:

```sh
boot2docker init
```

```sh
boot2docker up
```

__IMPORTANT!!!! - Follow the instructions given by boot2docker and ensure that the correct environement variables are set!__

#### Linux
If you are on Linux, you will need to install [docker](http://docker.io). Once you have docker installed and running you will need to add your user account to the docker group. To do this run the following:

```sh
sudo usermod -G docker -a `whoami`
```

You may need to log out and log back in again for this change to take effect. To confirm that you have the appropriate permissions run:

```sh
groups
```

You should see that your user is included in the docker group. If this is not apparent you may need to close your current termial session and login again.

__IMPORTANT!!!! nscale will not function correctly unless the group permissions are set as above__

#### Other Platforms
We understand that there exist other operating systems, however at this time we do not support nscale on them. If you are feeling brave by all means give it a try, we always appreciate __pull requests!!__

### Install node

Check out our [document](./install-node.md) which outlines our favourite ways of installing node.

### Install git
nscale uses git as a backing store for system configuration and versioning. git can be installed using the package manager on your system of choice (i.e. homebrew on osx, apt-get on ubuntu...)

### Configure github access
Once git is installed, it should be configured for use with github if you wish to follow along with the nscale tutorials. You should run the following to set you username and email address:

```sh
git config --global user.name "<user name>"
```

```sh
git config --global user.email "<email>"
```

You will need to configure ssh access to github. See [this guide](https://help.github.com/articles/generating-ssh-keys/) to get ssh keys setup.

### Install nscale
nscale can be installed using npm. To install the latest version run:

```sh
[sudo] npm install -g nscale
```

### Preflight check
Before running nscale please ensure that the terminal you are running in is correctly configured with the above pre-requisties.

#### github
Ensure github is correctly configured by checking the output of the following command

```sh
ssh -T -o "VerifyHostKeyDNS yes" git@github.com
```

#### docker
Ensure that docker can run correctly by executing the following command

```sh
docker ps
```

Note that this command should run __WITHOUT NEEDING SUDO__.

__IMPORTANT!!! If the above checks do not run cleanly, please go back and check your configuration. Don't even think about starting nscale until this is corrected. Seriously... we mean it - We'll be very sad otherwise :(__

### Running nscale
Now that everything is configured you are good to start nscale:

```sh
nscale server start
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
Before we run the system, take a quick look at the revsion list:

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

[Back To - Home](../README.md)
[logo]: ../_imgs/logo.png
[Linux Setup Guide]: Linux-Setup-Guide
[Getting Started From Scratch]: Getting-Started-From-Scratch
[Getting Started Migrating]: Getting-Started-Migrating

[Containers]: Concept-Containers
[Microservices]: Concept-Microservices

[web-app]:https://github.com/nearform/nscaledemo/blob/master/web/app.js
