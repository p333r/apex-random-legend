const legends = [
  "Ash",
  "Bangalore",
  "Bloodhound",
  "Caustic",
  "Crypto",
  "Fuse",
  "Gibraltar",
  "Lifeline",
  "Loba",
  "Mad Maggie",
  "Mirage",
  "Newcastle",
  "Octane",
  "Pathfinder",
  "Revenant",
  "Seer",
  "Valkyrie",
  "Wraith",
  "Horizon",
  "Rampart",
  "Wattson",
  "Vantage",
];

const legendsOut = [];

function pickRandomLegend() {
  let x = legends[Math.floor(Math.random() * legends.length)];
  document.getElementById("reloadBtn").style.display = "none";
  document.getElementById("legendPic").src = "";
  document.getElementById("legendName").innerHTML = "";

  setTimeout(() => {
    document.getElementById("rollBtn").style.display = "none";
    document.getElementById("hourGlass").style.display = "block";
    document.getElementById("legendName").innerHTML = "Picking legend...";
  }, 200);

  setTimeout(() => {
    document.getElementById("hourGlass").style.display = "none";
    document.getElementById("legendPic").src =
      "images/" + x.toLowerCase().replace(/\s/g, "") + ".png"; //removes all whitespace and converts to lowercase to match filename.

    document.getElementById("legendName").innerHTML = x;
  }, 3000);

  setTimeout(() => {
    document.getElementById("reloadBtn").style.display = "inline";
  }, 5000);
}

function legendList() {
  const ul = document.getElementById("legendsUl");

  for (i = 0; i < legends.length; i++) {
    text = legends[i];
    ul.innerHTML +=
      "<li id=" +
      text +
      ">" +
      text +
      '<button onclick="removeLegend(this.parentNode.id)">Remove</button> </li>';
  }
}

function removeLegend(id) {
  document.getElementById(id).remove();
  let i = legends.indexOf(id);
  const rmLegend = legends.splice(i, 1);
  legendsOut.push(rmLegend[0]);
  console.log(legendsOut);
  console.log(legends);
}
//TODO: add field for excluding legends you dont want from pool
