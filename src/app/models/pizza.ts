export class Pizza{
    Name: string = ""; 
    Cost: number = 0;
    photoUrl:string = "./assets/images/pizza.jpg";

    public constructor(name : string, cost : number, photoUrl: string) {
        this.Name = name;
        this.Cost = cost;
        this.photoUrl = photoUrl;
    }
}