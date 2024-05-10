
// Given Parameters
const parameters = {
  velocityKmh: { value: 10000, unit: "Km/h" },
  acceleration: { value: 3, unit: "M/s^2" },
  time: { value: 3600, unit: "seconds" },
  distance: { value: 0, unit: "Km" },
  fuel: { value: 5000, unit: "Kg" },
  fuelBurnRate: { value: 0.5, unit: "Kg/s" }
};

const KmhConversionFactor =  3.6;

const validateNumber = (parameters) => {
  for (const param of Object.values(parameters)) {
    if (typeof param.value !== "number") {
      throw new Error('Invalid parameter type');
    }
  }
};

const validateRange = (parameters) => {
  for (const param of Object.values(parameters)) {
    if (param.value < 0) {
      throw new Error('Parameter value cannot be negative');
    }
  }
};

const calculateNewVelocity = (velocityKmh, acceleration, time) => {
  validateNumber(parameters);
  validateRange(parameters);
   
  const validateUnit = (parameters) => {
  for (const param of Object.values(parameters)) {
    if (typeof parameters.unit !== "string") {
      throw new Error('Invalid parameter unit');
    }
  }
};
 

  const newVelocity = velocityKmh + (acceleration * time * KmhConversionFactor);
  return newVelocity;
};

// Function invocations
const newVelocity = calculateNewVelocity(parameters.velocityKmh.value, parameters.acceleration.value, parameters.time.value);
console.log(`New Velocity (km/h): ${newVelocity}`);

const newDistance = newVelocity * (parameters.time.value / 3600); // calculates new distance
console.log(`New Distance (km): ${newDistance}`);

const remainingFuel = parameters.fuel.value - (parameters.fuelBurnRate.value * parameters.time.value); // calculates remaining fuel
console.log(`Remaining Fuel (kg): ${remainingFuel}`);
