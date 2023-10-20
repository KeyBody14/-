class Band {
    constructor(name) {
        this.name = name;
        this.fansCount = 0;
        this.hits = [];
    }
    
    addFan() {
        this.fansCount++;
    }
    
    addHit(hit) {
        this.hits.push(hit);
    }
    
    static printAllBands(bands) {
        for (let band of bands) {
         console.log(band.name);
        }
    }
    
    static findBandWithMostFans(bands) {
        let maxFans = 0;
        let bandWithMostFans = null;
    
        for (let band of bands) {
         if (band.fansCount > maxFans) {
            maxFans = band.fansCount;
            bandWithMostFans = band;
         }
        }
    
        return bandWithMostFans;
    }
    }
    const band1 = new Band("rock");
    const band2 = new Band("hipe");
    const band3 = new Band("ass");
    
    band1.addFan();
    band2.addFan();
    band2.addFan();
    band2.addFan();
    band3.addFan();
    band3.addFan();
    band3.addFan();
    band3.addFan();

    band1.addHit("эщкере");
    band1.addHit("хайп");
    band2.addHit("кадилак");
    band3.addHit("лайки");
    band3.addHit("это хит");
    
    Band.printAllBands([band1, band2, band3]);
    
    const bandWithMostFans = Band.findBandWithMostFans([band1, band2, band3]);
    console.log(`Группа с наибольшим количеством поклонников: ${bandWithMostFans.name}`);