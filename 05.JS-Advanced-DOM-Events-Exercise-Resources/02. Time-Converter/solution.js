function attachEventsListeners() {
  const inputElSeconds = document.querySelector("#seconds");
  const inputElHours = document.querySelector("#hours");
  const inputElMinutes = document.querySelector("#minutes");
  const inputElDays = document.querySelector("#days");

  const buttons = document.querySelectorAll('input[type="button"]');

  const units = {
    days: 86400,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };

  function convert(secondsAmount) {
    inputElSeconds.value = Number(secondsAmount).toFixed(2);
    inputElMinutes.value = Number(secondsAmount / units.minutes).toFixed(2);
    inputElHours.value = Number(secondsAmount / units.hours).toFixed(2);
    inputElDays.value = Number(secondsAmount / units.days).toFixed(2);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const inputType = e.target.getAttribute("id").split("Btn")[0];

      const currentInputEl = document.querySelector("#" + inputType);

      const currValue = currentInputEl.value;

      const multiplier = units[inputType];

      convert(currValue * multiplier);
    });
  });
}
