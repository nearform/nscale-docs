---
layout: docs.html
---

# Setup Guides - AWS

This setup guide will walk you through installing nscale and its prerequisites on an AWS AMI.

## Requirements

* An [Amazon AWS account][AWS-signup]

##nscale on AWS
to use nscale in AWS we need two things:

1. An nscale management server which will manage deployments.
2. A custom AMI with docker installed - We will use this image for deploying our apps.

Because setting up nscale requires installing docker, we will make a custom AMI based off the nscale management server.

##Install Docker on a Fresh Instance
* boot up a community base VM. Do this using the ubuntu [EC2 AMI locator](http://cloud-images.ubuntu.com/locator/ec2/). We recommend using a 64-bit Trusty image.

* connect to your newly booted VM and install docker as per the instructions [here](http://docs.docker.com/installation/ubuntulinux/)

* add yourself to the docker group using:
```bash
$sudo usermod -G docker -a $(whoami)
```
For these changes to come into effect you usually need to log out and log back in.
close the ssh connection with your instance with ```exit``` and reconnect.

##Create a Base Image
Before we continue to install nscale, we will create an image based off our instance. This will be the base image used for deploying the app. An easy way to do this is through the EC2 Dashboard:

* Find the instance you've just set up and right click.
* Image > Create Image.
* Follow the steps provided.

See [here.][aws-cli-reference] if you would prefer to use the AWS Command Line Interface tools.

Once the server has been imaged, make a note of the ami identifier and log back into the running management system.

##Install Node
* It is recommended you install the build-essentials package. Many default AMIs do not come with packages such as make and g++. This will ensure you have the packages required for some npm modules to work. Failing to do so may lead to problems installing nscale depending on the AMI you launched.

  `$sudo apt-get install build-essential`

* Check out our [document](../setup-guides/install-node.md) which outlines our favourite ways of installing node.

##Install Git
* Install git and configure:
    * git config --global user.name "your name"
    * git config --global user.email "you@somewhere.com"

##Enable SSH Agent Forwarding
create a file `config` in the ~/.ssh folder on your __local machine__ and insert the following:
```
host *
 ForwardAgent yes
```
This allows the remote instance to use your local ssh key for cloning Github repos. You may need to log out and back in to see the effect of this.

Once the above dependencies have been met you can proceed to install nscale using
```bash
$npm install -g nscale
```
Lastly you must copy the private key file originally used for connecting to the instance onto the instance itself.
The private key will be used by nscale for connecting to other remote instances it creates.

```bash
scp my-key.pem my-key.pem ubuntu@56.49.82.188:~/
```

-This should have you set up and ready to use nscale in AWS. To see an example of deploying to AWS, see the [AWS tutorial](../tutorials/8-deploy-to-aws.md)

[logo]: ../_imgs/logo.png
[AWS-signup]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html?nc1=h_ct
[generate-ssh-key]: https://help.github.com/articles/generating-ssh-keys/
[aws-cli-reference]: http://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ApiReference-cmd-CreateImage.html
[docker-ubuntu]: http://docs.docker.com/installation/ubuntulinux/
[ami-locator]: http://cloud-images.ubuntu.com/locator/ec2/
