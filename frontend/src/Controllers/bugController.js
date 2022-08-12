import bugModel from '../Models/bugModel';

function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 23456789,
        name:"Crash on load",
        details:"Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version:"V2.0",
        assigned: "Faysal Ahmed",
        creator:"Random guy",
        priority:1,
        time: "21:08",
    }));

    data.push(new bugModel({
        _id: 23456789,
        name: "Won't load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version:"V2.0",
        assigned: "Faysal Ahmed",
        creator:"Random guy",
        priority:3,
        time: "21:08",
    }));

    /*going through array, grabs priority of a and priority of b and takes away,
      if its 0, its not 0 its in order, if its higher it will sort it out for us */
    let sorted = data.sort((a, b) => {return a.priority - b.priority});

    return sorted;

}

export default retrieveBugs;