
class User {
    constructor(name){
        this.name = name;
    }

}

class DecoratedUser{
    constructor (user, street, city){
        this.user = user;
        this.name = user.name;
        this.street = street;
        this.city = city;
    }
    logger(){
        console.log(`Decorated user: ${this.name} who lives in ${this.street} and ${this.city}.`)
    }

} 


class Info{
    log(obj){
        console.info(obj)
    }
}
class Warn {
    log(obj){
        console.log(obj);
    }
}   
class Error {
    log(obj){
        console.error(obj)
    }
} 
class Table{
    log(obj){
    console.table(obj);
    }
  }


  class Strategy{
    alogrithms="";
      setStrategy(alogrithms){
          this.alogrithms = alogrithms;
  
      }
  
     logging(obj){
         return this.alogrithms.log(obj);
  
     }
  }


  const strategy = new Strategy();
  strategy.setStrategy(new Info());
  let y = strategy.logging(["table", "table"]);
  console.log(y);


  class Fib {
    fibCache = {};
    fibanocci(n) {
        if (this.fibCache[n]) {
            return this.fibCache[n];
        }
        if (n < 2) {
            return 1;
        }
        return this.fibCache[n] = this. fibanocci(n - 1) + this. fibanocci(n - 2);
    }
}

class Regular {
    // constructor(){
    //    what is the lumen description?
    
}

class EnergySaver{
    
}


class Factory{
    createBulb(type){
        let bulb;
        if(type ==="regular"){
            bulb = new Regular();
        }

        if(type ==="energySaver"){
            bulb = new EnergySaver();
        }
        bulp.type = type;
    
        return bulb;
    }


}
