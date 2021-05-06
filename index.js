// require the library, main export is a function
const { clear } = require("console"),
simpleGit = require('simple-git'),
repoPath = '/home/stefan/Develop/wl/archive/sprintScript'
git = simpleGit('/home/stefan/Develop/wl/archive/sprintScript', { binary: 'git' });

clear()
// Simple Git with Promise for handling success and failure
// const shellJs = require('shelljs');

// change current directory to repo directory in local
// shellJs.cd('/home/stefan/Develop/wl/archive/sprintScript');
// Repo name

async function deleteBranch () {
  try {
  // await git.pull()
  // await git.deleteLocalBranches('to-deletely')
  await git.deleteLocalBranch('to-deletely', true)
  await git.push('origin', 'to-deletely', ['-d'])
  console.log('Done')
  
  }
  catch (e) { 
    console.log('Error')
    console.log(e)
  }
}

deleteBranch()

// try {
//   await git.deleteLocalBranch('to-delete')
// }
// catch (e) { /* handle all errors here */ }

// or await each step individually
// await git.init();

// removes the named remote
// await git.removeRemote('to-delete')

// git.deleteLocalBranch('to-delete')
// deletes a local branch - treats a failed attempt as an error

// From: https://erbalvindersingh.medium.com/pushing-a-git-repo-online-to-github-via-nodejs-and-simplegit-package-17893ecebddd

// const repo = 'dummy';  //Repo name
// // User name and password of your GitHub
// const userName = 'username';
// const password = 'password';
// // Set up GitHub url like this so no manual entry of user pass needed
// const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// // add local git config like username and email
// simpleGit.addConfig('user.email','balvinder294@gmail.com');
// simpleGit.addConfig('user.name','Balvinder Singh');

// // Add remore repo url as origin to repo
// simpleGitPromise.addRemote('origin',gitHubUrl);

// // Add all files for commit
// simpleGitPromise.add('.')
//   .then(
//       (addSuccess) => {
//         console.log(addSuccess);
//       }, (failedAdd) => {
//         console.log('adding files failed');
//   });

// // Commit files as Initial Commit
//  simpleGitPromise.commit('Intial commit by simplegit')
//    .then(
//       (successCommit) => {
//         console.log(successCommit);
//      }, (failed) => {
//         console.log('failed commmit');
//  });

// // Finally push to online repository
//  simpleGitPromise.push('origin','master')
//     .then((success) => {
//        console.log('repo successfully pushed');
//     },(failed)=> {
//        console.log('repo push failed');
//  });