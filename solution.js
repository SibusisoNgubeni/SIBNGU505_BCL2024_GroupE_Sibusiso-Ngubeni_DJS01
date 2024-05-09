/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

const velocityKmh = {value: 10000, Unit: "Km/h"}; // make objects to make calculations robust/velocity (km/h)
const acceleration = {value: 3, Unit: "M/s^2"};// acceleration (m/s^2)
const time = {value: 3600, Unit: "seconds"}; // seconds (1 hour)
const distance = {value: o, Unit: "Km"};// distance (km)
const fuel = {value: 5000, Unit: "Kg"}; // remaining fuel (kg)
const fuelBurnRate = {value: 0.5, Unit: "Kg/s"}; // fuel burn rate (kg/s)

const KmhConversionFactor = 3.6;

//Converted values


const newDistance = (distance, velocityKmh, time) =>{
  if (typeof (distancevalue)!== "number" || typeof velocityKmh!== "number"  || typeof time!== "number") {
    throw new Error('Invalid parameter type');
  }
  if (velocityKmh < 0 || acceleration < 0 || time < 0) {
    throw new Error('Parameter value cannot be negative');
  }
  if (velocityKmh < 0 || acceleration < 0 || time < 0) {
    throw new Error('Parameter value cannot be negative');
  }
const newVelocity = velocityKmh + ((acceleration * time) * KmhConversionFactor);
  return newVelocity;
}
     + ((velocityKmh/time) * time); // calculates new distance
console.log(`New Distance (km): ${newDistance}`);

const remainingFuel = fuel - (fuelBurnRate * time); // calculates remaining fuel
console.log(`Remaining Fuel (kg): ${remainingFuel}`);


// Function to calculate new velocity
function calculateNewVelocity(velocityKmh, acceleration, time) {
  if (typeof velocityKmh!== "number" || typeof acceleration!=="number"  || typeof time!== "number") {
    throw new Error('Invalid parameter type');
  }
  if (velocityKmh < 0 || acceleration < 0 || time < 0) {
    throw new Error('Parameter value cannot be negative');
  }
const newVelocity = velocityKmh + ((acceleration * time) * KmhConversionFactor);
  return newVelocity;
}

try {
  const newVelocity = calculateNewVelocity(velocityKmh, acceleration, time);
  console.log(`New Velocity (km/h): ${newVelocity}`);
} catch (error) {
  console.log(error);
}