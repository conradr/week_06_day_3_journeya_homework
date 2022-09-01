const Traveller = function (journeys) {
  this.journeys = journeys
}
//rewrite this with a map
Traveller.prototype.getJourneyStartLocations = function () {
  let startLocations = []
  const result = this.journeys.forEach((journey) => {
    startLocations.push(journey.startLocation)
  })
  return startLocations
}

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = []
  const result = this.journeys.forEach((journey) => {
    endLocations.push(journey.endLocation)
  })
  return endLocations
}

// returns in a beeter place than the next function
Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
}

//don't need to add the function to a result var
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
  return result
}

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0
  this.journeys.forEach((journey) => {
    total += journey.distance
  })
  return total
}

//working now
Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportModes = this.journeys.map((journey) => {
    return journey.transport
  })

  return transportModes.filter((transport, index) => {
    return transportModes.indexOf(transport) === index
  })
}

module.exports = Traveller
