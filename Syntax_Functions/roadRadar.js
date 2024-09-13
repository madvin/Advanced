function solve(speed, area) {
  let status;
  let speedLimit;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      if (speed <= 130) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed <= 150) {
        status = "speeding";
        console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
      } else if (speed <= 170) {
        status = "excessive speeding";
        console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
      } else {
        status = 'reckless driving';
        console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
      }

      break;
    case "interstate":
        speedLimit = 90;
        if (speed <= 90) {
          console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed <= 110) {
          status = "speeding";
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed <= 130) {
          status = "excessive speeding";
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
          status = 'reckless driving';
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
      break;
    case "city":
        speedLimit = 50;
        if (speed <= 50) {
          console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed <= 70) {
          status = "speeding";
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed <= 90) {
          status = "excessive speeding";
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
          status = 'reckless driving';
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
      break;
    case "residential":
        speedLimit = 20;
        if (speed <= 20) {
          console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else if (speed <= 40) {
          status = "speeding";
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed <= 60) {
          status = "excessive speeding";
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
          status = 'reckless driving';
          console.log(`The speed is ${Math.abs(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
      break;
  }
}

solve(40, 'city');
