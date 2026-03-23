console.log("Hello!");

const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationPlace = " ";

function partyLocation() {
    if (emblemClue1 === "Eagle") {
        locationPlace = "Forum";
    } else if (emblemClue2 === "Lion") {
        locationPlace = "Colosseum";
    } else {
        locationPlace = "Villa";
    }

    if (emblemClue2 === "Laurel" && locationPlace === "Forum") {
        locationPlace + " " + "of Augustus";
    } else if (emblemClue2 === "Grapes" || locationPlace === "Villa") {
        locationPlace + " " + "of Pompey";
    }


    switch (emblemClue3) {
        case 7:
            locationPlace += " North";
            break;
        case 3:
            locationPlace += " South";
            break;
        case 9:
            locationPlace += " East";
            break;
        case 4:
            locationPlace += " West";
            break;
    }
} 

// We need to be careful when using (==) compared to (===) because (==) will compare the value but not the type whereas (===) will compare both the value and the type. 