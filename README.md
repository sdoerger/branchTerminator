<p align="center"><img align="center" src="https://images.unsplash.com/photo-1551281306-0d52288970ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHJvYm90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="120px" width="150px" style="object-fit: cover; object-position: center -65px"></p>

# Branch Terminator

## Project Stack

* nodejs
* nodemone
* simple-git

## Prequesitions
```
npm install
```

## Project setup

### Add path
Of the desired repo in variable repoPath, i. e.:
`repoPath = '/home/mypath/to/my/git-repository'`

### Add branches
Add into the array, all branches you want to delete from your local machine and remote, i. e.:
`branches = ['test1', 'test2', 'test3', 'test4'];`

Alternatively, to only delete local branchs, comment out, like this:
```javascript
// await git.push('origin', branch, ['-d'])
// console.log(`Remote branch \'${branch}\' is deleted`)
```

Alternatively, to only delete remote branchs, comment out, like this:
```javascript
// await git.deleteLocalBranch(branch, true)
// console.log(`Local branch \'${branch}\' is deleted`)
```

## Start script

Go into this script folder and run the script by
`node index.js`

Or in watchmode
`npm start`