var students = [
  { name: "a",
    track: "b",
    achievements: 1,
    points: 2
  },
  { name: "c",
    track: "d",
    achievements: 3,
    points: 4
  },
  { name: "e",
    track: "f",
    achievements: 5,
    points: 6
  },
  { name: "g",
    track: "h",
    achievements: 7,
    points: 8
  },
  { name: "i",
    track: "j",
    achievements: 9,
    points: 0
  }
];

function main() {
  for (i=0; i<students.length; i++) {
    document.write('<br>');
    document.write('<b>Name: ' + students[i].name + '</b><br>');
    document.write('Track: ' + students[i].track + '</b><br>');
    document.write('Achievements: ' + students[i].achievements + '</b><br>');
    document.write('Points: ' + students[i].points + '</b><br>');
    document.write('__________________________________'+'<br>');
  };
}

function query() {
  var query = prompt("Please enter the name of the person you would like to search.");
  search(query);
}

function search(query) {
  
  if(query === 'quit') {
    return;
  }
  
  for (i=0; i<students.length; i++) {
    if(students[i].name === query) {
      document.write('<b>Name: ' + students[i].name + '</b><br>');
      document.write('Track: ' + students[i].track + '</b><br>');
      document.write('Achievements: ' + students[i].achievements + '</b><br>');
      document.write('Points: ' + students[i].points + '</b><br>'); 
      return;
    }
  }
  
  var again = prompt("No results found. Please try again or type 'quit' to exit this prompt.");
  search(again);
}
