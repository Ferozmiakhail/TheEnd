import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { useRouter } from 'next/router';

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getProducts = async () => {
  try {
    const products = await readClient.fetch(
      groq`*[_type == "product"]{
        _id,
        name,
        "image": image[].asset->url,
        "imageC": imageC[].asset->url,
        stringC,
        "slug": slug.current,
        productcategory,
        price,
        price13,
        price14,
        price15,
        price2,
        Ldetails,
        Sdetails,
        datapay,
      }`
    );

    return products;
  } catch (error) {
    console.log(error);
  }
}

export const getproductbyslug = async (slug: string) => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        name,
        "image": image[].asset->url,
        "imageC": imageC[].asset->url,
        stringC,
        "slug": slug.current,
        productcategory,
        price,
        price13,
        price14,
        price15,
        price2,
        Ldetails,
        Sdetails,
        datapay,
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resource" && category == $category]{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`,
      { category }
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}
