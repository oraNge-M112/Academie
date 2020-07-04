function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class Disk {
  constructor(size) {
    this.size = size
    this.color = randomColor()
  }
}

class Rod {
  constructor(id, numberOfDisks, size) {
    this.id = id
    this.size = size
    this.disks = []
    createDisks(numberOfDisks)
  }
  createDisks(numberOfDisks) {
    for (let size = numberOfDisks; size > 0; size--) {
      this.disks.push(new Disk(size))
    }
  }
  put(disk) {
    if (this.canPutDisk(disk)) {
      this.disks.push(disk)
    } else {
      throw new Error('Cannot place disk')
    }
  }
}