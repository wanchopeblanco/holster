/* eslint-disable */
Package.describe({
    name: 'indesign:holster',
    version: '0.0.3',
    summary: 'Easy placeholder templates for Blaze inspired by facebooks loading pattern.',
    git: 'https://github.com/wanchopeblanco/holster',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('blaze-html-templates');
    api.use('standard-minifier-css@1.0.4');
    api.use('standard-minifier-js@1.0.4');
    api.use('es5-shim');
    api.use('ecmascript');
    api.addFiles('holster.html');
    api.addFiles('holster.css');
});


