const Traveller = function (journeys) {
  this.journeys = journeys
}

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

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport == transport
  })
  return result
}

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

//not working
Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.filter((journey, index) => {
    return this.journeys.indexOf(journey) == index
  })
  return result
}

module.exports = Traveller
