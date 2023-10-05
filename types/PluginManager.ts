import * as fs from 'fs';
import * as path from 'path';

const pluginsDirectory = path.join(__dirname, '../plugins');

export interface NebulaKitPlugins {
    name: string,
    version: string,
    author: string,
    desc: string,
    isProd: boolean,
}

fs.readdir(pluginsDirectory, (err, files) => {
    if (err) {
        console.error('Error reading plugins directory:', err);
        return;
    }

    files.forEach((file) => {
        console.log('Plugin:', file);
    });
});