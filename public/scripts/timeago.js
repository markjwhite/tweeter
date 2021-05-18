$(document).ready(() => {
  const newTime = timeago.format(new Date());
  const timeClass = $(".time-keeper")
  timeClass.text(newTime);
})