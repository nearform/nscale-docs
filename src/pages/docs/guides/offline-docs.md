---
layout: docs.html
---

# Running our site locally
This site can be ran offline very easily. This is great if you need access to our documentation
while on a plane or outside an area of connectivity. Assuming you have node and git installed, lets
walk through the steps to run offline.

## Clone Repo
First, we need to clone this repository locally. We suggest you first fork, in case you find anything
you want to change. Assuming you have first forked, run the following in the console:

```
git clone https://github.com/<Your Username>/nscale-docs.git
```


## Install Dependencies
Navigate into the the repository using your terminal, run the following command to install all
dependencies. This command assumes you have both node.js and npm installed:

```
npm install
```

## Serve
Finally, to serve the site to `localhost:4000` simply run:

```
npm run serve
```

## Contributing
Got something to add? Like nscale, our docs and site are also open source. We have a great contribution
guide specifically taliored to contributing to our site:

- [Contributing to nscale's docs](/docs/contributing/doc-contrib.html)
