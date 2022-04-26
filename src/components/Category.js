import pictures from "../listOfFilms.json";

const Category = () => {
  pictures.map((item) => {
    return (
      <div className="category">
        {item.images.map((img) => {
          return <img src={img} alt="Films image" />;
        })}
      </div>
    );
  });
};

export default Category;
