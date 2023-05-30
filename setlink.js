const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Learning Journey        ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "vnd.youtube://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbHZIZnlMdHVnUVJmT3NLbmt2dUxyUnFtSTl1d3xBQ3Jtc0ttc1BIcENwSzUyZFRqUDNOcFVxYXVZcmpSUXdDeENMR3lrNURCLWNCVzBlekNfdFRtYm5SMWl1VjV6RXRrY2IwVUJQRF8xRWt0UzZYU0pzRzBvLU02bTh4SUpSQk91ZTRWak5yN1d3amRralJKU25aOA&q=http%3A%2F%2Fbirthdaykiss.live%2F%3Futm_source%3Dda57dc555e50572d%26s1%3D181686%26s2%3D1866061%26click_id%3DAnika___bby%26j1%3D1&html_redirect=1";,
    function (err) {
      console.log("Link set seccussful.");
 
      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});