import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Pagination from "@mui/material/Pagination";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";

export default function ImageListWithPagination() {
  let [page, setPage] = useState(1);
  const IMAGES_PER_PAGE = 9;

  const count = Math.ceil(data.length / IMAGES_PER_PAGE);
  const _DATA = usePagination(data, IMAGES_PER_PAGE);

  const handleChange = (e, pageNumber) => {
    setPage(pageNumber);
    _DATA.jump(pageNumber);
  };

  return (
    <div>
      <ImageList
        sx={{ width: 550, height: 600 }}
        cols={3}
        gap={16}
        rowHeight={190}
      >
        {_DATA.currentData().map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
}
