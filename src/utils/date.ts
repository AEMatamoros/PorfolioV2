export default function formatDate(
  initDate: string,
  endDate: string,
  languaje: string
) {
  let start = new Date(initDate);
  let beginYear = start.getFullYear();
  let end = new Date();
  if (endDate) {
    end = new Date(endDate);
  }

  let difference = end.valueOf() - start.valueOf();
  //Arrange the difference of date in days, hours, minutes, and seconds format
  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  var months = Math.floor(
    (difference % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.44)
  );
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let monthlabel = languaje == "ES" ? " Meses  - Desde " : " Months  - Since ";
  let yearLabel = languaje == "ES" ? " Años " : " Years ";
  if (years < 1) {
    return months + 1 + monthlabel + beginYear;
  }
  return years + yearLabel + (months + 1) + monthlabel + beginYear;
}
