import ItemToFindList from "./ItemToFindList";
const CharactersContextMenu = ({ x, y, showMenu, itemList }) => {
    //TODO FOUND PROP A GORE RENDER ET
    //BUTTON CLICK FONKSİYONU YAZILACAK
    //STYLELARI STYLED COMPONENT YAP
  const style = () => {
    return {
      // height: 200,
      // width: 150,
      // borderRadius: 10,
      // backgroundColor: "#FF5C58",
      // color: "#FCD2D1",
      // flexDirection: "column",
      // padding: 10,
      top: y,
      left: x,
      position: "absolute",
      display: showMenu ? "block" : "none",
    };
  };


  return (
    <div style={style()}>
      {/* <div style={styles.div}>Button 1</div>
      <div style={{ ...styles.div, ...styles.margin }}>Button 2</div>
      <div style={styles.div}>Button 3</div> */}
      <ItemToFindList itemList={itemList} isContextMenuItem={true}/>
    </div>
  );
};

const styles = {
  div: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE8F8F",
    color: "#FFEDD3",
    fontWeight: "bold",
    cursor: "pointer",
  },
  margin: {
    margin: "10px 0",
  },
};

export default CharactersContextMenu;
