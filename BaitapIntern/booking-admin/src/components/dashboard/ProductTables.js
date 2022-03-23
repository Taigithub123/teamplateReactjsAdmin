import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const ProductTables = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  const navigateToAdd = () => {
    navigate("/product/add");
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Danh Sách Sản Phẩm</CardTitle>
          <div className="d-flex">
            <CardSubtitle className="mb-2 text-muted me-auto" tag="h6">
              Tất cả sản phẩm có trong cửa hàng
            </CardSubtitle>

            <Button onClick={navigateToAdd} className="btn" color="primary">
              Thêm Sản Phẩm
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Tên Sản Phẩm</th>
                <th>Loại Sản Phẩm</th>
                <th>Mô Tả</th>
                <th>Giá Tiền</th>
                <th>Hình Ảnh</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index} className="border-top">
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductTables;
