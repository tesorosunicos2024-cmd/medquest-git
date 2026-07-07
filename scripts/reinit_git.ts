import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

function deleteFolderRecursive(directoryPath: string) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  }
}

function reinitGit() {
  console.log('--- RE-INITIALIZING REPOSITORY ---');
  const gitDir = path.join(process.cwd(), '.git');
  
  if (fs.existsSync(gitDir)) {
    console.log('Deleting corrupted .git folder...');
    deleteFolderRecursive(gitDir);
    console.log('.git folder deleted successfully.');
  }

  try {
    console.log('Initializing new git repository...');
    execSync('git init', { stdio: 'inherit' });
    
    console.log('Adding remote origin...');
    execSync('git remote add origin https://github.com/clinupads-lab/medquest.git', { stdio: 'inherit' });
    
    console.log('Fetching origin main...');
    execSync('git fetch origin main', { stdio: 'inherit' });
    
    console.log('Forcing checkout of main branch from remote origin/main...');
    execSync('git checkout -f origin/main -B main', { stdio: 'inherit' });
    
    console.log('Setting upstream to origin/main...');
    execSync('git branch --set-upstream-to=origin/main main', { stdio: 'inherit' });
    
    console.log('Repository successfully re-initialized and synchronized with remote!');
  } catch (err: any) {
    console.error('Error during re-initialization:', err.message);
    if (err.stderr) console.error('Stderr:', err.stderr.toString());
  }
}

reinitGit();
