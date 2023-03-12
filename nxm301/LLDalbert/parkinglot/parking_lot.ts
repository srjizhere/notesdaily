//underStand problem 
//Entities 
// Entities function
// WorkFlow
// Genral Blueprint Entities (!implementation)
enum VehicleType{
    CAR,
    BIKE,
    TRUCK
}

class Vehicle{
    #licenceNumber : string;
    #type : VehicleType;
}
enum PriceByVehicleType {
    CAR  = 100,
    BIKE = 50,
    TRUCK = 200,
}
class Slot {
    #id : number;
    #type: VehicleType;
    #price_per_hour:number;
}

class Ticket {
    
}