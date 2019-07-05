export const API = {
    default: 'http://200.134.18.55:8080/adb-api-data/'
}

export function getDefaultURL(resource: string){
    return API.default + resource;
}