try {
    
    const core = require("@actions/core");
    const github = require("@actions/github");

    throw new Error('throw some error');
    core.debug('Debug Message');
    core.warning('Warning message');
    core.error("Error message");


    const name = core.getInput("who_to_greet");

    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time" , time.toTimeString());
    
    core.exportVariable("HELLO_TIME", time);

    core.startGroup("Logging GitHub context");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();
} catch (error) {
    core.setFailed(error.message);
}
