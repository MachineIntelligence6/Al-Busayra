import { v4 as uuidv4 } from "uuid";


export const InventoryListData = [
    {
        id: uuidv4(),
        bike_plate_no: "1213",
        picture: "img.jpg",
        isOwner: true,
        isInsuranced: true,
        cost: "$1200",
        status: true,
        allocated_company: {
            name: "Al Hamama",
            icon: "",
            email: "alhamama@gmail.com",
        },
        allocated_rider: {
            name: "Mujtaba",
            email: "mujtaba@gmail.com",
            icon: ""
        }
    },
    {
        id: uuidv4(),
        bike_plate_no: "1213",
        picture: "img.jpg",
        isOwner: true,
        isInsuranced: true,
        cost: "$1200",
        status: false,
        allocated_company: null,
        allocated_rider: null
    },
    {
        id: uuidv4(),
        bike_plate_no: "1213",
        picture: "img.jpg",
        isOwner: true,
        isInsuranced: true,
        cost: "$1200",
        status: true,
        allocated_company: {
            name: "Al Dobya",
            icon: "",
            email: "aldobya@gmail.com",
        },
        allocated_rider: {
            name: "Majid",
            email: "majid@gmail.com",
            icon: ""
        }
    },

];