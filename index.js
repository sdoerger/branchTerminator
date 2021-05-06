// require the library, main export is a function
const { clear } = require('console'),
  simpleGit = require('simple-git'),
  // repoPath = '/home/mypath/to/my/git-repository',
  repoPath = '/home/stefan/Develop/wl/archive/sprintScript',
  git = simpleGit(repoPath, { binary: 'git' }),
  branches = ['test1234'],
  option = 'both';
// options: 'local', 'remote', 'both'

clear();

async function deleteBranch(branch, option) {
  const errorMessage = (branch, type, extra = '') =>
    console.log(
      `Error: Branch ${branch} does not exist ${type}${extra}.`
    );
  const successMessage = (branch, type) =>
    console.log(`${type} branch \'${branch}\' is deleted`);

  const remote = 'remote'
  try {
    const remote = 'remote'
    // force delete local branches
    if (option === remote || option === 'both') {
      // force delete remote branches
      await git.push('origin', branch, ['-d']);
      successMessage(branch, remote);
    }
  } catch (e) {
    errorMessage(branch, remote, ' (or you are on it)');
    // console.log(e)
  }

  const local = 'local'
  try {
    // force delete local branches
    if (option === local || option === 'both') {
      await git.deleteLocalBranch(branch, true);
      successMessage(branch, local);
    }
  } catch (e) {
    errorMessage(branch, local);
    // console.log(e)
  }
}

for (const branch of branches) {
  // console.log(branch)
  deleteBranch(branch, option);
}
