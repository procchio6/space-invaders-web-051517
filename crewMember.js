class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  engageWarpDrive() {
    if (this.position === 'Pilot' && this.currentShip.constructor === Spaceship) {
      this.currentShip.warpDrive = 'engaged!'
    }else {
      return 'had no effect'
    }
  }

  setsInvisibility() {
    if (this.position === 'Defender' && this.currentShip.constructor === Spaceship) {
      this.currentShip.cloaked = true
    }else {
      return 'had no effect'
    }
  }

  chargePhasers() {
    if (this.position === 'Gunner' && this.currentShip.constructor === Spaceship) {
      this.currentShip.phasersCharge = 'charged!'
    } else {
      return 'had no effect'
    }
  }
}
