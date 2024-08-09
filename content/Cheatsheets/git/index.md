---
title: Git Cheatsheet
date: 2024-02-27T16:00:00.000Z
image: /img/featured.png
description: A comprehensive Git cheatsheet covering essential commands and tips
  for developers.
slug: git-cheatsheet
summary: An essential Git cheatsheet that includes a compilation of commonly
  used Git commands and tips for efficient version control.
showSummary: true
showTableOfContents: true
showWordCount: true
showComments: true
newsletter: false
showDate: true
showDateUpdated: false
showHeadingAnchors: true
showPagination: true
showReadingTime: true
showTaxonomies: true
tags:
  - '"Git"'
categories:
  - '"CheatSheet"'
keywords:
  - '"Git"'
  - '"CheatSheet"'
  - '"Version Control"'
  - '"Git Commands"'
series:
  - '"Git"'
series_order: "3"
author: Armoghan-ul-Mohmin
draft: false
---
This detailed Git cheatsheet provides a complete guide to common and advanced Git commands, workflows, and concepts.[](#common-workflows)

## Basic Commands

* **Initialize a new Git repository:**

  ```
  $ git init
  ```

  Initializes a new Git repository in the current directory.
* **Check the status of files:**

  ```
  $ git status
  ```

  Displays the state of the working directory and the staging area. Shows which changes have been staged, which haven't, and which files aren't being tracked by Git.
* **Add files to the staging area:**

  ```
  $ git add filename1 filename2
  $ git add .  # Adds all files
  ```

  Stages the specified files or all files for the next commit.
* **View differences between files:**

  ```
  $ git diff filename  # Differences between working directory and staging area
  $ git diff --staged  # Differences between staging area and last commit
  ```

  Shows the changes between the working directory and the index (staging area). Use \`q\` to quit the diff view.
* **Commit changes:**

  ```
  $ git commit -m "Commit message"
  $ git commit -v  # Include diff in commit message editor
  $ git commit -a -m "Commit message"  # Stage all changes and commit
  ```

  Commits the staged changes with a descriptive message. The \`-a\` flag stages all changes before committing.
* **View commit history:**

  ```
  $ git log
  $ git log --oneline  # Shortened log output
  $ git log --graph  # Visual representation of commit history
  ```

  Displays a list of commits in the current branch, showing commit hashes, authors, dates, and messages. The \`--oneline\` option shows a brief log, and \`--graph\` displays a graphical representation of the commit history.
* **Show the current commit (HEAD):**

  ```
  $ git show HEAD
  ```

  Displays detailed information about the most recent commit.
* **View changes in a specific commit:**

  ```
  $ git show <commit-id>
  ```

  Shows the changes introduced by the specified commit.
* **List all branches:**

  ```
  $ git branch -a
  ```

  Lists all branches, including remote-tracking branches, and highlights the current branch.
* **Check out a branch:**

  ```
  $ git checkout branch-name
  ```

  Switches to the specified branch.
* **Create a new branch:**

  ```
  $ git branch branch-name
  ```

  Creates a new branch with the specified name.
* **Reset to a specific commit:**

  ```
  $ git reset <commit-id>  # Use the first 7 characters of the commit ID
  $ git reset --hard <commit-id>  # Discards all changes after the specified commit
  ```

  Resets the current branch to the specified commit. The \`--hard\` option discards all changes in the working directory.
* **Prune outdated remote-tracking branches:**

  ```
  $ git remote prune origin
  ```

  Removes references to branches that no longer exist on the remote repository.

## Getting Help

* **Within Git:**

  ```
  $ git help <command>
  $ git <command> --help
  $ man git-<command>
  ```

  Access help documentation for a specific Git command.
* **Outside Git:**

  Join the #git or #github channels on Freenode IRC server (irc.freenode.net) for real-time help and discussions.

## Setup

* **Global configuration (user details, preferences):**

  ```
  $ git config --global user.name "John Doe"
  $ git config --global user.email johndoe@example.com
  $ git config --list  # List all settings
  ```

  Set your global username and email for Git commits and view all Git settings.
* **Initialize a new repository:**

  ```
  $ git init
  ```

  Initializes a new Git repository in the current directory.
* **Set up a new project:**

  ```
  $ git add .
  $ git commit -m 'Initial project version'
  $ git remote add origin <URL>
  $ git push -u origin master
  ```

  Adds all files, commits them, sets up a remote repository, and pushes the initial commit to the remote repository.
* **Clone an existing repository:**

  ```
  $ git clone <URL> [directory-name]
  $ git clone --depth=16 <URL>  # Clone only the last 16 commits
  ```

  Clones a remote repository into a local directory. Optionally, specify a directory name or use \`--depth\` to limit the commit history.

## Staging and Committing

* **Stage files for commit:**

  ```
  $ git add filename
  ```

  Stages a file for commit. To update the staged version of a file, run \`git add\` again after making changes.
* **Commit changes:**

  ```
  $ git commit -m "Commit message"
  $ git commit -v  # View changes in the commit message editor
  $ git commit -a -m "Commit message"  # Stage and commit all changes
  ```

  Commits changes with a message. Use \`-v\` to include a diff of changes and \`-a\` to stage all modified files.

## Branching

* **Show the current branch:**

  ```
  $ git branch
  ```

  Lists all branches and highlights the current branch.
* **Create a new branch:**

  ```
  $ git branch branch-name
  ```

  Creates a new branch.
* **Delete a branch:**

  ```
  $ git branch -d branch-name
  ```

  Deletes the specified branch if it has been merged.
* **Switch to a branch:**

  ```
  $ git checkout branch-name
  ```

  Switches to the specified branch.
* **Merge branches:**

  ```
  $ git merge branch-name
  ```

  Merges the specified branch into the current branch.
* **Rebase onto another branch:**

  ```
  $ git rebase branch-name
  ```

  Applies changes from the current branch onto the specified branch.

## Teamwork

* **Clone a remote repository:**

  ```
  $ git clone <remote-location> [clone-name]
  ```

  Clones a remote repository into a local directory. Optionally specify a directory name.
* **List remote repositories:**

  ```
  $ git remote -v
  ```

  Lists all remote repositories associated with the local repository.
* **Fetch changes from the remote repository:**

  ```
  $ git fetch
  ```

  Retrieves new commits from the remote repository but doesn’t merge them into the local branch.
* **Merge fetched changes:**

  ```
  $ git merge origin/master
  ```

  Merges changes from the remote tracking branch into the current branch.
* **Push changes to the remote repository:**

  ```
  $ git push origin your-branch-name
  ```

  Pushes your local branch to the remote repository.
* **Rebase with another branch:**

  ```
  $ git rebase branch-name
  ```

  Re-applies your changes on top of the specified branch. Useful for integrating changes from the upstream branch.
* **Pull changes from the remote repository:**

  ```
  $ git pull
  $ git pull --rebase <remote-name> <branch-name>
  ```

  Retrieves and merges changes from the remote repository. Use \`--rebase\` to apply your changes on top of the fetched changes.

## Removing Files and Branches

* **Remove a file from the repository:**

  ```
  $ git rm filename
  ```

  Removes a file from the working directory and stages the removal for the next commit.
* **Force remove a file from the repository (if already in index):**

  ```
  $ git rm -f filename
  ```

  Forces removal of a file that has already been staged.
* **Remove a file from tracking but keep it on the disk:**

  ```
  $ git rm --cached filename
  ```

  Untracks a file while keeping it in the working directory.
* **Remove a directory from tracking but keep it on the disk:**

  ```
  $ git rm --cached -r directory/
  ```

  Untracks a directory and its contents while keeping them in the working directory.
* **Remove files matching a pattern:**

  ```
  $ git rm log/*.log  # Remove all .log files in log/ directory
  $ git rm *~  # Remove all files ending with ~
  ```

  Removes files that match the specified pattern.
* **Rename a file:**

  ```
  $ git mv oldname newname
  ```

  Renames a file and stages the change.
* **Delete a branch:**

  ```
  $ git branch -d branch-name
  ```

  Deletes the specified branch if it has been merged.

## Ignoring Files

* **Create a `.gitignore` file to specify which files to ignore:**

  ```
  *.o       # Ignore all .o files
  *~        # Ignore all files ending with ~
  /TODO     # Ignore TODO file in the root directory only
  build/    # Ignore all files in build/ directory
  doc/*.txt # Ignore .txt files in doc/ directory
  doc/**/*.pdf # Ignore all .pdf files in doc/ directory
  ```

  Defines which files and directories Git should ignore.
* **Rules for `.gitignore` patterns:**

  * Blank lines or lines starting with `#` are ignored.
  * Standard glob patterns are used.
  * Patterns starting with `/` match from the directory where `.gitignore` resides.
  * Patterns ending with `/` specify directories.
  * Use `!` to negate a pattern.

## Renaming Files

* **Rename a file:**

  ```
  $ git mv oldname newname
  ```

  Renames a file and stages the change.

## Deploying a Subfolder

* **Deploy only a subfolder:**

  ```
  $ git subtree split --prefix=subfolder -b branch-name
  $ git push origin branch-name:refs/heads/branch-name
  ```

  Creates a new branch containing only the contents of the specified subfolder and pushes it to the remote repository.

## Stashing

* **Save changes to a stash:**

  ```
  $ git stash save "message"
  ```

  Saves your local changes to a stash with an optional message.
* **List stashes:**

  ```
  $ git stash list
  ```

  Displays a list of all stashes.
* **Apply a stash:**

  ```
  $ git stash apply stash@{0}
  ```

  Applies the changes from the specified stash.
* **Drop a stash:**

  ```
  $ git stash drop stash@{0}
  ```

  Deletes the specified stash.
* **Apply and drop a stash:**

  ```
  $ git stash pop
  ```

  Applies the most recent stash and removes it from the stash list.

## Advanced Commands

* **Interactive rebase:**

  ```
  $ git rebase -i HEAD~n
  ```

  Allows you to interactively rebase a series of commits. Replace `n` with the number of commits to rebase.
* **Cherry-pick a commit:**

  ```
  $ git cherry-pick <commit-id>
  ```

  Applies the changes from a specific commit to the current branch.
* **Revert a commit:**

  ```
  $ git revert <commit-id>
  ```

  Creates a new commit that undoes the changes made by the specified commit.
* **Squash commits:**

  ```
  $ git rebase -i HEAD~n
  ```

  Combines multiple commits into a single commit. Replace `n` with the number of commits to squash.

## Git Hooks

* **Pre-commit hook:**

  Run scripts or commands before a commit is finalized. Define in `.git/hooks/pre-commit`.
* **Post-commit hook:**

  Run scripts or commands after a commit is completed. Define in `.git/hooks/post-commit`.
* **Pre-push hook:**

  Run scripts or commands before pushing changes to a remote repository. Define in `.git/hooks/pre-push`.

## Common Workflows

* **Feature Branch Workflow:**

  1. Create a feature branch:

     ```
     $ git checkout -b feature-branch
     ```
  2. Make changes and commit them:

     ```
     $ git add .
     $ git commit -m "Add feature"
     ```
  3. Fetch and merge updates from the main branch:

     ```
     $ git fetch
     $ git merge origin/main
     ```
  4. Push feature branch to remote:

     ```
     $ git push origin feature-branch
     ```
  5. Create a pull request (PR) for review and merging.
* **Forking Workflow:**

  1. Fork the repository on GitHub.
  2. Clone your fork:

     ```
     $ git clone <fork-URL>
     ```
  3. Add the original repository as a remote:

     ```
     $ git remote add upstream <original-repo-URL>
     ```
  4. Fetch changes from the original repository:

     ```
     $ git fetch upstream
     ```
  5. Merge changes into your local branch:

     ```
     $ git merge upstream/main
     ```
  6. Push changes to your fork:

     ```
     $ git push origin main
     ```
