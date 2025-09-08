import DetailClient from '@/components/detail/DetailClient';
import { products } from '@/utils/products';

type PageProps = {
  params: {
    productId: string;
  };
};

const ProductDetailPage = ({ params }: PageProps) => {
  const product = products.find(p => p.id === params.productId);

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default ProductDetailPage;


