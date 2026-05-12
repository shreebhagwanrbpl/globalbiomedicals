import ProductsPage from "@/app/components/ProductsPage";

export default function Page({ params }) {

  const district = params?.district || "";

  const city = district
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );

  return <ProductsPage city={city} />;
}