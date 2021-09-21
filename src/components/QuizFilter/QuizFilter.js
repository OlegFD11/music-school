import React from "react";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const QuizFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="Поиск"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
        defoultValue="сортировка по:"
        options={[
          { value: "title", name: "По названию" },
          { value: "category", name: "По категории" },
        ]}
      />
    </div>
  );
};

export default QuizFilter;
