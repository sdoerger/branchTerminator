// require the library, main export is a function
const { clear } = require('console'),
  simpleGit = require('simple-git'),
  repoPath = '/home/mypath/to/my/git-repository',
  git = simpleGit(repoPath, { binary: 'git' }),
  branches = [],
  option = 'both';
// options: 'local', 'remote', 'both'

clear();

async function deleteBranch(branch, option) {
  console.log('✨ searching for branches ...')
  
  const errorMessage = (branch, type, extra = '') =>
    console.log(
      `Error: Branch ${branch} does not exist ${type}${extra}.`
    ),
  successMessage = (branch, type) =>
    console.log(`${type} branch \'${branch}\' is deleted`),
  type = {
    remote: 'remote',
    local: 'local',
    both: 'both',
  }

  try {
    // force delete local branches
    if (option === type.remote || option === type.both) {
      // force delete remote branches
      await git.push('origin', branch, ['-d']);
      successMessage(branch, type.remote);
    }
  } catch (e) {
    errorMessage(branch, type.remote, ' (or you are on it)');
    // console.log(e)
  }

  try {
    // force delete local branches
    if (option === type.local || option === type.both) {
      await git.deleteLocalBranch(branch, true);
      successMessage(branch, type.local);
    }
  } catch (e) {
    errorMessage(branch, type.local);
    // console.log(e)
  }
}

for (const branch of branches) {
  // console.log(branch)
  deleteBranch(branch, option);
}
