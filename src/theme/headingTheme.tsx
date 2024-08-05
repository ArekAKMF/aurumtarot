import { defineStyle } from "@chakra-ui/react";

const h1Font = { fontSize: ["1.875em", "1.875em", "2.875em", "2.875em"] }; //30px - 46px
const h2Font = { fontSize: ["1.625em", "1.625em", "1.688em", "1.688em"] }; //26px - 27px
const h3Font = { fontSize: ["1.125em", "1.125em", "1.375em", "1.375em"] }; //18px - 22px

const headingTheme = defineStyle({
  baseStyle: {
    color: "black",
    lineHeight: "1.5",
    fontWeight: "700",
    boxSizing: "border-box",
    marginTop: "3em",
    marginBottom: "1.5em",
  },
  size: {
    h1: {
      ...h1Font,
    },
    h2: {
      ...h2Font,
    },
    h3: {
      ...h3Font,
      marginTop: "1,5em",
      marginBottom: "1.1em",
    },
  },
  variants: {
    pageTitle: {
      ...h1Font,
      marginBottom: ".5em",
      marginTop: "0",
      lineHeight: "1.2",
    },
    sectionTitle: {
      ...h2Font,
    },
    title: {
      ...h3Font,
    },
    orderTitle: {
      margin: "0 0 20px 0",
      textAlign: "center",
    },

    orderTitleSection: {
      margin: "20px 0",
      textAlign: "left",
      fontSize: "30px",
      lineHeight: "34px",
    },

    footerTitle: {
      textAlign: "center",
      fontSize: "20px",
      lineHeight: "24px",
    },

    sectionTitlePage: {
      position: "relative",
      textAlign: "center",
      display:"inline-block",
      marginTop:"1em",
      fontSize:"3em",

      "&::after": {
        left: "100%",
        marginLeft: "20px",
        position: "absolute",
        content: "",
        display: "block",
        width: "100%",
        borderTop: "2px solid #777",
        borderBottom: "1px solid #bababa",
        height: "6px",
        top: "50%",
        marginTop: "-3px",
      },
      "&::before": {
        right: "100%",
        marginRight: "20px",
        position: "absolute",
        content: "",
        display: "block",
        width: "100%",
        borderTop: "2px solid #777",
        borderBottom: "1px solid #bababa",
        height: "6px",
        top: "50%",
        marginTop: "-3px",
      },
    },
  },

  defaultProps: {
    variants: "sectionTitlePage",
  },
});

export default headingTheme;
