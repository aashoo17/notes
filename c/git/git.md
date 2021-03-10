# git

## git installation linux
sudo apt install git

## Configure git
git configuration
system level - applies for all user unless changed 
exist in /etc/gitconfig

User level - applies for that user exist in ~/.gitconfig
change user level config in cmd  
git config --global user.name "Ashutosh Singh"		//change username, global (means current user here)  
git config --global user.email "aashoo17@gmail.com"  
git config --list		//check the details  

project level - <Project Name>/.git/config


tracked files => files which were available in last snapshot/commit are said to be tracked  
git add is used for this purpose

checking the status by of files and directory  
git status

after commit tracked file can look like this

unchanged/ modified /staged  
unchanged => no changes made after the previous commit  
modified => file is modified but not added for next commit  
staged => file is added to go for new commit to be made  
again git add is used for this purpose  

wildcard for adding files with git add

git add *.html  
git add *		//add all files, folders except for the one starting with .  
git add .		//add current directory recursively  

## Commit
commit is just snapshot of the project these commits are referred by a long SHA hash value  
generally it is tedious to refer to commit by hash  

git commit 	//vim or some text editor will open commit message has to be passed  
git commit -m 'text goes here'		//shorthand for passing small texts

if file is staged to remove it  
git rm --cached <filename>

check difference in modified files  
git diff				//check for modified files that is not ataged  
git diff --staged		//check for staged files

## Branching
Since it is not very helpful to move with commit hash a pointer is created with  
any name which can point to any of the commit and gives easy way to identify  
where are we in commit tree

master branch  
so master is just a pointer to commit. by default first branch is named master by   
git and it just pints to latest commit in the tree and keep on moving when new   
commit is done

HEAD  
Head is pointer to the commit where we are currently working/checked out since generally we  
work on last commit it shares place with master  
so ultimately when checkout is invoked only HEAD is moving to that location
branch pointer like master generally move when they are active and new commit is
made
when HEAD is not shared with any branch we say we have detached HEAD
so before proceeding with commit HEAD should stay with any branch pointers 
on the same commit

git branch <branchname>		//creates a branch but does not switch to this branch  
git checkout -b <branchname> 	//switches to the branch after creation  
git checkout <branchname>		//switch to the branch  
git branch		//check all the branches and currently active branch

## Merging
Eventually we have to merge two branches to use the our work  
merging just takes those two merges and makes a new commit with   
both as parent to this commit

Merging branches  
git merge <branchName>		//this branch will be merged with current active branch git is in generally master  
befor merging make sure that there are no pending modified files or staged files for commit check by git status that  
both the branches are clean
[git merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

## Rebase
rebase is another way of mergin but here the history will look like one   
linear tree instead of merge where after mergin new commit shares two parents

interactive rebase   
git rebase -i

deleting branches  
local branch delete  
git branch -d <branch_name>  
git branch -D branch_name		//force delete if any changes are not merged and still branch to be deleted  

remote branch delete  
git push <remote_name> --delete <branch_name>

## moving into the commit tree
absolute  
git checkout <commit_hash>  
getting the hash values of commit   
git log     //but shows last commit first  
git log --reverse   //use it if you want to see it from beginning

relative  
git checkout HEAD^  //move one up from HEAD  
git checkout HEAD~5    //move by 5 from HEAD  
git checkout -f master HEAD~6   //force master branch to move to this position

## cherry-pick
cherry pick few commit and move them after some commit  
git cherry-pick ------

## Resetting commit
git reset HEAD^  //resets and moves to previous 1 commit and show those files
                //file modifications are saved
git reset --hard HEAD^  //same thing but no modifications are saved
git revert  HEAD~1 //makes a new commit by changing the previous commit
                    //more useful on remote branches

## tags
tags as name suggests tag a particular commit  
generally using semver versioning system  
tags will not move like branch they are fixed and  
exist only for referencing that commit

seeing the tag  
git describe <commit_hash/branch_name>  
this command will move from that commit to upward direction  
and show the first found tag  

.gitignore file  
all files and folder listed in this file will not be tracked by git 


## Github
adding colllaborators  
all public repo can be copied (also called as forking) and pull request can be submitted for change  
however team members can have direct access to read and write by adding them to collaborators list  
<current repo> => settings => collaborators => github username

collaborator can directly change repo or send pull request just like others(//TODO:check if correct)

creating organization to give different kind of read and write access to different people

issues
----->
labels in issues

milestones


## References:
[interactive learning on web for git](https://learngitbranching.js.org/)
use [for sandbox practice any git command](https://learngitbranching.js.org/?NODEMO)
[git visualization of all commands and features](https://www.atlassian.com/git/tutorials)

## Problems
all these are related to local developement i.e. working offline on git  
files are commited but you realize that i missed somethings/files in the commit  
how to just add those file in this new commit  
append these files

commit is made but you are not happy just revert the changes as was in previous commit

you modifies some files in a branch but not yet commited and want to work on another  
branch but can lose these changes as you move onto new branch how to save the work  
without commiting  
git stash

branch is merged now and no longer needed how to delete/remove the branch pointer

files are staged to be moved in next commit but want to remove some

## Most used in projects
git init    //initialize git  
git add *   //add all files except starting with .  
git commit -m <message>     //commit  
git branch      //check branches  
git branch <branch_name>    //create branch  
git checkout <commit_hash/branch> //move HEAD to the commit  
git checkout -b <branch_name>   //create branch and checkout  
git merge <branch>  //done from master generally <branch> will be   
                    ..merged into currently active one  
git rebase <branch> //merge with one linear history by adding entire   
                    //branch ahead of master then fast forward master pointer  
                    //to latest commit  
git rebase -i   //can change commit back and forth or omit them from being rebased
git cherry-pick  //cherry-pick a commit and add after another commit
git stash       //stash the changes and revert your directory to HEAD code
                //can then get these changes back if want
                //TODO:just remove the modifications without saving unlike stash
git tag v1 c1   //v1 for version/tag_name and c1 is commit

## git shell alias
alias gi='git init'
alias ga='git add'
alias gc='git commit'
alias gb='git branch'
alias gc='git checkout'
alias gm='git merge'
alias gr='git rebase'
alias gcp='git cherry-pick'
alias gs='git stash'
alias gt='git tag'











