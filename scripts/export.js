const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', '.next');
const targetDir = path.join(__dirname, '..', 'out');

// Create out directory
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy static files
const staticDir = path.join(sourceDir, 'static');
if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, path.join(targetDir, '_next', 'static'), { recursive: true });
}

// Copy HTML files from server/app
const serverAppDir = path.join(sourceDir, 'server', 'app');
if (fs.existsSync(serverAppDir)) {
  const files = fs.readdirSync(serverAppDir);
  files.forEach(file => {
    const filePath = path.join(serverAppDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && file.endsWith('.html')) {
      fs.copyFileSync(filePath, path.join(targetDir, file));
    } else if (stat.isDirectory()) {
      // Copy directory recursively
      fs.cpSync(filePath, path.join(targetDir, file), { recursive: true });
    }
  });
}

console.log('Static export completed successfully to /out directory');
