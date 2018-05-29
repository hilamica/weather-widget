export interface City {
    id: number;
    name: string;
}

interface weatherInfo {
    description: string;
    icon: string;
}

export interface CityInfo {
    id: number;
    name: string,
    main: {
        humidity: number;
        pressure: number;
        temp: number;
    }
    weather: weatherInfo[]
}
