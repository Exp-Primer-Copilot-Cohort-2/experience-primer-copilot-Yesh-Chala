function skillsMember() {
  let member = {
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JS"],
  };
  let { name, age, skills } = member;
  console.log(name, age, skills);
}