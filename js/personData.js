class Person {

     //getter and setter method
     get id() { return this._id;}
     set id(id) {
         this._id=id;
     }

    get name() { return this._name; }
    set name(name) { 
        let regname=RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
        if(regname.test(name))
            this._name = name;
        else throw 'Invalid Name';
    }  

    get phone(){return this._phone;}
    set phone(phone){
        let regphone= RegExp('^([+][9][1]|[9][1]){0,1}([0-9]{1}[0-9]{9})$');
        if(regphone.test(phone))
            this._phone=phone;
        else throw 'Invalid Phone Number';
    }

    get address(){ return this._address;}
    set address(address){
            this._address=address;
    }     
    
    get city() { return this._city;}
    set city(city) {
        this._city=city;
    }

    get state() { return this._state;}
    set state(state) {
        this._state=state;
    }

    get zip() { return this._zip;}
    set zip(zip) {
        this._zip=zip;
    }
    
    toString() {
        return "id="+this.id+" Name='"+this.name+ "Phone= " +this.phone+ "Address='" +this.address+ "City='" +this.city+ "State='" +this.state+ "ZipCode='" +this.zip;
    }
}