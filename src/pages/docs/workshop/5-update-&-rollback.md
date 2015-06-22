---
layout: docs.html
---


Update & Rollback
========
[Home](./) | [Previous](./4-config-&-logs.html) | [Next](./6-system-fix.html)

This tutorial covers:

1. Making a change to a system and deploying it.
2. Rolling a deployed system back to a known good state
3. Rolling a deployed system forward after applying a full fix

Before Making any Changes
-----------------
cd into the sudc/workspace/sudc-web directory and run a git branch command.
If the HEAD is detached, then do
```bash
git checkout master
```
The HEAD may already have been detached depending on how you've followed the workshops.
(more on that later)

Add a buggy alert
-----------------

Let's break something! Open up `sudc/workspace/sudc-web/web/public/js/app.js` and add an alert after the 'Your code here' comment:

```js
initialize: function () {
    // Your code here
    alert('whoops');
}
```

**cd into the sudc/workspace/sudc-web directory**, stage the changes and commit:
```bash
git add .
git commit -m "Added buggy alert"
```

Build the container and deploy the latest revision:
```bash
nscale system compile sudc development
nscale container build sudc web latest development
nscale revision deploy sudc latest development
```

Check the site for the buggy alert:

OS X:
open http://$(boot2docker ip):8000

Linux:
open [localhost:8000](http://localhost:8000)

![image](/images/bugalert.png)

It is this workflow which allows us to makes changes and deploy them using nscale:

  - Make changes in code
  - Commit
  - (optional) push to Github
  - System compile
  - Build relevant container(s)
  - System Deploy

Pay particular attention to the fact that when building containers nscale, will checkout repos using the sha of the latest commit. This will ___detach the HEAD___ in the repo. The danger is that you build containers which detaches the HEAD, edit code on an unreferenced branch, and then do a system compile which checks out the master branch in each repo. You could potentially lose work.

**Tip:**
  Before writing code that you are building into a container, do a git status of that repo to make sure the HEAD isn't detached or else you will be writing code on an unnamed branch. Checkout to master or another branch before proceeding.

Roll back
------------

It's time to quickly rollback, picking the **second** revision id:
```bash
nscale revision list sudc
nscale revision deploy sudc <revision id> development
```

Check the site is working:

OS X:
open http://$(boot2docker ip):8000

Linux:
open [localhost:8000](http://localhost:8000)

Note
------------
The output from the deployment of the second revision id looks like this:

```bash
--> deploying...
--> deploying plan...
unlink web-5a16c094$bdbd43a868dba8a8932e091ed357f00511b7c127
unlinking
stop web-5a16c094$bdbd43a868dba8a8932e091ed357f00511b7c127
stopping
a0780f95d74c3d8c754f0f77992e42bf170d149c0e8ff3e3fe68e7fb68be4e46
remove web-5a16c094$bdbd43a868dba8a8932e091ed357f00511b7c127
undeploying
add web-5a16c094$e2021682ad1d25287321a4883535252ba684d9ba docker
deploying
start web-5a16c094$e2021682ad1d25287321a4883535252ba684d9ba docker
starting
d1bafaef3e609a0d24d928bdc677e3ff359c466b5fc63ce58dccf9f4c3aa382f
link web-5a16c094$e2021682ad1d25287321a4883535252ba684d9ba docker
linking
```

If you study this for a moment you realise nscale ___didn't redeploy the entire system.___ It did the following:

1. Unlink and stop the "buggy" web container.
2. start and link the older working web container.

nscale can analyze a deployed system and determine what needs to be done to roll back to a desired state. ___We think this is a very powerful tool.___


Roll forward
------------

The site is back up and running so let's fix the bug in the code and apply that fix.
remove the alert statement from app.js and commit the change or:

open the sudc/workspace/sudc-web directory
```bash
git checkout master (because the HEAD is now detached from the container being built)
git revert HEAD --no-edit
```

Roll forward the change:
```bash
nscale system compile sudc development
nscale container build sudc web latest development
nscale revision deploy sudc latest development
```
Check the site is working:

OS X:
open http://$(boot2docker ip):8000

Linux:
open [localhost:8000](http://localhost:8000)

[Home](./) | [Previous](./4-config-&-logs.html) | [Next](./6-system-fix.html)
