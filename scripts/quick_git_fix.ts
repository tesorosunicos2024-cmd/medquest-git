import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

function fix() {
  console.log('Fixing git index...');
  const indexPath = path.join(process.cwd(), '.git', 'index');
  if (fs.existsSync(indexPath)) {
    fs.unlinkSync(indexPath);
    console.log('Corrupted index deleted.');
  }
  
  try {
    execSync('git reset', { stdio: 'inherit' });
    console.log('Git reset completed.');
  } catch (err: any) {
    console.error('Git reset failed:', err.message);
  }
}

fix();
