<a href='http://nscale.nearform.com'>![logo][]</a>

Configuration & Logs
============
[Previous](./3-deploy-larger-application.md) | [Next](./5-update-&-rollback.md) | [Home](./)

This tutorial covers:

1. The nscale configuration file
2. System specific configurations
2. How to view `nscale` server logs

##Configuration
Before we proceed let's just take a look at the `nscale` configuration file. By default this is placed in `~/.nscale/config/config.json`. When we open this file up and inspect it we'll see a JSON file containing several sections that control various aspects of `nscale`.

The kernel section defines the following:

	port - the port the nscale kernel should run on
	root - the full path where all nscale data resides - system data, build data and target data

```js
"kernel": {
"port": "8010",
"root": "/home/me/.nscale"
}
```

The modules section defines the following:

```js
"modules": {
    "protocol": {
      "require": "nscale-protocol",
      "specific": {
      }
    },
    "authorization": {
      "require": "nscale-noauth",
      "specific": {
        "credentialsPath": "/home/dara/.nscale/data"
      }
    }
  }
}
```

The `nscale-protocol` is a server side command protocol used by nscale. This shouldn't be changed.

Right now the authorization module just picks up your git credentials, however this is open for extension with and can be replaced with other authentication strategies.

##System Specific Configurations
Since v0.15 configurations local to one system can be defined in the root folder of that system. If we turn our attention back to the sudc-system example and open `config.example.js`:

```js
module.exports = {
  region: 'us-west-2',
  identityFile: "key.pem",
  accessKeyId: "YOUR_KEY_HERE",
  secretAccessKey: "YOUR_SECRET_HERE",
  user: "ubuntu",
  defaultSubnetId: "subnet-xxxxxxxx",
  defaultVpcId: "vpc-xxxxxxxx"
};
```

This example configuration file shows the parameters which should be included for deploying to aws. One should save their configurations as `config.js`. Because the config file will likely contain private information such as access keys, `config.js` is included in the `.gitignore` file of systems created by nscale.

##Logs

The `nscale` root folder looks as follows:

![image](./img/configdir.png)

##Viewing the logs
We can view the nscale logs at any time by running
```bash
nscale server logs
nscale server logs api.log
nscale server logs web.log
```

If you experience any problems with nscale, the server logs will likely provide more useful information.
If you find issues while using nscale, please post an issue on the [nscale][nscale-repo] repo with the following:

1. Your explanation of what you were attempting to do and the steps you took.
3. The output of `node --version`
4. The output of `nscale version`
5. The relevant ouput of the terminal you were using nscale in.
6. The output of `nscale server logs`

[Previous](./3-deploy-larger-application.md) | [Next](./5-update-&-rollback.md) | [Home](./)

[logo]: ../_imgs/logo.png
[nscale-repo]: https://github.com/nearform/nscale
