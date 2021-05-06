// require the library, main export is a function
const { clear } = require("console"),
simpleGit = require('simple-git'),
repoPath = '/home/stefan/Develop/wl/archive/sprintScript',
git = simpleGit(repoPath, { binary: 'git' }),

// localBranches = ['test1', 'test2', 'test3', 'test4'],
// remoteBranches = ['test1', 'test2', 'test3', 'test4'],
branches = [];

clear()

async function deleteBranch (branch) {
  try {
  // await git.pull()
  // await git.deleteLocalBranches('to-deletely')
  await git.deleteLocalBranch(branch, true)
  console.log(`Local branch \'${branch}\' is deleted`)
  await git.push('origin', branch, ['-d'])
  console.log(`Remote branch \'${branch}\' is deleted`)
  
  console.log('Done')
  
  }
  catch (e) { 
    console.log('Error')
    console.log(e)
  }
}

for (const branch of remoteBranches) {
  // console.log(branch)
  deleteBranch(branch)
}

// deleteBranch()