<a href='http://nscale.nearform.com'>![logo][]</a>

#Deploying on AWS
[Previous](./7-using-docker-images.md) | [Next](./9-aws-autoscaling.md) | [Home](./)

This tutorial covers:

1. Creating an nscale management server.
2. Making AWS specific configurations.
3. Deployment into AWS
4. System check and fix on AWS

During this tutorial we will assume deployment onto a linux based AMI. Specifically we assume use of ubuntu as the base operating system.

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

See [here](http://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ApiReference-cmd-CreateImage.html) if you would prefer to use the AWS Command Line Interface tools.

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

##Recommended
To make life easier, there is a powerful tool called SSHFS which allows you to mount a remote file system locally via ssh. This lets you view files on your remote instance in your file browser and you'll be able to edit them using graphical editors. Check out the guide to using it [here](http://www.emreakkas.com/linux-tips/how-to-mount-amazon-ec2-drive-locally-fuse-sshfs)

##Deploying into AWS
Let's get started by cloning the `sudc-system` repository onto our AWS management system. 
```bash
git clone git@github.com:nearform/sudc-system.git
nscale system link sudc-system
```
####Infrastructure
nscale compiles from all .js files under the definitions folder so we can logically organise our container definitions any way we want.
The aws specific definitions are stored in `definitions/awsInfrastructure.js`

it defines three containers:

 * awsWebElb - An elastic load balancer definition
 * awsWebSg - A security group definition
 * awsMachine - A base AMI definition

####Topology
in system.js we can define as many topologies as we want. Each topology is given its own target name e.g. development, process or aws. The aws topology is as follows:

```
  aws: {
    awsWebElb: [{
      awsWebSg:[{awsMachine: ['web']},
                {awsMachine: ['doc', 'hist', 'real']}]
    }]
  },
```

The topology section defines how the service containers are distributed amongst machine instances. In this case we have a load balancer which has one security group associated with it. The security group has two associated machines: The sudc web container will be running in the first. The doc, hist, and real containers will be running in the second machine.

####Configure
In order to get up and running we need to make some configurations. As of v0.15 this has never been so easy! Firstly we need to make our AWS specific configurations. Open `config.example.js` 

```js
module.exports = {
  region: 'us-west-2',
  identityFile: 'key.pem',
  accessKeyId: 'YOUR_KEY_HERE',
  secretAccessKey: 'YOUR_SECRET_HERE',
  user: 'ubuntu',
  defaultSubnetId: 'subnet-xxxxxxxx',
  defaultVpcId: 'vpc-xxxxxxxx',
  defaultImageId: 'ami-xxxxxxxx',
  defaultInstanceType: 't2.medium'
  defaultKeyName: "YOUR_AWS_KEY_ID_HERE"
};
```

You need to fill in your information here:
* region - the region your nscale management server is located.
* identityFile - The path to the key file you copied onto the management server.
* accessKeyId - Your AWS Access Key ID.
* secretAccessKey - Your AWS Secret Access Key.
* user - The default username on the machine instances.
* defaultSubnetId - The subnet your management server is located in.
* defaultVpcId - The virtual private cloud your subnet is located in.
* defaultImageId - The image to be used when provisioning machines. Use the custom AMI you created.
* defaultInstanceType - The type of instance to be provisioned. You can use t2.micro if you like.
* defaultKeyName - The name of your key-pair in aws.

Save the file as `config.js`


####Compile

Let's now go ahead and compile for aws
```bash
nscale system compile sudc aws
```
Now let's take a look at the system definition:
```bash
nscale container list
```
You should see the following containers:
```bash
awsWebElb            aws-elb              awsWebElb
awsWebSg             aws-sg               awsWebSg
demo2                aws-ami              awsMachine
doc                  process              doc$77c4014bef47deb4fef3af579f2959457c058ce8
hist                 process              hist$39f0c71b89f3ba78064468c0af79017927f1a6cb
real                 process              real$5309ad7aeba319fd44adb18bbc983f4587f16af9
web                  process              web$e2021682ad1d25287321a4883535252ba684d9ba
root                 blank-container      root
```
####Build the system
Let's go ahead and build the containers ready for deployment:
```bash
nscale container buildall sudc latest aws
```
Alternatively, you can build all the containers by themselves:

	nscale container build sudc hist latest aws
	nscale container build sudc real latest aws
	nscale container build sudc doc latest aws
	nscale container build sudc web latest aws

After those have all completed we should have four containers ready for deployment.

####Deploy the system
Now that we have an AWS system definintion and a set of containers to deploy, we can go ahead and push our system out onto AWS.

Let's first run a preview:
```bash
nscale revision preview sudc latest aws
```
This will run an analysis against your configured AWS region and may take several seconds to complete. The preview should determine that a full deployment is required. nscale will show you a list of commands that will be executed against your infrastructure upon deployment. You should review this list to ensure that you are comfortable with the changes. If you are, let's now go ahead and deploy.
```bash
nscale revision deploy sudc latest aws
```
nscale will now go ahead and deploy the SUDC system into your infrastructure. The following actions will be taken:

* create a new load balancer awsWebElb
* create a new security group awsWebSg
* spin up two machine instances
* deploy front end container to one of the machine instances and start it
* deploy 3 service containers to the other machine instnace and start them

Deployment may take several minutes depending on AWS machine instance spin up time. Once complete you should be able to point a web browser to the DNS name of the load balancer or to port 8000 on the front end instance and view the startup death clock front end.

##Check and Fix on AWS
Now that we have a deployed working system on AWS, lets just check that everything is in order by running an nscale check:
```bash
nscale system check sudc aws
```
The check command will run an analysis against the deployed system and compare it to your desired system configuration. This may take a few moments to run, but nscale should now respond that all is well with your deployment. Let's break something!

Go into the AWS management console and kill the SUDC front end machine. Now run the check again on the management host:
```bash
nscale system check sudc aws
```
nscale should report that the system is broken and present a remedial action plan. To fix the system execute:
```bash
nscale system fix sudc aws
```
nscale will now boot up a replacement machine and deploy the appropriate containers to it, once the fix has completed double check it by running:
```bash
nscale system check sudc aws
```
Congratulations - you are now an nscale AWS ninja!

[Previous](./7-using-docker-images.md) | [Next](./9-aws-autoscaling.md) | [Home](./)

[logo]:../_imgs/logo.png
