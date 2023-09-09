export interface Author{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ipAddress: string;
}

export const authors = [
    {
        id: 1,
        firstName: "Flora",
        lastName: "Twell",
        email: "twell@phora.cz",
        gender: "Female",
        ipAddress: "99.180.237.33"
    },
    {
        id: 2,
        firstName: "Flora",
        lastName: "Twell 1",
        email: "twell1@phora.cz",
        gender: "Female",
        ipAddress: "99.180.237.33"
    }
]