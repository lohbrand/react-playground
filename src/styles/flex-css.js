export const FlexCss = ({ width, height }) => ({
  winWidth: {
    width
  },
  winHeight: {
    height
  },
  // flex
  flexColumn: {
    flexDirection: "column"
  },

  flexRow: {
    flexDirection: "row"
  },

  flexItemsMiddle: {
    alignItems: "center"
  },

  flexItemsTop: {
    alignItems: "flex-start"
  },

  flexItemsBottom: {
    alignItems: "flex-end"
  },

  flexItemsLeft: {
    justifyContent: "flex-start"
  },

  flexItemsCenter: {
    justifyContent: "center"
  },

  flexItemsRight: {
    justifyContent: "flex-end"
  },

  flexSelfTop: {
    alignSelf: "flex-start"
  },

  flexSelfMiddle: {
    alignSelf: "center"
  },

  flexSelfBottom: {
    alignSelf: "flex-end"
  },

  flexItemsAround: {
    justifyContent: "space-around"
  },

  flexItemsBetween: {
    justifyContent: "space-between"
  },

  flexNoWrap: {
    flexWrap: "nowrap"
  },

  flexWrap: {
    flexWrap: "wrap"
  }
});
