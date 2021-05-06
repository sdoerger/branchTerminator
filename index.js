// require the library, main export is a function
const { clear } = require("console"),
simpleGit = require('simple-git'),
repoPath = '/home/stefan/Develop/wl/archive/sprintScript',
git = simpleGit(repoPath, { binary: 'git' }),

localBranches = [],
remoteBranches = [];

clear()

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