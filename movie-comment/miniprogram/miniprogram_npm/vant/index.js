module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1558606160821, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.version = exports.install = void 0;

var _actionsheet = _interopRequireDefault(require("./actionsheet"));

exports.Actionsheet = _actionsheet["default"];

var _addressEdit = _interopRequireDefault(require("./address-edit"));

exports.AddressEdit = _addressEdit["default"];

var _addressList = _interopRequireDefault(require("./address-list"));

exports.AddressList = _addressList["default"];

var _area = _interopRequireDefault(require("./area"));

exports.Area = _area["default"];

var _badge = _interopRequireDefault(require("./badge"));

exports.Badge = _badge["default"];

var _badgeGroup = _interopRequireDefault(require("./badge-group"));

exports.BadgeGroup = _badgeGroup["default"];

var _button = _interopRequireDefault(require("./button"));

exports.Button = _button["default"];

var _card = _interopRequireDefault(require("./card"));

exports.Card = _card["default"];

var _cell = _interopRequireDefault(require("./cell"));

exports.Cell = _cell["default"];

var _cellGroup = _interopRequireDefault(require("./cell-group"));

exports.CellGroup = _cellGroup["default"];

var _checkbox = _interopRequireDefault(require("./checkbox"));

exports.Checkbox = _checkbox["default"];

var _checkboxGroup = _interopRequireDefault(require("./checkbox-group"));

exports.CheckboxGroup = _checkboxGroup["default"];

var _circle = _interopRequireDefault(require("./circle"));

exports.Circle = _circle["default"];

var _col = _interopRequireDefault(require("./col"));

exports.Col = _col["default"];

var _collapse = _interopRequireDefault(require("./collapse"));

exports.Collapse = _collapse["default"];

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

exports.CollapseItem = _collapseItem["default"];

var _contactCard = _interopRequireDefault(require("./contact-card"));

exports.ContactCard = _contactCard["default"];

var _contactEdit = _interopRequireDefault(require("./contact-edit"));

exports.ContactEdit = _contactEdit["default"];

var _contactList = _interopRequireDefault(require("./contact-list"));

exports.ContactList = _contactList["default"];

var _coupon = _interopRequireDefault(require("./coupon"));

exports.Coupon = _coupon["default"];

var _couponCell = _interopRequireDefault(require("./coupon-cell"));

exports.CouponCell = _couponCell["default"];

var _couponList = _interopRequireDefault(require("./coupon-list"));

exports.CouponList = _couponList["default"];

var _datetimePicker = _interopRequireDefault(require("./datetime-picker"));

exports.DatetimePicker = _datetimePicker["default"];

var _dialog = _interopRequireDefault(require("./dialog"));

exports.Dialog = _dialog["default"];

var _field = _interopRequireDefault(require("./field"));

exports.Field = _field["default"];

var _goodsAction = _interopRequireDefault(require("./goods-action"));

exports.GoodsAction = _goodsAction["default"];

var _goodsActionBigBtn = _interopRequireDefault(require("./goods-action-big-btn"));

exports.GoodsActionBigBtn = _goodsActionBigBtn["default"];

var _goodsActionMiniBtn = _interopRequireDefault(require("./goods-action-mini-btn"));

exports.GoodsActionMiniBtn = _goodsActionMiniBtn["default"];

var _icon = _interopRequireDefault(require("./icon"));

exports.Icon = _icon["default"];

var _imagePreview = _interopRequireDefault(require("./image-preview"));

exports.ImagePreview = _imagePreview["default"];

var _info = _interopRequireDefault(require("./info"));

exports.Info = _info["default"];

var _lazyload = _interopRequireDefault(require("./lazyload"));

exports.Lazyload = _lazyload["default"];

var _list = _interopRequireDefault(require("./list"));

exports.List = _list["default"];

var _loading = _interopRequireDefault(require("./loading"));

exports.Loading = _loading["default"];

var _locale = _interopRequireDefault(require("./locale"));

exports.Locale = _locale["default"];

var _navBar = _interopRequireDefault(require("./nav-bar"));

exports.NavBar = _navBar["default"];

var _noticeBar = _interopRequireDefault(require("./notice-bar"));

exports.NoticeBar = _noticeBar["default"];

var _notify = _interopRequireDefault(require("./notify"));

exports.Notify = _notify["default"];

var _numberKeyboard = _interopRequireDefault(require("./number-keyboard"));

exports.NumberKeyboard = _numberKeyboard["default"];

var _overlay = _interopRequireDefault(require("./overlay"));

exports.Overlay = _overlay["default"];

var _pagination = _interopRequireDefault(require("./pagination"));

exports.Pagination = _pagination["default"];

var _panel = _interopRequireDefault(require("./panel"));

exports.Panel = _panel["default"];

var _passwordInput = _interopRequireDefault(require("./password-input"));

exports.PasswordInput = _passwordInput["default"];

var _picker = _interopRequireDefault(require("./picker"));

exports.Picker = _picker["default"];

var _popup = _interopRequireDefault(require("./popup"));

exports.Popup = _popup["default"];

var _progress = _interopRequireDefault(require("./progress"));

exports.Progress = _progress["default"];

var _pullRefresh = _interopRequireDefault(require("./pull-refresh"));

exports.PullRefresh = _pullRefresh["default"];

var _radio = _interopRequireDefault(require("./radio"));

exports.Radio = _radio["default"];

var _radioGroup = _interopRequireDefault(require("./radio-group"));

exports.RadioGroup = _radioGroup["default"];

var _rate = _interopRequireDefault(require("./rate"));

exports.Rate = _rate["default"];

var _row = _interopRequireDefault(require("./row"));

exports.Row = _row["default"];

var _search = _interopRequireDefault(require("./search"));

exports.Search = _search["default"];

var _sku = _interopRequireDefault(require("./sku"));

exports.Sku = _sku["default"];

var _slider = _interopRequireDefault(require("./slider"));

exports.Slider = _slider["default"];

var _step = _interopRequireDefault(require("./step"));

exports.Step = _step["default"];

var _stepper = _interopRequireDefault(require("./stepper"));

exports.Stepper = _stepper["default"];

var _steps = _interopRequireDefault(require("./steps"));

exports.Steps = _steps["default"];

var _submitBar = _interopRequireDefault(require("./submit-bar"));

exports.SubmitBar = _submitBar["default"];

var _swipe = _interopRequireDefault(require("./swipe"));

exports.Swipe = _swipe["default"];

var _swipeCell = _interopRequireDefault(require("./swipe-cell"));

exports.SwipeCell = _swipeCell["default"];

var _swipeItem = _interopRequireDefault(require("./swipe-item"));

exports.SwipeItem = _swipeItem["default"];

var _switch = _interopRequireDefault(require("./switch"));

exports.Switch = _switch["default"];

var _switchCell = _interopRequireDefault(require("./switch-cell"));

exports.SwitchCell = _switchCell["default"];

var _tab = _interopRequireDefault(require("./tab"));

exports.Tab = _tab["default"];

var _tabbar = _interopRequireDefault(require("./tabbar"));

exports.Tabbar = _tabbar["default"];

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

exports.TabbarItem = _tabbarItem["default"];

var _tabs = _interopRequireDefault(require("./tabs"));

exports.Tabs = _tabs["default"];

var _tag = _interopRequireDefault(require("./tag"));

exports.Tag = _tag["default"];

var _toast = _interopRequireDefault(require("./toast"));

exports.Toast = _toast["default"];

var _treeSelect = _interopRequireDefault(require("./tree-select"));

exports.TreeSelect = _treeSelect["default"];

var _uploader = _interopRequireDefault(require("./uploader"));

exports.Uploader = _uploader["default"];

var _waterfall = _interopRequireDefault(require("./waterfall"));

exports.Waterfall = _waterfall["default"];

/* eslint-disable */
// This file is auto gererated by build/build-entry.js
var version = '1.6.19';
exports.version = version;
var components = [_actionsheet["default"], _addressEdit["default"], _addressList["default"], _area["default"], _badge["default"], _badgeGroup["default"], _button["default"], _card["default"], _cell["default"], _cellGroup["default"], _checkbox["default"], _checkboxGroup["default"], _circle["default"], _col["default"], _collapse["default"], _collapseItem["default"], _contactCard["default"], _contactEdit["default"], _contactList["default"], _coupon["default"], _couponCell["default"], _couponList["default"], _datetimePicker["default"], _dialog["default"], _field["default"], _goodsAction["default"], _goodsActionBigBtn["default"], _goodsActionMiniBtn["default"], _icon["default"], _imagePreview["default"], _info["default"], _list["default"], _loading["default"], _navBar["default"], _noticeBar["default"], _notify["default"], _numberKeyboard["default"], _overlay["default"], _pagination["default"], _panel["default"], _passwordInput["default"], _picker["default"], _popup["default"], _progress["default"], _pullRefresh["default"], _radio["default"], _radioGroup["default"], _rate["default"], _row["default"], _search["default"], _sku["default"], _slider["default"], _step["default"], _stepper["default"], _steps["default"], _submitBar["default"], _swipe["default"], _swipeCell["default"], _swipeItem["default"], _switch["default"], _switchCell["default"], _tab["default"], _tabbar["default"], _tabbarItem["default"], _tabs["default"], _tag["default"], _toast["default"], _treeSelect["default"], _uploader["default"]];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports["default"] = _default;
}, function(modId) {var map = {"./actionsheet":1558606160822,"./address-edit":1558606160845,"./address-list":1558606160866,"./area":1558606160847,"./badge":1558606160872,"./badge-group":1558606160873,"./button":1558606160859,"./card":1558606160874,"./cell":1558606160853,"./cell-group":1558606160877,"./checkbox":1558606160878,"./checkbox-group":1558606160879,"./circle":1558606160880,"./col":1558606160882,"./collapse":1558606160883,"./collapse-item":1558606160884,"./contact-card":1558606160885,"./contact-edit":1558606160886,"./contact-list":1558606160887,"./coupon":1558606160888,"./coupon-cell":1558606160889,"./coupon-list":1558606160890,"./datetime-picker":1558606160893,"./dialog":1558606160860,"./field":1558606160852,"./goods-action":1558606160895,"./goods-action-big-btn":1558606160896,"./goods-action-mini-btn":1558606160897,"./icon":1558606160840,"./image-preview":1558606160898,"./info":1558606160841,"./lazyload":1558606160902,"./list":1558606160903,"./loading":1558606160843,"./locale":1558606160827,"./nav-bar":1558606160904,"./notice-bar":1558606160905,"./notify":1558606160906,"./number-keyboard":1558606160908,"./overlay":1558606160838,"./pagination":1558606160910,"./panel":1558606160911,"./password-input":1558606160912,"./picker":1558606160848,"./popup":1558606160844,"./progress":1558606160913,"./pull-refresh":1558606160914,"./radio":1558606160869,"./radio-group":1558606160867,"./rate":1558606160915,"./row":1558606160916,"./search":1558606160917,"./sku":1558606160918,"./slider":1558606160932,"./step":1558606160933,"./stepper":1558606160926,"./steps":1558606160934,"./submit-bar":1558606160935,"./swipe":1558606160900,"./swipe-cell":1558606160936,"./swipe-item":1558606160901,"./switch":1558606160864,"./switch-cell":1558606160863,"./tab":1558606160891,"./tabbar":1558606160938,"./tabbar-item":1558606160939,"./tabs":1558606160892,"./tag":1558606160875,"./toast":1558606160857,"./tree-select":1558606160940,"./uploader":1558606160930,"./waterfall":1558606160941}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160822, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _popup = require("../mixins/popup");

var _icon = _interopRequireDefault(require("../icon"));

var _loading = _interopRequireDefault(require("../loading"));

var _popup2 = _interopRequireDefault(require("../popup"));

var _use = (0, _utils.use)('actionsheet'),
    sfc = _use[0],
    bem = _use[1];

function Actionsheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  var onCancel = function onCancel() {
    (0, _functional.emit)(ctx, 'input', false);
    (0, _functional.emit)(ctx, 'cancel');
  };

  var Header = function Header() {
    return h("div", {
      "class": [bem('header'), 'van-hairline--top-bottom']
    }, [title, h(_icon["default"], {
      "attrs": {
        "name": "close"
      },
      "class": bem('close'),
      "on": {
        "click": onCancel
      }
    })]);
  };

  var Option = function Option(item, index) {
    return h("div", {
      "class": [bem('item', {
        disabled: item.disabled || item.loading
      }), item.className, 'van-hairline--top'],
      "on": {
        "click": function click(event) {
          event.stopPropagation();

          if (!item.disabled && !item.loading) {
            if (item.callback) {
              item.callback(item);
            }

            (0, _functional.emit)(ctx, 'select', item, index);
          }
        }
      }
    }, [item.loading ? h(_loading["default"], {
      "class": bem('loading'),
      "attrs": {
        "size": "20px"
      }
    }) : [h("span", {
      "class": bem('name')
    }, [item.name]), item.subname && h("span", {
      "class": bem('subname')
    }, [item.subname])]]);
  };

  return h(_popup2["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    }),
    "attrs": {
      "value": props.value,
      "position": "bottom",
      "overlay": props.overlay,
      "lazyRender": props.lazyRender,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay
    },
    "on": {
      "input": function input(value) {
        (0, _functional.emit)(ctx, 'input', value);
      }
    }
  }, (0, _functional.inherit)(ctx)]), [title ? Header() : props.actions.map(Option), slots["default"] && h("div", {
    "class": bem('content')
  }, [slots["default"]()]), cancelText && h("div", {
    "class": bem('cancel'),
    "on": {
      "click": onCancel
    }
  }, [cancelText])]);
}

Actionsheet.props = (0, _extends2["default"])({}, _popup.PopupMixin.props, {
  title: String,
  actions: Array,
  cancelText: String,
  safeAreaInsetBottom: Boolean,
  overlay: {
    type: Boolean,
    "default": true
  },
  closeOnClickOverlay: {
    type: Boolean,
    "default": true
  }
});

var _default = sfc(Actionsheet);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../mixins/popup":1558606160833,"../icon":1558606160840,"../loading":1558606160843,"../popup":1558606160844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160823, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.noop = noop;
exports.isDef = isDef;
exports.isObj = isObj;
exports.get = get;
exports.camelize = camelize;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
exports.range = range;
exports.isInDocument = isInDocument;
exports.isServer = exports.use = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _use = require("./use");

exports.use = _use.use;
var isServer = _vue["default"].prototype.$isServer;
exports.isServer = isServer;

