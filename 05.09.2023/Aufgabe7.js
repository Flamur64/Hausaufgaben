const buch = {
    titel: "Die Verwandlung",
    autor: "Franz Kafka",
    jahr: 1915,
    information: function() {
      return this.titel + ' von ' + this.autor + ', veröffentlicht im Jahr ' + this.jahr
    }
  }
  
  buch.jahr = 1912
  
  console.log(buch.information())