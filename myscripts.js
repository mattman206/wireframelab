function promptMagic() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
let usersWorkout = prompt("Do you believe in magic?").toLowerCase();
console.log(usersWorkout);

if (usersWorkout === "yes") {
  document.write("Let's get to the Illusions");
}
else if (usersWorkout !== "yes") {
  alert("Well you should!!");
  let usersWorkout = prompt("Do you believe in magic?").toLowerCase();
}

// while (usersWorkout !== "yes") {
//   let usersWorkout = prompt("Do you believe in magic?").toLowerCase();
// }