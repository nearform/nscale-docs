<a href='http://nscale.nearform.com'>![logo][]<a>

[Back To - Home](../README.md)

# Setup Guides - AWS

This setup guide will walk you through installing nscale and its prerequisites on an AWS AMI.

## Requirements

* An [Amazon AWS account][AWS-signup]

##Create a nscale base image
The goal is to create a reusable Ubuntu AMI that comes with nscale preconfigured.

 - Spin up an Ubuntu instance. We recommend using a 64-bit Trusty image - This is currently the default offering in the launch instance dialog. You can find different EC2 images for ubuntu using the ubuntu [EC2 AMI Locator.][ami-locator]

 - Copy the key you used to connect to the instance - nscale will use this key for communicating with other instances it starts. You can do it with an scp command like below:
 ```bash
 scp -i my-key.pem my-key.pem ubuntu@52.113.18.118:~/
 ```

## Docker
 - log into your instance and install docker as per the instructions [here][docker-ubuntu]

 - make sure docker has the proper permissions using:
 ```bash
sudo usermod -G docker -a $(whoami)
 ```
 ___nscale requires this to run.___ For these changes to come into effect you usually need to log out and log back in.
close the ssh connection with your instance with ```exit``` and reconnect.

## Node
It is recommended you install the build-essentials package. Many default AMIs do not come with packages such as make and g++. This will ensure you have the packages required for some npm modules to work. Failing to do so may lead to problems installing nscale depending on the AMI you launched.

$sudo apt-get install build-essential


- Follow our [guide](../setup-guides/install-node.md) to install node in one of our favourite ways.

## Git
Install git and configure your credentials:
```bash
git configure --global user.name "Your Name"
git configure --globar user.email "you@example.com"
```

Because this machine needs to authenticate with your Github account you can do either of the following:

### Configure ForwardAgent
on your local machine, create the file ~/.ssh/config and insert the following:
```
host *
  ForwardAgent yes
```
This allows the remote instance to use your local ssh key for cloning Github repos. You may need to log out and back in to see the effect of this.

### Generate a new key
Generate a new ssh keypair and add it to your Github account. Github has documentation [here][generate-ssh-key]

Check that you've authenticated with Github:
```bash
ssh git@github.com
```
You should get a message saying you've successfully authenticated with Github.

## nscale
Install nscale:
```bash
npm install -g nscale
```

## Create an AMI out of your instance
A base AMI configured for management by nscale should be created. We can just create a reusable image based off our newly configured instance as per above. An easy way to do this is through the EC2 Dashboard:

* Find the instance you've just set up and right click.
* Image > Create Image.
* Follow the steps provided.

See [here][aws-cli-reference] if you would prefer to use the AWS Command Line Interface tools.

This should have you set up and ready to use nscale in AWS. To see an example of deploying to AWS, see the [AWS tutorial](../tutorials/8-deploy-to-aws.md)

[logo]: ../_imgs/logo.png
[AWS-signup]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html?nc1=h_ct
[generate-ssh-key]: https://help.github.com/articles/generating-ssh-keys/
[aws-cli-reference]: http://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ApiReference-cmd-CreateImage.html
[docker-ubuntu]: http://docs.docker.com/installation/ubuntulinux/
[ami-locator]: http://cloud-images.ubuntu.com/locator/ec2/
