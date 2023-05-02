export interface IProducts {
    id: number;
    description: string;
    price: number;
    descriptionPrice: string;
    amount: number;
    images: string;
}

export interface IProductCart extends IProducts {
    amountCart: number;
}

export const products: IProducts[] = [
    { id: 1, description: "Mouse gamer", price: 439.00, descriptionPrice: "À vista no PIX", images: "./assets/mouse-3.jpg", amount: 10 },
    { id: 2, description: "Monitor muito bom", price: 1200.50, descriptionPrice: "À vista no PIX", images: "./assets/monitor-1.jpg", amount: 35 },
    { id: 3, description: "Teclado excelente", price: 749.99, descriptionPrice: "À vista no PIX", images: "./assets/teclado-1.jpg", amount: 100 },
    { id: 4, description: "Fone para quem joga FPS", price: 599.99, descriptionPrice: "À vista no PIX", images: "./assets/fone-de-ouvido-2.jpg", amount: 58 },
    { id: 5, description: "Fone de ouvido", price: 299.99, descriptionPrice: "À vista no PIX", images: "./assets/fone-de-ouvido-1.jpg", amount: 67 },
    { id: 6, description: "Fone de ouvido bom", price: 399.99, descriptionPrice: "À vista no PIX", images: "./assets/fone-de-ouvido-3.jpg", amount: 80 },
    { id: 7, description: "HD 1TB", price: 499.99, descriptionPrice: "À vista no PIX", images: "./assets/hd.jpg", amount: 28 },
    { id: 8, description: "Combo de placa de vídeos", price: 18449.99, descriptionPrice: "À vista no PIX", images: "./assets/placa-video.jpg", amount: 15 },
    { id: 9, description: "Processador Ryzen", price: 1000, descriptionPrice: "À vista no PIX", images: "./assets/processador.jpg", amount: 8 },
    { id: 10, description: "Notebook bom", price: 2500, descriptionPrice: "À vista no PIX", images: "./assets/laptop-1.jpg", amount: 5 },
    { id: 11, description: "Notebook excelente", price: 4500, descriptionPrice: "À vista no PIX", images: "./assets/laptop-2.jpg", amount: 9 },
    { id: 12, description: "Mouse barato", price: 20, descriptionPrice: "À vista no PIX", images: "./assets/mouse-1.png", amount: 25 },
    { id: 13, description: "Mouse ótimo", price: 200, descriptionPrice: "À vista no PIX", images: "./assets/mouse-2.jpg", amount: 50 },
    { id: 14, description: "Mouse pequeno", price: 50, descriptionPrice: "À vista no PIX", images: "./assets/mouse-4.jpg", amount: 62 },
    { id: 15, description: "Teclado bom", price: 159.99, descriptionPrice: "À vista no PIX", images: "./assets/teclado-2.jpg", amount: 31 },
]