const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const data = [
    {id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    numberOfStudents: 28
    },
    {id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    numberOfStudents: 24
    },
    {id: 3,
    cohortName: "17-01-WD-PX",
    cohortCode: "g109",
    numberOfStudents: 30
    },
    {id: 4,
    cohortName: "17-01-WD-BD",
    cohortCode: "g110",
    numberOfStudents: 29
    },
]


app.get("/data", function(request, response) {
  let idThing = request.params.idThing
  console.log(idThing)
  response.json(data)
})

app.get("/:id", function(request, response) {
  for (let i=0;i<data.length;i++) {
    if (data[i].id == id){
      return data[i];
    }
  }
  let idThing = request.params.idThing
  console.log(idThing)
  response.json(data)
})

app.listen(3000)

console.log("it's hearing me")
