/*
This is empty on purpose! Your code to build the resume will go here.

$("#main").append(["Bhupendra Kumar Avowal"]);


console.log(email);

var awesomeThoughts = "I am Bhupendra and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append([funThoughts]);

console.log(awesomeThoughts);
console.log(funThoughts);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedcontacts = HTMLcontactGeneric.replace("%contact%",bio.contacts);
var formattedwelcomeMessage =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedskills = HTMLskills.replace("%data%",bio.skills);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#header").prepend([formattedskills]);
$("#header").prepend([formattedwelcomeMessage]);
$("#header").prepend([formattedbioPic]);
$("#header").prepend([formattedcontacts]);
$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
$("#main").append(["hi"]);

$("#workExperience").append(work["position"])
$("#education").append(education.name)

*/


var work = {
    "jobs" : [
        {
            "employer" : "Nucleus Software Export Limited",
            "title" : "Intern",
            "location" : "Noida",
            "dates" : "May 2016 - June 2016",
            "description" : "Worked on Analytics Project and visualized different patterns present in transaction data."x
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Driverless Car",
            "dates" : 2016,
            "description" : "Worked on automatic Parking",
            "images" : []
        },
        {
            "title" : "Quadcopter",
            "dates" : 2015,
            "description" : "Controlled quadcopter using arduino due and sensors",
            "images" :[]
        },
        {
            "title" : "Wristify",
            "dates" : 2014,
            "description" : "Controlled temperature pulses were generated using peltier module, arduino nano amd temperature sensor LM35",
            "images" : []
        }
    ]
}

var bio = {
    "name" : "Bhupendra Agarwal",
    "role" : "Data Analyst",
    "contacts" : {
        "mobile" : "7409-75-5959",
        "email" : "bhupendrajnv5@gmail.com",
        "github" : "bhupendra36",
        "location" : "Alwar, Rajasthan"
    },
    "welcomeMessage" : "Hi, Let's go through my resume",
    "skills" : [
        "Electronics", "Data science","Control System"
    ],
    "bioPic" : "images/me.jpg"
}

var education = {
    "schools" : [
        {
            "name" : "JNV Alwar",
            "location" : "Alwar, Rajasthan",
            "degree" : "9th and 10th",
            "major" : ["Math","Science","English","Hindi","Social Science"],
            "minor" : ["Marathi"],
            "dates" : 2011,
            "url" : "http://www.jnvalwar.in/"
        },
        {
            "name" : "JNV Banglore (U)",
            "location" : "Banglore",
            "degree" : "11th and 12th",
            "major" : ["Math","Physics","Chemistry"],
            "minor" : ["English","Hindi"],
            "dates" : 2013,
            "url" : "http://jnvbangaloreurban.com/"
        }
    ],

    "onlineCourses": [
        {
            "title" : "JavaScript Basic",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "http://jnvbangaloreurban.com/"
        }
    ]
};

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedheaderName);

if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);

};

function displatWork(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);

    }
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length > 0 ) {
            for ( image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];
    for ( job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
};

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name.join(" ");
}

$("#main").append(internationalizeButton);
console.log(locationizer(work));

displatWork();
projects.display();
