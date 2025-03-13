#!/usr/bin/env node

import fs from "fs";
import path from "path";

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please specify a project name.");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

function init() {
  console.log(`Creating project: ${projectName}`);

  fs.mkdirSync(projectPath, { recursive: true });

  fs.writeFileSync(path.join(projectPath, "index.js"), "// Entry file");
  fs.writeFileSync(path.join(projectPath, "README.md"), `# ${projectName}`);

  console.log("Project structure created successfully.");
}

init();
