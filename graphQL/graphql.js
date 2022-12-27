import { gql } from "@apollo/client";

export const GET_HOME_PAGE_ARTICAL = gql`
query ExampleQuery($getHomePageArticleInput2: getHomePageArticleInput) {
  getHomePageArticle(input: $getHomePageArticleInput2) {
    nTotal
    aResults {
      iCategoryId
      sName
      iSeriesId
      eType
      sSlug
      bScoreCard
      aArticle {
        _id
        sTitle
        sSubtitle
        sSrtTitle
        oImg {
          sText
          sCaption
          sAttribute
          sUrl
        }
        oTImg {
          sText
          sCaption
          sAttribute
          sUrl
        }
        dPublishDate
        dPublishDisplayDate
        nDuration
        sDescription
        sType
      }
    }
  }
}
`;
export const GET_MENU_TREE = gql`
query ExampleQuery {
  getMenuTree {
    aResults {
      _id
      sUrl
      sTitle
      sSlug
      oChildren {
        _id
        sTitle
        sSlug
        sUrl
        eUrlTarget
        eMenuType
      }
      nSort
      eUrlTarget
      eStatus
      eMenuType
      bIsMulti
    }
  }
}
`;

export const GET_ARTICAL_BY_ID = gql `
query GetArticleFront($input: oGetArticleInput) {
  getArticleFront(input: $input) {
    _id
    sTitle
    sSubtitle
    sSrtTitle
    sContent
    sInsContent
    sAmpContent
    oImg {
      sText
      sCaption
      sAttribute
      sUrl
    }
    dPublishDate
    dModifiedDate
    dPublishDisplayDate
    nDuration
    nViewCount
    nOViews
    iAuthorDId
    oDisplayAuthor {
      _id
      sFName
      sEmail
      sNumber
      eStatus
      sDisplayName
      sUName
      bIsVerified
    }
    nCommentCount
    sDescription
    dCreated
    dUpdated
    nClaps
    bIsBookmarked
    iBookmarkedId
    oListicleArticle {
      nTotal
      sMainContent
      oAmpPageContent
      oPageContent
    }
    bIsListicleArticle
    bOld
  }
}`;