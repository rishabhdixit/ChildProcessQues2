(function findcommand(cmd){

    var runcmd='^'+cmd;
    var spawn = require('child_process').spawn,
        ls    = spawn('grep', ['-ia',runcmd,'/home/rishabh/.bash_history']);

    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

}("cd"));

