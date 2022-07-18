


function UseGenre(selectedGenre) {
  
  if (selectedGenre?.length < 1) 
  return "";

  const GenreIds=selectedGenre?.map((g)=>g.id);
  console.log(GenreIds);
  return GenreIds?.reduce((acc,curr)=>acc+","+curr);
};

export default UseGenre