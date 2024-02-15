var array = [
  {
    "Name": "Jack Schulz",
    "Grade": "7",
    "Classes": [
      {
        "ClassName": "Becoming Society",
        "Period": "A1",
        "Location": "1.102"
      },
      {
        "ClassName": "PACTivity With David",
        "Period": "A2",
        "Location": "Deck"
      }
    ]
  },
  {
    "Name": "Aaron Who",
    "Grade": "6",
    "Classes": [
      {
        "ClassName": "Algebra 1",
        "Period": "A2",
        "Location": "1.102"
      },
      {
        "ClassName": "PACTivity With Julie",
        "Period": "A1",
        "Location": "Deck"
      }
    ]
  },
  {
    "Name": "Emma Johnson",
    "Grade": "6",
    "Classes": [
      {
        "ClassName": "Art",
        "Period": "B1",
        "Location": "Art Room"
      },
      {
        "ClassName": "Music",
        "Period": "B2",
        "Location": "Music Room"
      }
    ]
  },
  {
    "Name": "Ethan Brown",
    "Grade": "7",
    "Classes": [
      {
        "ClassName": "Geography",
        "Period": "C1",
        "Location": "3.101"
      },
      {
        "ClassName": "Computer Science",
        "Period": "C2",
        "Location": "Computer Lab"
      }
    ]
  },
  {
    "Name": "Olivia Martinez",
    "Grade": "6",
    "Classes": [
      {
        "ClassName": "Spanish",
        "Period": "A1",
        "Location": "1.201"
      },
      {
        "ClassName": "Health",
        "Period": "A2",
        "Location": "Gym"
      }
    ]
  },
  {
    "Name": "Liam Thompson",
    "Grade": "7",
    "Classes": [
      {
        "ClassName": "Literature",
        "Period": "D1",
        "Location": "Library"
      },
      {
        "ClassName": "Drama",
        "Period": "D2",
        "Location": "Auditorium"
      }
    ]
  },
  {
    "Name": "Sophia Anderson",
    "Grade": "6",
    "Classes": [
      {
        "ClassName": "Physical Education",
        "Period": "B1",
        "Location": "Gym"
      },
      {
        "ClassName": "History",
        "Period": "B2",
        "Location": "2.102"
      }
    ]
  }
]
function sortList(array, sortType) {
array.sort(function (a, b) {
  if (a[sortType] < b[sortType]) {
    return -1;
  }
  if (a[sortType] > b[sortType]) {
    return 1;
  }
  return 0;
});
return array;
}
//sort by name then grade
array = sortList(array, "Name")
array = sortList(array, "Grade")
//sort classes by period
//sortList(array[1].Classes, "Period")