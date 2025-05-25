import GridColumn from "./GridColumn";
const GridSection = (props) => {
  const { gridCols, result } = props;
  if (gridCols === 1) {
    return <GridColumn items={result} />;
  }
  if (gridCols === 2) {
    const col1 = result.filter((value, index) => {
      return index % 2 === 0;
    });
    const col2 = result.filter((value, index) => {
      return index % 2 === 1;
    });
    return (
      <>
        <GridColumn items={col1} />
        <GridColumn items={col2} />
      </>
    );
  }
  if (gridCols === 3) {
    const col1 = result.filter((value, index) => {
      return index % 3 == 0;
    });
    const col2 = result.filter((value, index) => {
      return index % 3 === 1;
    });
    const col3 = result.filter((value, index) => {
      return index % 3 === 2;
    });

    return (
      <>
        <GridColumn items={col1} />
        <GridColumn items={col2} />
        <GridColumn items={col3} />
      </>
    );
  }
  if (gridCols === 4) {
    const col1 = result.filter((value, index) => {
      return index % 4 == 0;
    });
    const col2 = result.filter((value, index) => {
      return index % 4 == 1;
    });
    const col3 = result.filter((value, index) => {
      return index % 4 == 2;
    });
    const col4 = result.filter((value, index) => {
      return index % 4 == 3;
    });
    return (
      <>
        <GridColumn items={col1} />
        <GridColumn items={col2} />
        <GridColumn items={col3} />
        <GridColumn items={col4} />
      </>
    );
  }
};

export default GridSection;
