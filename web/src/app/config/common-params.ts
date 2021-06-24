export class CommonParams {
  public static readonly REFRESHER_TEXT = '<span class="refresher-text">下拉刷新</span>';
  public static readonly ICONFONT_URL = '//at.alicdn.com/t/font_876907_cwiqzsmt2ml.js';
  public static readonly MAP_API_KEY = '6p7An3YszP2HhpQjo2Ui4etheab9yWNU';
  public static readonly tokenName = 'x-token';
  public static readonly loginTimeName = 'loginTime';
  public static readonly tokenPassTime = 24 * 3600 * 1000;
  public static readonly accountName = 'account';
  public static readonly companyName = 'company';
  public static readonly memberName = 'member';
  public static readonly resumeName = 'resume';
  public static readonly preRouterName = 'preRouter';
  public static readonly afterRouterName = 'afterRouter';
  public static readonly historyName = 'query-history';
  public static readonly REQUEST_SUCCESS = 1;
  public static readonly REQUEST_FAIL = -1;

  public static readonly PHONE_REGEXP = /^1\d{10}$/;
  public static readonly EMAIL_REGEXP = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  public static readonly ID_CARD_NO_REGEXP = /(^\d{15}$)|(^\d{17}(x|X|\d)$)/;
  public static readonly TEL_FIRST_REGEXP = /^[0-9]{3}[0-9]?$/;
  public static readonly TEL_NEXT_REGEXP = /^[0-9]{6,11}$/;
  public static readonly TEL_LAST_REGEXP = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
  // 上传接口参数定义
  public static readonly UPLOAD_PROJECT = 'job';

  public static readonly isGoodOptions = [
    {id: 1, value: '好事'},
    {id: 2, value: '坏事'}
  ];
  // 上次油价更新时间戳
  public static readonly OIL_UPDATE_DATE = 'OIL_UPDATE_DATE';
}
