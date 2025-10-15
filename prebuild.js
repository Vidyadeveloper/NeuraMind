#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Only run this setup if we're in a deployment environment
if (process.env.NPM_TOKEN && process.env.NODE_ENV === 'production') {
    const npmrcTemplatePath = path.join(__dirname, '.npmrc.template');
    const npmrcPath = path.join(__dirname, '.npmrc');
    
    if (fs.existsSync(npmrcTemplatePath)) {
        let npmrcContent = fs.readFileSync(npmrcTemplatePath, 'utf8');
        npmrcContent = npmrcContent.replace('${NPM_TOKEN}', process.env.NPM_TOKEN);
        fs.writeFileSync(npmrcPath, npmrcContent);
        console.log('✅ NPM token configured for production deployment');
    }
} else {
    console.log('ℹ️  Using local .npmrc configuration');
}
