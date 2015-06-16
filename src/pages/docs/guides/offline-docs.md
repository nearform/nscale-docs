---
layout: docs.html
---

# Running our site locally
Our site can be ran offline very easily which is great if you need access to our documentation
while on a plane or outside an area of connectivity. Assuming you have node and git installed,
follow the steps below to enable offline access.

## Clone
First, we need to clone this repository locally. We suggest you use a fork, in case you find
anything you want to change and send back to us. Assuming you have first forked, run the following
in a new terminal window:

```
git clone https://github.com/<Your Username>/nscale-docs.git
```


## Install
Navigate into the repositories' directory using your terminal, run the following command to
install all dependencies:

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
guide specifically tailored to contributing to our site:

- [Contributing to nscale's docs](/docs/contributing/doc-contrib.html)
