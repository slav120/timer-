const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding(`utf8`);
stdin.on(`data`, (key) => {
for (i = 0; i <= 9; i++) {
 if (key == i) {
   console.log(`Setting timer for ` + key + ` seconds`);
    if (key === `b`) {
       process.stdout.write(`\x07`);
       }
   setTimeout(function() {
       console.log(`Timer is done`);
     },key * 1000);
   }
 }
 if (key === `b`) {
   process.stdout.write(`\x07`);
 }
 if (key === `\u0003`) {
   stdin.write(`Thanks for using me, Ciao!\n`);
   process.exit();
 }
});
