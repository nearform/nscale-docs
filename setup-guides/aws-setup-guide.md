
![nscale](../_imgs/logo.png)

[Back To - Home](../README.md)

# Setup Guides - AWS

This setup guide will walk you through installing nscale and it's prerequisites on an AWS AMI.

## Requirements

* An [Amazon AWS account][AWS-signup]

## Instantiating an _nscale-base_ AMI

We can use the <a href="https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-a405ded3" target="_blank"> nscale-base </a>
AMI "bookmark" to get started. This public AMI is configured according to the
[Linux Setup Guide][] (except for git credentials, see below).

We can choose our type on the bookmarks page (micro is fine for getting started),
then click "Review and Launch". If we're happy with the details we can then press
"Launch". We'll be asked to manage key pairs (we can create one if we don't have one),
after which we can click the "Launch Instances" button.

## Logging on to the instance

After a short wait our instance will have initialized, we grab it's public IP from
the console and then login to our instance via SSH

```
chmod 400 <keysfile.pem>
ssh -i <keysfile.pem> ubuntu@<public ip>
```

### Upgrading Node

If Node is out of date (check `node --version` against <nodejs.org>),
a great way to quickly upgrade is to run the following in our terminal

```sh
sudo npm i -g n
sudo n latest
```

## Github

`nscale` uses both and git and Github extensively, in order for commands
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

<br/>
[Back To - Home](../README.md)

[Linux Development Quick Start Guide]: Linux-Development-Quick-Start-Guide
[OS X Development Quick Start Guide]: OS-X-Development-Quick-Start-Guide
[AWS Deployment Quick Start Guide]: AWS-Deployment-Quick-Start-Guide
[Linux Setup Guide]: Linux-Setup-Guide

[AWS-signup]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html?nc1=h_ct

[Adding SSH keys to Github]: https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github
