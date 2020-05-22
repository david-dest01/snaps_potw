## Problem of the Week

#### Getting Started
To get started, clone this repository to your machine. If you don't have git set up locally you can use [gitpod](https://www.gitpod.io/).

##### Getting Started with Gitpod

- Step 1: Log in to [Gitpod](https://www.gitpod.io/) using your [Github](https://www.github.com/) account informaiton
- Step 2: Create a new <em>Workspace</em> by pointing your browser at a Github repository. `https://gitpod.io/#https://github.com/[enter_your_github_username]/snaps_potw`
- Step 3: Create a new branch so you can save your work using `git checkout -b [enter_your_github_username]`.


##### Getting Started in Github

- Step 1: Clone the branch to your machine. For SSH `git clone git@github.com:david-dest01/snaps_potw.git`. For HTTPS `https://github.com/david-dest01/snaps_potw.git`.
- Step 2: Create a new branch so you can save your work using `git checkout -b [enter_your_github_username]`.


##### Getting The Latest Challege
To make sure you have the most recent challenges locally, follow the below instructions

- Step 1: Checkout your local master banch using `git checkout master`
- Step 2: Pull the remote updates using `git pull origin master`
- Step 3: Checkout your branch `git checkout [enter_your_github_username]`
- Step 4: Merge with master by running `git merge master`

##### Testing Your Code

The file structure for this repository is `[MonthNumber]/[week_MONTH.DAY].js`, for example `05/week_5.20.js`. Every week (hopefully) a new challenge will be added with following this naming convention.

**Testing Current Week**: If you want to **test your code** for the **current week** you can run the command `npm run algo` in your terminal.
**Testing Past Weeks**: If you want to tinker with past weeks, from the root directory run the command `node [MonthNumber]/[week_MONTH.DAY].js`, for example `nodee 05/week_5.20.js` in your terminal.

##### Commiting Your Code
If you want to show your code one week or just have it saved remotely, following the below steps

- Step 1: Save your recent updates `git add .` for all updates.
- Step 2: Commit your updates with a message using `git commit -m'[your message]'`
- Step 3: Push your updates to your remote branch using `git checkout -b [enter_your_github_username]`
