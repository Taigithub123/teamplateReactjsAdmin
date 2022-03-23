import axios from "axios";
import { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ProductAdd = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, category, description, price, images);
    const { data } = await axios.post(
      "/api/products",
      {
        title: name,
        description: description,
        price: price,
        createdAt: new Date().toISOString(),
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    console.log(data);
  };
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Form Nhập Sản Phẩm
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="productName">Tên Sản Phẩm</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="productName"
                  name="productName"
                  placeholder="Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Loại Sản Phẩm</Label>
                <Input
                  onChange={(e) => setCategory(e.target.value)}
                  id="productCategory"
                  name="productCategory"
                  type="select"
                >
                  <option value="caphe">Cà Phê</option>
                  <option value="tra">Trà</option>
                  <option value="sua">Sữa</option>
                  <option value="trasua">Trà Sữa</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="productDescription">Mô Tả</Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="productDescription"
                  name="productDescription"
                  placeholder="Description"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productPrice">Giá Tiền</Label>
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  id="productPrice"
                  name="productPrice"
                  placeholder="Price"
                  type="number"
                />
              </FormGroup>

              <FormGroup>
                <Label for="productImage">Hình Ảnh</Label>
                <Input
                  id="productImage"
                  name="productImage"
                  type="file"
                  onChange={(e) => setImage(e.target.value)}
                />
              </FormGroup>

              <Button type="submit">Nhập</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductAdd;
