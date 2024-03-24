/**
 * build object in steps
 */

class BoatBuilder {
    withMotors(count, brand, model){
        this.hasMotor = true;
        this.motorCount = count;
        this.motorModel = model;
        return this;
    }

    withSails(count, material, color){
        this.hasSails = true;
        this.sailsCount = count;
        this.sailsMaterial = material;
        this.sailsColor = color;
        return this;
    }
    hullColor(color){
        this.hullColor = color;
    }

    withCabin(){
        this.hasCabin = true;
    }

    build(){
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel: this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsColor: this.sailsColor,
            hullColor: this.hullColor,
            hasCabin: this.hasCabin
        })
    }
}

const boat = new BoatBuilder().withMotors("", "", "").hasCabin(true).build();