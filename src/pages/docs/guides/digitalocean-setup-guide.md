---
layout: docs.html
---

#Digital Ocean Setup Guide

Since version 0.9 nscale supports _any cloud provider that gives SSH
access_, plus bare-metal deployments.

In this tutorial we will use [Digital Ocean][doreferral]. If you do not
have an account, signing up through that link gives you 10$ of credit, enough to run
through this tutorial.

In this tutorial we will set up an nscale deployment server, and deploy our beloved [startup death clock][sudc]
application to a single machine.

##Setting up the deployment machine
Create a new Droplet in DigitalOcean, and select the Docker application,
like in the following screenshot:

![image](/images/droplet-creation-screenshot.png)

And SSH into that machine.

(pick a location near you, for the sake of bandwidth and deployment
speed it is important that all the machines are in the same datacenter)

For this tutorial, you can use the smallest tier, but for largest
deployments you might need larger disks.

##Install nscale

We suggest to install node via [nvm](nvm), using:

```
curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash
```

Then, logoff, login and run:

```
apt-get update
apt-get install build-essential
nvm install v0.10.35
nvm alias default v0.10.35
npm install npm@latest -g --unsafe-perm
npm install nscale -g --unsafe-perm
```

node.js and nscale are now installed, launch it via `nscale ser start`.

##User configuration

You need to configure GIT to use nscale:

```
git config --global user.name "your name"
git config --global user.email "you@somewhere.com"
```

##System set up

```
nscale login
git clone https://github.com/nearform/sudc-system.git
cd sudc-system
git checkout direct #the direct branch is set up for direct deployments
nscale sys link .
nscale sys list
```

We need to generate an ssh key with no passphrase for this project:

```
ssh-keygen -t rsa
```

Hit enter to leave a blank passphrase, and save it as `~/.ssh/direct`.

##Creating a new machine

Open your Digital Ocean admin panel.

Create a new machine like [the previous one](#nscale-machine), but
configure it with the newly created ssh key:

![image](/images/digital-ocean-add-key.png)

Note the IP address of the machine, for this tutorial it's: 178.62.92.122. Replace this with your own.

Test that you can access the machine from the nscale machine with:

```
ssh -i ~/.ssh/direct 178.62.92.122
```

##nscale configuration

Open up `config.expample.js.` It currently looks like this:

```js
module.exports = {
    identityFile: '/home/root/.ssh/direct'
};

```
Unless you saved your key elsewhere, you shouldn't have to make any changes here!

##Edit the system definition

Open `system.js` It looks like this:

```js
exports.name = 'sudc-system';
exports.namespace = 'sudc';
exports.id = '62999e58-66a0-4e50-a870-f2673acf6c79';

exports.topology = {
  direct: {
    machine$123: {
      contains: ['doc', 'hist', 'real', 'web'],
      specific: {
        ipAddress: '178.62.92.122',
        user: 'root'
      }
    }
  },
  development: {
    root: ['doc', 'hist', 'real', 'web']
  },
  process: {
    root: ['doc', 'hist', 'real', 'web']
  }
};

```
Put in the ip address of the newly created machine

(with regards to the `machine$123` - you can specify more than one instance on the same host postponing
`$<identifier>`)

Compile your topology with:

```
nscale sys comp direct
```

##Deploying!

You can build all your containers with:

```
nscale cont buildall sudc-system latest direct
```

Go grab a cup of coffee, while nscale builds everything for you.

Then, launch:

```
nscale rev dep sudc-system latest direct
```

To deploy the latest revision.

Enjoy sudc at http://YOURIP:8000/.

You can see the result of this tutorial at:
https://github.com/nearform/sudc-system/tree/direct

[sudc]: http://github.com/nearform/sudc-system
[doreferral]: https://www.digitalocean.com/?refcode=c85081546a8e


#Direct deployment on Digital Ocean
[Tutorials Home](./)

Since version 0.9 nscale supports _any cloud provider that gives SSH
access_, plus bare-metal deployments.

In this tutorial we will use [Digital Ocean][doreferral]. If you do not
have an account, signing up through that link gives you 10$ of credit, enough to run
through this tutorial.

In this tutorial we will set up an nscale deployment server, and deploy our beloved [startup death clock][sudc]
application to a single machine.

##Setting up the deployment machine
Create a new Droplet in DigitalOcean, and select the Docker application,
like in the following screenshot:

![image](/images/droplet-creation-screenshot.png)

And SSH into that machine.

(pick a location near you, for the sake of bandwidth and deployment
speed it is important that all the machines are in the same datacenter)

For this tutorial, you can use the smallest tier, but for largest
deployments you might need larger disks.

##Install nscale

We suggest to install node via [nvm](nvm), using:

```
curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash
```

Then, logoff, login and run:

```
apt-get update
apt-get install build-essential
nvm install v0.10.35
nvm alias default v0.10.35
npm install npm@latest -g --unsafe-perm
npm install nscale -g --unsafe-perm
```

node.js and nscale are now installed, launch it via `nscale ser start`.

##User configuration

You need to configure GIT to use nscale:

```
git config --global user.name "your name"
git config --global user.email "you@somewhere.com"
```

##System set up

```
nscale login
git clone https://github.com/nearform/sudc-system.git
cd sudc-system
git checkout direct #the direct branch is set up for direct deployments
nscale sys link .
nscale sys list
```

We need to generate an ssh key with no passphrase for this project:

```
ssh-keygen -t rsa
```

Hit enter to leave a blank passphrase, and save it as `~/.ssh/direct`.

##Creating a new machine

Open your Digital Ocean admin panel.

Create a new machine like [the previous one](#nscale-machine), but
configure it with the newly created ssh key:

![image](./img/digital-ocean-add-key.png)

Note the IP address of the machine, for this tutorial it's: 178.62.92.122. Replace this with your own.

Test that you can access the machine from the nscale machine with:

```
ssh -i ~/.ssh/direct 178.62.92.122
```

##nscale configuration

Open up `config.expample.js.` It currently looks like this:

```js
module.exports = {
    identityFile: '/home/root/.ssh/direct'
};

```
Unless you saved your key elsewhere, you shouldn't have to make any changes here!

##Edit the system definition

Open `system.js` It looks like this:

```js
exports.name = 'sudc-system';
exports.namespace = 'sudc';
exports.id = '62999e58-66a0-4e50-a870-f2673acf6c79';

exports.topology = {
  direct: {
    machine$123: {
      contains: ['doc', 'hist', 'real', 'web'],
      specific: {
        ipAddress: '178.62.92.122',
        user: 'root'
      }
    }
  },
  development: {
    root: ['doc', 'hist', 'real', 'web']
  },
  process: {
    root: ['doc', 'hist', 'real', 'web']
  }
};

```
Put in the ip address of the newly created machine

(with regards to the `machine$123` - you can specify more than one instance on the same host postponing
`$<identifier>`)

Compile your topology with:

```
nscale sys comp direct
```

##Deploying!

You can build all your containers with:

```
nscale cont buildall sudc-system latest direct
```

Go grab a cup of coffee, while nscale builds everything for you.

Then, launch:

```
nscale rev dep sudc-system latest direct
```

To deploy the latest revision.

Enjoy sudc at http://YOURIP:8000/.

You can see the result of this tutorial at:
https://github.com/nearform/sudc-system/tree/direct

[sudc]: http://github.com/nearform/sudc-system
[doreferral]: https://www.digitalocean.com/?refcode=c85081546a8e
