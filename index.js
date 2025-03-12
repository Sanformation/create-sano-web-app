import fs from "fs";
import path from "path";
//it requires two arguments, the first one is the name of the project and the second one is the path of the project
const projectName = process.argv[2];

if (!projectName) {
  console.error("Please specify a project name.");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

function createProjectStructure() {
  console.log(`Creating project: ${projectName}`);

  fs.mkdirSync(projectPath, { recursive: true });

  fs.writeFileSync(path.join(projectPath, "index.js"), "// Entry file");
  fs.writeFileSync(path.join(projectPath, "README.md"), `# ${projectName}`);

  console.log("Project structure created successfully.");
}

createProjectStructure();
