export function getTimePassedSince(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const elapsedMilliseconds = now - date;

  const seconds = Math.floor(elapsedMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years + " year" + (years > 1 ? "s" : "") + " ago";
  } else if (months > 0) {
    return months + " month" + (months > 1 ? "s" : "") + " ago";
  } else if (days > 0) {
    return days + " day" + (days > 1 ? "s" : "") + " ago";
  } else if (hours > 0) {
    return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
  } else if (minutes > 0) {
    return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
  } else {
    return seconds + " second" + (seconds > 1 ? "s" : "") + " ago";
  }
}

export function getViewCount(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 500000) {
    return (number / 1000).toFixed(0) + "k";
  } else if (number >= 100000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "k";
  } else {
    return number;
  }
}
