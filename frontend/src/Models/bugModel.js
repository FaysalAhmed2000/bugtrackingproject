/* eslint-disable eqeqeq */

//model for potential bugs


function bug (bug) {
    if (bug != undefined) {
      this.id = bug.id;
      this.details = bug.details;
      this.steps = bug.steps;
      this.version = bug.version;
      this.priority = bug.priority;
      this.assigned = bug.assigned;
      this.creator = bug.creator;
      this.time = bug.time;
    }
  
}
export default bug;