import Util from '../../js/util';
import PopularItemsDomHandler from './popular-items-dom-handler.js';


export default class MuteAlreadyReadArticleContent {

  run() {
    Util.getHistories((historiesObj) => {
      const histories = Object.values(historiesObj);
      const handler = new PopularItemsDomHandler();

      handler.getArticleObjects().forEach(article => {
        const hasHistory = histories.some(history => history.userId === article.userId && history.itemId === article.itemId);
        if (hasHistory) handler.unShow(article, '既読記事を非表示');
      });
    });
  }

}