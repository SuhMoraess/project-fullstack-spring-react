import { Image } from './image.resource'

class ImageService {
    baseURL: string = 'http://localhost:8080/v1/images';

    async buscar() : Promise<Image[]> {
        const response = await fetch(this.baseURL);
        
        if(!response.ok) {
           throw new Error("Erro ao carregar as imagens");
        }

        return await response.json();
    }
}

// react hook -> useState()
export const useImageService = () => new ImageService();