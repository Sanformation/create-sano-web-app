import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Get project name from command arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error("Please specify a project name.");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

// Function to copy template files
function createProjectStructure() {
  console.log(`Creating project: ${projectName}`);

  // Create project directory
  fs.mkdirSync(projectPath, { recursive: true });

  // Create sample files
  fs.writeFileSync(path.join(projectPath, "index.js"), "// Entry file");
  fs.writeFileSync(path.join(projectPath, "README.md"), `# ${projectName}`);

  console.log("Project structure created successfully.");
}

createProjectStructure();
