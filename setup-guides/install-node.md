# Installing Node
It seems one of the most common ways of installing node is by adding a ppa and using a distro package manager such as apt-get. This usually leads to installing node globally, which will require using `sudo` for most npm commands - This is [not a great idea.][sudo-bad-idea] Hands up if you're guilty.

Some solutions will suggest changing the ownership of global directories which isn't great from a security standpoint and it can also be a pain. The real solution is to install node properly!

The goal of this guide is to show how to install node so root permissions are not required for npm commands.

First we should check to see if node and npm are already installed:
```bash
which node
which npm
```
If these give you any output then you will need to uninstall node which can be tedious. This [Stackoverflow answer][uninstall-node] shows every directory that needs to be removed. __These directories may not apply to you depending on your installation.__

Once you are sure your machine is completely node free, you can go about installing it properly.
So far we have documented two ways of doing this.

### Note for Linux Users

If you are running on a fresh linux installation, you might be missing some packages for building node.js from source.

On a standard Ubuntu 14.04 LTS release (like on AWS):
```bash
sudo apt-get install build-essential
```

## Install node with NVM
[Node version manager][nvm] or nvm consists of a few shell scripts which make it really easy to manage multiple versions of node on your machine.

for a simple install using curl:
```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
```

once this has finished enter the following command:
```bash
source ~/.profile
```

now check that it works by entering `nvm` in the terminal. You may need to restart your terminal.

now install a version of node using `nvm install`
```bash
nvm install v0.10.35
```

Check that node is installed:
```bash
node --version
```

And if you check:
```bash
which node
```

You will see that node is installed in your home directory.

## NVM Commands in a Nutshell

list the available versions:
```bash
nvm ls-remote
```

install a particular version:
```bash
nvm install 0.10.35
```

tell nvm to use a particular version:
```bash
nvm use 0.10.35
```

check out the NVM [Github page][nvm] for more information.

## Install node locally from source

in your home directory create a `.npmrc` file and add the following to it:
```
root =    /home/YOUR-USERNAME/.local/lib/node_modules
binroot = /home/YOUR-USERNAME/.local/bin
manroot = /home/YOUR-USERNAME/.local/share/man
```

Browse the Node.js versions and download one from [here.][node-downloads] Alternatively just enter:
```bash
wget http://nodejs.org/dist/v0.10.35/node-v0.10.35.tar.gz
```
Use a different version number if you like.

make and install:

```bash
tar xf node-v0.10.35.tar.gz
cd node-v0.10.35
./configure --prefix=~/.local
make
make install
```
Create the ~/.node_modules symlink:
```bash
cd
ln -s .local/lib/node_modules .node_modules
```

Check to see if ~/.local/bin is in your path:
```bash
which npm
```
If it says ~/.local/bin/npm, you're done, otherwise do this:
```bash
export PATH=$HOME/.local/bin:$PATH
```
and add that line to your ~/.profile file to make sure it runs every time you log in.

##Suggestions?
If you know of any other ways to install node so that sudo isn't required, open an issue in our docs repo and let us know or better yet, issue us a pull request!

[node-downloads]: http://nodejs.org/dist/
[nvm]: http://nodejs.org/dist/
[uninstall-node]: http://stackoverflow.com/a/11178106/1787262
[sudo-bad-idea]: http://stackoverflow.com/a/4999441
