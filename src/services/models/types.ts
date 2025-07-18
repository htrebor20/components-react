import { ButtonProps } from "../../components/button/types";

export type TypecharacterRick = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
            name: string;
            url: string;
        };
        location: {
            name: string;
            url: string;
        };
        image: string;
        episode: string[];
        url: string;
        created: string;
        button: ButtonProps
    }[];
};

export type FormData = {
    firstName: string;
    lastName: string;
    gender: string;
    state: string;
    startDate: Date | null;
};