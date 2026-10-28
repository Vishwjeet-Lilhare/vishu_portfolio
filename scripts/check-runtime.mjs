const [major, minor] = process.versions.node.split('.').map(Number);
if (major < 22 || (major === 22 && minor < 12)) {
  console.error(`Node ${process.versions.node} is installed. This project requires Node 22.12.0 or newer.`);
  console.error('Install Node.js with npm from https://nodejs.org/en/download, then reopen your terminal.');
  process.exit(1);
}
console.log(`Node ${process.versions.node}: compatible.`);
