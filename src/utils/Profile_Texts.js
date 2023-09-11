let titles = [
  "Full Stack Developer",
  "Back End Developer",
  "Front End Developer",
  "Software Engineer",
];
let profileTexts = [];
//iterating over all the titles
for (let i = 0; i < titles.length; i++) {
  let title = titles[i];
  let titleStrings = [];
  let splittedText = "";
  //creating array with incrementing texts
  for (let j = 0; j < title.length; j++) {
    splittedText += title.charAt(j);
    titleStrings.push(splittedText);
  }
  // repeating title multiple times to give it more time to stay on view
  let repeatedTitle = [];
  for (let i = 0; i < 15; i++) {repeatedTitle.push(title);}

  //concatenating all the values to final array of text
  
  // seems to be trouble some for github pages
  // profileTexts = [
  //   ...profileTexts,
  //   ...titleStrings,
  //   ...repeatedTitle,
  //   ...titleStrings.reverse(),
  // ];
    
  for(let i=0; i<titleStrings.length; i++){profileTexts.push(titleStrings[i]);}
  for(let i=0; i<repeatedTitle.length; i++){profileTexts.push(repeatedTitle[i]);}
  for(let i=titleStrings.length-1; i>=0; i--){profileTexts.push(titleStrings[i]);}
  
}
//console.log("array",profileTexts);
export default profileTexts;