//1) Class Movie
//Constructor for the class movie
class Movie{
    constructor(title,studio,rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }

    // method getPG

    getPG(arr)
    {
        const newArr = [];
        arr.forEach((element) => {
            if(element == this.title && this.rating=="PG"){
                newArr.push(this.title);
            }
            
        });
        return newArr;

    }
}

//Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const movies = new Movie("Casino Royale","Eon Productions","PG13")
console.log(movies);

console.log(movies.getPG(["Casion Royal","Intersteller","Dark Night"]));



// Circle class

class Circle{
    constructor(radious = 1.0, color = "red") {
        this.radious = radious;
        this.color = color;
        
    }
    getRadious(){
        return this.radious
    }
    setRadious(){
        return this.radious
    }
    getColor(){
        return this.color
    }
    setColor(){
        return this.color
    }
    toString(){
        return `Circle[radious = ${this.radious},color = ${this.color}]`
    }
    getArea(){
        let area = 3.14 * Math.pow(this.radious,2);
        return area;
    }
    getCircumference(){
        let circumference = 2 * 3.14 * this.radious;
        return circumference;
    }


}

let circle = new Circle(2,"orange");
console.log(circle);
console.log(circle.getRadious());
console.log(circle.getColor());
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());
circle.setColor("Blue");
console.log(circle.getColor());


// 3)Write a person class to hold the details


class person{
    constructor(fistName,lastName,age,course)
    {
        this.fistName = fistName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;

        }
        getdetails(){
            console.log(`
            First_name:${this.fistName}
            Last_name:${this.lastName}
            Age :${this.age}
            coutse:${this.course}
            `)
        }
}

let Person_details = new person("Vishnu","Vardhan M ",24,"FSD")
console.log(Person_details);
Person_details.getdetails();
console.log(Person_details.fistName);
console.log(Person_details.lastName);
console.log(Person_details.age);
console.log(Person_details.course);



// 4)  write a class to calculate the Uber price.


class Uber_price{
    constructor(ride_start,ride_end,distance,trip){

        this.ride_start = ride_start;
        this.ride_end = ride_end;
        this.distance = distance;
        this.trip = () => {
            if (trip == "One way") {
              return 1;
            } else return 2;
          };
    }

    getprice(){
        const price = this.distance * 25 * this.trip();
        return price;
    }

    getInfo(){
        console.log(`
        PickUp : ${this.ride_start}
        Drop : ${this.ride_end}
        Distance : ${this.distance}
        Trip : ${this.trip() == 1 ? "one way" : "two way"}
        Trip price : ${this.getprice()}
        `);

    }

}

let details = new Uber_price("COIMBATORE","Chennai",12,"one way");
console.log(details);
details.getInfo();
console.log(details.getprice());






