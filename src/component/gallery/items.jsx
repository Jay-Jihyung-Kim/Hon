import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import CloseIcon from "@mui/icons-material/Close";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { mobile, largeTablet } from "../../util/responsive";
import { gallery_images } from "../../util/sushi_list";
import _ from "lodash";
import { HashLink } from "react-router-hash-link";
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
  max-width: 2000px;
  margin: 0 auto;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  flex: 0 0 100%;
  max-width: 1631px;
  font-size: 7rem;
  padding: 5rem 0 2rem;
  margin: 0 auto;
`;

const GalleryImage = styled.img`
  width: 400px;
  height: 250px;
  object-fit: cover;
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

const Card = styled.div`
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: ${(props) => (props.status === true ? "block" : "none")};
`;

const CardContainer = styled.div`
  width: 500px;
  height: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border: 1px solid white;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  ${mobile({ width: "350px", height: "370px" })}
`;
const CardParts = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardTitle = styled.span`
  font-size: 2rem;
  max-width: 400px;
  font-weight: bold;
`;
const CardDescription = styled.span`
  font-size: 1.5rem;
  padding: 0.75rem 0;
`;
const CardImage = styled.img`
  width: 450px;
  height: 300px;
  margin: 0 auto;
  margin-top: 1rem;
  ${mobile({ width: "300px", height: "210px" })}
`;
const CardPrice = styled.span`
  font-size: 1.5rem;
  padding-top: 0.75rem;
`;

const Items = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItem, setCurrentItem] = useState({
    id: 1,
    name: "Tuna Roll",
    description: "Cut rolls (6pc)",
    type: "roll",
    price: "6.50",
  });
  const [ItemsPerPage, setItemsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [itemDetail, setItemDetail] = useState(false);

  const options = [
    { value: "all", label: "All" },
    { value: "starters", label: "Starters" },
    { value: "sushi combo", label: "Sushi Combo" },
    { value: "sushi", label: "Sushi" },
    { value: "roll", label: "Rolls" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#3d3d3d" : "none",
      padding: 10,
    }),
    control: (provided, state) => ({
      ...provided,
      width: 200,
      fontSize: "4rem",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const handlePageClick = (e) => {
    setCurrentPage(e);
  };

  const handleInfo = (e) => {
    setCurrentItem(e);
    handleItemDetails();
  };

  const handleCategory = (e) => {
    if (e.value === "all") {
      setSelectedCategory([]);
      setItemsPerPage(12);
    } else {
      gallery_images.map((image) => {
        if (
          image.type === e.value &&
          selectedCategory.includes(image) === false
        )
          selectedCategory.push(image);
        if (image.type !== e.value && selectedCategory.includes(image) === true)
          selectedCategory.splice(selectedCategory.indexOf(image), 1);
        setItemsPerPage(selectedCategory.length);
        setSelectedCategory(selectedCategory);
        setCurrentPage(1);
      });
    }
  };

  function handleItemDetails() {
    if (itemDetail === false) {
      disableBodyScroll(true);
      setItemDetail(true);
    }
    if (itemDetail === true) {
      clearAllBodyScrollLocks();
      setItemDetail(false);
    }
  }

  const filteredList =
    selectedCategory.length > 0 ? selectedCategory : gallery_images;
  const paginatedList = paginate(filteredList, currentPage, ItemsPerPage);

  const pageNumber = Math.ceil(filteredList.length / ItemsPerPage);
  if (pageNumber < 1) return null;
  const pagerange = _.range(1, pageNumber + 1);

  return (
    <Background>
      <Container>
        <CategoryList>
          <Select
            placeholder={"Find by Category"}
            onChange={(e) => handleCategory(e)}
            options={options}
            styles={customStyles}
          />
        </CategoryList>
        {paginatedList.map((image) => {
          return (
            <GalleryImage
              onClick={() => handleInfo(image)}
              key={image.id}
              src={require(`../../image/item_${image.id}.jpg`)}
              id="GalleryItems"
            />
          );
        })}
        <Card status={itemDetail} onClick={handleItemDetails}>
          <CardContainer>
            <CardParts>
              <CardTitle>{currentItem.name}</CardTitle>
              <CloseIcon
                style={{ fontSize: "2rem", cursor: "pointer" }}
                onClick={handleItemDetails}
              />
            </CardParts>
            <CardParts>
              <CardDescription>{currentItem.description}</CardDescription>
              <CardPrice>${currentItem.price}</CardPrice>
            </CardParts>
            <CardImage
              src={require(`../../image/item_${currentItem.id}.jpg`)}
            />
          </CardContainer>
        </Card>
      </Container>
      <PaginationContainer>
        {pagerange.map((page) => {
          return (
            <HashLink to="#GalleryItems" style={{ textDecoration: "none" }}>
              <Pagination
                onClick={() => handlePageClick(page)}
                status={page === currentPage}
                key={page}
              >
                {page}
              </Pagination>
            </HashLink>
          );
        })}
      </PaginationContainer>
    </Background>
  );
};

export default Items;
