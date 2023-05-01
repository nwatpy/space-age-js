function calculateAgeOnPlanets(ageInSeconds) {
    const SECONDS_IN_YEAR = 31557600;
    const orbitalPeriods = {
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Earth": 1.0,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    };

    let ages = {};

    for (let planet in orbitalPeriods) {
        let earthYears = ageInSeconds / SECONDS_IN_YEAR;
        let planetYears = earthYears / orbitalPeriods[planet];
        ages[planet] = Number(planetYears.toFixed(2));
    }

    return ages;
}

function displayAgeOnPlanets() {
    let ageInSeconds = 1000000000; // Adjust this value as needed
    let agesOnPlanets = calculateAgeOnPlanets(ageInSeconds);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    for (let planet in agesOnPlanets) {
        let p = document.createElement('p');
        p.textContent = `Age on ${planet}: ${agesOnPlanets[planet]} years`;
        resultDiv.appendChild(p);
    }
}
