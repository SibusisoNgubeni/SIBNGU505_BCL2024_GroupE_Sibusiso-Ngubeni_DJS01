/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

const velocityKmh = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//Converted values
const velocityKms = velocityKmh / time;
console.log(`Velocity (km/s): ${velocityKms}`);

const velocityMs = velocityKmh * 1000 / 3600; // convert km/h to m/s

const newDistance = distance + (velocityKms * time); // calculates new distance
console.log(`New Distance (km): ${newDistance}`);

const remainingFuel = fuel - (fuelBurnRate * time); // calculates remaining fuel
console.log(`Remaining Fuel (kg): ${remainingFuel}`);


// Function to calculate new velocity
function calculateNewVelocity(velocityKmh, velocityMs, acceleration, time) {
  const newVelocity = velocityMs + (acceleration * time);
  if (newVelocity!== 48880) {
    throw new Error("Incorrect new velocity calculation");
  }
  return newVelocity;
}

// Pick up an error with how the function above is called and make it robust to errors
try {
  const newVelocity = calculateNewVelocity(velocityKms, acceleration, time);
  console.log(`New Velocity (km/h): ${newVelocity}`);
} catch (error) {
  console.log(error);
}
