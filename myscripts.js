function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
let usersWorkout = prompt("Do you believe in magic?");
if (usersWorkout == "YES") {
  console.log("Let's get to the Illusions");
}
else if (usersWorkout == "yes") {
  console.log("This site is for you");
}
if (usersWorkout == "YES") {
  document.write("THIS SITE IS FOR YOU!");
}
else if (usersWorkout.toLowerCase() == "no") {
  document.write("You really should");
}
else {
  document.write("This site might be for you");
}
