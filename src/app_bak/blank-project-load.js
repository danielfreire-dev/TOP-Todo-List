/* factory function */

export const blankProjectLoad = () => {
  console.log("calling blankProjectLoad");
  let projectArray = [];
  console.log("pushing the title name");
  let projectTitle = "Default Project";
  projectArray.push({ projectTitle });
  console.log(projectsArray);
  return { projectsArray, projectTitle };
};
