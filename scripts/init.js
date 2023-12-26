const util = require("node:util");
const fs = require("node:fs/promises");
const exec = util.promisify(require("child_process").exec);
const { log } = require("console");

const updateGit = async () => {
  log("Update git submodule...");
  const { err, stdout, stderr } = await exec(
    "git submodule update --init --recursive"
  );
  if (err) {
    log(`Cant update git submodle  due to: ${err}`);
  }
  log("Update git submodule success!");
};

const updateNpm = async () => {
  const gitmodules = await fs.readFile(".gitmodules", { encoding: "utf-8" });
  const repos = gitmodules.split('"').filter((d, i) => i % 2 === 1);

  for (const repo of repos) {
    await updateNpmRepo(repo);
  }
};

const updateNpmRepo = async (repo) => {
  log(`Update ${repo}...`);
  const { err, stdout, stderr } = await exec(`cd ${repo} && npm update`);
  if (err) {
    log(`Cant update ${repo} due to: ${err}`);
  } else{
      log(`Update ${repo} success!`);
  }
};



const init = async () => {
  await updateGit();
  await updateNpm();
};

init();
