import packageJson from '../../package.json';

export const feVersion: string = packageJson.version;

export const MODULE_NAMES = {
    PlacementModule: "placements",
    CoursesModule: "courses",
    BlogsModule: "blogs",
    ContactModule: "contact",
   
}

export const environment = {
    baseUrl: "http://localhost:3000/",
    apiVersion: "api/",
    appBasePath: "",
    production: false,
    googleMapsApiKey: "AIzaSyB0000000000000000000000000000000",
    ...MODULE_NAMES
}