function noop() {}

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function isIOS() {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function isInDocument(element) {
  return document.body.contains(element);
}
}, function(modId) { var map = {"./use":1558606160824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160824, function(require, module, exports) {


exports.__esModule = true;
exports.use = use;

var _bem = require("./bem");

var _sfc = require("./sfc");

var _i18n = require("./i18n");

function use(name) {
  name = 'van-' + name;
  return [(0, _sfc.useSFC)(name), (0, _bem.useBEM)(name), (0, _i18n.useI18N)(name)];
}
}, function(modId) { var map = {"./bem":1558606160825,"./sfc":1558606160826,"./i18n":1558606160831}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160825, function(require, module, exports) {


exports.__esModule = true;
exports.useBEM = void 0;

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

var useBEM = function useBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
};

exports.useBEM = useBEM;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160826, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.unifySlots = unifySlots;
exports.useSFC = void 0;

require("../../locale");

var _ = require("..");

var _slots = require("../../mixins/slots");

var _vue = _interopRequireDefault(require("vue"));

/**
 * Create a basic component with common options
 */
var arrayProp = {
  type: Array,
  "default": function _default() {
    return [];
  }
};
var numberProp = {
  type: Number,
  "default": 0
};

function defaultProps(props) {
  Object.keys(props).forEach(function (key) {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _.camelize)("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3


function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

var useSFC = function useSFC(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.SlotsMixin);
    }

    if (sfc.props) {
      defaultProps(sfc.props);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
};

exports.useSFC = useSFC;
}, function(modId) { var map = {"../../locale":1558606160827,"..":1558606160823,"../../mixins/slots":1558606160830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160827, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var proto = _vue["default"].prototype;
var defineReactive = _vue["default"].util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _zhCN["default"]
});
var _default = {
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.deepAssign)(proto.$vantMessages, messages);
  }
};
exports["default"] = _default;
}, function(modId) { var map = {"../utils/deep-assign":1558606160828,"./lang/zh-CN":1558606160829}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160828, function(require, module, exports) {


exports.__esModule = true;
exports.deepAssign = deepAssign;

var _ = require(".");

/* eslint-disable no-use-before-define */
var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObj)(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
}, function(modId) { var map = {".":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160829, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  "delete": '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports["default"] = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160830, function(require, module, exports) {


exports.__esModule = true;
exports.SlotsMixin = void 0;

/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
var SlotsMixin = {
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;

      if ($scopedSlots[name]) {
        return $scopedSlots[name](props);
      }

      return $slots[name];
    }
  }
};
exports.SlotsMixin = SlotsMixin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160831, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useI18N = void 0;

var _ = require("..");

var _locale = _interopRequireDefault(require("../../locale"));

var useI18N = function useI18N(name) {
  var prefix = (0, _.camelize)(name) + '.';
  return function (path) {
    var message = (0, _.get)(_locale["default"].messages(), prefix + path) || (0, _.get)(_locale["default"].messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
};

exports.useI18N = useI18N;
}, function(modId) { var map = {"..":1558606160823,"../../locale":1558606160827}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160832, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.inherit = inherit;
exports.emit = emit;
exports.mount = mount;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};
    (0, _extends2["default"])(result.on, context.data.on);
  }

  return result;
} // emit event


function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component


function mount(Component, data) {
  var instance = new _vue["default"]({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, (0, _extends2["default"])({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160833, function(require, module, exports) {


exports.__esModule = true;
exports.PopupMixin = void 0;

var _context = require("./context");

var _touch = require("../touch");

var _event = require("../../utils/event");

var _overlay = require("./overlay");

var _scroll = require("../../utils/scroll");

var PopupMixin = {
  mixins: [_touch.TouchMixin],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: [String, Function],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      "default": true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    getContainer: function getContainer() {
      this.move();
    },
    overlay: function overlay() {
      this.renderOverlay();
    }
  },
  mounted: function mounted() {
    if (this.getContainer) {
      this.move();
    }

    if (this.value) {
      this.open();
    }
  },
  activated: function activated() {
    /* istanbul ignore next */
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },
  deactivated: function deactivated() {
    /* istanbul ignore next */
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        _context.context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        (0, _event.on)(document, 'touchstart', this.touchStart);
        (0, _event.on)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        _context.context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        _context.context.lockCount--;
        (0, _event.off)(document, 'touchstart', this.touchStart);
        (0, _event.off)(document, 'touchmove', this.onTouchMove);

        if (!_context.context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      (0, _overlay.closeOverlay)(this);
      this.$emit('input', false);
    },
    move: function move() {
      var container;
      var getContainer = this.getContainer;

      if (getContainer) {
        container = typeof getContainer === 'string' ? document.querySelector(getContainer) : getContainer();
      } else if (this.$parent) {
        container = this.$parent.$el;
      }

      if (container && container !== this.$el.parentNode) {
        container.appendChild(this.$el);
      }

      if (this.overlay) {
        (0, _overlay.updateOverlay)();
      }
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = (0, _scroll.getScrollEventTarget)(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        (0, _event.preventDefault)(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      if (this.$isServer || !this.value) {
        return;
      }

      if (this.overlay) {
        (0, _overlay.openOverlay)(this, {
          zIndex: _context.context.zIndex++,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        (0, _overlay.closeOverlay)(this);
      }

      this.updateZIndex();
    },
    updateZIndex: function updateZIndex() {
      var _this = this;

      this.$nextTick(function () {
        _this.$el.style.zIndex = _context.context.zIndex++;
      });
    }
  }
};
exports.PopupMixin = PopupMixin;
}, function(modId) { var map = {"./context":1558606160834,"../touch":1558606160835,"../../utils/event":1558606160836,"./overlay":1558606160837,"../../utils/scroll":1558606160839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160834, function(require, module, exports) {


exports.__esModule = true;
exports.context = void 0;
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
exports.context = context;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160835, function(require, module, exports) {


exports.__esModule = true;
exports.TouchMixin = void 0;
var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = {
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
};
exports.TouchMixin = TouchMixin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160836, function(require, module, exports) {


exports.__esModule = true;
exports.on = on;
exports.off = off;
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.supportsPassive = void 0;

var _ = require(".");

/* eslint-disable no-empty */

/* eslint-disable getter-return */

/* eslint-disable import/no-mutable-exports */
var supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!_.isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}

function off(target, event, handler) {
  if (!_.isServer) {
    target.removeEventListener(event, handler);
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
}, function(modId) { var map = {".":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160837, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateOverlay = updateOverlay;
exports.openOverlay = openOverlay;
exports.closeOverlay = closeOverlay;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _overlay = _interopRequireDefault(require("../../overlay"));

var _context = require("./context");

var _functional = require("../../utils/functional");

var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (_context.context.top) {
    var vm = _context.context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay) {
    overlay = (0, _functional.mount)(_overlay["default"], {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (_context.context.top) {
    var _context$top = _context.context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;
    var target = el && el.parentNode ? el.parentNode : document.body;

    if (target) {
      target.appendChild(overlay.$el);
    }

    (0, _extends2["default"])(overlay, defaultConfig, config, {
      visible: true
    });
  } else {
    overlay.visible = false;
  }
}

function openOverlay(vm, config) {
  if (!_context.context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    _context.context.stack.push({
      vm: vm,
      config: config
    });

    updateOverlay();
  }
}

function closeOverlay(vm) {
  var stack = _context.context.stack;

  if (stack.length) {
    if (_context.context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      _context.context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}
}, function(modId) { var map = {"../../overlay":1558606160838,"./context":1558606160834,"../../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160838, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _event = require("../utils/event");

var _use = (0, _utils.use)('overlay'),
    sfc = _use[0],
    bem = _use[1];

function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2["default"])({
    zIndex: props.zIndex
  }, props.customStyle);
  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "directives": [{
      name: "show",
      value: props.visible
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": function touchmove(event) {
        (0, _event.preventDefault)(event, true);
      }
    }
  }, (0, _functional.inherit)(ctx, true)]))]);
}

Overlay.props = {
  zIndex: Number,
  className: null,
  visible: Boolean,
  customStyle: Object
};

var _default = sfc(Overlay);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../utils/event":1558606160836}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160839, function(require, module, exports) {


exports.__esModule = true;
exports.getScrollEventTarget = getScrollEventTarget;
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getRootScrollTop = getRootScrollTop;
exports.getElementTop = getElementTop;
exports.getVisibleHeight = getVisibleHeight;

// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowY === 'scroll' || overflowY === 'auto') {
      return node;
    }

    node = node.parentNode;
  }

  return rootParent;
}

function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}

function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
} // get distance from element top to page top


function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getScrollTop(window);
}

function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160840, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _info = _interopRequireDefault(require("../info"));

var _src = require("../utils/validate/src");

var _use = (0, _utils.use)('icon'),
    sfc = _use[0];

function Icon(h, props, slots, ctx) {
  var urlIcon = (0, _src.isSrc)(props.name);
  return h(props.tag, (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [props.classPrefix, urlIcon ? 'van-icon--image' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: props.size
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots["default"] && slots["default"](), urlIcon && h("img", {
    "attrs": {
      "src": props.name
    }
  }), h(_info["default"], {
    "attrs": {
      "info": props.info
    }
  })]);
}

Icon.props = {
  name: String,
  size: String,
  color: String,
  info: [String, Number],
  tag: {
    type: String,
    "default": 'i'
  },
  classPrefix: {
    type: String,
    "default": 'van-icon'
  }
};

var _default = sfc(Icon);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../info":1558606160841,"../utils/validate/src":1558606160842}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160841, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('info'),
    sfc = _use[0],
    bem = _use[1];

function Info(h, props, slots, ctx) {
  if (!(0, _utils.isDef)(props.info) || props.info === '') {
    return;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx, true)]), [props.info]);
}

Info.props = {
  info: [String, Number]
};

var _default = sfc(Info);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160842, function(require, module, exports) {


exports.__esModule = true;
exports.isSrc = isSrc;

/**
 * Is image source
 */
function isSrc(url) {
  return /^(((blob:)?https?:)?\/\/|data:image)/.test(url);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160843, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('loading'),
    sfc = _use[0],
    bem = _use[1];

var DEFAULT_COLOR = '#c9c9c9';

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var colorType = color === 'white' || color === 'black' ? color : '';
  var style = {
    color: color === 'black' ? DEFAULT_COLOR : color,
    width: size,
    height: size
  };
  var Spin = [];

  if (type === 'spinner') {
    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }
  }

  var Circular = type === 'circular' && h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem([type, colorType]),
    "style": style
  }, (0, _functional.inherit)(ctx, true)]), [h("span", {
    "class": bem('spinner', type)
  }, [Spin, Circular])]);
}

Loading.props = {
  size: String,
  type: {
    type: String,
    "default": 'circular'
  },
  color: {
    type: String,
    "default": DEFAULT_COLOR
  }
};

var _default = sfc(Loading);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160844, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _popup = require("../mixins/popup");

var _use = (0, _utils.use)('popup'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [_popup.PopupMixin],
  props: {
    position: String,
    transition: String,
    overlay: {
      type: Boolean,
      "default": true
    },
    closeOnClickOverlay: {
      type: Boolean,
      "default": true
    }
  },
  render: function render(h) {
    var _this = this,
        _bem;

    if (!this.shouldRender) {
      return;
    }

    var position = this.position;

    var emit = function emit(event) {
      return function () {
        return _this.$emit(event);
      };
    };

    var transitionName = this.transition || (position ? "van-popup-slide-" + position : 'van-fade');
    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": emit('opened'),
        "afterLeave": emit('closed')
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": bem((_bem = {}, _bem[position] = position, _bem))
    }, [this.slots()])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/popup":1558606160833}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160845, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _mobile = require("../utils/validate/mobile");

var _area = _interopRequireDefault(require("../area"));

var _field = _interopRequireDefault(require("../field"));

var _popup = _interopRequireDefault(require("../popup"));

var _toast = _interopRequireDefault(require("../toast"));

var _button = _interopRequireDefault(require("../button"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _Detail = _interopRequireDefault(require("./Detail"));

var _switchCell = _interopRequireDefault(require("../switch-cell"));

var _use = (0, _utils.use)('address-edit'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

var _default2 = sfc({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      "default": true
    },
    showDetail: {
      type: Boolean,
      "default": true
    },
    detailRows: {
      type: Number,
      "default": 1
    },
    addressInfo: {
      type: Object,
      "default": function _default() {
        return (0, _extends2["default"])({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      "default": _mobile.isMobile
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return (0, _utils.isObj)(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = (0, _extends2["default"])({}, defaultData, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        (0, _extends2["default"])(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast["default"])(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');

        case 'areaCode':
          return value ? '' : t('areaEmpty');

        case 'addressDetail':
          return value ? '' : t('addressEmpty');

        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog["default"].confirm({
        title: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      })["catch"](function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render(h) {
    var _this4 = this;

    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = this.searchResult.length && this.detailFocused;
    return h("div", {
      "class": bem()
    }, [h(_field["default"], {
      "attrs": {
        "clearable": true,
        "label": t('name'),
        "placeholder": t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(_field["default"], {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h(_field["default"], {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "label": t('area'),
        "placeholder": t('areaPlaceholder'),
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        }
      }
    }), h(_Detail["default"], {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(_field["default"], {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": t('postal'),
        "placeholder": t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        }
      }
    }), this.slots(), this.showSetDefault && h(_switchCell["default"], {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": bem('buttons')
    }, [h(_button["default"], {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(_button["default"], {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(_popup["default"], {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(_area["default"], {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
});

exports["default"] = _default2;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/validate/mobile":1558606160846,"../area":1558606160847,"../field":1558606160852,"../popup":1558606160844,"../toast":1558606160857,"../button":1558606160859,"../dialog":1558606160860,"./Detail":1558606160862,"../switch-cell":1558606160863}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160846, function(require, module, exports) {


exports.__esModule = true;
exports.isMobile = isMobile;

function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160847, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _picker = _interopRequireDefault(require("../picker"));

var _shared = require("../picker/shared");

var _use = (0, _utils.use)('area'),
    sfc = _use[0],
    bem = _use[1];

var _default2 = sfc({
  props: (0, _extends2["default"])({}, _shared.pickerProps, {
    value: String,
    areaList: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [String, Number],
      "default": 3
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: function handler() {
        this.setValues();
      }
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (code[0] === '9' && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (code[0] === '9' && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, picker.getValues(), index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00') {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (area.code[0] === '9') {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset() {
      this.code = '';
      this.setValues();
    }
  },
  render: function render(h) {
    var on = (0, _extends2["default"])({}, this.$listeners, {
      change: this.onChange
    });
    return h(_picker["default"], {
      "ref": "picker",
      "class": bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": (0, _extends2["default"])({}, on)
    });
  }
});

exports["default"] = _default2;
}, function(modId) { var map = {"../utils":1558606160823,"../picker":1558606160848,"../picker/shared":1558606160850}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160848, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _event = require("../utils/event");

var _deepClone = require("../utils/deep-clone");

var _shared = require("./shared");

var _loading = _interopRequireDefault(require("../loading"));

var _PickerColumn = _interopRequireDefault(require("./PickerColumn"));

var _use = (0, _utils.use)('picker'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var _default = sfc({
  props: (0, _extends2["default"])({}, _shared.pickerProps, {
    columns: Array,
    defaultIndex: {
      type: Number,
      "default": 0
    },
    valueKey: {
      type: String,
      "default": 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: function columns() {
      this.setColumns();
    }
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, (0, _deepClone.deepClone)(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: itemHeight * this.visibleItemCount + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": ['van-hairline--top-bottom', bem('toolbar')]
    }, [this.slots() || [h("div", {
      "class": bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', bem('title')]
    }, [this.title]), h("div", {
      "class": bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": bem()
    }, [Toolbar, this.loading ? h("div", {
      "class": bem('loading')
    }, [h(_loading["default"])]) : h(), h("div", {
      "class": bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": _event.preventDefault
      }
    }, [columns.map(function (item, index) {
      return h(_PickerColumn["default"], {
        "attrs": {
          "valueKey": _this4.valueKey,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": ['van-hairline--top-bottom', bem('frame')],
      "style": frameStyle
    })])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836,"../utils/deep-clone":1558606160849,"./shared":1558606160850,"../loading":1558606160843,"./PickerColumn":1558606160851}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160849, function(require, module, exports) {


exports.__esModule = true;
exports.deepClone = deepClone;

var _deepAssign = require("./deep-assign");

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return (0, _deepAssign.deepAssign)({}, obj);
  }

  return obj;
}
}, function(modId) { var map = {"./deep-assign":1558606160828}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160850, function(require, module, exports) {


exports.__esModule = true;
exports.pickerProps = void 0;
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  visibleItemCount: {
    type: Number,
    "default": 5
  },
  itemHeight: {
    type: Number,
    "default": 44
  }
};
exports.pickerProps = pickerProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160851, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _deepClone = require("../utils/deep-clone");

var _utils = require("../utils");

var _event = require("../utils/event");

var DEFAULT_DURATION = 200;

var _use = (0, _utils.use)('picker-column'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    initialOptions: Array,
    visibleItemCount: Number
  },
  data: function data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: (0, _deepClone.deepClone)(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    this.$parent.children && this.$parent.children.push(this);
    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;
    children && children.splice(children.indexOf(this), 1);
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startOffset = this.offset;
      this.duration = 0;
    },
    onTouchMove: function onTouchMove(event) {
      (0, _event.preventDefault)(event);
      var deltaY = event.touches[0].clientY - this.startY;
      this.offset = (0, _utils.range)(this.startOffset + deltaY, -(this.count * this.itemHeight), this.itemHeight);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = (0, _utils.range)(Math.round(-this.offset / this.itemHeight), 0, this.count - 1);
        this.setIndex(index, true);
      }
    },
    adjustIndex: function adjustIndex(index) {
      index = (0, _utils.range)(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isDisabled(this.options[_i])) return _i;
      }
    },
    isDisabled: function isDisabled(option) {
      return (0, _utils.isObj)(option) && option.disabled;
    },
    getOptionText: function getOptionText(option) {
      return (0, _utils.isObj)(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    }
  },
  render: function render(h) {
    var _this = this;

    var itemHeight = this.itemHeight,
        visibleItemCount = this.visibleItemCount;
    var columnStyle = {
      height: itemHeight * visibleItemCount + 'px'
    };
    var baseOffset = itemHeight * (visibleItemCount - 1) / 2;
    var wrapperStyle = {
      transition: this.duration + "ms",
      transform: "translate3d(0, " + (this.offset + baseOffset) + "px, 0)",
      lineHeight: itemHeight + "px"
    };
    var optionStyle = {
      height: itemHeight + "px"
    };
    return h("div", {
      "style": columnStyle,
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "style": wrapperStyle
    }, [this.options.map(function (option, index) {
      return h("li", {
        "style": optionStyle,
        "class": ['van-ellipsis', bem('item', {
          disabled: _this.isDisabled(option),
          selected: index === _this.currentIndex
        })],
        "domProps": {
          "innerHTML": _this.getOptionText(option)
        },
        "on": {
          "click": function click() {
            _this.setIndex(index, true);
          }
        }
      });
    })])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils/deep-clone":1558606160849,"../utils":1558606160823,"../utils/event":1558606160836}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160852, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _shared = require("../cell/shared");

var _utils = require("../utils");

var _event = require("../utils/event");

var _scroll = require("../utils/scroll");

var _number = require("../utils/validate/number");

var _use = (0, _utils.use)('field'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  inheritAttrs: false,
  props: (0, _extends2["default"])({}, _shared.cellProps, {
    error: Boolean,
    leftIcon: String,
    rightIcon: String,
    readonly: Boolean,
    clearable: Boolean,
    labelWidth: [String, Number],
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      "default": 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && (0, _utils.isDef)(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      return (0, _extends2["default"])({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        var width = (0, _number.isNumber)(String(labelWidth)) ? labelWidth + "px" : labelWidth;
        return {
          maxWidth: width,
          minWidth: width
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.input && this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && (0, _utils.isDef)(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event); // Hack for iOS12 page scroll
      // https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800

      /* istanbul ignore next */

      if ((0, _utils.isIOS)()) {
        window.scrollTo(0, (0, _scroll.getRootScrollTop)());
      }
    },
    onClickLeftIcon: function onClickLeftIcon() {
      this.$emit('click-left-icon');
    },
    onClickRightIcon: function onClickRightIcon() {
      // compatible old version
      this.$emit('click-icon');
      this.$emit('click-right-icon');
      this.onIconClick && this.onIconClick();
    },
    onClear: function onClear(event) {
      (0, _event.preventDefault)(event);
      this.$emit('input', '');
      this.$emit('clear');
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          (0, _event.preventDefault)(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if ((0, _utils.isObj)(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputProps = {
        ref: 'input',
        "class": bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: (0, _extends2["default"])({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners
      };

      if (this.type === 'textarea') {
        return h("textarea", (0, _babelHelperVueJsxMergeProps["default"])([{}, inputProps]));
      }

      return h("input", (0, _babelHelperVueJsxMergeProps["default"])([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(_icon["default"], {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || slots('icon') || this.rightIcon || this.icon;

      if (showRightIcon) {
        return h("div", {
          "class": bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || slots('icon') || h(_icon["default"], {
          "attrs": {
            "name": this.rightIcon || this.icon
          }
        })]);
      }
    }
  },
  render: function render(h) {
    var _bem;

    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(_cell["default"], {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "titleStyle": this.labelStyle,
        "titleClass": bem('label', labelAlign)
      },
      "class": bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots
    }, [h("div", {
      "class": bem('body')
    }, [this.renderInput(), this.showClear && h(_icon["default"], {
      "attrs": {
        "name": "clear"
      },
      "class": bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.renderRightIcon(), slots('button') && h("div", {
      "class": bem('button')
    }, [slots('button')])]), this.errorMessage && h("div", {
      "class": bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../icon":1558606160840,"../cell":1558606160853,"../cell/shared":1558606160854,"../utils":1558606160823,"../utils/event":1558606160836,"../utils/scroll":1558606160839,"../utils/validate/number":1558606160856}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160853, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _shared = require("./shared");

var _functional = require("../utils/functional");

var _router = require("../utils/router");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('cell'),
    sfc = _use[0],
    bem = _use[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink,
      arrowDirection = props.arrowDirection;
  var showTitle = slots.title || (0, _utils.isDef)(title);
  var showValue = slots["default"] || (0, _utils.isDef)(value);
  var showLabel = slots.label || (0, _utils.isDef)(label);
  var Label = showLabel && h("div", {
    "class": [bem('label'), props.labelClass]
  }, [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [bem('title'), props.titleClass],
    "style": props.titleStyle
  }, [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [bem('value', {
      alone: !slots.title && !title
    }), props.valueClass]
  }, [slots["default"] ? slots["default"]() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(_icon["default"], {
    "class": bem('left-icon'),
    "attrs": {
      "name": icon
    }
  });
  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(_icon["default"], {
    "class": bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
    }
  });

  var onClick = function onClick(event) {
    (0, _functional.emit)(ctx, 'click', event);
    (0, _router.functionalRoute)(ctx);
  };

  var classes = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem(classes),
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = (0, _extends2["default"])({}, _shared.cellProps, _router.routeProps, {
  clickable: Boolean,
  arrowDirection: String
});

var _default = sfc(Cell);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"./shared":1558606160854,"../utils/functional":1558606160832,"../utils/router":1558606160855,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160854, function(require, module, exports) {


exports.__esModule = true;
exports.cellProps = void 0;
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [String, Number],
  value: [String, Number],
  label: [String, Number],
  border: {
    type: Boolean,
    "default": true
  }
};
exports.cellProps = cellProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160855, function(require, module, exports) {


exports.__esModule = true;
exports.route = route;
exports.functionalRoute = functionalRoute;
exports.routeProps = void 0;

/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}

var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
exports.routeProps = routeProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160856, function(require, module, exports) {


exports.__esModule = true;
exports.isNumber = isNumber;

function isNumber(value) {
  return /^\d+$/.test(value);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160857, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Toast = _interopRequireDefault(require("./Toast"));

var _utils = require("../utils");

var defaultOptions = {
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  getContainer: 'body',
  overlayStyle: null
};

var parseOptions = function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
};

var queue = [];
var multiple = false;
var currentOptions = (0, _extends2["default"])({}, defaultOptions);

function createInstance() {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return {};
  }

  if (!queue.length || multiple || !(0, _utils.isInDocument)(queue[0].$el)) {
    var toast = new (_vue["default"].extend(_Toast["default"]))({
      el: document.createElement('div')
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = (0, _extends2["default"])({}, currentOptions, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !_utils.isServer) {
        clearTimeout(toast.timer);
        queue = queue.filter(function (item) {
          return item !== toast;
        });
        var parent = toast.$el.parentNode;

        if (parent) {
          parent.removeChild(toast.$el);
        }

        toast.$destroy();
      }
    }
  });
  (0, _extends2["default"])(toast, transformer(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast((0, _extends2["default"])({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  (0, _extends2["default"])(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = (0, _extends2["default"])({}, defaultOptions);
};

Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

Toast.install = function () {
  _vue["default"].use(_Toast["default"]);
};

_vue["default"].prototype.$toast = Toast;
var _default = Toast;
exports["default"] = _default;
}, function(modId) { var map = {"./Toast":1558606160858,"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160858, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _popup = require("../mixins/popup");

var _icon = _interopRequireDefault(require("../icon"));

var _loading = _interopRequireDefault(require("../loading"));

var _use = (0, _utils.use)('toast'),
    sfc = _use[0],
    bem = _use[1];

var STYLE = ['success', 'fail', 'loading'];

var _default = sfc({
  mixins: [_popup.PopupMixin],
  props: {
    className: null,
    forbidClick: Boolean,
    message: [String, Number],
    type: {
      type: String,
      "default": 'text'
    },
    loadingType: {
      type: String,
      "default": 'circular'
    },
    position: {
      type: String,
      "default": 'middle'
    },
    lockScroll: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickale();
  },
  destroyed: function destroyed() {
    this.toggleClickale();
  },
  watch: {
    value: function value() {
      this.toggleClickale();
    },
    forbidClick: function forbidClick() {
      this.toggleClickale();
    }
  },
  methods: {
    toggleClickale: function toggleClickale() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var type = this.type,
        message = this.message;
    var style = STYLE.indexOf(type) !== -1 ? 'default' : type;

    var Content = function Content() {
      switch (style) {
        case 'text':
          return h("div", [message]);

        case 'html':
          return h("div", {
            "domProps": {
              "innerHTML": message
            }
          });

        default:
          return [type === 'loading' ? h(_loading["default"], {
            "attrs": {
              "color": "white",
              "type": _this.loadingType
            }
          }) : h(_icon["default"], {
            "class": bem('icon'),
            "attrs": {
              "name": type
            }
          }), (0, _utils.isDef)(message) && h("div", {
            "class": bem('text')
          }, [message])];
      }
    };

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem([style, this.position]), this.className]
    }, [Content()])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/popup":1558606160833,"../icon":1558606160840,"../loading":1558606160843}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160859, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _router = require("../utils/router");

var _loading = _interopRequireDefault(require("../loading"));

var _use = (0, _utils.use)('button'),
    sfc = _use[0],
    bem = _use[1];

function Button(h, props, slots, ctx) {
  var tag = props.tag,
      type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;

  var onClick = function onClick(event) {
    if (!loading && !disabled) {
      (0, _functional.emit)(ctx, 'click', event);
      (0, _router.functionalRoute)(ctx);
    }
  };

  var onTouchstart = function onTouchstart(event) {
    (0, _functional.emit)(ctx, 'touchstart', event);
  };

  var classes = [bem([type, props.size, {
    loading: loading,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    plain: props.plain,
    round: props.round,
    square: props.square,
    'bottom-action': props.bottomAction
  }]), {
    'van-hairline--surround': hairline
  }];
  return h(tag, (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, (0, _functional.inherit)(ctx)]), [loading ? [h(_loading["default"], {
    "attrs": {
      "size": props.loadingSize,
      "color": type === 'default' ? undefined : ''
    }
  }), loadingText && h("span", {
    "class": bem('loading-text')
  }, [loadingText])] : h("span", {
    "class": bem('text')
  }, [slots["default"] ? slots["default"]() : props.text])]);
}

Button.props = (0, _extends2["default"])({}, _router.routeProps, {
  text: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  bottomAction: Boolean,
  tag: {
    type: String,
    "default": 'button'
  },
  type: {
    type: String,
    "default": 'default'
  },
  size: {
    type: String,
    "default": 'normal'
  },
  loadingSize: {
    type: String,
    "default": '20px'
  }
});

var _default = sfc(Button);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../utils/router":1558606160855,"../loading":1558606160843}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160860, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _utils = require("../utils");

var instance;

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (_vue["default"].extend(_Dialog["default"]))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !(0, _utils.isInDocument)(instance.$el)) {
      initInstance();
    }

    (0, _extends2["default"])(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog((0, _extends2["default"])({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _extends2["default"])(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = (0, _extends2["default"])({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function () {
  _vue["default"].use(_Dialog["default"]);
};

_vue["default"].prototype.$dialog = Dialog;
var _default = Dialog;
exports["default"] = _default;
}, function(modId) { var map = {"./Dialog":1558606160861,"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160861, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _popup = require("../mixins/popup");

var _button = _interopRequireDefault(require("../button"));

var _use = (0, _utils.use)('dialog'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var _default = sfc({
  mixins: [_popup.PopupMixin],
  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      "default": true
    },
    overlay: {
      type: Boolean,
      "default": true
    },
    closeOnClickOverlay: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false) {
            _this.onClose(action);
          }

          _this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    }
  },
  render: function render(h) {
    var _bem,
        _this2 = this;

    if (!this.shouldRender) {
      return;
    }

    var title = this.title,
        message = this.message,
        messageAlign = this.messageAlign;
    var children = this.slots();
    var Title = title && h("div", {
      "class": bem('header', {
        isolated: !message && !children
      })
    }, [title]);
    var Content = (children || message) && h("div", {
      "class": bem('content')
    }, [children || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": ['van-hairline--top', bem('footer', {
        buttons: hasButtons
      })]
    }, [this.showCancelButton && h(_button["default"], {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || t('cancel')
      },
      "class": bem('cancel'),
      "style": {
        color: this.cancelButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), this.showConfirmButton && h(_button["default"], {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || t('confirm')
      },
      "class": [bem('confirm'), {
        'van-hairline--left': hasButtons
      }],
      "style": {
        color: this.confirmButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-dialog-bounce"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem(), this.className]
    }, [Title, Content, ButtonGroup])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/popup":1558606160833,"../button":1558606160859}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160862, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _cell = _interopRequireDefault(require("../cell"));

var _field = _interopRequireDefault(require("../field"));

var _use = (0, _utils.use)('address-edit-detail'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var android = (0, _utils.isAndroid)();

var _default = sfc({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    showSearchResult: Boolean
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    renderFinish: function renderFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [t('complete')]);
      }
    },
    renderSearchResult: function renderSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var searchResult = this.searchResult;
      var show = this.focused && searchResult && this.showSearchResult;

      if (show) {
        return searchResult.map(function (express) {
          return h(_cell["default"], {
            "key": express.name + express.address,
            "attrs": {
              "title": express.name,
              "label": express.address,
              "icon": "location-o",
              "clickable": true
            },
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            }
          });
        });
      }
    }
  },
  render: function render(h) {
    return h(_cell["default"], {
      "class": bem()
    }, [h(_field["default"], {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "maxlength": "200",
        "value": this.value,
        "error": this.error,
        "label": t('label'),
        "placeholder": t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.renderFinish
      },
      "on": (0, _extends2["default"])({}, this.$listeners)
    }), this.renderSearchResult()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../cell":1558606160853,"../field":1558606160852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160863, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _cell = _interopRequireDefault(require("../cell"));

var _switch = _interopRequireDefault(require("../switch"));

var _shared = require("../switch/shared");

var _use = (0, _utils.use)('switch-cell'),
    sfc = _use[0],
    bem = _use[1];

function SwitchCell(h, props, slots, ctx) {
  return h(_cell["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "attrs": {
      "center": true,
      "title": props.title,
      "border": props.border
    },
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [h(_switch["default"], {
    "props": (0, _extends2["default"])({}, props),
    "on": (0, _extends2["default"])({}, ctx.listeners)
  })]);
}

SwitchCell.props = (0, _extends2["default"])({}, _shared.switchProps, {
  title: String,
  border: Boolean,
  size: {
    type: String,
    "default": '24px'
  }
});

var _default = sfc(SwitchCell);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../cell":1558606160853,"../switch":1558606160864,"../switch/shared":1558606160865}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160864, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _loading = _interopRequireDefault(require("../loading"));

var _shared = require("./shared");

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('switch'),
    sfc = _use[0],
    bem = _use[1];

function Switch(h, props, slots, ctx) {
  var value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeValue = props.activeValue,
      inactiveValue = props.inactiveValue;
  var style = {
    fontSize: props.size,
    backgroundColor: value ? props.activeColor : props.inactiveColor
  };

  var onClick = function onClick() {
    if (!disabled && !loading) {
      var newValue = value === activeValue ? inactiveValue : activeValue;
      (0, _functional.emit)(ctx, 'input', newValue);
      (0, _functional.emit)(ctx, 'change', newValue);
    }
  };

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      on: value === activeValue,
      disabled: disabled
    }),
    "style": style,
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('node')
  }, [loading && h(_loading["default"], {
    "class": bem('loading')
  })])]);
}

Switch.props = _shared.switchProps;

var _default = sfc(Switch);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../loading":1558606160843,"./shared":1558606160865,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160865, function(require, module, exports) {


exports.__esModule = true;
exports.switchProps = void 0;

/**
 * Common Switch Props
 */
var switchProps = {
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    "default": true
  },
  inactiveValue: {
    type: null,
    "default": false
  },
  size: {
    type: String,
    "default": '30px'
  }
};
exports.switchProps = switchProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160866, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _button = _interopRequireDefault(require("../button"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _Item = _interopRequireDefault(require("./Item"));

var _use = (0, _utils.use)('address-list'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function AddressList(h, props, slots, ctx) {
  var getList = function getList(list, disabled) {
    return list.map(function (item, index) {
      return h(_Item["default"], {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable && !disabled
        },
        "key": item.id,
        "on": {
          "select": function select() {
            (0, _functional.emit)(ctx, disabled ? 'select-disabled' : 'select', item, index);
          },
          "edit": function edit() {
            (0, _functional.emit)(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          }
        }
      });
    });
  };

  var List = getList(props.list);
  var DisabledList = getList(props.disabledList, true);
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), h(_radioGroup["default"], {
    "attrs": {
      "value": props.value
    },
    "on": {
      "input": function input(event) {
        (0, _functional.emit)(ctx, 'input', event);
      }
    }
  }, [List]), props.disabledText && h("div", {
    "class": bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots["default"] && slots["default"](), h(_button["default"], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || t('add')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      }
    }
  })]);
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [String, Number],
  switchable: {
    type: Boolean,
    "default": true
  }
};

var _default = sfc(AddressList);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../button":1558606160859,"../radio-group":1558606160867,"./Item":1558606160868}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160867, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('radio-group'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160868, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _radio = _interopRequireDefault(require("../radio"));

var _use = (0, _utils.use)('address-item'),
    sfc = _use[0],
    bem = _use[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  var onSelect = function onSelect() {
    if (props.switchable) {
      (0, _functional.emit)(ctx, 'select');
    }
  };

  var renderRightIcon = function renderRightIcon() {
    return h(_icon["default"], {
      "attrs": {
        "name": "edit"
      },
      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          (0, _functional.emit)(ctx, 'edit');
        }
      }
    });
  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": bem('address')
    }, [data.address])];
    return props.switchable ? h(_radio["default"], {
      "attrs": {
        "name": data.id
      },
      "on": {
        "click": onSelect
      }
    }, [Info]) : Info;
  };

  return h(_cell["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      disabled: disabled,
      unswitchable: !switchable
    }),
    "attrs": {
      "valueClass": bem('value'),
      "isLink": !disabled && switchable
    },
    "scopedSlots": {
      "default": renderContent,
      'right-icon': renderRightIcon
    },
    "on": {
      "click": onSelect
    }
  }, (0, _functional.inherit)(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};

var _default = sfc(AddressItem);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../icon":1558606160840,"../cell":1558606160853,"../radio":1558606160869}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160869, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _checkbox = require("../mixins/checkbox");

var _use = (0, _utils.use)('radio'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [(0, _checkbox.CheckboxMixin)('van-radio-group', bem)],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      if (!this.isDisabled) {
        this.currentValue = this.name;
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/checkbox":1558606160870}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160870, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckboxMixin = void 0;

var _icon = _interopRequireDefault(require("../icon"));

var _findParent = require("./find-parent");

/**
 * Common part of Checkbox & Radio
 */
var CheckboxMixin = function CheckboxMixin(parent, bem) {
  return {
    mixins: [_findParent.FindParentMixin],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        "default": 'round'
      }
    },
    created: function created() {
      this.findParent(parent);
    },
    computed: {
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      }
    },
    render: function render(h) {
      var _this = this;

      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(_icon["default"], {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }]),
        "on": {
          "click": this.onClickLabel
        }
      }, [slots()]);
      return h("div", {
        "class": bem(),
        "on": {
          "click": function click(event) {
            _this.$emit('click', event);
          }
        }
      }, [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "on": {
          "click": this.onClickIcon
        }
      }, [CheckIcon]), Label]);
    }
  };
};

exports.CheckboxMixin = CheckboxMixin;
}, function(modId) { var map = {"../icon":1558606160840,"./find-parent":1558606160871}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160871, function(require, module, exports) {


exports.__esModule = true;
exports.FindParentMixin = void 0;

/**
 * find parent component by name
 */
var FindParentMixin = {
  data: function data() {
    return {
      parent: null
    };
  },
  methods: {
    findParent: function findParent(name) {
      var parent = this.$parent;

      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break;
        }

        parent = parent.$parent;
      }
    }
  }
};
exports.FindParentMixin = FindParentMixin;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160872, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _info = _interopRequireDefault(require("../info"));

var _use = (0, _utils.use)('badge'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    url: String,
    info: [String, Number],
    title: String
  },
  inject: ['vanBadgeGroup'],
  created: function created() {
    this.parent.badges.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    this.parent.badges = this.parent.badges.filter(function (item) {
      return item !== _this;
    });
  },
  computed: {
    parent: function parent() {
      if (process.env.NODE_ENV !== 'production' && !this.vanBadgeGroup) {
        console.error('[Vant] Badge needs to be child of BadgeGroup');
      }

      return this.vanBadgeGroup;
    },
    select: function select() {
      return this.parent.badges.indexOf(this) === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      var index = this.parent.badges.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  },
  render: function render(h) {
    return h("a", {
      "attrs": {
        "href": this.url
      },
      "class": [bem({
        select: this.select
      }), 'van-hairline'],
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('text')
    }, [this.title, h(_info["default"], {
      "attrs": {
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../info":1558606160841}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160873, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('badge-group'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    activeKey: {
      type: [Number, String],
      "default": 0
    }
  },
  provide: function provide() {
    return {
      vanBadgeGroup: this
    };
  },
  data: function data() {
    return {
      badges: []
    };
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), 'van-hairline--top-bottom']
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160874, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _tag = _interopRequireDefault(require("../tag"));

var _use = (0, _utils.use)('card'),
    sfc = _use[0],
    bem = _use[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showThumb = slots.thumb || thumb;
  var showTag = slots.tag || props.tag;
  var showNum = slots.num || (0, _utils.isDef)(props.num);
  var showPrice = slots.price || (0, _utils.isDef)(props.price);
  var showOriginPrice = slots['origin-price'] || (0, _utils.isDef)(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;
  var Thumb = showThumb && h("a", {
    "attrs": {
      "href": props.thumbLink
    },
    "class": bem('thumb')
  }, [slots.thumb ? slots.thumb() : props.lazyLoad ? h("img", {
    "class": bem('img'),
    "directives": [{
      name: "lazy",
      value: thumb
    }]
  }) : h("img", {
    "class": bem('img'),
    "attrs": {
      "src": thumb
    }
  }), showTag && h("div", {
    "class": bem('tag')
  }, [slots.tag ? slots.tag() : h(_tag["default"], {
    "attrs": {
      "mark": true,
      "type": "danger"
    }
  }, [props.tag])])]);
  var Title = slots.title ? slots.title() : props.title && h("div", {
    "class": bem('title')
  }, [props.title]);
  var Desc = slots.desc ? slots.desc() : props.desc && h("div", {
    "class": [bem('desc'), 'van-ellipsis']
  }, [props.desc]);
  var Price = showPrice && h("div", {
    "class": bem('price')
  }, [slots.price ? slots.price() : props.currency + " " + props.price]);
  var OriginPrice = showOriginPrice && h("div", {
    "class": bem('origin-price')
  }, [slots['origin-price'] ? slots['origin-price']() : props.currency + " " + props.originPrice]);
  var Num = showNum && h("div", {
    "class": bem('num')
  }, [slots.num ? slots.num() : "x " + props.num]);
  var Footer = slots.footer && h("div", {
    "class": bem('footer')
  }, [slots.footer()]);
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx, true)]), [h("div", {
    "class": bem('header')
  }, [Thumb, h("div", {
    "class": bem('content', {
      centered: props.centered
    })
  }, [Title, Desc, slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [Price, OriginPrice, Num])])]), Footer]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    "default": '¥'
  }
};

var _default = sfc(Card);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../tag":1558606160875}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160875, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _color = require("../utils/color");

var _use = (0, _utils.use)('tag'),
    sfc = _use[0],
    bem = _use[1];

var COLOR_MAP = {
  danger: _color.RED,
  primary: _color.BLUE,
  success: _color.GREEN
};

function Tag(h, props, slots, ctx) {
  var _style;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      round = props.round,
      size = props.size;
  var color = props.color || type && COLOR_MAP[type] || _color.GRAY_DARK;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  return h("span", (0, _babelHelperVueJsxMergeProps["default"])([{
    "style": style,
    "class": [bem(classes), {
      'van-hairline--surround': plain
    }]
  }, (0, _functional.inherit)(ctx, true)]), [slots["default"] && slots["default"]()]);
}

Tag.props = {
  size: String,
  type: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String
};

var _default = sfc(Tag);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../utils/color":1558606160876}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160876, function(require, module, exports) {


exports.__esModule = true;
exports.GRAY_DARK = exports.WHITE = exports.GREEN = exports.BLUE = exports.RED = void 0;
var RED = '#f44';
exports.RED = RED;
var BLUE = '#1989fa';
exports.BLUE = BLUE;
var GREEN = '#07c160';
exports.GREEN = GREEN;
var WHITE = '#fff';
exports.WHITE = WHITE;
var GRAY_DARK = '#969799';
exports.GRAY_DARK = GRAY_DARK;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160877, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('cell-group'),
    sfc = _use[0],
    bem = _use[1];

function CellGroup(h, props, slots, ctx) {
  var Group = h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [bem(), {
      'van-hairline--top-bottom': props.border
    }]
  }, (0, _functional.inherit)(ctx, true)]), [slots["default"] && slots["default"]()]);

  if (props.title) {
    return h("div", [h("div", {
      "class": bem('title')
    }, [props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    "default": true
  }
};

var _default = sfc(CellGroup);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160878, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _checkbox = require("../mixins/checkbox");

var _use = (0, _utils.use)('checkbox'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [(0, _checkbox.CheckboxMixin)('van-checkbox-group', bem)],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      var checked = !this.checked; // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.

      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    onClickIcon: function onClickIcon() {
      if (!this.isDisabled) {
        this.toggle();
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.toggle();
      }
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/checkbox":1558606160870}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160879, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('checkbox-group'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    max: Number,
    value: Array,
    disabled: Boolean
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160880, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _raf = require("../utils/raf");

var _color = require("../utils/color");

var _use = (0, _utils.use)('circle'),
    sfc = _use[0],
    bem = _use[1];

var PERIMETER = 3140;
var PATH = 'M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0';

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

var _default = sfc({
  props: {
    text: String,
    value: Number,
    speed: Number,
    size: {
      type: String,
      "default": '100px'
    },
    fill: {
      type: String,
      "default": 'none'
    },
    rate: {
      type: Number,
      "default": 100
    },
    layerColor: {
      type: String,
      "default": _color.WHITE
    },
    color: {
      type: String,
      "default": _color.BLUE
    },
    strokeWidth: {
      type: Number,
      "default": 40
    },
    clockwise: {
      type: Boolean,
      "default": true
    }
  },
  computed: {
    style: function style() {
      return {
        width: this.size,
        height: this.size
      };
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * (100 - this.value) / 100;
      offset = this.clockwise ? offset : PERIMETER * 2 - offset;
      return {
        stroke: "" + this.color,
        strokeDashoffset: offset + "px",
        strokeWidth: this.strokeWidth + 1 + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          (0, _raf.cancel)(this.rafId);
          this.rafId = (0, _raf.raf)(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = (0, _raf.raf)(this.animate);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 1060 1060"
      }
    }, [h("path", {
      "class": bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": PATH
      }
    }), h("path", {
      "class": bem('layer'),
      "style": this.layerStyle,
      "attrs": {
        "d": PATH
      }
    })]), this.slots() || this.text && h("div", {
      "class": bem('text')
    }, [this.text])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/raf":1558606160881,"../utils/color":1558606160876}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160881, function(require, module, exports) {


exports.__esModule = true;
exports.raf = raf;
exports.cancel = cancel;

var _index = require("./index");

/**
 * requestAnimationFrame polyfill
 */
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = _index.isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
}

function cancel(id) {
  iCancel.call(root, id);
}
}, function(modId) { var map = {"./index":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160882, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('col'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      "default": 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  render: function render(h) {
    var _bem;

    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "class": bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "style": this.style
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160883, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('collapse'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      items: []
    };
  },
  methods: {
    "switch": function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), {
        'van-hairline--top-bottom': this.border
      }]
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160884, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _raf = require("../utils/raf");

var _cell = _interopRequireDefault(require("../cell"));

var _shared = require("../cell/shared");

var _findParent = require("../mixins/find-parent");

var _use = (0, _utils.use)('collapse-item'),
    sfc = _use[0],
    bem = _use[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];

var _default = sfc({
  mixins: [_findParent.FindParentMixin],
  props: (0, _extends2["default"])({}, _shared.cellProps, {
    name: [String, Number],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      "default": true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    items: function items() {
      return this.parent.items;
    },
    index: function index() {
      return this.items.indexOf(this);
    },
    currentName: function currentName() {
      return (0, _utils.isDef)(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.findParent('van-collapse');
    this.items.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  destroyed: function destroyed() {
    this.items.splice(this.index, 1);
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      }

      (0, _raf.raf)(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var clientHeight = content.clientHeight;

        if (clientHeight) {
          var contentHeight = clientHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight;
          (0, _raf.raf)(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      var expanded = !this.expanded;
      this.parent["switch"](name, expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = null;
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots["default"] = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(_cell["default"], {
      "class": bem('title', {
        disabled: this.disabled,
        expanded: this.expanded
      }),
      "on": {
        "click": this.onClick
      },
      "scopedSlots": titleSlots,
      "props": (0, _extends2["default"])({}, this.$props)
    });
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": bem('content')
    }, [this.slots()])]);
    return h("div", {
      "class": [bem(), {
        'van-hairline--top': this.index
      }]
    }, [Title, Content]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/raf":1558606160881,"../cell":1558606160853,"../cell/shared":1558606160854,"../mixins/find-parent":1558606160871}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160885, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _cell = _interopRequireDefault(require("../cell"));

var _use = (0, _utils.use)('contact-card'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;
  return h(_cell["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": bem([type]),
    "on": {
      "click": function click(event) {
        if (editable) {
          (0, _functional.emit)(ctx, 'click', event);
        }
      }
    }
  }, (0, _functional.inherit)(ctx)]), [type === 'add' ? props.addText || t('addText') : [h("div", [t('name') + "\uFF1A" + props.name]), h("div", [t('tel') + "\uFF1A" + props.tel])]]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    "default": true
  },
  type: {
    type: String,
    "default": 'add'
  }
};

var _default = sfc(ContactCard);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../cell":1558606160853}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160886, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _button = _interopRequireDefault(require("../button"));

var _field = _interopRequireDefault(require("../field"));

var _toast = _interopRequireDefault(require("../toast"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _mobile = require("../utils/validate/mobile");

var _use = (0, _utils.use)('contact-edit'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var defaultContact = {
  tel: '',
  name: ''
};

var _default2 = sfc({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      "default": function _default() {
        return (0, _extends2["default"])({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      "default": _mobile.isMobile
    }
  },
  data: function data() {
    return {
      data: (0, _extends2["default"])({}, defaultContact, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = (0, _extends2["default"])({}, defaultContact, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast["default"])(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog["default"].confirm({
        message: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": bem()
    }, [h(_field["default"], {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(_field["default"], {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h("div", {
      "class": bem('buttons')
    }, [h(_button["default"], {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(_button["default"], {
      "attrs": {
        "block": true,
        "text": t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
});

exports["default"] = _default2;
}, function(modId) { var map = {"../utils":1558606160823,"../button":1558606160859,"../field":1558606160852,"../toast":1558606160857,"../dialog":1558606160860,"../utils/validate/mobile":1558606160846}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160887, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _button = _interopRequireDefault(require("../button"));

var _radio = _interopRequireDefault(require("../radio"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _use = (0, _utils.use)('contact-list'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list.map(function (item, index) {
    var onClick = function onClick() {
      (0, _functional.emit)(ctx, 'input', item.id);
      (0, _functional.emit)(ctx, 'select', item, index);
    };

    return h(_cell["default"], {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "valueClass": bem('item-value')
      },
      "class": bem('item'),
      "scopedSlots": {
        "default": function _default() {
          return h(_radio["default"], {
            "attrs": {
              "name": item.id
            },
            "on": {
              "click": onClick
            }
          }, [h("div", {
            "class": bem('name')
          }, [item.name + "\uFF0C" + item.tel])]);
        },
        'right-icon': function rightIcon() {
          return h(_icon["default"], {
            "attrs": {
              "name": "edit"
            },
            "class": bem('edit'),
            "on": {
              "click": function click(event) {
                event.stopPropagation();
                (0, _functional.emit)(ctx, 'edit', item, index);
              }
            }
          });
        }
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [h(_radioGroup["default"], {
    "attrs": {
      "value": props.value
    },
    "class": bem('group')
  }, [List]), h(_button["default"], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addText || t('addText')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      }
    }
  })]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String
};

var _default2 = sfc(ContactList);

exports["default"] = _default2;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../icon":1558606160840,"../cell":1558606160853,"../button":1558606160859,"../radio":1558606160869,"../radio-group":1558606160867}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160888, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _use = (0, _utils.use)('coupon'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + padZero(date.getMonth() + 1) + "." + padZero(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

var _default = sfc({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      "default": '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      return t('valid') + "\uFF1A" + getDate(this.coupon.startAt) + " - " + getDate(this.coupon.endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      return coupon.denominations ? "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations) : coupon.discount ? t('discount', formatDiscount(this.coupon.discount)) : '';
    },
    conditionMessage: function conditionMessage() {
      var condition = this.coupon.originCondition;
      condition = condition % 100 === 0 ? Math.round(condition / 100) : (condition / 100).toFixed(2);
      return condition === 0 ? t('unlimited') : t('condition', condition);
    }
  },
  render: function render(h) {
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": bem('content')
    }, [h("div", {
      "class": bem('head')
    }, [h("h2", {
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": bem('body')
    }, [h("h2", [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(_checkbox["default"], {
      "attrs": {
        "value": true
      },
      "class": bem('corner')
    })])]), description && h("p", {
      "class": bem('description')
    }, [description])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../checkbox":1558606160878}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160889, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _cell = _interopRequireDefault(require("../cell"));

var _use = (0, _utils.use)('coupon-cell'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = formatValue(props);
  return h(_cell["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem(),
    "attrs": {
      "value": value,
      "title": props.title || t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, (0, _functional.inherit)(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: Array,
  currency: {
    type: String,
    "default": '¥'
  },
  border: {
    type: Boolean,
    "default": true
  },
  editable: {
    type: Boolean,
    "default": true
  },
  chosenCoupon: {
    type: Number,
    "default": -1
  }
};

var _default = sfc(CouponCell);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../cell":1558606160853}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160890, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _tab = _interopRequireDefault(require("../tab"));

var _tabs = _interopRequireDefault(require("../tabs"));

var _field = _interopRequireDefault(require("../field"));

var _button = _interopRequireDefault(require("../button"));

var _coupon = _interopRequireDefault(require("../coupon"));

var _use = (0, _utils.use)('coupon-list'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

var _default = sfc({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    coupons: Array,
    disabledCoupons: Array,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      "default": 1
    },
    chosenCoupon: {
      type: Number,
      "default": -1
    },
    displayedCouponIndex: {
      type: Number,
      "default": -1
    },
    showExchangeBar: {
      type: Boolean,
      "default": true
    },
    showCloseButton: {
      type: Boolean,
      "default": true
    },
    currency: {
      type: String,
      "default": '¥'
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    title: function title() {
      return t('enable') + " (" + this.coupons.length + ")";
    },
    disabledTitle: function disabledTitle() {
      return t('disabled') + " (" + this.disabledCoupons.length + ")";
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: function displayedCouponIndex(val) {
      this.scrollToShowCoupon(val);
    }
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('empty')
      }, [h("img", {
        "attrs": {
          "src": EMPTY_IMAGE
        }
      }), h("p", [t('empty')])]);
    },
    renderExchangeButton: function renderExchangeButton() {
      var h = this.$createElement;
      return h(_button["default"], {
        "attrs": {
          "size": "small",
          "type": "danger",
          "text": this.exchangeButtonText || t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render(h) {
    var _this2 = this;

    var ExchangeBar = this.showExchangeBar && h(_field["default"], {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || t('placeholder'),
        "maxlength": "20"
      },
      "class": bem('field'),
      "scopedSlots": {
        button: this.renderExchangeButton
      },
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    });

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(_tab["default"], {
      "attrs": {
        "title": this.title
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [this.coupons.map(function (coupon, index) {
      return h(_coupon["default"], {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !this.coupons.length && this.renderEmpty()])]);
    var DisabledCouponTab = h(_tab["default"], {
      "attrs": {
        "title": this.disabledTitle
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [this.disabledCoupons.map(function (coupon) {
      return h(_coupon["default"], {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !this.disabledCoupons.length && this.renderEmpty()])]);
    return h("div", {
      "class": bem()
    }, [ExchangeBar, h(_tabs["default"], {
      "class": bem('tab'),
      "attrs": {
        "line-width": 120
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h(_button["default"], {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "size": "large",
        "text": this.closeButtonText || t('close')
      },
      "class": bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../tab":1558606160891,"../tabs":1558606160892,"../field":1558606160852,"../button":1558606160859,"../coupon":1558606160888}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160891, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _findParent = require("../mixins/find-parent");

/* eslint-disable object-shorthand */
var _use = (0, _utils.use)('tab'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [_findParent.FindParentMixin],
  props: {
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    index: function index() {
      return this.parent.tabs.indexOf(this);
    },
    selected: function selected() {
      return this.index === this.parent.curActive;
    }
  },
  watch: {
    'parent.curActive': function parentCurActive() {
      this.inited = this.inited || this.selected;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  created: function created() {
    this.findParent('van-tabs');
  },
  mounted: function mounted() {
    var tabs = this.parent.tabs;
    var index = this.parent.slots().indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);

    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parent.tabs.splice(this.index, 1);
  },
  render: function render(h) {
    var slots = this.slots;
    var shouldRender = this.inited || !this.parent.lazyRender;
    return h("div", {
      "directives": [{
        name: "show",
        value: this.selected || this.parent.animated
      }],
      "class": bem('pane')
    }, [shouldRender ? slots() : h(), slots('title') && h("div", {
      "ref": "title"
    }, [slots('title')])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/find-parent":1558606160871}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160892, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _raf = require("../utils/raf");

var _event = require("../utils/event");

var _touch = require("../mixins/touch");

var _scroll = require("../utils/scroll");

var _use = (0, _utils.use)('tabs'),
    sfc = _use[0],
    bem = _use[1];

var tabBem = (0, _utils.use)('tab')[1];

var _default = sfc({
  mixins: [_touch.TouchMixin],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    offsetTop: Number,
    swipeable: Boolean,
    background: String,
    titleActiveColor: String,
    titleInactiveColor: String,
    ellipsis: {
      type: Boolean,
      "default": true
    },
    lazyRender: {
      type: Boolean,
      "default": true
    },
    lineWidth: {
      type: Number,
      "default": null
    },
    lineHeight: {
      type: Number,
      "default": null
    },
    active: {
      type: [Number, String],
      "default": 0
    },
    type: {
      type: String,
      "default": 'line'
    },
    duration: {
      type: Number,
      "default": 0.3
    },
    swipeThreshold: {
      type: Number,
      "default": 4
    }
  },
  data: function data() {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {
        backgroundColor: this.color
      },
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.tabs.length > this.swipeThreshold || !this.ellipsis;
    },
    wrapStyle: function wrapStyle() {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          };

        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          };

        default:
          return null;
      }
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    trackStyle: function trackStyle() {
      if (this.animated) {
        return {
          left: -1 * this.curActive * 100 + "%",
          transitionDuration: this.duration + "s"
        };
      }
    }
  },
  watch: {
    active: function active(val) {
      if (val !== this.curActive) {
        this.correctActive(val);
      }
    },
    color: function color() {
      this.setLine();
    },
    tabs: function tabs() {
      this.correctActive(this.curActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    curActive: function curActive() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.position === 'top' || this.position === 'bottom') {
        (0, _scroll.setScrollTop)(window, (0, _scroll.getElementTop)(this.$el) - this.offsetTop);
      }
    },
    sticky: function sticky() {
      this.handlers(true);
    },
    swipeable: function swipeable() {
      this.handlers(true);
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  deactivated: function deactivated() {
    this.handlers(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.handlers(false);
  },
  methods: {
    onShow: function onShow() {
      var _this = this;

      this.$nextTick(function () {
        _this.inited = true;

        _this.handlers(true);

        _this.scrollIntoView(true);
      });
    },
    // whether to bind sticky listener
    handlers: function handlers(bind) {
      var events = this.events;
      var sticky = this.sticky && bind;
      var swipeable = this.swipeable && bind; // listen to window resize event

      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? _event.on : _event.off)(window, 'resize', this.setLine, true);
      } // listen to scroll event


      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || (0, _scroll.getScrollEventTarget)(this.$el);
        (sticky ? _event.on : _event.off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      } // listen to touch event


      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        var content = this.$refs.content;
        var action = swipeable ? _event.on : _event.off;
        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          curActive = this.curActive;
      var minSwipeDistance = 50;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1);
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1);
        }
      }
    },
    // adjust tab position
    onScroll: function onScroll() {
      var scrollTop = (0, _scroll.getScrollTop)(window) + this.offsetTop;
      var elTopToPageTop = (0, _scroll.getElementTop)(this.$el);
      var elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;

      if (scrollTop > elBottomToPageTop) {
        this.position = 'bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top';
      } else {
        this.position = '';
      }

      var scrollParams = {
        scrollTop: scrollTop,
        isFixed: this.position === 'top'
      };
      this.$emit('scroll', scrollParams);
    },
    // update nav bar style
    setLine: function setLine() {
      var _this2 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var tabs = _this2.$refs.tabs;

        if (!tabs || !tabs[_this2.curActive] || _this2.type !== 'line') {
          return;
        }

        var tab = tabs[_this2.curActive];
        var lineWidth = _this2.lineWidth,
            lineHeight = _this2.lineHeight;
        var width = (0, _utils.isDef)(lineWidth) ? lineWidth : tab.offsetWidth / 2;
        var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;
        var lineStyle = {
          width: width + "px",
          backgroundColor: _this2.color,
          transform: "translateX(" + left + "px)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this2.duration + "s";
        }

        if ((0, _utils.isDef)(lineHeight)) {
          var height = lineHeight + "px";
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this2.lineStyle = lineStyle;
      });
    },
    // correct the value of active
    correctActive: function correctActive(active) {
      active = +active;
      var exist = this.tabs.some(function (tab) {
        return tab.index === active;
      });
      var defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },
    setCurActive: function setCurActive(active) {
      active = this.findAvailableTab(active, active < this.curActive);

      if ((0, _utils.isDef)(active) && active !== this.curActive) {
        this.$emit('input', active);

        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title);
        }

        this.curActive = active;
      }
    },
    findAvailableTab: function findAvailableTab(active, reverse) {
      var diff = reverse ? -1 : 1;
      var index = active;

      while (index >= 0 && index < this.tabs.length) {
        if (!this.tabs[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$tabs$index = this.tabs[index],
          title = _this$tabs$index.title,
          disabled = _this$tabs$index.disabled;

      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var tabs = this.$refs.tabs;

      if (!this.scrollable || !tabs || !tabs[this.curActive]) {
        return;
      }

      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var _tabs$this$curActive = tabs[this.curActive],
          offsetLeft = _tabs$this$curActive.offsetLeft,
          tabWidth = _tabs$this$curActive.offsetWidth;
      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate);
    },
    // animate the scrollLeft of nav
    scrollTo: function scrollTo(el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from;
        return;
      }

      var count = 0;
      var frames = Math.round(this.duration * 1000 / 16);

      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */

        if (++count < frames) {
          (0, _raf.raf)(animate);
        }
      };

      animate();
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this3 = this;

      this.$nextTick(function () {
        var title = _this3.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    },
    getTabStyle: function getTabStyle(item, index) {
      var style = {};
      var color = this.color;
      var active = index === this.curActive;
      var isCard = this.type === 'card'; // theme color

      if (color) {
        if (!item.disabled && isCard && !active) {
          style.color = color;
        }

        if (!item.disabled && isCard && active) {
          style.backgroundColor = color;
        }

        if (isCard) {
          style.borderColor = color;
        }
      }

      var titleColor = active ? this.titleActiveColor : this.titleInactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + '%';
      }

      return style;
    }
  },
  render: function render(h) {
    var _this4 = this;

    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.tabs.map(function (tab, index) {
      return h("div", {
        "ref": "tabs",
        "refInFor": true,
        "class": tabBem({
          active: index === _this4.curActive,
          disabled: tab.disabled,
          complete: !ellipsis
        }),
        "style": _this4.getTabStyle(tab, index),
        "on": {
          "click": function click() {
            _this4.onClick(index);
          }
        }
      }, [h("span", {
        "ref": "title",
        "refInFor": true,
        "class": {
          'van-ellipsis': ellipsis
        }
      }, [tab.title])]);
    });
    return h("div", {
      "class": bem([type])
    }, [h("div", {
      "ref": "wrap",
      "style": this.wrapStyle,
      "class": [bem('wrap', {
        scrollable: scrollable
      }), {
        'van-hairline--top-bottom': type === 'line'
      }]
    }, [h("div", {
      "ref": "nav",
      "class": bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), type === 'line' && h("div", {
      "class": bem('line'),
      "style": this.lineStyle
    }), Nav, this.slots('nav-right')])]), h("div", {
      "ref": "content",
      "class": bem('content', {
        animated: animated
      })
    }, [animated ? h("div", {
      "class": bem('track'),
      "style": this.trackStyle
    }, [this.slots()]) : this.slots()])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/raf":1558606160881,"../utils/event":1558606160836,"../mixins/touch":1558606160835,"../utils/scroll":1558606160839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160893, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _picker = _interopRequireDefault(require("../picker"));

var _shared = require("../picker/shared");

var _utils2 = require("./utils");

var _use = (0, _utils.use)('datetime-picker'),
    sfc = _use[0],
    bem = _use[1];

var currentYear = new Date().getFullYear();

var _default2 = sfc({
  props: (0, _extends2["default"])({}, _shared.pickerProps, {
    value: null,
    minHour: Number,
    minMinute: Number,
    type: {
      type: String,
      "default": 'datetime'
    },
    showToolbar: {
      type: Boolean,
      "default": true
    },
    format: {
      type: String,
      "default": 'YYYY.MM.DD HH时 mm分'
    },
    formatter: {
      type: Function,
      "default": function _default(type, value) {
        return value;
      }
    },
    minDate: {
      type: Date,
      "default": function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: _utils2.isValidDate
    },
    maxDate: {
      type: Date,
      "default": function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: _utils2.isValidDate
    },
    maxHour: {
      type: Number,
      "default": 23
    },
    maxMinute: {
      type: Number,
      "default": 59
    }
  }),
  data: function data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },
  watch: {
    value: function value(val) {
      val = this.correctValue(val);
      var isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();

      if (!isEqual) {
        this.innerValue = val;

        if (this.type === 'time') {
          this.updateColumnValue(val);
        }
      }
    },
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  computed: {
    ranges: function ranges() {
      if (this.type === 'time') {
        return [{
          type: 'hour',
          range: [this.minHour, this.maxHour]
        }, {
          type: 'minute',
          range: [this.minMinute, this.maxMinute]
        }];
      }

      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns: function columns() {
      var _this = this;

      var results = this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = (0, _utils2.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = rangeArr[0] + index;
          value = value < 10 ? "0" + value : "" + value;
          return _this.formatter(type, value);
        });
        return {
          values: values
        };
      });
      return results;
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    correctValue: function correctValue(value) {
      // validate value
      var isDateType = this.type !== 'time';

      if (isDateType && !(0, _utils2.isValidDate)(value)) {
        value = this.minDate;
      } else if (!value) {
        var minHour = this.minHour;
        value = (minHour > 10 ? minHour : '0' + minHour) + ":00";
      } // time type


      if (!isDateType) {
        var _value$split = value.split(':'),
            hour = _value$split[0],
            minute = _value$split[1];

        hour = (0, _utils2.padZero)((0, _utils.range)(hour, this.minHour, this.maxHour));
        minute = (0, _utils2.padZero)((0, _utils.range)(minute, this.minMinute, this.maxMinute));
        return hour + ":" + minute;
      } // date type


      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref2;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = (0, _utils2.getMonthEndDay)(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref2 = {}, _ref2[type + "Year"] = year, _ref2[type + "Month"] = month, _ref2[type + "Date"] = date, _ref2[type + "Hour"] = hour, _ref2[type + "Minute"] = minute, _ref2;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      var value;

      if (this.type === 'time') {
        var indexes = picker.getIndexes();
        value = indexes[0] + this.minHour + ":" + (indexes[1] + this.minMinute);
      } else {
        var values = picker.getValues();
        var year = (0, _utils2.getTrueValue)(values[0]);
        var month = (0, _utils2.getTrueValue)(values[1]);
        var maxDate = (0, _utils2.getMonthEndDay)(year, month);
        var date = (0, _utils2.getTrueValue)(values[2]);

        if (this.type === 'year-month') {
          date = 1;
        }

        date = date > maxDate ? maxDate : date;
        var hour = 0;
        var minute = 0;

        if (this.type === 'datetime') {
          hour = (0, _utils2.getTrueValue)(values[3]);
          minute = (0, _utils2.getTrueValue)(values[4]);
        }

        value = new Date(year, month - 1, date, hour, minute);
      }

      this.innerValue = this.correctValue(value);
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this3 = this;

      var values = [];
      var formatter = this.formatter;

      if (this.type === 'time') {
        var pair = value.split(':');
        values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      } else {
        values = [formatter('year', "" + value.getFullYear()), formatter('month', (0, _utils2.padZero)(value.getMonth() + 1)), formatter('day', (0, _utils2.padZero)(value.getDate()))];

        if (this.type === 'datetime') {
          values.push(formatter('hour', (0, _utils2.padZero)(value.getHours())), formatter('minute', (0, _utils2.padZero)(value.getMinutes())));
        }

        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(function () {
        _this3.$refs.picker.setValues(values);
      });
    }
  },
  render: function render(h) {
    var _this4 = this;

    var props = {};
    Object.keys(_shared.pickerProps).forEach(function (key) {
      props[key] = _this4[key];
    });
    return h(_picker["default"], {
      "class": bem(),
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": function cancel() {
          _this4.$emit('cancel');
        }
      },
      "props": (0, _extends2["default"])({}, props)
    });
  }
});

exports["default"] = _default2;
}, function(modId) { var map = {"../utils":1558606160823,"../picker":1558606160848,"../picker/shared":1558606160850,"./utils":1558606160894}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160894, function(require, module, exports) {


exports.__esModule = true;
exports.isValidDate = isValidDate;
exports.padZero = padZero;
exports.times = times;
exports.getTrueValue = getTrueValue;
exports.getMonthEndDay = getMonthEndDay;

function isValidDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}

function padZero(val) {
  return ("00" + val).slice(-2);
}

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

function getTrueValue(formattedValue) {
  if (!formattedValue) return;

  while (isNaN(parseInt(formattedValue, 10))) {
    formattedValue = formattedValue.slice(1);
  }

  return parseInt(formattedValue, 10);
}

function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160895, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('goods-action'),
    sfc = _use[0],
    bem = _use[1];

function GoodsAction(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, (0, _functional.inherit)(ctx, true)]), [slots["default"] && slots["default"]()]);
}

GoodsAction.props = {
  safeAreaInsetBottom: Boolean
};

var _default = sfc(GoodsAction);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160896, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _button = _interopRequireDefault(require("../button"));

var _functional = require("../utils/functional");

var _router = require("../utils/router");

var _use = (0, _utils.use)('goods-action-big-btn'),
    sfc = _use[0],
    bem = _use[1];

function GoodsActionBigBtn(h, props, slots, ctx) {
  var onClick = function onClick(event) {
    (0, _functional.emit)(ctx, 'click', event);
    (0, _router.functionalRoute)(ctx);
  };

  return h(_button["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "attrs": {
      "square": true,
      "size": "large",
      "loading": props.loading,
      "disabled": props.disabled,
      "type": props.primary ? 'danger' : 'warning'
    },
    "class": bem(),
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [slots["default"] ? slots["default"]() : props.text]);
}

GoodsActionBigBtn.props = (0, _extends2["default"])({}, _router.routeProps, {
  text: String,
  primary: Boolean,
  loading: Boolean,
  disabled: Boolean
});

var _default = sfc(GoodsActionBigBtn);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../button":1558606160859,"../utils/functional":1558606160832,"../utils/router":1558606160855}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160897, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _functional = require("../utils/functional");

var _router = require("../utils/router");

var _use = (0, _utils.use)('goods-action-mini-btn'),
    sfc = _use[0],
    bem = _use[1];

function GoodsActionMiniBtn(h, props, slots, ctx) {
  var onClick = function onClick(event) {
    (0, _functional.emit)(ctx, 'click', event);
    (0, _router.functionalRoute)(ctx);
  };

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [bem(), 'van-hairline'],
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [h(_icon["default"], {
    "class": [bem('icon'), props.iconClass],
    "attrs": {
      "tag": "div",
      "info": props.info,
      "name": props.icon
    }
  }), slots["default"] ? slots["default"]() : props.text]);
}

GoodsActionMiniBtn.props = (0, _extends2["default"])({}, _router.routeProps, {
  text: String,
  icon: String,
  info: [String, Number],
  iconClass: null
});

var _default = sfc(GoodsActionMiniBtn);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../icon":1558606160840,"../utils/functional":1558606160832,"../utils/router":1558606160855}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160898, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

var _utils = require("../utils");

var instance;
var defaultConfig = {
  images: [],
  loop: true,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false
};

var initInstance = function initInstance() {
  instance = new (_vue["default"].extend(_ImagePreview["default"]))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  (0, _extends2["default"])(instance, defaultConfig, options);
  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  _vue["default"].use(_ImagePreview["default"]);
};

var _default = ImagePreview;
exports["default"] = _default;
}, function(modId) { var map = {"./ImagePreview":1558606160899,"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160899, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _event = require("../utils/event");

var _popup = require("../mixins/popup");

var _touch = require("../mixins/touch");

var _swipe = _interopRequireDefault(require("../swipe"));

var _swipeItem = _interopRequireDefault(require("../swipe-item"));

var _use = (0, _utils.use)('image-preview'),
    sfc = _use[0],
    bem = _use[1];

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

var _default = sfc({
  mixins: [_popup.PopupMixin, _touch.TouchMixin],
  props: {
    images: Array,
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    startPosition: Number,
    showIndicators: Boolean,
    loop: {
      type: Boolean,
      "default": true
    },
    overlay: {
      type: Boolean,
      "default": true
    },
    showIndex: {
      type: Boolean,
      "default": true
    },
    minZoom: {
      type: Number,
      "default": 1 / 3
    },
    maxZoom: {
      type: Number,
      "default": 3
    },
    overlayClass: {
      type: String,
      "default": 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      (0, _event.preventDefault)(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        var index = this.active;
        this.resetScale();
        this.$emit('close', {
          index: index,
          url: this.images[index]
        });

        if (!this.asyncClose) {
          this.$emit('input', false);
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        (0, _event.preventDefault)(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = (0, _utils.range)(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = (0, _utils.range)(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = (0, _utils.range)(scale, this.minZoom, this.maxZoom);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          (0, _event.preventDefault)(event, true);
        }
      }
    },
    onChange: function onChange(active) {
      this.resetScale();
      this.active = active;
      this.$emit('change', active);
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    }
  },
  render: function render(h) {
    var _this = this;

    if (!this.value) {
      return;
    }

    var active = this.active,
        images = this.images;
    var Index = this.showIndex && h("div", {
      "class": bem('index')
    }, [this.slots('index') || active + 1 + "/" + images.length]);
    var Images = h(_swipe["default"], {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "indicatorColor": "white",
        "initialSwipe": this.startPosition,
        "showIndicators": this.showIndicators
      },
      "on": {
        "change": this.onChange
      }
    }, [images.map(function (image, index) {
      var props = {
        "class": bem('image'),
        style: index === active ? _this.imageStyle : null,
        on: {
          touchstart: _this.onTouchStart,
          touchmove: _this.onTouchMove,
          touchend: _this.onTouchEnd,
          touchcancel: _this.onTouchEnd
        }
      };
      return h(_swipeItem["default"], [_this.lazyLoad ? h("img", (0, _babelHelperVueJsxMergeProps["default"])([{
        "directives": [{
          name: "lazy",
          value: image
        }]
      }, props])) : h("img", (0, _babelHelperVueJsxMergeProps["default"])([{
        "attrs": {
          "src": image
        }
      }, props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [Index, Images])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836,"../mixins/popup":1558606160833,"../mixins/touch":1558606160835,"../swipe":1558606160900,"../swipe-item":1558606160901}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160900, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _event = require("../utils/event");

var _touch = require("../mixins/touch");

var _use = (0, _utils.use)('swipe'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [_touch.TouchMixin],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    initialSwipe: Number,
    indicatorColor: String,
    loop: {
      type: Boolean,
      "default": true
    },
    touchable: {
      type: Boolean,
      "default": true
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    duration: {
      type: Number,
      "default": 500
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  mounted: function mounted() {
    this.initialize();

    if (!this.$isServer) {
      (0, _event.on)(window, 'resize', this.onResize, true);
    }
  },
  activated: function activated() {
    if (this.rendered) {
      this.initialize();
    }

    this.rendered = true;
  },
  destroyed: function destroyed() {
    this.clear();

    if (!this.$isServer) {
      (0, _event.off)(window, 'resize', this.onResize, true);
    }
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        (0, _event.preventDefault)(event, true);
        this.move({
          offset: Math.min(Math.max(this.delta, -this.size), this.size)
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var delta = this.delta,
          active = this.active,
          count = this.count,
          swipes = this.swipes,
          trackSize = this.trackSize;
      var atFirst = active === 0;
      var atLast = active === count - 1;
      var outOfBounds = !this.loop && (atFirst && (offset > 0 || pace < 0) || atLast && (offset < 0 || pace > 0));

      if (outOfBounds || count <= 1) {
        return;
      }

      if (swipes[0]) {
        swipes[0].offset = atLast && (delta < 0 || pace > 0) ? trackSize : 0;
      }

      if (swipes[count - 1]) {
        swipes[count - 1].offset = atFirst && (delta > 0 || pace < 0) ? -trackSize : 0;
      }

      if (pace && active + pace >= -1 && active + pace <= count) {
        this.active += pace;

        if (emitChange) {
          this.$emit('change', this.activeIndicator);
        }
      }

      this.offset = Math.round(offset - this.active * this.size);
    },
    swipeTo: function swipeTo(index) {
      var _this = this;

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      setTimeout(function () {
        _this.swiping = false;

        _this.move({
          pace: index % _this.count - _this.active,
          emitChange: true
        });
      }, 30);
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          setTimeout(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          }, 30);
        }, autoplay);
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var count = this.count,
        activeIndicator = this.activeIndicator;
    var Indicator = this.slots('indicator') || this.showIndicators && count > 1 && h("div", {
      "class": bem('indicators', {
        vertical: this.vertical
      })
    }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
      return h("i", {
        "class": bem('indicator', {
          active: index === activeIndicator
        }),
        "style": index === activeIndicator ? _this3.indicatorStyle : null
      });
    })]);
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots()]), Indicator]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836,"../mixins/touch":1558606160835}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160901, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _use = (0, _utils.use)('swipe-item'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render(h) {
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": bem(),
      "style": style,
      "on": (0, _extends2["default"])({}, this.$listeners)
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160902, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _default = _vueLazyload["default"];
exports["default"] = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160903, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _loading = _interopRequireDefault(require("../loading"));

var _event = require("../utils/event");

var _scroll = require("../utils/scroll");

var _use = (0, _utils.use)('list'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var _default = sfc({
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      "default": true
    },
    offset: {
      type: Number,
      "default": 300
    },
    direction: {
      type: String,
      "default": 'down'
    }
  },
  mounted: function mounted() {
    this.scroller = (0, _scroll.getScrollEventTarget)(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;
      var scrollerHeight = (0, _scroll.getVisibleHeight)(scroller);
      /* istanbul ignore next */

      if (!scrollerHeight || window.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var offset = this.offset,
          direction = this.direction;

      function isReachEdge() {
        if (el === scroller) {
          var scrollTop = (0, _scroll.getScrollTop)(el);

          if (direction === 'up') {
            return scrollTop <= offset;
          }

          var targetBottom = scrollTop + scrollerHeight;
          return scroller.scrollHeight - targetBottom <= offset;
        }

        if (direction === 'up') {
          return (0, _scroll.getScrollTop)(scroller) - (0, _scroll.getElementTop)(el) <= offset;
        }

        var elBottom = (0, _scroll.getElementTop)(el) + (0, _scroll.getVisibleHeight)(el) - (0, _scroll.getElementTop)(scroller);
        return elBottom - scrollerHeight <= offset;
      }

      if (isReachEdge()) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? _event.on : _event.off)(this.scroller, 'scroll', this.check);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": bem()
    }, [this.direction === 'down' && this.slots(), this.loading && h("div", {
      "class": bem('loading'),
      "key": "loading"
    }, [this.slots('loading') || [h(_loading["default"], {
      "class": bem('loading-icon')
    }), h("span", {
      "class": bem('loading-text')
    }, [this.loadingText || t('loading')])]]), this.finished && this.finishedText && h("div", {
      "class": bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": bem('error-text')
    }, [this.errorText]), this.direction === 'up' && this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../loading":1558606160843,"../utils/event":1558606160836,"../utils/scroll":1558606160839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160904, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('nav-bar'),
    sfc = _use[0],
    bem = _use[1];

function NavBar(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [bem({
      fixed: props.fixed
    }), {
      'van-hairline--bottom': props.border
    }],
    "style": {
      zIndex: props.zIndex
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || _utils.noop
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(_icon["default"], {
    "class": bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || _utils.noop
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    "default": true
  },
  zIndex: {
    type: Number,
    "default": 1
  }
};

var _default = sfc(NavBar);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160905, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('notice-bar'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [String, Number],
      "default": 1
    },
    scrollable: {
      type: Boolean,
      "default": true
    },
    speed: {
      type: Number,
      "default": 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon() {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close');
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = bem('play--infinite');
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var mode = this.mode;
    var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };
    return h("div", {
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": bem({
        withicon: mode,
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click() {
          _this3.$emit('click');
        }
      }
    }, [this.leftIcon && h(_icon["default"], {
      "class": bem('left-icon'),
      "attrs": {
        "name": this.leftIcon
      }
    }), h("div", {
      "ref": "wrap",
      "class": bem('wrap')
    }, [h("div", {
      "ref": "content",
      "class": [bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), iconName && h(_icon["default"], {
      "class": bem('right-icon'),
      "attrs": {
        "name": iconName
      },
      "on": {
        "click": this.onClickIcon
      }
    })]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160906, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Notify = _interopRequireDefault(require("./Notify"));

var _color = require("../utils/color");

var _utils = require("../utils");

var _functional = require("../utils/functional");

var timer;
var instance;

function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
}

function Notify(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    instance = (0, _functional.mount)(_Notify["default"]);
  }

  options = (0, _extends2["default"])({}, Notify.currentOptions, parseOptions(options));
  (0, _extends2["default"])(instance, options);
  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    value: true,
    message: '',
    color: _color.WHITE,
    background: _color.RED,
    duration: 3000,
    className: ''
  };
}

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  (0, _extends2["default"])(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function () {
  _vue["default"].use(_Notify["default"]);
};

_vue["default"].prototype.$notify = Notify;
var _default = Notify;
exports["default"] = _default;
}, function(modId) { var map = {"./Notify":1558606160907,"../utils/color":1558606160876,"../utils":1558606160823,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160907, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _color = require("../utils/color");

var _functional = require("../utils/functional");

var _popup = require("../mixins/popup");

var _popup2 = _interopRequireDefault(require("../popup"));

var _use = (0, _utils.use)('notify'),
    sfc = _use[0],
    bem = _use[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(_popup2["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "lockScroll": false
    },
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "input": function input(value) {
        (0, _functional.emit)(ctx, 'input', value);
      }
    }
  }, (0, _functional.inherit)(ctx)]), [props.message]);
}

Notify.props = (0, _extends2["default"])({}, _popup.PopupMixin.props, {
  className: null,
  message: [String, Number],
  color: {
    type: String,
    "default": _color.WHITE
  },
  background: {
    type: String,
    "default": _color.RED
  },
  duration: {
    type: Number,
    "default": 3000
  }
});

var _default = sfc(Notify);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/color":1558606160876,"../utils/functional":1558606160832,"../mixins/popup":1558606160833,"../popup":1558606160844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160908, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _event = require("../utils/event");

var _Key = _interopRequireDefault(require("./Key"));

var _use = (0, _utils.use)('number-keyboard'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var CLOSE_KEY_TYPE = ['blue', 'big'];
var DELETE_KEY_TYPE = ['delete', 'big', 'gray'];

var _default = sfc({
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    safeAreaInsetBottom: Boolean,
    theme: {
      type: String,
      "default": 'default'
    },
    extraKey: {
      type: String,
      "default": ''
    },
    zIndex: {
      type: Number,
      "default": 100
    },
    transition: {
      type: Boolean,
      "default": true
    },
    showDeleteKey: {
      type: Boolean,
      "default": true
    },
    hideOnClickOutside: {
      type: Boolean,
      "default": true
    }
  },
  mounted: function mounted() {
    this.handler(true);
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            type: ['gray']
          }, {
            text: 0
          }, {
            text: this.deleteText,
            type: ['gray', 'delete']
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            type: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },
  methods: {
    handler: function handler(action) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text) {
      if (text === '') {
        return;
      }

      if (text === this.deleteText) {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  },
  render: function render(h) {
    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": _event.stopPropagation,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [showTitle && h("div", {
      "class": [bem('title'), 'van-hairline--top']
    }, [titleLeftSlot && h("span", {
      "class": bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "class": bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]), h("div", {
      "class": bem('body')
    }, [this.keys.map(function (key) {
      return h(_Key["default"], {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type
        },
        "on": {
          "press": onPress
        }
      });
    })]), theme === 'custom' && h("div", {
      "class": bem('sidebar')
    }, [h(_Key["default"], {
      "attrs": {
        "text": this.deleteText,
        "type": DELETE_KEY_TYPE
      },
      "on": {
        "press": onPress
      }
    }), h(_Key["default"], {
      "attrs": {
        "text": closeButtonText,
        "type": CLOSE_KEY_TYPE
      },
      "on": {
        "press": onPress
      }
    })])])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836,"./Key":1558606160909}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160909, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _event = require("../utils/event");

var _use = (0, _utils.use)('key'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    type: Array,
    text: [String, Number]
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var types = this.type.slice(0);
      this.active && types.push('active');
      return bem(types);
    }
  },
  methods: {
    onFocus: function onFocus() {
      this.active = true;
      this.$emit('press', this.text);
    },
    onBlur: function onBlur(event) {
      (0, _event.preventDefault)(event, true);
      this.active = false;
    }
  },
  render: function render(h) {
    var onBlur = this.onBlur;
    return h("i", {
      "class": ['van-hairline', this.className],
      "on": {
        "touchstart": this.onFocus,
        "touchmove": onBlur,
        "touchend": onBlur,
        "touchcancel": onBlur
      }
    }, [this.text]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160910, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('pagination'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

var _default = sfc({
  props: {
    value: Number,
    prevText: String,
    nextText: String,
    pageCount: Number,
    totalItems: Number,
    forceEllipses: Boolean,
    mode: {
      type: String,
      "default": 'multi'
    },
    itemsPerPage: {
      type: Number,
      "default": 10
    },
    showPageSize: {
      type: Number,
      "default": 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);
        this.$emit('change', page);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value);
      };
    };

    return h("ul", {
      "class": bem({
        simple: simple
      })
    }, [h("li", {
      "class": [bem('item', {
        disabled: value === 1
      }), bem('prev'), 'van-hairline'],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [bem('item', {
          active: page.active
        }), bem('page'), 'van-hairline'],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [bem('item', {
        disabled: value === this.count
      }), bem('next'), 'van-hairline'],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || t('next')])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160911, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _cell = _interopRequireDefault(require("../cell"));

var _cellGroup = _interopRequireDefault(require("../cell-group"));

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('panel'),
    sfc = _use[0],
    bem = _use[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(_cell["default"], {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": bem('header-value')
      },
      "class": bem('header')
    }), h("div", {
      "class": bem('content')
    }, [slots["default"] && slots["default"]()]), slots.footer && h("div", {
      "class": [bem('footer'), 'van-hairline--top']
    }, [slots.footer()])];
  };

  return h(_cellGroup["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem(),
    "scopedSlots": {
      "default": Content
    }
  }, (0, _functional.inherit)(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};

var _default = sfc(Panel);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../cell":1558606160853,"../cell-group":1558606160877,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160912, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _use = (0, _utils.use)('password-input'),
    sfc = _use[0],
    bem = _use[1];

function PasswordInput(h, props, slots, ctx) {
  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _char = props.value[i];
    Points.push(h("li", {
      "class": "van-hairline"
    }, [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden'
      }
    }) : _char]));
  }

  return h("div", {
    "class": bem()
  }, [h("ul", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [bem('security'), 'van-hairline--surround'],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        (0, _functional.emit)(ctx, 'focus', event);
      }
    }
  }, (0, _functional.inherit)(ctx, true)]), [Points]), info && h("div", {
    "class": bem(props.errorInfo ? 'error-info' : 'info')
  }, [info])]);
}

PasswordInput.props = {
  info: String,
  errorInfo: String,
  mask: {
    type: Boolean,
    "default": true
  },
  value: {
    type: String,
    "default": ''
  },
  length: {
    type: Number,
    "default": 6
  }
};

var _default = sfc(PasswordInput);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160913, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _color = require("../utils/color");

var _use = (0, _utils.use)('progress'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      "default": true
    },
    color: {
      type: String,
      "default": _color.BLUE
    },
    textColor: {
      type: String,
      "default": _color.WHITE
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.getWidth();
  },
  watch: {
    showPivot: function showPivot() {
      this.getWidth();
    },
    pivotText: function pivotText() {
      this.getWidth();
    }
  },
  methods: {
    getWidth: function getWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    }
  },
  render: function render(h) {
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = (0, _utils.isDef)(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: (this.progressWidth - this.pivotWidth) * percentage / 100 + 'px'
    };
    return h("div", {
      "class": bem()
    }, [h("span", {
      "class": bem('portion', {
        'with-pivot': showPivot
      }),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": bem('pivot')
    }, [text])])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/color":1558606160876}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160914, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _event = require("../utils/event");

var _touch = require("../mixins/touch");

var _scroll = require("../utils/scroll");

var _loading = _interopRequireDefault(require("../loading"));

var _use = (0, _utils.use)('pull-refresh'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];

var _default = sfc({
  mixins: [_touch.TouchMixin],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      "default": 500
    },
    animationDuration: {
      type: Number,
      "default": 300
    },
    headHeight: {
      type: Number,
      "default": 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },
  watch: {
    value: function value(loading) {
      var _this = this;

      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(function () {
          _this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },
  mounted: function mounted() {
    this.scrollEl = (0, _scroll.getScrollEventTarget)(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          (0, _event.preventDefault)(event);
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.setStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = (0, _scroll.getScrollTop)(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(height) {
      var headHeight = this.headHeight;
      return height < headHeight ? height : height < headHeight * 2 ? Math.round(headHeight + (height - headHeight) / 2) : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    setStatus: function setStatus(height, isLoading) {
      this.height = height;
      var status = isLoading ? 'loading' : height === 0 ? 'normal' : height < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },
  render: function render(h) {
    var status = this.status;
    var text = this[status + "Text"] || t(status);
    var style = {
      transition: this.duration + "ms",
      transform: this.height ? "translate3d(0," + this.height + "px, 0)" : ''
    };
    var Status = this.slots(status) || [TEXT_STATUS.indexOf(status) !== -1 && h("div", {
      "class": bem('text')
    }, [text]), status === 'loading' && h("div", {
      "class": bem('loading')
    }, [h(_loading["default"]), h("span", [text])])];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("div", {
      "class": bem('head')
    }, [Status]), this.slots()])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836,"../mixins/touch":1558606160835,"../utils/scroll":1558606160839,"../loading":1558606160843}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160915, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _event = require("../utils/event");

var _icon = _interopRequireDefault(require("../icon"));

/* eslint-disable prefer-spread */
var _use = (0, _utils.use)('rate'),
    sfc = _use[0],
    bem = _use[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

function Rate(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      color = props.color,
      voidIcon = props.voidIcon,
      readonly = props.readonly,
      disabled = props.disabled,
      voidColor = props.voidColor,
      disabledColor = props.disabledColor;
  var list = [];

  for (var i = 1; i <= props.count; i++) {
    list.push(getRateStatus(props.value, i, props.allowHalf));
  }

  function onSelect(index) {
    if (!disabled && !readonly) {
      (0, _functional.emit)(ctx, 'input', index);
      (0, _functional.emit)(ctx, 'change', index);
    }
  }

  function onTouchMove(event) {
    if (readonly || disabled || !document.elementFromPoint) {
      return;
    }

    (0, _event.preventDefault)(event);
    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
    var target = document.elementFromPoint(clientX, clientY);

    if (target && target.dataset) {
      var score = target.dataset.score;
      /* istanbul ignore else */

      if (score) {
        onSelect(+score);
      }
    }
  }

  function renderStar(status, index) {
    var isFull = status === 'full';
    var isVoid = status === 'void';
    return h("div", {
      "key": index,
      "class": bem('item')
    }, [h(_icon["default"], {
      "attrs": {
        "name": isFull ? icon : voidIcon,
        "size": size + "px",
        "data-score": index + 1,
        "color": disabled ? disabledColor : isFull ? color : voidColor
      },
      "class": bem('icon'),
      "on": {
        "click": function click() {
          onSelect(index + 1);
        }
      }
    }), props.allowHalf && h(_icon["default"], {
      "attrs": {
        "name": isVoid ? voidIcon : icon,
        "size": size + "px",
        "data-score": index + 0.5,
        "color": disabled ? disabledColor : isVoid ? voidColor : color
      },
      "class": bem('icon', 'half'),
      "on": {
        "click": function click() {
          onSelect(index + 0.5);
        }
      }
    })]);
  }

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx), {
    "on": {
      "touchmove": onTouchMove
    }
  }]), [list.map(function (status, index) {
    return renderStar(status, index);
  })]);
}

Rate.props = {
  value: Number,
  readonly: Boolean,
  disabled: Boolean,
  allowHalf: Boolean,
  size: {
    type: Number,
    "default": 20
  },
  icon: {
    type: String,
    "default": 'star'
  },
  voidIcon: {
    type: String,
    "default": 'star-o'
  },
  color: {
    type: String,
    "default": '#ffd21e'
  },
  voidColor: {
    type: String,
    "default": '#c7c7c7'
  },
  disabledColor: {
    type: String,
    "default": '#bdbdbd'
  },
  count: {
    type: Number,
    "default": 5
  }
};

var _default = sfc(Rate);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../utils/event":1558606160836,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160916, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('row'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      "default": 'div'
    },
    gutter: {
      type: [Number, String],
      "default": 0
    }
  },
  render: function render(h) {
    var _bem;

    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem))
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160917, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _event = require("../utils/event");

var _field = _interopRequireDefault(require("../field"));

var _use = (0, _utils.use)('search'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function Search(h, props, slots, ctx) {
  var Label = function Label() {
    if (!slots.label && !props.label) {
      return null;
    }

    return h("div", {
      "class": bem('label')
    }, [slots.label ? slots.label() : props.label]);
  };

  var Action = function Action() {
    if (!props.showAction) {
      return null;
    }

    var onCancel = function onCancel() {
      (0, _functional.emit)(ctx, 'input', '');
      (0, _functional.emit)(ctx, 'cancel');
    };

    return h("div", {
      "class": bem('action')
    }, [slots.action ? slots.action() : h("div", {
      "on": {
        "click": onCancel
      }
    }, [t('cancel')])]);
  };

  var fieldData = {
    attrs: ctx.data.attrs,
    on: (0, _extends2["default"])({}, ctx.listeners, {
      input: function input(value) {
        (0, _functional.emit)(ctx, 'input', value);
      },
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          (0, _event.preventDefault)(event);
          (0, _functional.emit)(ctx, 'search', props.value);
        }

        (0, _functional.emit)(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = (0, _functional.inherit)(ctx);
  delete inheritData.attrs;
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": bem('content', props.shape)
  }, [Label(), h(_field["default"], (0, _babelHelperVueJsxMergeProps["default"])([{
    "attrs": {
      "clearable": true,
      "type": "search",
      "value": props.value,
      "border": false,
      "leftIcon": "search"
    },
    "scopedSlots": {
      'left-icon': slots['left-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  showAction: Boolean,
  shape: {
    type: String,
    "default": 'square'
  },
  background: {
    type: String,
    "default": '#fff'
  }
};

var _default = sfc(Search);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../utils/event":1558606160836,"../field":1558606160852}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160918, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Sku = _interopRequireDefault(require("./Sku"));

var _SkuActions = _interopRequireDefault(require("./components/SkuActions"));

var _SkuHeader = _interopRequireDefault(require("./components/SkuHeader"));

var _SkuMessages = _interopRequireDefault(require("./components/SkuMessages"));

var _SkuStepper = _interopRequireDefault(require("./components/SkuStepper"));

var _SkuRow = _interopRequireDefault(require("./components/SkuRow"));

var _SkuRowItem = _interopRequireDefault(require("./components/SkuRowItem"));

var _skuHelper = _interopRequireDefault(require("./utils/skuHelper"));

var _constants = _interopRequireDefault(require("./constants"));

_Sku["default"].SkuActions = _SkuActions["default"];
_Sku["default"].SkuHeader = _SkuHeader["default"];
_Sku["default"].SkuMessages = _SkuMessages["default"];
_Sku["default"].SkuStepper = _SkuStepper["default"];
_Sku["default"].SkuRow = _SkuRow["default"];
_Sku["default"].SkuRowItem = _SkuRowItem["default"];
_Sku["default"].skuHelper = _skuHelper["default"];
_Sku["default"].skuConstants = _constants["default"];
var _default = _Sku["default"];
exports["default"] = _default;
}, function(modId) { var map = {"./Sku":1558606160919,"./components/SkuActions":1558606160931,"./components/SkuHeader":1558606160920,"./components/SkuMessages":1558606160927,"./components/SkuStepper":1558606160925,"./components/SkuRow":1558606160921,"./components/SkuRowItem":1558606160922,"./utils/skuHelper":1558606160923,"./constants":1558606160924}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160919, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _popup = _interopRequireDefault(require("../popup"));

var _toast = _interopRequireDefault(require("../toast"));

var _imagePreview = _interopRequireDefault(require("../image-preview"));

var _SkuHeader = _interopRequireDefault(require("./components/SkuHeader"));

var _SkuRow = _interopRequireDefault(require("./components/SkuRow"));

var _SkuRowItem = _interopRequireDefault(require("./components/SkuRowItem"));

var _SkuStepper = _interopRequireDefault(require("./components/SkuStepper"));

var _SkuMessages = _interopRequireDefault(require("./components/SkuMessages"));

var _SkuActions = _interopRequireDefault(require("./components/SkuActions"));

var _utils = require("../utils");

var _skuHelper = require("./utils/skuHelper");

var _constants = require("./constants");

/* eslint-disable camelcase */
var _use = (0, _utils.use)('sku'),
    sfc = _use[0];

var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT;

var _default2 = sfc({
  props: {
    sku: Object,
    goods: Object,
    quota: Number,
    value: Boolean,
    buyText: String,
    quotaUsed: Number,
    goodsId: [Number, String],
    hideStock: Boolean,
    hideQuotaText: Boolean,
    stepperTitle: String,
    getContainer: Function,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    resetStepperOnHide: Boolean,
    resetSelectedSkuOnHide: Boolean,
    initialSku: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    showSoldoutSku: {
      type: Boolean,
      "default": true
    },
    showAddCartBtn: {
      type: Boolean,
      "default": true
    },
    bodyOffsetTop: {
      type: Number,
      "default": 200
    },
    messageConfig: {
      type: Object,
      "default": function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        var selectedSkuValues = (0, _skuHelper.getSelectedSkuValues)(this.sku.tree, this.selectedSku);
        this.$emit('sku-close', {
          selectedSkuValues: selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: function skuTree(val) {
      this.resetSelectedSku(val);
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', 'van-hairline--bottom', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return (0, _skuHelper.isAllSelected)(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return (0, _skuHelper.getSkuComb)(this.sku.list, this.selectedSku);
      }

      return null;
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        var treeItem = this.skuTree.filter(function (item) {
          return item.k_s === 's1';
        })[0] || {};

        if (!treeItem.v) {
          return;
        }

        treeItem.v.forEach(function (vItem) {
          var img = vItem.imgUrl || vItem.img_url;

          if (img) {
            imageList.push(img);
          }
        });
      }

      return imageList;
    }
  },
  created: function created() {
    var skuEventBus = new _vue["default"]();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:close', this.onClose);
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = (0, _utils.isDef)(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this = this;

      this.selectedSku = {}; // 重置 selectedSku

      skuTree.forEach(function (item) {
        _this.selectedSku[item.k_s] = _this.initialSku[item.k_s] || _constants.UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个 sku 规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && (0, _skuHelper.isSkuChoosable)(_this.sku.list, _this.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return '商品已经无法购买啦';
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return '请先选择商品规格';
    },
    onClose: function onClose() {
      this.show = false;
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? (0, _extends4["default"])({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = _constants.UNSELECTED_SKU_VALUE_ID, _extends2)) : (0, _extends4["default"])({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this2 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var cbParams = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('preview-on', cbParams);
      (0, _imagePreview["default"])({
        images: this.imageList,
        startPosition: index,
        onClose: function onClose() {
          _this2.$emit('preview-close', cbParams);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        (0, _toast["default"])('至少选择一件');
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = "\u9650\u8D2D" + quota + "\u4EF6";
          if (quotaUsed > 0) msg += "\uFF0C" + ("\u4F60\u5DF2\u8D2D\u4E70" + quotaUsed + "\u4EF6");
          (0, _toast["default"])(msg);
        } else {
          (0, _toast["default"])('库存不足');
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        (0, _toast["default"])(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },
  render: function render(h) {
    var _this3 = this;

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
        goods = this.goods,
        price = this.price,
        skuEventBus = this.skuEventBus,
        selectedSku = this.selectedSku,
        selectedNum = this.selectedNum,
        stepperTitle = this.stepperTitle,
        hideQuotaText = this.hideQuotaText,
        selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb
    };

    var slots = function slots(name) {
      return _this3.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(_SkuHeader["default"], {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku
      }
    }, [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price"
    }, [h("span", {
      "class": "van-sku__price-symbol"
    }, ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num"
    }, [price])])]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass
    }, [this.skuTree.map(function (skuTreeItem) {
      return h(_SkuRow["default"], {
        "attrs": {
          "skuRow": skuTreeItem
        }
      }, [skuTreeItem.v.map(function (skuValue) {
        return h(_SkuRowItem["default"], {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s
          }
        });
      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(_SkuStepper["default"], {
      "ref": "skuStepper",
      "attrs": {
        "quota": this.quota,
        "hideStock": this.hideStock,
        "quotaUsed": this.quotaUsed,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "hideQuotaText": hideQuotaText,
        "selectedSkuComb": selectedSkuComb,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig
      },
      "on": {
        "change": function change(event) {
          _this3.$emit('stepper-change', event);
        }
      }
    });
    var Messages = slots('sku-messages') || h(_SkuMessages["default"], {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages
      }
    });
    var Actions = slots('sku-actions') || h(_SkuActions["default"], {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "showAddCartBtn": this.showAddCartBtn
      }
    });
    return h(_popup["default"], {
      "attrs": {
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay
      },
      "class": "van-sku-container",
      "model": {
        value: _this3.show,
        callback: function callback($$v) {
          _this3.show = $$v;
        }
      }
    }, [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle
    }, [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  }
});

exports["default"] = _default2;
}, function(modId) { var map = {"../popup":1558606160844,"../toast":1558606160857,"../image-preview":1558606160898,"./components/SkuHeader":1558606160920,"./components/SkuRow":1558606160921,"./components/SkuRowItem":1558606160922,"./components/SkuStepper":1558606160925,"./components/SkuMessages":1558606160927,"./components/SkuActions":1558606160931,"../utils":1558606160823,"./utils/skuHelper":1558606160923,"./constants":1558606160924}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160920, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _icon = _interopRequireDefault(require("../../icon"));

var _use = (0, _utils.use)('sku-header'),
    sfc = _use[0],
    bem = _use[1];

function getSkuImg(sku, selectedSku) {
  var id = selectedSku.s1;

  if (id) {
    // skuImg 挂载在 skuTree 中 s1 上
    var treeItem = sku.tree.filter(function (item) {
      return item.k_s === 's1';
    })[0] || {};

    if (treeItem.v) {
      var matchedSku = treeItem.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0];

      if (matchedSku) {
        return matchedSku.imgUrl || matchedSku.img_url;
      }
    }
  }
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": [bem(), 'van-hairline--bottom']
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": bem('goods-info')
  }, [h("div", {
    "class": "van-sku__goods-name van-ellipsis"
  }, [goods.title]), slots["default"] && slots["default"](), h(_icon["default"], {
    "attrs": {
      "name": "close"
    },
    "class": "van-sku__close-icon",
    "on": {
      "click": function click() {
        skuEventBus.$emit('sku:close');
      }
    }
  })])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};

var _default = sfc(SkuHeader);

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../../utils/functional":1558606160832,"../../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160921, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _use = (0, _utils.use)('sku-row'),
    sfc = _use[0],
    bem = _use[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('title')
  }, [props.skuRow.k, "\uFF1A"]), slots["default"] && slots["default"]()]);
}

SkuRow.props = {
  skuRow: Object
};

var _default = sfc(SkuRow);

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../../utils/functional":1558606160832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160922, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../../utils");

var _skuHelper = require("../utils/skuHelper");

var _use = (0, _utils.use)('sku-row-item'),
    sfc = _use[0];

var _default = sfc({
  props: {
    skuList: Array,
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object
  },
  computed: {
    choosable: function choosable() {
      return (0, _skuHelper.isSkuChoosable)(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', (0, _extends2["default"])({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  },
  render: function render(h) {
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable
      }],
      "on": {
        "click": this.onSelect
      }
    }, [this.skuValue.name]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../utils/skuHelper":1558606160923}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160923, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.isSkuChoosable = exports.getSelectedSkuValues = exports.getSkuComb = exports.isAllSelected = exports.normalizeSkuTree = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */
var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中


exports.normalizeSkuTree = normalizeSkuTree;

var isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb


exports.isAllSelected = isAllSelected;

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称


exports.getSkuComb = getSkuComb;

var getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== _constants.UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选


exports.getSelectedSkuValues = getSelectedSkuValues;

var isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = (0, _extends3["default"])({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中

  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== _constants.UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};

exports.isSkuChoosable = isSkuChoosable;
var _default = {
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: getSelectedSkuValues,
  isAllSelected: isAllSelected,
  isSkuChoosable: isSkuChoosable
};
exports["default"] = _default;
}, function(modId) { var map = {"../constants":1558606160924}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160924, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = exports.UNSELECTED_SKU_VALUE_ID = exports.LIMIT_TYPE = void 0;
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
exports.LIMIT_TYPE = LIMIT_TYPE;
var UNSELECTED_SKU_VALUE_ID = '';
exports.UNSELECTED_SKU_VALUE_ID = UNSELECTED_SKU_VALUE_ID;
var _default = {
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
};
exports["default"] = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160925, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../../utils");

var _stepper = _interopRequireDefault(require("../../stepper"));

var _constants = require("../constants");

var _use = (0, _utils.use)('sku-stepper'),
    sfc = _use[0];

var QUOTA_LIMIT = _constants.LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = _constants.LIMIT_TYPE.STOCK_LIMIT;

var _default = sfc({
  props: {
    quota: Number,
    quotaUsed: Number,
    hideStock: Boolean,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedSku: Object,
    selectedNum: Number,
    stepperTitle: String,
    hideQuotaText: Boolean,
    selectedSkuComb: Object,
    disableStepperInput: Boolean,
    customStepperConfig: Object
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.skuStockNum;
    },
    stockText: function stockText() {
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return "\u5269\u4F59" + this.stock + "\u4EF6";
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = "\u6BCF\u4EBA\u9650\u8D2D" + this.quota + "\u4EF6";
      }

      return text;
    },
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  },
  render: function render(h) {
    var _this = this;

    return h("div", {
      "class": "van-sku-stepper-stock"
    }, [h("div", {
      "class": "van-sku-stepper-container"
    }, [h("div", {
      "class": "van-sku__stepper-title"
    }, [this.stepperTitle || '购买数量', "\uFF1A"]), h(_stepper["default"], {
      "class": "van-sku__stepper",
      "attrs": {
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput
      },
      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange
      },
      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        }
      }
    })]), !this.hideStock && h("div", {
      "class": "van-sku__stock"
    }, [this.stockText]), !this.hideQuotaText && this.quotaText && h("div", {
      "class": "van-sku__quota"
    }, [this.quotaText])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../../stepper":1558606160926,"../constants":1558606160924}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160926, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('stepper'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: String,
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      "default": 1
    },
    max: {
      type: [String, Number],
      "default": Infinity
    },
    step: {
      type: [String, Number],
      "default": 1
    },
    defaultValue: {
      type: [String, Number],
      "default": 1
    }
  },
  data: function data() {
    var value = this.range((0, _utils.isDef)(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (!this.asyncChange) {
        if (+value !== formatted) {
          event.target.value = formatted;
        }

        this.currentValue = formatted;
      } else {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      }
    },
    onChange: function onChange(type) {
      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;

      if (!this.asyncChange) {
        this.currentValue = this.range(value);
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }

      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event); // fix edge case when input is empty and min is 0

      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var onChange = function onChange(type) {
      return function () {
        _this.onChange(type);
      };
    };

    return h("div", {
      "class": bem()
    }, [h("button", {
      "class": bem('minus', {
        disabled: this.minusDisabled
      }),
      "on": {
        "click": onChange('minus')
      }
    }), h("input", {
      "attrs": {
        "type": "number",
        "disabled": this.disabled || this.disableInput
      },
      "class": bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": {
        width: this.inputWidth
      },
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", {
      "class": bem('plus', {
        disabled: this.plusDisabled
      }),
      "on": {
        "click": onChange('plus')
      }
    })]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160927, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../../utils");

var _cell = _interopRequireDefault(require("../../cell"));

var _cellGroup = _interopRequireDefault(require("../../cell-group"));

var _field = _interopRequireDefault(require("../../field"));

var _email = require("../../utils/validate/email");

var _number = require("../../utils/validate/number");

var _SkuImgUploader = _interopRequireDefault(require("./SkuImgUploader"));

var _use = (0, _utils.use)('sku-messages'),
    sfc = _use[0],
    bem = _use[1];

var PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本',
  mobile: '输入手机号码'
};

var _default = sfc({
  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return map[type] || PLACEHOLDER[type];
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? '请上传' : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !(0, _number.isNumber)(value)) {
            return '请填写正确的数字格式留言';
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }

          if (message.type === 'email' && !(0, _email.isEmail)(value)) {
            return '请填写正确的邮箱';
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h(_cellGroup["default"], {
      "class": bem()
    }, [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(_cell["default"], {
        "class": bem('image-cell'),
        "attrs": {
          "label": "仅限一张",
          "title": message.name,
          "required": String(message.required) === '1'
        },
        "key": _this3.goodsId + "-" + index
      }, [h(_SkuImgUploader["default"], {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize
        },
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      })]) : h(_field["default"], {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message)
        },
        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      });
    })]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../../cell":1558606160853,"../../cell-group":1558606160877,"../../field":1558606160852,"../../utils/validate/email":1558606160928,"../../utils/validate/number":1558606160856,"./SkuImgUploader":1558606160929}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160928, function(require, module, exports) {


exports.__esModule = true;
exports.isEmail = isEmail;

/* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160929, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../../utils");

var _icon = _interopRequireDefault(require("../../icon"));

var _loading = _interopRequireDefault(require("../../loading"));

var _uploader = _interopRequireDefault(require("../../uploader"));

var _use = (0, _utils.use)('sku-img-uploader'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      "default": 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: ''
    };
  },
  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      })["catch"](function () {
        _this.paddingImg = '';
      });
    },
    onOversize: function onOversize() {
      this.$toast("\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + this.maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8");
    }
  },
  render: function render(h) {
    var _this2 = this;

    var imgList = this.imgList,
        paddingImg = this.paddingImg;
    var ImageList = (paddingImg || imgList.length > 0) && h("div", {
      "class": "van-clearfix"
    }, [imgList.map(function (img) {
      return h("div", {
        "class": bem('img')
      }, [h("img", {
        "attrs": {
          "src": img
        }
      }), h(_icon["default"], {
        "attrs": {
          "name": "clear"
        },
        "class": bem('delete'),
        "on": {
          "click": function click() {
            _this2.$emit('input', '');
          }
        }
      })]);
    }), paddingImg && h("div", {
      "class": bem('img')
    }, [h("img", {
      "attrs": {
        "src": paddingImg
      }
    }), h(_loading["default"], {
      "attrs": {
        "type": "spinner"
      },
      "class": bem('uploading')
    })])]);
    return h("div", {
      "class": bem()
    }, [h(_uploader["default"], {
      "attrs": {
        "disabled": !!paddingImg,
        "afterRead": this.afterReadFile,
        "maxSize": this.maxSize * 1024 * 1024
      },
      "on": {
        "oversize": this.onOversize
      }
    }, [h("div", {
      "class": bem('header')
    }, [paddingImg ? h("div", ["\u6B63\u5728\u4E0A\u4F20..."]) : [h(_icon["default"], {
      "attrs": {
        "name": "photograph"
      }
    }), h("span", {
      "class": "label"
    }, [this.value ? '重拍' : '拍照', " \u6216 "]), h(_icon["default"], {
      "attrs": {
        "name": "photo"
      }
    }), h("span", {
      "class": "label"
    }, [this.value ? '重新选择照片' : '选择照片'])]])]), ImageList]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../../icon":1558606160840,"../../loading":1558606160843,"../../uploader":1558606160930}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160930, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _use = (0, _utils.use)('uploader'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      "default": 'image/*'
    },
    resultType: {
      type: String,
      "default": 'dataUrl'
    },
    maxSize: {
      type: Number,
      "default": Number.MAX_VALUE
    }
  },
  computed: {
    detail: function detail() {
      return {
        name: this.$attrs.name || ''
      };
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0);

      if (!files || this.beforeRead && !this.beforeRead(files, this.detail)) {
        this.resetInput();
        return;
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(function (contents) {
          var oversize = false;
          var payload = files.map(function (file, index) {
            if (file.size > _this.maxSize) {
              oversize = true;
            }

            return {
              file: files[index],
              content: contents[index]
            };
          });

          _this.onAfterRead(payload, oversize);
        });
      } else {
        this.readFile(files).then(function (content) {
          _this.onAfterRead({
            file: files,
            content: content
          }, files.size > _this.maxSize);
        });
      }
    },
    readFile: function readFile(file) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {
          resolve(event.target.result);
        };

        if (_this2.resultType === 'dataUrl') {
          reader.readAsDataURL(file);
        } else if (_this2.resultType === 'text') {
          reader.readAsText(file);
        }
      });
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files);
      } else {
        this.afterRead && this.afterRead(files, this.detail);
      }

      this.resetInput();
    },
    resetInput: function resetInput() {
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    }
  },
  render: function render(h) {
    var accept = this.accept,
        disabled = this.disabled;
    return h("div", {
      "class": bem()
    }, [this.slots(), h("input", {
      "attrs": (0, _extends2["default"])({}, this.$attrs, {
        "type": "file",
        "accept": accept,
        "disabled": disabled
      }),
      "ref": "input",
      "class": bem('input'),
      "on": {
        "change": this.onChange
      }
    })]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160931, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _button = _interopRequireDefault(require("../../button"));

var _use = (0, _utils.use)('sku-actions'),
    sfc = _use[0],
    bem = _use[1];

function SkuActions(h, props, slots, ctx) {
  var emit = function emit(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [props.showAddCartBtn && h(_button["default"], {
    "attrs": {
      "bottomAction": true,
      "text": "加入购物车"
    },
    "on": {
      "click": emit('sku:addCart')
    }
  }), h(_button["default"], {
    "attrs": {
      "type": "primary",
      "bottomAction": true,
      "text": props.buyText || '立即购买'
    },
    "on": {
      "click": emit('sku:buy')
    }
  })]);
}

SkuActions.props = {
  buyText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};

var _default = sfc(SkuActions);

exports["default"] = _default;
}, function(modId) { var map = {"../../utils":1558606160823,"../../utils/functional":1558606160832,"../../button":1558606160859}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160932, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _touch = require("../mixins/touch");

var _event = require("../utils/event");

var _use = (0, _utils.use)('slider'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  mixins: [_touch.TouchMixin],
  props: {
    min: Number,
    value: Number,
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      "default": 100
    },
    step: {
      type: Number,
      "default": 1
    },
    barHeight: {
      type: String,
      "default": '2px'
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      (0, _event.preventDefault)(event, true);
      if (this.disabled) return;
      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * 100;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.newValue, true);
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render(h) {
    var _barStyle;

    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor
    };
    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = this.format(this.value) + "%", _barStyle[crossAxis] = this.barHeight, _barStyle.background = this.activeColor, _barStyle);
    return h("div", {
      "style": style,
      "class": bem({
        disabled: this.disabled,
        vertical: vertical
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('bar'),
      "style": barStyle
    }, [h("div", {
      "class": bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('button') || h("div", {
      "class": bem('button')
    })])])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../mixins/touch":1558606160835,"../utils/event":1558606160836}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160933, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('step'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  beforeCreate: function beforeCreate() {
    var steps = this.$parent.steps;
    var index = this.$parent.slots().indexOf(this.$vnode);
    steps.splice(index === -1 ? steps.length : index, 0, this);
  },
  beforeDestroy: function beforeDestroy() {
    var index = this.$parent.steps.indexOf(this);

    if (index > -1) {
      this.$parent.steps.splice(index, 1);
    }
  },
  computed: {
    status: function status() {
      var index = this.$parent.steps.indexOf(this);
      var active = this.$parent.active;

      if (index < active) {
        return 'finish';
      }

      if (index === active) {
        return 'process';
      }
    }
  },
  render: function render(h) {
    var _ref;

    var status = this.status;
    var _this$$parent = this.$parent,
        activeIcon = _this$$parent.activeIcon,
        activeColor = _this$$parent.activeColor,
        direction = _this$$parent.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": ['van-hairline', bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": bem('circle-container')
    }, [status !== 'process' ? h("i", {
      "class": bem('circle')
    }) : this.slots('active-icon') || h(_icon["default"], {
      "attrs": {
        "name": activeIcon
      },
      "style": {
        color: activeColor
      }
    })]), h("div", {
      "class": bem('line')
    })]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160934, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _color = require("../utils/color");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('steps'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
    description: String,
    direction: {
      type: String,
      "default": 'horizontal'
    },
    activeColor: {
      type: String,
      "default": _color.GREEN
    },
    activeIcon: {
      type: String,
      "default": 'checked'
    }
  },
  data: function data() {
    return {
      steps: []
    };
  },
  render: function render(h) {
    var icon = this.icon,
        title = this.title,
        description = this.description,
        slots = this.slots;
    var StatusIcon = (slots('icon') || icon) && h("div", {
      "class": bem('icon')
    }, [slots('icon') || h(_icon["default"], {
      "attrs": {
        "name": icon
      },
      "class": this.iconClass
    })]);
    var StatusMessage = h("div", {
      "class": bem('message')
    }, [h("div", {
      "class": bem('title')
    }, [title]), h("div", {
      "class": [bem('desc'), 'van-ellipsis']
    }, [description])]);
    return h("div", {
      "class": bem([this.direction])
    }, [(title || description) && h("div", {
      "class": bem('status')
    }, [StatusIcon, StatusMessage, slots('message-extra')]), h("div", {
      "class": bem('items', {
        alone: !title && !description
      })
    }, [slots()])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/color":1558606160876,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160935, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _button = _interopRequireDefault(require("../button"));

var _use = (0, _utils.use)('submit-bar'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price;
  var hasPrice = typeof price === 'number';
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), (slots.tip || tip) && h("div", {
    "class": bem('tip')
  }, [tip, slots.tip && slots.tip()]), h("div", {
    "class": bem('bar')
  }, [slots["default"] && slots["default"](), h("div", {
    "class": bem('text')
  }, [hasPrice && [h("span", [props.label || t('label')]), h("span", {
    "class": bem('price')
  }, [props.currency + " " + (price / 100).toFixed(props.decimalLength)])]]), h(_button["default"], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  safeAreaInsetBottom: Boolean,
  price: {
    type: Number,
    "default": null
  },
  decimalLength: {
    type: Number,
    "default": 2
  },
  currency: {
    type: String,
    "default": '¥'
  },
  buttonType: {
    type: String,
    "default": 'danger'
  }
};

var _default = sfc(SubmitBar);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../button":1558606160859}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160936, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _event = require("../utils/event");

var _touch = require("../mixins/touch");

var _clickOutside = require("../mixins/click-outside");

var _use = (0, _utils.use)('swipe-cell'),
    sfc = _use[0],
    bem = _use[1];

var THRESHOLD = 0.15;

var _default = sfc({
  mixins: [_touch.TouchMixin, (0, _clickOutside.ClickOutsideMixin)({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  methods: {
    open: function open(position) {
      var offset = position === 'left' ? this.leftWidth : -this.rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = (0, _utils.range)(offset, -this.rightWidth, this.leftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          leftWidth = this.leftWidth,
          rightWidth = this.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction === 'right' && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction === 'left' && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left'); // reset
      } else {
        this.swipeMove(0);
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        (0, _event.preventDefault)(event);
        this.swipeMove(this.deltaX + this.startOffset);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this);
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transition: this.dragging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)'
    };
    return h("div", {
      "class": bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swiping = false;
        }
      }
    }, [this.leftWidth ? h("div", {
      "class": bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.slots('left')]) : null, this.slots(), this.rightWidth ? h("div", {
      "class": bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.slots('right')]) : null])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/event":1558606160836,"../mixins/touch":1558606160835,"../mixins/click-outside":1558606160937}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160937, function(require, module, exports) {


exports.__esModule = true;
exports.ClickOutsideMixin = void 0;

var _event = require("../utils/event");

var ClickOutsideMixin = function ClickOutsideMixin(config) {
  return {
    mounted: function mounted() {
      var _this = this;

      config.handler = function (event) {
        if (!_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      (0, _event.on)(document, config.event, config.handler);
    },
    beforeDestroy: function beforeDestroy() {
      (0, _event.off)(document, config.event, config.handler);
    }
  };
};

exports.ClickOutsideMixin = ClickOutsideMixin;
}, function(modId) { var map = {"../utils/event":1558606160836}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160938, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('tabbar'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  data: function data() {
    return {
      items: []
    };
  },
  props: {
    value: Number,
    activeColor: String,
    safeAreaInsetBottom: Boolean,
    fixed: {
      type: Boolean,
      "default": true
    },
    zIndex: {
      type: Number,
      "default": 1
    }
  },
  watch: {
    items: function items() {
      this.setActiveItem();
    },
    value: function value() {
      this.setActiveItem();
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.items.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": ['van-hairline--top-bottom', bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160939, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _info = _interopRequireDefault(require("../info"));

var _router = require("../utils/router");

var _use = (0, _utils.use)('tabbar-item'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: (0, _extends2["default"])({}, _router.routeProps, {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.items.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },
  methods: {
    onClick: function onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this));
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
    }
  },
  render: function render(h) {
    var icon = this.icon,
        slots = this.slots,
        active = this.active;
    var style = active ? {
      color: this.$parent.activeColor
    } : null;
    return h("div", {
      "class": bem({
        active: active
      }),
      "style": style,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('icon', {
        dot: this.dot
      })
    }, [slots('icon', {
      active: active
    }) || icon && h(_icon["default"], {
      "attrs": {
        "name": icon
      }
    }), h(_info["default"], {
      "attrs": {
        "info": this.info
      }
    })]), h("div", {
      "class": bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
});

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../icon":1558606160840,"../info":1558606160841,"../utils/router":1558606160855}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160940, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _use = (0, _utils.use)('tree-select'),
    sfc = _use[0],
    bem = _use[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
      items = props.items,
      mainActiveIndex = props.mainActiveIndex,
      activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  return h("div", (0, _babelHelperVueJsxMergeProps["default"])([{
    "class": bem(),
    "style": {
      height: height + "px"
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('nav')
  }, [items.map(function (item, index) {
    return h("div", {
      "key": index,
      "class": ['van-ellipsis', bem('nitem', {
        active: mainActiveIndex === index,
        disabled: item.disabled
      })],
      "on": {
        "click": function click() {
          if (!item.disabled) {
            (0, _functional.emit)(ctx, 'navclick', index);
          }
        }
      }
    }, [item.text]);
  })]), h("div", {
    "class": bem('content')
  }, [subItems.map(function (item) {
    return h("div", {
      "key": item.id,
      "class": ['van-ellipsis', bem('item', {
        active: activeId === item.id,
        disabled: item.disabled
      })],
      "on": {
        "click": function click() {
          if (!item.disabled) {
            (0, _functional.emit)(ctx, 'itemclick', item);
          }
        }
      }
    }, [item.text, activeId === item.id && h(_icon["default"], {
      "attrs": {
        "name": "checked",
        "size": "16px"
      },
      "class": bem('selected')
    })]);
  })])]);
}

TreeSelect.props = {
  items: Array,
  mainActiveIndex: Number,
  activeId: {
    type: [Number, String],
    "default": 0
  },
  height: {
    type: Number,
    "default": 300
  }
};

var _default = sfc(TreeSelect);

exports["default"] = _default;
}, function(modId) { var map = {"../utils":1558606160823,"../utils/functional":1558606160832,"../icon":1558606160840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160941, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _directive = _interopRequireDefault(require("./directive"));

_directive["default"].install = function (Vue) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[Vant] Waterfall is deprecated, please use List component instread');
  }

  Vue.directive('WaterfallLower', (0, _directive["default"])('lower'));
  Vue.directive('WaterfallUpper', (0, _directive["default"])('upper'));
};

var _default = _directive["default"];
exports["default"] = _default;
}, function(modId) { var map = {"./directive":1558606160942}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1558606160942, function(require, module, exports) {


exports.__esModule = true;
exports["default"] = _default;

var _event = require("../utils/event");

var _scroll = require("../utils/scroll");

/* eslint-disable no-underscore-dangle */
var CONTEXT = '@@Waterfall';
var OFFSET = 300; // 处理滚动函数

function handleScrollEvent() {
  var element = this.el;
  var scrollEventTarget = this.scrollEventTarget; // 已被禁止的滚动处理

  if (this.disabled) return;
  var targetScrollTop = (0, _scroll.getScrollTop)(scrollEventTarget);
  var targetVisibleHeight = (0, _scroll.getVisibleHeight)(scrollEventTarget); // 滚动元素可视区域下边沿到滚动元素元素最顶上 距离

  var targetBottom = targetScrollTop + targetVisibleHeight; // 如果无元素高度，考虑为元素隐藏，直接返回

  if (!targetVisibleHeight) return; // 判断是否到了底

  var needLoadMoreToLower = false;

  if (element === scrollEventTarget) {
    needLoadMoreToLower = scrollEventTarget.scrollHeight - targetBottom < this.offset;
  } else {
    var elementBottom = (0, _scroll.getElementTop)(element) - (0, _scroll.getElementTop)(scrollEventTarget) + (0, _scroll.getVisibleHeight)(element);
    needLoadMoreToLower = elementBottom - targetVisibleHeight < this.offset;
  }

  if (needLoadMoreToLower) {
    this.cb.lower && this.cb.lower({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  } // 判断是否到了顶


  var needLoadMoreToUpper = false;

  if (element === scrollEventTarget) {
    needLoadMoreToUpper = targetScrollTop < this.offset;
  } else {
    var elementTop = (0, _scroll.getElementTop)(element) - (0, _scroll.getElementTop)(scrollEventTarget);
    needLoadMoreToUpper = elementTop + this.offset > 0;
  }

  if (needLoadMoreToUpper) {
    this.cb.upper && this.cb.upper({
      target: scrollEventTarget,
      top: targetScrollTop
    });
  }
} // 绑定事件到元素上
// 读取基本的控制变量


function doBindEvent() {
  var _this = this;

  if (this.el[CONTEXT].binded) {
    return;
  }

  this.el[CONTEXT].binded = true;
  this.scrollEventListener = handleScrollEvent.bind(this);
  this.scrollEventTarget = (0, _scroll.getScrollEventTarget)(this.el);
  var disabledExpr = this.el.getAttribute('waterfall-disabled');
  var disabled = false;

  if (disabledExpr) {
    this.vm.$watch(disabledExpr, function (value) {
      _this.disabled = value;

      _this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }

  this.disabled = disabled;
  var offset = this.el.getAttribute('waterfall-offset');
  this.offset = Number(offset) || OFFSET;
  (0, _event.on)(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);
  this.scrollEventListener();
} // 绑定事件


function startBind(el) {
  var context = el[CONTEXT];
  context.vm.$nextTick(function () {
    doBindEvent.call(el[CONTEXT]);
  });
} // 确认何时绑事件监听函数


function doCheckStartBind(el) {
  var context = el[CONTEXT];

  if (context.vm._isMounted) {
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

function _default(type) {
  return {
    bind: function bind(el, binding, vnode) {
      if (!el[CONTEXT]) {
        el[CONTEXT] = {
          el: el,
          vm: vnode.context,
          cb: {}
        };
      }

      el[CONTEXT].cb[type] = binding.value;
      doCheckStartBind(el);
    },
    update: function update(el) {
      var context = el[CONTEXT];
      context.scrollEventListener && context.scrollEventListener();
    },
    unbind: function unbind(el) {
      var context = el[CONTEXT];

      if (context.scrollEventTarget) {
        (0, _event.off)(context.scrollEventTarget, 'scroll', context.scrollEventListener);
      }
    }
  };
}
}, function(modId) { var map = {"../utils/event":1558606160836,"../utils/scroll":1558606160839}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1558606160821);
})()
//# sourceMappingURL=index.js.map