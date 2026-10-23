const userProfile = {
    name: "Nurgissa Pernebay",
    birthYear: 2007,
    isDeveloper: false,
    hobbies: ["Gaming", "Music"]
};
const profile = document.getElementById("profile");
function showProfile() {
    const age = new Date().getFullYear() - userProfile.birthYear;
    const hobbiesCount = userProfile.hobbies.length;
    profile.textContent = `Name: ${userProfile.name}
Birth Year: ${userProfile.birthYear}
Developer: ${userProfile.isDeveloper}
Hobbies: ${userProfile.hobbies}
Age: ${age}
Hobbies Count: ${hobbiesCount}`;
    console.log(userProfile);
    console.log("Age:", age, "Hobbies Count:", hobbiesCount);
}
showProfile();
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    userProfile.name = document.getElementById("username").value;
    userProfile.birthYear = Number(document.getElementById("birthYear").value);
    showProfile();
    profile.style.color = "green";
});
const taskList = document.getElementById("taskList");
document.getElementById("addItem").addEventListener("click", function() {
    const item = prompt("Enter a task:");
    if (item) {
        const li = document.createElement("li");
        li.textContent = item;
        taskList.appendChild(li);
    }
});
document.getElementById("removeItem").addEventListener("click", function() {
    if (taskList.lastElementChild) {
        taskList.lastElementChild.remove();
    }
});