// require the library, main export is a function
const { clear } = require('console'),
  simpleGit = require('simple-git'),
  prompt = require('prompt-sync')()
  // repoPath = '/home/mypath/to/my/git-repository',
  // repoPath = '/home/stefan/Develop/wl/archive/sprintScript',
  // branches = ['test1234'],
  // option = 'both';
// options: 'local', 'remote', 'both'

// ########################
// console navigation Start
// ########################

clear();
 
console.log(`
Please enter the exact path to your repo.
I. e.: /home/mypath/to/my/git-repository
`);
const repoPatha = prompt();
console.log(`
This is your your path: ${repoPatha}
`);

console.log(`
Please enter a list of branches you intend to delete (in one line).
I. e.: test1, test2, test3
`);
const repoBranches = prompt();

splitRepoBranches = repoBranches.split(', ')
console.log(`
These are your the branches you want to delete: ${splitRepoBranches}
`);

console.log(`
Please Choose, where you want to delete
1) local
2) remote
3) both
`);
const repoOption = prompt();

if (!(repoOption == '1' || repoOption == '2' || repoOption == '3')) {
  console.log('Wrong option')
  console.log('Bye bye')
  process.exit(1)
}

// ########################
// console navigation End
// ########################

const git = simpleGit(repoPatha, { binary: 'git' }),
transformedOptions = {
  '1': 'local',
  '2': 'remote', 
  '3': 'both',
}


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

for (const branch of repoBranches) {
  // console.log(branch)
  deleteBranch(branch, transformedOptions[repoOption]);
}
