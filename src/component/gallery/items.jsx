import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { mobile, tablet, largeTablet } from "../../util/responsive";
import { gallery_images } from "../../util/sushi_list";
import _ from "lodash";
import { paginate } from "../../util/paginate";

const Background = styled.div`
  background-color: #eae4de;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding-top: 5rem;
  max-width: 2000px;
  margin: 0 auto;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 2000px;
`;

const GalleryImage = styled.img`
  width: 400px;
  height: 250px;
  object-fit: fill;
  border: 5px solid #f5f5f5;
  cursor: pointer;
  ${largeTablet({ width: "300px", height: "187.5px" })}
  ${mobile({ width: "150px", height: "150px" })};
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  padding: 3rem 0;
`;

const Pagination = styled.span`
  font-size: 2rem;
  background-color: ${(props) => (props.status === true ? "#3d3d3d" : "none")};
  color: ${(props) => (props.status === true ? "white" : "black")};
  padding: 0.2rem 0.75rem;
  cursor: pointer;
`;

const Items = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(12);
  const pageNumber = Math.ceil(gallery_images.length / ItemsPerPage);
  const pagerange = _.range(1, pageNumber + 1);

  const handlePageClick = (e) => {
    setCurrentPage(e);
  };

  const handleCategory = (e) => {
    console.log(e.target.value);
  };

  const paginatedList = paginate(gallery_images, currentPage, ItemsPerPage);

  return (
    <Background>
      <CategoryList>
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            style={{ fontSize: "2rem" }}
          >
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              eventkey="1"
              onSelect={() => handleCategory("1")}
              style={{ fontSize: "2rem" }}
            >
              Starters
            </Dropdown.Item>
            <Dropdown.Item style={{ fontSize: "2rem" }}>
              Sushi Combo
            </Dropdown.Item>
            <Dropdown.Item style={{ fontSize: "2rem" }}>Sushi</Dropdown.Item>
            <Dropdown.Item style={{ fontSize: "2rem" }}>
              Special Rolls
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </CategoryList>
      <Container>
        {paginatedList.map((image) => {
          return (
            <GalleryImage
              onClick={handlePageClick}
              key={image.id}
              src={require(`../../image/item_${image.id}.jpg`)}
            />
          );
        })}
      </Container>
      <PaginationContainer>
        {pagerange.map((page) => {
          return (
            <Pagination
              onClick={() => handlePageClick(page)}
              status={page === currentPage}
            >
              {page}
            </Pagination>
          );
        })}
      </PaginationContainer>
    </Background>
  );
};

export default Items;
