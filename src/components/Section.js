import pictures from "../listOfFilms.json";
import Category from "../components/Category";

const Section = () => {
  pictures.map((item) => {
    //console.log(item);
    return (
      <>
        <h2>{item.category}</h2>;
        <Category />
      </>
    );
  });
};

export default Section;
