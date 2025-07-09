import { products } from "@/app/context/productsdata";


export async function GET() {
    return Response.json(products);
}