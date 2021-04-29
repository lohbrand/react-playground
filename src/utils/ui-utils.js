import { FlexCss } from "../styles";

export class UIUtils {
  static flexStyle = (props) => {
    const {
      row,
      column,
      between,
      around,
      middle,
      center,
      wrap,
      left,
      right,
      top,
      bottom,
      selfTop,
      selfMiddle,
      selfBottom,
      flex
    } = props;
    return [
      row ? FlexCss.flexRow : null,
      column ? FlexCss.flexColumn : null,
      between ? FlexCss.flexItemsBetween : null,
      around ? FlexCss.flexItemsAround : null,
      middle ? FlexCss.flexItemsMiddle : null,
      center ? FlexCss.flexItemsCenter : null,
      wrap ? FlexCss.flexWrap : FlexCss.flexNoWrap,
      left ? FlexCss.flexItemsLeft : null,
      right ? FlexCss.flexItemsRight : null,
      top ? FlexCss.flexItemsTop : null,
      bottom ? FlexCss.flexItemsBottom : null,
      selfTop ? FlexCss.flexSelfTop : null,
      selfMiddle ? FlexCss.flexSelfMiddle : null,
      selfBottom ? FlexCss.flexSelfBottom : null,
      (flex || -1) > -1 ? { flex } : null
    ];
  };
}
