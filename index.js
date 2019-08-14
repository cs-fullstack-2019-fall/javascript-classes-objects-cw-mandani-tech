// # JavaScript-classes_objects-cw
//
// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName,
// descriptionOfRepository, and code. Create a function that prints all properties.
// Create an object of the class and use the function.

class GitHubRepository
{
    constructor ( userName , fileName, descriptionOfRepository,code )
    {
        this.userName_prop = userName;
        this.fileName_prop = fileName;
        this.descriptionOfRepository_prop = descriptionOfRepository;
        this.code_prop= code;
    }

    printProp()

    {
        console.log(this.userName_prop);
        console.log(this.fileName_prop);
        console.log(this.descriptionOfRepository_prop);
        console.log(this.code_prop);
    }
}


let newGit = new GitHubRepository("hamida","myFile", "codeschoolcode", "crappy");
 newGit.printProp();






//
// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased.
// Create a method to change the rating and another one to change the yearReleased properties.
// Create an object of the class and use the two methods you created.
//

class Movie

{
    constructor (movieName, rating, yearReleased)
{
    this.moviename_prop = movieName;
    this.rating_prop = rating;
    this.yearReleased_prop = yearReleased;

}

        changeRating (rating_para)

        {

         this.rating_prop = rating_para;
         return this.rating_prop;

        }

        changeYear (year_para)

        {

            this.yearReleased_prop = year_para;
            return this.yearReleased_prop

        }


}

 let newMovie = new Movie("ddjl","3.5", 1995);
 console.log(newMovie);

 newMovie.changeRating("5.5"); // console.log(classInstance.yourFunction(value)) to print what you are returning
 newMovie.changeYear("2003");
 console.log(newMovie);







//     ### Challenge 1: CORRECT
// Create a Person class with three properties: name, weight, and height.
// Create a method that can calculate the BMI of a person using the formula below.
// Create an object of the class and use the function.
//
// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.



class Person
{
    constructor(myName,weight,height)

    {

    this.myName_p= myName;
    this.weight_p= weight;
    this.height_p=height;

    }

    bmi()
{
  let  my_bmi = ((this.weight_p/ (this.height_p * this.height_p)) * 703);
  return my_bmi;


}

}

let  newPerson =  new Person ("hamida",144,5.2);
console.log(newPerson.bmi());

