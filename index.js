
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

const drivers = [
    { name: "Carti" },
    { name: "Ken" },
    { name: "lone" },
    { name: "Beno" },
    { name: "meechie" },
    { name: "Problem child" },
    { name: "Lil Demon" },
];
