const
    crew = require('serenity-js/lib/stage_crew');
exports.config = {
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnection:true,
    //restartBrowserBetweenTests: true,
    //allScriptsTimeout: 10000,
    // Framework definition - tells Protractor to use Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),
    specs: ['features/**/*.feature'],

    cucumberOpts: {
        require: ['features/**/*.ts'],
        format: 'pretty',
        compiler: 'ts:ts-node/register'
    },

    capabilities: {
        'shardTestFiles': true,
        'maxInstances': 20,
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars',
               // '--start-maximized'
               //'--headless',
                "--disable-gpu",
                "--window-size=1920,1080"
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    },

    serenity: {

        crew: [
            crew.serenityBDDReporter(),
            crew.photographer()
        ],
        requirementsDirectory: `${process.cwd()}/features`,
        outputDirectory: `${process.cwd()}/target/site/serenity/`,
        dialect: 'cucumber',
        stageCueTimeout: 30 * 1000

    },
}