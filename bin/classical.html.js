var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var AnchorTarget = (function () {
            function AnchorTarget() {
            }
            AnchorTarget.self = '_self';
            AnchorTarget.blank = '_blank';
            AnchorTarget.parent = '_parent';
            AnchorTarget.top = '_top';
            return AnchorTarget;
        })();
        Html.AnchorTarget = AnchorTarget;
        var AreaTarget = (function () {
            function AreaTarget() {
            }
            AreaTarget.self = '_self';
            AreaTarget.blank = '_blank';
            AreaTarget.parent = '_parent';
            AreaTarget.top = '_top';
            return AreaTarget;
        })();
        Html.AreaTarget = AreaTarget;
        var AudioPreload = (function () {
            function AudioPreload() {
            }
            AudioPreload.none = 'none';
            AudioPreload.metadata = 'metadata';
            AudioPreload.auto = 'auto';
            return AudioPreload;
        })();
        Html.AudioPreload = AudioPreload;
        var BaseTarget = (function () {
            function BaseTarget() {
            }
            BaseTarget.self = '_self';
            BaseTarget.blank = '_blank';
            BaseTarget.parent = '_parent';
            BaseTarget.top = '_top';
            return BaseTarget;
        })();
        Html.BaseTarget = BaseTarget;
        var ButtonType = (function () {
            function ButtonType() {
            }
            ButtonType.submit = 'submit';
            ButtonType.reset = 'reset';
            ButtonType.button = 'button';
            return ButtonType;
        })();
        Html.ButtonType = ButtonType;
        var FormAutoComplete = (function () {
            function FormAutoComplete() {
            }
            FormAutoComplete.off = 'off';
            FormAutoComplete.on = 'on';
            return FormAutoComplete;
        })();
        Html.FormAutoComplete = FormAutoComplete;
        var FormEncodingType = (function () {
            function FormEncodingType() {
            }
            FormEncodingType.applicationFormUrlEncoded = 'application/x-www-form-urlencoded';
            FormEncodingType.multipartFormData = 'multipart/form-data';
            FormEncodingType.plainText = 'text/plain';
            return FormEncodingType;
        })();
        Html.FormEncodingType = FormEncodingType;
        var FormMethod = (function () {
            function FormMethod() {
            }
            FormMethod.post = 'post';
            FormMethod.get = 'get';
            return FormMethod;
        })();
        Html.FormMethod = FormMethod;
        var FormTarget = (function () {
            function FormTarget() {
            }
            FormTarget.self = '_self';
            FormTarget.blank = '_blank';
            FormTarget.parent = '_parent';
            FormTarget.top = '_top';
            return FormTarget;
        })();
        Html.FormTarget = FormTarget;
        var GlobalDirection = (function () {
            function GlobalDirection() {
            }
            GlobalDirection.leftToRight = 'ltr';
            GlobalDirection.rightToLeft = 'rtl';
            GlobalDirection.auto = 'auto';
            return GlobalDirection;
        })();
        Html.GlobalDirection = GlobalDirection;
        var GlobalDropZone = (function () {
            function GlobalDropZone() {
            }
            GlobalDropZone.copy = 'copy';
            GlobalDropZone.move = 'move';
            GlobalDropZone.link = 'link';
            return GlobalDropZone;
        })();
        Html.GlobalDropZone = GlobalDropZone;
        var InlineFrameSandbox = (function () {
            function InlineFrameSandbox() {
            }
            InlineFrameSandbox.allowSameOrigin = 'allow-same-origin';
            InlineFrameSandbox.allowTopNavigation = 'allow-top-navigation';
            InlineFrameSandbox.allowForms = 'allow-forms';
            InlineFrameSandbox.allowScripts = 'allow-scripts';
            return InlineFrameSandbox;
        })();
        Html.InlineFrameSandbox = InlineFrameSandbox;
        var InlineFrameScrolling = (function () {
            function InlineFrameScrolling() {
            }
            InlineFrameScrolling.auto = 'auto';
            InlineFrameScrolling.yes = 'yes';
            InlineFrameScrolling.no = 'no';
            return InlineFrameScrolling;
        })();
        Html.InlineFrameScrolling = InlineFrameScrolling;
        var InputAccept = (function () {
            function InputAccept() {
            }
            InputAccept.audio = 'audio/*';
            InputAccept.video = 'video/*';
            InputAccept.image = 'image/*';
            return InputAccept;
        })();
        Html.InputAccept = InputAccept;
        var InputAutoComplete = (function () {
            function InputAutoComplete() {
            }
            InputAutoComplete.off = 'off';
            InputAutoComplete.on = 'on';
            return InputAutoComplete;
        })();
        Html.InputAutoComplete = InputAutoComplete;
        var InputType = (function () {
            function InputType() {
            }
            InputType.button = 'button';
            InputType.checkbox = 'checkbox';
            InputType.color = 'color';
            InputType.email = 'email';
            InputType.hidden = 'hidden';
            InputType.image = 'image';
            InputType.number = 'number';
            InputType.password = 'password';
            InputType.radio = 'radio';
            InputType.range = 'range';
            InputType.reset = 'reset';
            InputType.search = 'search';
            InputType.submit = 'submit';
            InputType.tel = 'tel';
            InputType.text = 'text';
            InputType.url = 'url';
            return InputType;
        })();
        Html.InputType = InputType;
        var ListItemType = (function () {
            function ListItemType() {
            }
            ListItemType.lowercase = 'a';
            ListItemType.uppercase = 'A';
            ListItemType.lowercaseRomanNumerals = 'i';
            ListItemType.uppercaseRomanNumerals = 'I';
            ListItemType.numbers = '1';
            return ListItemType;
        })();
        Html.ListItemType = ListItemType;
        var MenuType = (function () {
            function MenuType() {
            }
            MenuType.context = 'context';
            MenuType.toolbar = 'toolbar';
            MenuType.list = 'list';
            return MenuType;
        })();
        Html.MenuType = MenuType;
        var MetaHttpEquiv = (function () {
            function MetaHttpEquiv() {
            }
            MetaHttpEquiv.defaultStyle = 'default-style';
            MetaHttpEquiv.refresh = 'refresh';
            return MetaHttpEquiv;
        })();
        Html.MetaHttpEquiv = MetaHttpEquiv;
        var MetaName = (function () {
            function MetaName() {
            }
            MetaName.applicationName = 'application-name';
            MetaName.author = 'author';
            MetaName.description = 'description';
            MetaName.generator = 'generator';
            MetaName.keywords = 'keywords';
            return MetaName;
        })();
        Html.MetaName = MetaName;
        var TextAreaWrap = (function () {
            function TextAreaWrap() {
            }
            TextAreaWrap.cols = 'cols';
            return TextAreaWrap;
        })();
        Html.TextAreaWrap = TextAreaWrap;
        var TrackKind = (function () {
            function TrackKind() {
            }
            TrackKind.subtitles = 'subtitles';
            TrackKind.captions = 'captions';
            TrackKind.descriptions = 'descriptions';
            TrackKind.chapters = 'chapters';
            TrackKind.metadata = 'metadata';
            return TrackKind;
        })();
        Html.TrackKind = TrackKind;
        var UnorderedListType = (function () {
            function UnorderedListType() {
            }
            UnorderedListType.circle = 'circle';
            UnorderedListType.disc = 'disc';
            UnorderedListType.square = 'square';
            return UnorderedListType;
        })();
        Html.UnorderedListType = UnorderedListType;
        var VideoPreload = (function () {
            function VideoPreload() {
            }
            VideoPreload.none = 'none';
            VideoPreload.metadata = 'metadata';
            VideoPreload.auto = 'auto';
            return VideoPreload;
        })();
        Html.VideoPreload = VideoPreload;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Css = (function () {
            function Css(config) {
                this._config = config;
            }
            return Css;
        })();
        Html.Css = Css;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var Elements;
        (function (Elements) {
            var events = Classical.Events;
            var b = Classical.Binding;
            var bc = Classical.Binding.Collections;
            var u = Classical.Utilities;
            var HtmlNode = (function () {
                function HtmlNode(elementName, config) {
                    this._updating = false;
                    this._config = config || {};
                    this._elementName = elementName;
                }
                Object.defineProperty(HtmlNode.prototype, "parent", {
                    get: function () {
                        if (!this.element)
                            return null;
                        return HtmlNode.getHtmlNode(this.element.parentNode);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlNode.prototype, "element", {
                    get: function () {
                        return this._element;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlNode.prototype, "elementName", {
                    get: function () {
                        return this._elementName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlNode.prototype, "text", {
                    get: function () {
                        return this._element.textContent;
                    },
                    set: function (value) {
                        this._element.textContent = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                HtmlNode.prototype.getConfig = function () {
                    return this._config;
                };
                HtmlNode.prototype.getElement = function () {
                    return this.element;
                };
                HtmlNode.prototype.createElement = function (document) {
                    return document.createElement(this._elementName);
                };
                HtmlNode.prototype.initialize = function (document) {
                    var _this = this;
                    if (document === void 0) { document = global.document; }
                    if (this.isInitialized())
                        return this;
                    var element = this.createElement(document);
                    this._element = element;
                    elementMap.add(element, this);
                    this.configure(element, document);
                    if (!isTextNode(element)) {
                        this._observer = new MutationObserver(function (records) {
                            if (_this._updating) {
                                _this._updating = false;
                                return;
                            }
                            var record, propertyName, elementName, attributeName;
                            for (var recordIndex = 0, numberOfRecords = records.length; recordIndex < numberOfRecords; recordIndex++) {
                                record = records[recordIndex];
                                if (record.type == 'attributes') {
                                    attributeName = record.attributeName;
                                    elementName = contentMap.getValue(attributeName);
                                    if (elementName)
                                        attributeName = elementName;
                                    propertyName = propertyMap.getValue(attributeName);
                                    if (!propertyName)
                                        propertyName = attributeName;
                                    _this[propertyName] = _this.element[attributeName];
                                }
                                else {
                                    var children = new bc.Collection([_this]), addedNodes = Array.prototype.slice.call(record.addedNodes), removedNodes = record.removedNodes, childNodes = _this._element.childNodes, childNode, child;
                                    for (var nodeIndex = 0, numberOfNodes = removedNodes.length; nodeIndex < numberOfNodes; nodeIndex++) {
                                        child = children.query().where(function (c) { return c.element == removedNodes[nodeIndex]; }).singleOrDefault();
                                        if (child)
                                            children.remove(child);
                                    }
                                    for (var nodeIndex = childNodes.length - 1; nodeIndex >= 0; nodeIndex--) {
                                        childNode = childNodes.item(nodeIndex);
                                        child = HtmlNode.getHtmlNode(childNode);
                                        children.set(nodeIndex, child);
                                        addedNodes.remove(childNode);
                                        if (addedNodes.length == 0)
                                            break;
                                    }
                                }
                            }
                        });
                        this._observer.observe(this._element, {
                            attributes: true,
                            childList: true,
                            subtree: false
                        });
                    }
                    else {
                        this._observer = new MutationObserver(function (records) {
                            if (records.length === 0)
                                return;
                            var textNode = _this;
                            textNode.text = _this._element.textContent;
                        });
                        this._observer.observe(this._element, {
                            characterData: true
                        });
                    }
                    this._noteInitialization();
                    return this;
                };
                HtmlNode.prototype.initialization = function (handler) {
                    if (!this._initialization)
                        this._initialization = new events.Event(this);
                    this._initialization.subscribe(handler);
                };
                HtmlNode.prototype.isInitialized = function () {
                    return Classical.Utilities.isTruthy(this._isInitialized);
                };
                HtmlNode.prototype.configure = function (element, document) {
                };
                HtmlNode.prototype._noteInitialization = function () {
                    this._isInitialized = true;
                    var initialization = this._initialization;
                    if (initialization)
                        initialization.execute(null);
                };
                HtmlNode.getHtmlNode = function (node) {
                    if (!node)
                        return null;
                    var htmlNode = elementMap.getValue(node);
                    if (htmlNode)
                        return htmlNode;
                    var type = node.nodeName;
                    var ctor = constructorMap.getValue(type);
                    Classical.Assert.isDefined(ctor, Classical.Utilities.format('The constructor for the HtmlNode decorating {0} could not be found.', type));
                    var htmlNode = (new ctor({}));
                    htmlNode.createElement = function () { return node; };
                    var childNodes = node.childNodes;
                    if (childNodes.length > 0) {
                        var childHtmlNodes = [];
                        for (var i = 0, length = childNodes.length; i < length; i++) {
                            var child = HtmlNode.getHtmlNode(childNodes.item(i));
                            if (child)
                                childHtmlNodes.add(child);
                        }
                        var parentHtmlNode = htmlNode;
                        parentHtmlNode.children.addRange(childHtmlNodes);
                    }
                    htmlNode.initialize();
                    return htmlNode;
                };
                return HtmlNode;
            })();
            Elements.HtmlNode = HtmlNode;
            var TextNode = (function (_super) {
                __extends(TextNode, _super);
                function TextNode(config) {
                    _super.call(this, 'text', config);
                }
                Object.defineProperty(TextNode.prototype, "textProperty", {
                    get: function () {
                        if (!this._textProperty)
                            initializeProperty(this, 'text', 'textContent');
                        return this._textProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextNode.prototype, "text", {
                    get: function () {
                        return this.textProperty.value;
                    },
                    set: function (value) {
                        this.textProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TextNode.prototype.createElement = function () {
                    return document.createTextNode('');
                };
                TextNode.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'text', true);
                };
                return TextNode;
            })(HtmlNode);
            Elements.TextNode = TextNode;
            var HtmlElement = (function (_super) {
                __extends(HtmlElement, _super);
                function HtmlElement(name, config) {
                    _super.call(this, name, config);
                }
                Object.defineProperty(HtmlElement.prototype, "classesProperty", {
                    get: function () {
                        if (!this._classesProperty)
                            initializeProperty(this, 'classes', 'className');
                        return this._classesProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "classes", {
                    get: function () {
                        return this.classesProperty.value;
                    },
                    set: function (value) {
                        this.classesProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "directionProperty", {
                    get: function () {
                        if (!this._directionProperty)
                            initializeProperty(this, 'direction', 'dir');
                        return this._directionProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "direction", {
                    get: function () {
                        return this.directionProperty.value;
                    },
                    set: function (value) {
                        this.directionProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "draggableProperty", {
                    get: function () {
                        if (!this._draggableProperty)
                            initializeProperty(this, 'draggable', 'draggable');
                        return this._draggableProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "draggable", {
                    get: function () {
                        return this.draggableProperty.value;
                    },
                    set: function (value) {
                        this.draggableProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "hiddenProperty", {
                    get: function () {
                        if (!this._hiddenProperty)
                            initializeProperty(this, 'hidden', 'hidden');
                        return this._hiddenProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "hidden", {
                    get: function () {
                        return this.hiddenProperty.value;
                    },
                    set: function (value) {
                        this.hiddenProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "idProperty", {
                    get: function () {
                        if (!this._idProperty)
                            initializeProperty(this, 'id', 'id');
                        return this._idProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "id", {
                    get: function () {
                        return this.idProperty.value;
                    },
                    set: function (value) {
                        this.idProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "languageProperty", {
                    get: function () {
                        if (!this._languageProperty)
                            initializeProperty(this, 'language', 'lang');
                        return this._languageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "language", {
                    get: function () {
                        return this.languageProperty.value;
                    },
                    set: function (value) {
                        this.languageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "spellCheckProperty", {
                    get: function () {
                        if (!this._spellCheckProperty)
                            initializeProperty(this, 'spellCheck', 'spellcheck');
                        return this._spellCheckProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "spellCheck", {
                    get: function () {
                        return this.spellCheckProperty.value;
                    },
                    set: function (value) {
                        this.spellCheckProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "titleProperty", {
                    get: function () {
                        if (!this._titleProperty)
                            initializeProperty(this, 'title', 'title');
                        return this._titleProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "title", {
                    get: function () {
                        return this.titleProperty.value;
                    },
                    set: function (value) {
                        this.titleProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "fullScreenChangeEvent", {
                    get: function () {
                        if (!this._fullScreenChangeEvent)
                            this._fullScreenChangeEvent = new Html.HtmlElementEvent('fullscreenchange', 'Event', this);
                        return this._fullScreenChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "fullScreenErrorEvent", {
                    get: function () {
                        if (!this._fullScreenErrorEvent)
                            this._fullScreenErrorEvent = new Html.HtmlElementEvent('fullscreenerror', 'Event', this);
                        return this._fullScreenErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "animationEndEvent", {
                    get: function () {
                        if (!this._animationEndEvent)
                            this._animationEndEvent = new Html.HtmlElementEvent('animationend', 'AnimationEvent', this);
                        return this._animationEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "animationIterationEvent", {
                    get: function () {
                        if (!this._animationIterationEvent)
                            this._animationIterationEvent = new Html.HtmlElementEvent('animationiteration', 'AnimationEvent', this);
                        return this._animationIterationEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "animationStartEvent", {
                    get: function () {
                        if (!this._animationStartEvent)
                            this._animationStartEvent = new Html.HtmlElementEvent('animationstart', 'AnimationEvent', this);
                        return this._animationStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "transitionEndEvent", {
                    get: function () {
                        if (!this._transitionEndEvent)
                            this._transitionEndEvent = new Html.HtmlElementEvent('transitionend', 'TransitionEvent', this);
                        return this._transitionEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "gamepadConnectedEvent", {
                    get: function () {
                        if (!this._gamepadConnectedEvent)
                            this._gamepadConnectedEvent = new Html.HtmlElementEvent('gamepadconnected', 'Event', this);
                        return this._gamepadConnectedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "gamepadDisconnectedEvent", {
                    get: function () {
                        if (!this._gamepadDisconnectedEvent)
                            this._gamepadDisconnectedEvent = new Html.HtmlElementEvent('gamepaddisconnected', 'Event', this);
                        return this._gamepadDisconnectedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "compositionEndEvent", {
                    get: function () {
                        if (!this._compositionEndEvent)
                            this._compositionEndEvent = new Html.HtmlElementEvent('compositionend', 'CompositionEvent', this);
                        return this._compositionEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "compositionStartEvent", {
                    get: function () {
                        if (!this._compositionStartEvent)
                            this._compositionStartEvent = new Html.HtmlElementEvent('compositionstart', 'CompositionEvent', this);
                        return this._compositionStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "compositionUpdateEvent", {
                    get: function () {
                        if (!this._compositionUpdateEvent)
                            this._compositionUpdateEvent = new Html.HtmlElementEvent('compositionupdate', 'CompositionEvent', this);
                        return this._compositionUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "keyDownEvent", {
                    get: function () {
                        if (!this._keyDownEvent)
                            this._keyDownEvent = new Html.HtmlElementEvent('keydown', 'KeyboardEvent', this);
                        return this._keyDownEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "keyPressEvent", {
                    get: function () {
                        if (!this._keyPressEvent)
                            this._keyPressEvent = new Html.HtmlElementEvent('keypress', 'KeyboardEvent', this);
                        return this._keyPressEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "keyUpEvent", {
                    get: function () {
                        if (!this._keyUpEvent)
                            this._keyUpEvent = new Html.HtmlElementEvent('keyup', 'KeyboardEvent', this);
                        return this._keyUpEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "clickEvent", {
                    get: function () {
                        if (!this._clickEvent)
                            this._clickEvent = new Html.HtmlElementEvent('click', 'MouseEvent', this);
                        return this._clickEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "doubleClickEvent", {
                    get: function () {
                        if (!this._doubleClickEvent)
                            this._doubleClickEvent = new Html.HtmlElementEvent('dblclick', 'MouseEvent', this);
                        return this._doubleClickEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseDownEvent", {
                    get: function () {
                        if (!this._mouseDownEvent)
                            this._mouseDownEvent = new Html.HtmlElementEvent('mousedown', 'MouseEvent', this);
                        return this._mouseDownEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseEnterEvent", {
                    get: function () {
                        if (!this._mouseEnterEvent)
                            this._mouseEnterEvent = new Html.HtmlElementEvent('mouseenter', 'MouseEvent', this);
                        return this._mouseEnterEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseLeaveEvent", {
                    get: function () {
                        if (!this._mouseLeaveEvent)
                            this._mouseLeaveEvent = new Html.HtmlElementEvent('mouseleave', 'MouseEvent', this);
                        return this._mouseLeaveEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseMoveEvent", {
                    get: function () {
                        if (!this._mouseMoveEvent)
                            this._mouseMoveEvent = new Html.HtmlElementEvent('mousemove', 'MouseEvent', this);
                        return this._mouseMoveEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseOutEvent", {
                    get: function () {
                        if (!this._mouseOutEvent)
                            this._mouseOutEvent = new Html.HtmlElementEvent('mouseout', 'MouseEvent', this);
                        return this._mouseOutEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseOverEvent", {
                    get: function () {
                        if (!this._mouseOverEvent)
                            this._mouseOverEvent = new Html.HtmlElementEvent('mouseover', 'MouseEvent', this);
                        return this._mouseOverEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "mouseUpEvent", {
                    get: function () {
                        if (!this._mouseUpEvent)
                            this._mouseUpEvent = new Html.HtmlElementEvent('mouseup', 'MouseEvent', this);
                        return this._mouseUpEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "wheelEvent", {
                    get: function () {
                        if (!this._wheelEvent)
                            this._wheelEvent = new Html.HtmlElementEvent('wheel', 'WheelEvent', this);
                        return this._wheelEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "contextMenuEvent", {
                    get: function () {
                        if (!this._contextMenuEvent)
                            this._contextMenuEvent = new Html.HtmlElementEvent('contextmenu', 'MouseEvent', this);
                        return this._contextMenuEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pointerLockChangeEvent", {
                    get: function () {
                        if (!this._pointerLockChangeEvent)
                            this._pointerLockChangeEvent = new Html.HtmlElementEvent('pointerlockchange', 'Event', this);
                        return this._pointerLockChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pointerLockErrorEvent", {
                    get: function () {
                        if (!this._pointerLockErrorEvent)
                            this._pointerLockErrorEvent = new Html.HtmlElementEvent('pointerlockerror', 'Event', this);
                        return this._pointerLockErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "blurEvent", {
                    get: function () {
                        if (!this._blurEvent)
                            this._blurEvent = new Html.HtmlElementEvent('blur', 'FocusEvent', this);
                        return this._blurEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "focusEvent", {
                    get: function () {
                        if (!this._focusEvent)
                            this._focusEvent = new Html.HtmlElementEvent('focus', 'FocusEvent', this);
                        return this._focusEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "afterPrintEvent", {
                    get: function () {
                        if (!this._afterPrintEvent)
                            this._afterPrintEvent = new Html.HtmlElementEvent('afterprint', 'Event', this);
                        return this._afterPrintEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "beforePrintEvent", {
                    get: function () {
                        if (!this._beforePrintEvent)
                            this._beforePrintEvent = new Html.HtmlElementEvent('beforeprint', 'Event', this);
                        return this._beforePrintEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragEndEvent", {
                    get: function () {
                        if (!this._dragEndEvent)
                            this._dragEndEvent = new Html.HtmlElementEvent('dragend', 'DragEvent', this);
                        return this._dragEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragEnterEvent", {
                    get: function () {
                        if (!this._dragEnterEvent)
                            this._dragEnterEvent = new Html.HtmlElementEvent('dragenter', 'DragEvent', this);
                        return this._dragEnterEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragEvent", {
                    get: function () {
                        if (!this._dragEvent)
                            this._dragEvent = new Html.HtmlElementEvent('drag', 'DragEvent', this);
                        return this._dragEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragLeaveEvent", {
                    get: function () {
                        if (!this._dragLeaveEvent)
                            this._dragLeaveEvent = new Html.HtmlElementEvent('dragleave', 'DragEvent', this);
                        return this._dragLeaveEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragOverEvent", {
                    get: function () {
                        if (!this._dragOverEvent)
                            this._dragOverEvent = new Html.HtmlElementEvent('dragover', 'DragEvent', this);
                        return this._dragOverEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dragStartEvent", {
                    get: function () {
                        if (!this._dragStartEvent)
                            this._dragStartEvent = new Html.HtmlElementEvent('dragstart', 'DragEvent', this);
                        return this._dragStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "dropEvent", {
                    get: function () {
                        if (!this._dropEvent)
                            this._dropEvent = new Html.HtmlElementEvent('drop', 'DragEvent', this);
                        return this._dropEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "loadEvent", {
                    get: function () {
                        if (!this._loadEvent)
                            this._loadEvent = new Html.HtmlElementEvent('load', 'UIEvent', this);
                        return this._loadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "resizeEvent", {
                    get: function () {
                        if (!this._resizeEvent)
                            this._resizeEvent = new Html.HtmlElementEvent('resize', 'UIEvent', this);
                        return this._resizeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "scrollEvent", {
                    get: function () {
                        if (!this._scrollEvent)
                            this._scrollEvent = new Html.HtmlElementEvent('scroll', 'UIEvent', this);
                        return this._scrollEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "selectEvent", {
                    get: function () {
                        if (!this._selectEvent)
                            this._selectEvent = new Html.HtmlElementEvent('select', 'UIEvent', this);
                        return this._selectEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "offlineBackOnlineEvent", {
                    get: function () {
                        if (!this._offlineBackOnlineEvent)
                            this._offlineBackOnlineEvent = new Html.HtmlElementEvent('online', 'Event', this);
                        return this._offlineBackOnlineEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "offlineEvent", {
                    get: function () {
                        if (!this._offlineEvent)
                            this._offlineEvent = new Html.HtmlElementEvent('offline', 'Event', this);
                        return this._offlineEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionCheckingEvent", {
                    get: function () {
                        if (!this._connectionCheckingEvent)
                            this._connectionCheckingEvent = new Html.HtmlElementEvent('checking', 'Event', this);
                        return this._connectionCheckingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionDownloadingEvent", {
                    get: function () {
                        if (!this._connectionDownloadingEvent)
                            this._connectionDownloadingEvent = new Html.HtmlElementEvent('downloading', 'Event', this);
                        return this._connectionDownloadingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionErrorEvent", {
                    get: function () {
                        if (!this._connectionErrorEvent)
                            this._connectionErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._connectionErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionNoUpdateEvent", {
                    get: function () {
                        if (!this._connectionNoUpdateEvent)
                            this._connectionNoUpdateEvent = new Html.HtmlElementEvent('noupdate', 'Event', this);
                        return this._connectionNoUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionObsoleteEvent", {
                    get: function () {
                        if (!this._connectionObsoleteEvent)
                            this._connectionObsoleteEvent = new Html.HtmlElementEvent('obsolete', 'Event', this);
                        return this._connectionObsoleteEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionUpdateReadyEvent", {
                    get: function () {
                        if (!this._connectionUpdateReadyEvent)
                            this._connectionUpdateReadyEvent = new Html.HtmlElementEvent('updateready', 'Event', this);
                        return this._connectionUpdateReadyEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "connectionCachedEvent", {
                    get: function () {
                        if (!this._connectionCachedEvent)
                            this._connectionCachedEvent = new Html.HtmlElementEvent('cached', 'Event', this);
                        return this._connectionCachedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgAbortEvent", {
                    get: function () {
                        if (!this._svgAbortEvent)
                            this._svgAbortEvent = new Html.HtmlElementEvent('SVGAbort', 'Event', this);
                        return this._svgAbortEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgBeginEvent", {
                    get: function () {
                        if (!this._svgBeginEvent)
                            this._svgBeginEvent = new Html.HtmlElementEvent('beginEvent', 'Event', this);
                        return this._svgBeginEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgEndEvent", {
                    get: function () {
                        if (!this._svgEndEvent)
                            this._svgEndEvent = new Html.HtmlElementEvent('endEvent', 'Event', this);
                        return this._svgEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgErrorEvent", {
                    get: function () {
                        if (!this._svgErrorEvent)
                            this._svgErrorEvent = new Html.HtmlElementEvent('SVGError', 'Event', this);
                        return this._svgErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgLoadEvent", {
                    get: function () {
                        if (!this._svgLoadEvent)
                            this._svgLoadEvent = new Html.HtmlElementEvent('SVGLoad', 'Event', this);
                        return this._svgLoadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgRepeatEvent", {
                    get: function () {
                        if (!this._svgRepeatEvent)
                            this._svgRepeatEvent = new Html.HtmlElementEvent('repeatEvent', 'Event', this);
                        return this._svgRepeatEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgResizeEvent", {
                    get: function () {
                        if (!this._svgResizeEvent)
                            this._svgResizeEvent = new Html.HtmlElementEvent('SVGResize', 'Event', this);
                        return this._svgResizeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgScrollEvent", {
                    get: function () {
                        if (!this._svgScrollEvent)
                            this._svgScrollEvent = new Html.HtmlElementEvent('SVGScroll', 'Event', this);
                        return this._svgScrollEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgUnloadEvent", {
                    get: function () {
                        if (!this._svgUnloadEvent)
                            this._svgUnloadEvent = new Html.HtmlElementEvent('SVGUnload', 'Event', this);
                        return this._svgUnloadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "svgZoomEvent", {
                    get: function () {
                        if (!this._svgZoomEvent)
                            this._svgZoomEvent = new Html.HtmlElementEvent('SVGZoom', 'SVGZoomEvent', this);
                        return this._svgZoomEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "webSocketErrorEvent", {
                    get: function () {
                        if (!this._webSocketErrorEvent)
                            this._webSocketErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._webSocketErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pageHideEvent", {
                    get: function () {
                        if (!this._pageHideEvent)
                            this._pageHideEvent = new Html.HtmlElementEvent('pagehide', 'PageTransitionEvent', this);
                        return this._pageHideEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "pageShowEvent", {
                    get: function () {
                        if (!this._pageShowEvent)
                            this._pageShowEvent = new Html.HtmlElementEvent('pageshow', 'PageTransitionEvent', this);
                        return this._pageShowEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "showEvent", {
                    get: function () {
                        if (!this._showEvent)
                            this._showEvent = new Html.HtmlElementEvent('show', 'MouseEvent', this);
                        return this._showEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "contentLoadedEvent", {
                    get: function () {
                        if (!this._contentLoadedEvent)
                            this._contentLoadedEvent = new Html.HtmlElementEvent('DOMContentLoaded', 'Event', this);
                        return this._contentLoadedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "hashChangeEvent", {
                    get: function () {
                        if (!this._hashChangeEvent)
                            this._hashChangeEvent = new Html.HtmlElementEvent('hashchange', 'Event', this);
                        return this._hashChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "popStateEvent", {
                    get: function () {
                        if (!this._popStateEvent)
                            this._popStateEvent = new Html.HtmlElementEvent('popstate', 'PopStateEvent', this);
                        return this._popStateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "invalidEvent", {
                    get: function () {
                        if (!this._invalidEvent)
                            this._invalidEvent = new Html.HtmlElementEvent('invalid', 'Event', this);
                        return this._invalidEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "beforeUnloadEvent", {
                    get: function () {
                        if (!this._beforeUnloadEvent)
                            this._beforeUnloadEvent = new Html.HtmlElementEvent('beforeunload', 'BeforeUnloadEvent', this);
                        return this._beforeUnloadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "indexedDatabaseErrorEvent", {
                    get: function () {
                        if (!this._indexedDatabaseErrorEvent)
                            this._indexedDatabaseErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._indexedDatabaseErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "visibilityChangeEvent", {
                    get: function () {
                        if (!this._visibilityChangeEvent)
                            this._visibilityChangeEvent = new Html.HtmlElementEvent('visibilitychange', 'Event', this);
                        return this._visibilityChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "requestLoadStartEvent", {
                    get: function () {
                        if (!this._requestLoadStartEvent)
                            this._requestLoadStartEvent = new Html.HtmlElementEvent('loadstart', 'ProgressEvent', this);
                        return this._requestLoadStartEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "serverErrorEvent", {
                    get: function () {
                        if (!this._serverErrorEvent)
                            this._serverErrorEvent = new Html.HtmlElementEvent('error', 'Event', this);
                        return this._serverErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "webStorageEvent", {
                    get: function () {
                        if (!this._webStorageEvent)
                            this._webStorageEvent = new Html.HtmlElementEvent('storage', 'StorageEvent', this);
                        return this._webStorageEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "requestReadyStateChangeEvent", {
                    get: function () {
                        if (!this._requestReadyStateChangeEvent)
                            this._requestReadyStateChangeEvent = new Html.HtmlElementEvent('readystatechange', 'Event', this);
                        return this._requestReadyStateChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElement.prototype, "requestTimeoutEvent", {
                    get: function () {
                        if (!this._requestTimeoutEvent)
                            this._requestTimeoutEvent = new Html.HtmlElementEvent('timeout', 'ProgressEvent', this);
                        return this._requestTimeoutEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                HtmlElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'classes', true);
                    setPropertyFromConfig(this, config, 'direction', true);
                    setPropertyFromConfig(this, config, 'draggable', true);
                    setPropertyFromConfig(this, config, 'hidden', true);
                    setPropertyFromConfig(this, config, 'id', true);
                    setPropertyFromConfig(this, config, 'language', true);
                    setPropertyFromConfig(this, config, 'spellCheck', true);
                    setPropertyFromConfig(this, config, 'title', true);
                    if (config.fullScreenChangeHandler)
                        this.fullScreenChangeEvent.subscribe(config.fullScreenChangeHandler);
                    if (config.fullScreenErrorHandler)
                        this.fullScreenErrorEvent.subscribe(config.fullScreenErrorHandler);
                    if (config.animationEndHandler)
                        this.animationEndEvent.subscribe(config.animationEndHandler);
                    if (config.animationIterationHandler)
                        this.animationIterationEvent.subscribe(config.animationIterationHandler);
                    if (config.animationStartHandler)
                        this.animationStartEvent.subscribe(config.animationStartHandler);
                    if (config.transitionEndHandler)
                        this.transitionEndEvent.subscribe(config.transitionEndHandler);
                    if (config.gamepadConnectedHandler)
                        this.gamepadConnectedEvent.subscribe(config.gamepadConnectedHandler);
                    if (config.gamepadDisconnectedHandler)
                        this.gamepadDisconnectedEvent.subscribe(config.gamepadDisconnectedHandler);
                    if (config.compositionEndHandler)
                        this.compositionEndEvent.subscribe(config.compositionEndHandler);
                    if (config.compositionStartHandler)
                        this.compositionStartEvent.subscribe(config.compositionStartHandler);
                    if (config.compositionUpdateHandler)
                        this.compositionUpdateEvent.subscribe(config.compositionUpdateHandler);
                    if (config.keyDownHandler)
                        this.keyDownEvent.subscribe(config.keyDownHandler);
                    if (config.keyPressHandler)
                        this.keyPressEvent.subscribe(config.keyPressHandler);
                    if (config.keyUpHandler)
                        this.keyUpEvent.subscribe(config.keyUpHandler);
                    if (config.clickHandler)
                        this.clickEvent.subscribe(config.clickHandler);
                    if (config.doubleClickHandler)
                        this.doubleClickEvent.subscribe(config.doubleClickHandler);
                    if (config.mouseDownHandler)
                        this.mouseDownEvent.subscribe(config.mouseDownHandler);
                    if (config.mouseEnterHandler)
                        this.mouseEnterEvent.subscribe(config.mouseEnterHandler);
                    if (config.mouseLeaveHandler)
                        this.mouseLeaveEvent.subscribe(config.mouseLeaveHandler);
                    if (config.mouseMoveHandler)
                        this.mouseMoveEvent.subscribe(config.mouseMoveHandler);
                    if (config.mouseOutHandler)
                        this.mouseOutEvent.subscribe(config.mouseOutHandler);
                    if (config.mouseOverHandler)
                        this.mouseOverEvent.subscribe(config.mouseOverHandler);
                    if (config.mouseUpHandler)
                        this.mouseUpEvent.subscribe(config.mouseUpHandler);
                    if (config.wheelHandler)
                        this.wheelEvent.subscribe(config.wheelHandler);
                    if (config.contextMenuHandler)
                        this.contextMenuEvent.subscribe(config.contextMenuHandler);
                    if (config.pointerLockChangeHandler)
                        this.pointerLockChangeEvent.subscribe(config.pointerLockChangeHandler);
                    if (config.pointerLockErrorHandler)
                        this.pointerLockErrorEvent.subscribe(config.pointerLockErrorHandler);
                    if (config.blurHandler)
                        this.blurEvent.subscribe(config.blurHandler);
                    if (config.focusHandler)
                        this.focusEvent.subscribe(config.focusHandler);
                    if (config.afterPrintHandler)
                        this.afterPrintEvent.subscribe(config.afterPrintHandler);
                    if (config.beforePrintHandler)
                        this.beforePrintEvent.subscribe(config.beforePrintHandler);
                    if (config.dragEndHandler)
                        this.dragEndEvent.subscribe(config.dragEndHandler);
                    if (config.dragEnterHandler)
                        this.dragEnterEvent.subscribe(config.dragEnterHandler);
                    if (config.dragHandler)
                        this.dragEvent.subscribe(config.dragHandler);
                    if (config.dragLeaveHandler)
                        this.dragLeaveEvent.subscribe(config.dragLeaveHandler);
                    if (config.dragOverHandler)
                        this.dragOverEvent.subscribe(config.dragOverHandler);
                    if (config.dragStartHandler)
                        this.dragStartEvent.subscribe(config.dragStartHandler);
                    if (config.dropHandler)
                        this.dropEvent.subscribe(config.dropHandler);
                    if (config.loadHandler)
                        this.loadEvent.subscribe(config.loadHandler);
                    if (config.resizeHandler)
                        this.resizeEvent.subscribe(config.resizeHandler);
                    if (config.scrollHandler)
                        this.scrollEvent.subscribe(config.scrollHandler);
                    if (config.selectHandler)
                        this.selectEvent.subscribe(config.selectHandler);
                    if (config.offlineBackOnlineHandler)
                        this.offlineBackOnlineEvent.subscribe(config.offlineBackOnlineHandler);
                    if (config.offlineHandler)
                        this.offlineEvent.subscribe(config.offlineHandler);
                    if (config.connectionCheckingHandler)
                        this.connectionCheckingEvent.subscribe(config.connectionCheckingHandler);
                    if (config.connectionDownloadingHandler)
                        this.connectionDownloadingEvent.subscribe(config.connectionDownloadingHandler);
                    if (config.connectionErrorHandler)
                        this.connectionErrorEvent.subscribe(config.connectionErrorHandler);
                    if (config.connectionNoUpdateHandler)
                        this.connectionNoUpdateEvent.subscribe(config.connectionNoUpdateHandler);
                    if (config.connectionObsoleteHandler)
                        this.connectionObsoleteEvent.subscribe(config.connectionObsoleteHandler);
                    if (config.connectionUpdateReadyHandler)
                        this.connectionUpdateReadyEvent.subscribe(config.connectionUpdateReadyHandler);
                    if (config.connectionCachedHandler)
                        this.connectionCachedEvent.subscribe(config.connectionCachedHandler);
                    if (config.svgAbortHandler)
                        this.svgAbortEvent.subscribe(config.svgAbortHandler);
                    if (config.svgBeginHandler)
                        this.svgBeginEvent.subscribe(config.svgBeginHandler);
                    if (config.svgEndHandler)
                        this.svgEndEvent.subscribe(config.svgEndHandler);
                    if (config.svgErrorHandler)
                        this.svgErrorEvent.subscribe(config.svgErrorHandler);
                    if (config.svgLoadHandler)
                        this.svgLoadEvent.subscribe(config.svgLoadHandler);
                    if (config.svgRepeatHandler)
                        this.svgRepeatEvent.subscribe(config.svgRepeatHandler);
                    if (config.svgResizeHandler)
                        this.svgResizeEvent.subscribe(config.svgResizeHandler);
                    if (config.svgScrollHandler)
                        this.svgScrollEvent.subscribe(config.svgScrollHandler);
                    if (config.svgUnloadHandler)
                        this.svgUnloadEvent.subscribe(config.svgUnloadHandler);
                    if (config.svgZoomHandler)
                        this.svgZoomEvent.subscribe(config.svgZoomHandler);
                    if (config.webSocketErrorHandler)
                        this.webSocketErrorEvent.subscribe(config.webSocketErrorHandler);
                    if (config.pageHideHandler)
                        this.pageHideEvent.subscribe(config.pageHideHandler);
                    if (config.pageShowHandler)
                        this.pageShowEvent.subscribe(config.pageShowHandler);
                    if (config.showHandler)
                        this.showEvent.subscribe(config.showHandler);
                    if (config.contentLoadedHandler)
                        this.contentLoadedEvent.subscribe(config.contentLoadedHandler);
                    if (config.hashChangeHandler)
                        this.hashChangeEvent.subscribe(config.hashChangeHandler);
                    if (config.popStateHandler)
                        this.popStateEvent.subscribe(config.popStateHandler);
                    if (config.invalidHandler)
                        this.invalidEvent.subscribe(config.invalidHandler);
                    if (config.beforeUnloadHandler)
                        this.beforeUnloadEvent.subscribe(config.beforeUnloadHandler);
                    if (config.indexedDatabaseErrorHandler)
                        this.indexedDatabaseErrorEvent.subscribe(config.indexedDatabaseErrorHandler);
                    if (config.visibilityChangeHandler)
                        this.visibilityChangeEvent.subscribe(config.visibilityChangeHandler);
                    if (config.requestLoadStartHandler)
                        this.requestLoadStartEvent.subscribe(config.requestLoadStartHandler);
                    if (config.serverErrorHandler)
                        this.serverErrorEvent.subscribe(config.serverErrorHandler);
                    if (config.webStorageHandler)
                        this.webStorageEvent.subscribe(config.webStorageHandler);
                    if (config.requestReadyStateChangeHandler)
                        this.requestReadyStateChangeEvent.subscribe(config.requestReadyStateChangeHandler);
                    if (config.requestTimeoutHandler)
                        this.requestTimeoutEvent.subscribe(config.requestTimeoutHandler);
                    if (config.initializationHandler)
                        this.initialization(config.initializationHandler);
                };
                return HtmlElement;
            })(HtmlNode);
            Elements.HtmlElement = HtmlElement;
            var HtmlElementContainer = (function (_super) {
                __extends(HtmlElementContainer, _super);
                function HtmlElementContainer(name, config) {
                    _super.call(this, name, config);
                }
                Object.defineProperty(HtmlElementContainer.prototype, "children", {
                    get: function () {
                        if (!this._children)
                            initializeChildrenProperty(this);
                        return this._children;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementContainer.prototype, "copyEvent", {
                    get: function () {
                        if (!this._copyEvent)
                            this._copyEvent = new Html.HtmlElementEvent('copy', 'Event', this);
                        return this._copyEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementContainer.prototype, "cutEvent", {
                    get: function () {
                        if (!this._cutEvent)
                            this._cutEvent = new Html.HtmlElementEvent('cut', 'Event', this);
                        return this._cutEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HtmlElementContainer.prototype, "pasteEvent", {
                    get: function () {
                        if (!this._pasteEvent)
                            this._pasteEvent = new Html.HtmlElementEvent('paste', 'Event', this);
                        return this._pasteEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                HtmlElementContainer.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig(), text = config.text, textBinder = config.textBinder, child = config.child, children = config.children || [], childrenBinder = config.childrenBinder, isTextDefined = Classical.Utilities.isDefined(text), isTextBinderDefined = Classical.Utilities.isDefined(textBinder), isChildDefined = Classical.Utilities.isDefined(child), isChildrenDefined = Classical.Utilities.isDefined(children), isChildrenBinderDefined = Classical.Utilities.isDefined(childrenBinder);
                    Classical.Assert.isFalse(isTextDefined && isTextBinderDefined, 'The text and textBinder properties cannot be specifed at the same time.');
                    Classical.Assert.isFalse(isChildrenDefined && isChildrenBinderDefined, 'The children and childrenBinder properties cannot be specifed at the same time.');
                    Classical.Assert.isFalse((isChildrenDefined || isChildrenBinderDefined) && isChildDefined, 'The child property is a shorthand for the first child of the children collection. Add it explicitly if you are specifying children.');
                    Classical.Assert.isFalse(isChildrenBinderDefined && (isTextDefined || isTextBinderDefined || isChildDefined), 'The text and child properties are children. If binding to the children of an element, specify all childing in the binding collection.');
                    if (isChildDefined)
                        children.unshift(child);
                    if (isTextBinderDefined)
                        children.unshift(Html.text(textBinder));
                    if (isTextDefined)
                        children.unshift(Html.text(text));
                    config.children = children;
                    config.childrenBinder = childrenBinder;
                    setChildrenPropertyFromConfig(this, config);
                    if (config.copyHandler)
                        this.copyEvent.subscribe(config.copyHandler);
                    if (config.cutHandler)
                        this.cutEvent.subscribe(config.cutHandler);
                    if (config.pasteHandler)
                        this.pasteEvent.subscribe(config.pasteHandler);
                    children.query().forEach(function (e) {
                        if (!e.isInitialized)
                            e.initialize(document);
                    });
                };
                HtmlElementContainer.prototype.initialize = function (document) {
                    if (document === void 0) { document = global.document; }
                    if (this.isInitialized())
                        return this;
                    _super.prototype.initialize.call(this);
                    this.children.query().forEach(function (node) {
                        node.initialize();
                    });
                    var self = this;
                    this._childrenAreInitialized = true;
                    self._noteInitialization(true);
                    return this;
                };
                return HtmlElementContainer;
            })(HtmlElement);
            Elements.HtmlElementContainer = HtmlElementContainer;
            var HtmlElementContainerPrototype = HtmlElementContainer.prototype;
            HtmlElementContainerPrototype._noteInitialization = function () {
                if (!this._childrenAreInitialized)
                    return;
                this._isInitialized = true;
                var initialization = this._initialization;
                if (initialization)
                    initialization.execute(null);
            };
            var AbbreviationElement = (function (_super) {
                __extends(AbbreviationElement, _super);
                function AbbreviationElement(config) {
                    _super.call(this, 'abbr', config);
                }
                AbbreviationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return AbbreviationElement;
            })(HtmlElementContainer);
            Elements.AbbreviationElement = AbbreviationElement;
            var AddressElement = (function (_super) {
                __extends(AddressElement, _super);
                function AddressElement(config) {
                    _super.call(this, 'address', config);
                }
                AddressElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return AddressElement;
            })(HtmlElementContainer);
            Elements.AddressElement = AddressElement;
            var AnchorElement = (function (_super) {
                __extends(AnchorElement, _super);
                function AnchorElement(config) {
                    _super.call(this, 'a', config);
                }
                Object.defineProperty(AnchorElement.prototype, "hrefProperty", {
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "href", {
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "hrefLanguageProperty", {
                    get: function () {
                        if (!this._hrefLanguageProperty)
                            initializeProperty(this, 'hrefLanguage', 'hreflang');
                        return this._hrefLanguageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "hrefLanguage", {
                    get: function () {
                        return this.hrefLanguageProperty.value;
                    },
                    set: function (value) {
                        this.hrefLanguageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "relationshipProperty", {
                    get: function () {
                        if (!this._relationshipProperty)
                            initializeProperty(this, 'relationship', 'rel');
                        return this._relationshipProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "relationship", {
                    get: function () {
                        return this.relationshipProperty.value;
                    },
                    set: function (value) {
                        this.relationshipProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "targetProperty", {
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "target", {
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AnchorElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AnchorElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'hrefLanguage', true);
                    setPropertyFromConfig(this, config, 'relationship', true);
                    setPropertyFromConfig(this, config, 'target', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return AnchorElement;
            })(HtmlElementContainer);
            Elements.AnchorElement = AnchorElement;
            var AreaElement = (function (_super) {
                __extends(AreaElement, _super);
                function AreaElement(config) {
                    _super.call(this, 'area', config);
                }
                Object.defineProperty(AreaElement.prototype, "alternateProperty", {
                    get: function () {
                        if (!this._alternateProperty)
                            initializeProperty(this, 'alternate', 'alt');
                        return this._alternateProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "alternate", {
                    get: function () {
                        return this.alternateProperty.value;
                    },
                    set: function (value) {
                        this.alternateProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "coordinatesProperty", {
                    get: function () {
                        if (!this._coordinatesProperty)
                            initializeProperty(this, 'coordinates', 'coords');
                        return this._coordinatesProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "coordinates", {
                    get: function () {
                        return this.coordinatesProperty.value;
                    },
                    set: function (value) {
                        this.coordinatesProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "hrefProperty", {
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "href", {
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "shapeProperty", {
                    get: function () {
                        if (!this._shapeProperty)
                            initializeProperty(this, 'shape', 'shape');
                        return this._shapeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "shape", {
                    get: function () {
                        return this.shapeProperty.value;
                    },
                    set: function (value) {
                        this.shapeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "targetProperty", {
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AreaElement.prototype, "target", {
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AreaElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'alternate', true);
                    setPropertyFromConfig(this, config, 'coordinates', true);
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'shape', true);
                    setPropertyFromConfig(this, config, 'target', true);
                };
                return AreaElement;
            })(HtmlElement);
            Elements.AreaElement = AreaElement;
            var ArticleElement = (function (_super) {
                __extends(ArticleElement, _super);
                function ArticleElement(config) {
                    _super.call(this, 'article', config);
                }
                ArticleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return ArticleElement;
            })(HtmlElementContainer);
            Elements.ArticleElement = ArticleElement;
            var AsideElement = (function (_super) {
                __extends(AsideElement, _super);
                function AsideElement(config) {
                    _super.call(this, 'aside', config);
                }
                AsideElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return AsideElement;
            })(HtmlElementContainer);
            Elements.AsideElement = AsideElement;
            var AudioElement = (function (_super) {
                __extends(AudioElement, _super);
                function AudioElement(config) {
                    _super.call(this, 'audio', config);
                }
                Object.defineProperty(AudioElement.prototype, "autoPlayProperty", {
                    get: function () {
                        if (!this._autoPlayProperty)
                            initializeProperty(this, 'autoPlay', 'autoplay');
                        return this._autoPlayProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "autoPlay", {
                    get: function () {
                        return this.autoPlayProperty.value;
                    },
                    set: function (value) {
                        this.autoPlayProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "bufferedProperty", {
                    get: function () {
                        if (!this._bufferedProperty)
                            initializeProperty(this, 'buffered', 'buffered');
                        return this._bufferedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "buffered", {
                    get: function () {
                        return this.bufferedProperty.value;
                    },
                    set: function (value) {
                        this.bufferedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "controlsProperty", {
                    get: function () {
                        if (!this._controlsProperty)
                            initializeProperty(this, 'controls', 'controls');
                        return this._controlsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "controls", {
                    get: function () {
                        return this.controlsProperty.value;
                    },
                    set: function (value) {
                        this.controlsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "loopProperty", {
                    get: function () {
                        if (!this._loopProperty)
                            initializeProperty(this, 'loop', 'loop');
                        return this._loopProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "loop", {
                    get: function () {
                        return this.loopProperty.value;
                    },
                    set: function (value) {
                        this.loopProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mutedProperty", {
                    get: function () {
                        if (!this._mutedProperty)
                            initializeProperty(this, 'muted', 'muted');
                        return this._mutedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "muted", {
                    get: function () {
                        return this.mutedProperty.value;
                    },
                    set: function (value) {
                        this.mutedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "playedProperty", {
                    get: function () {
                        if (!this._playedProperty)
                            initializeProperty(this, 'played', 'played');
                        return this._playedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "played", {
                    get: function () {
                        return this.playedProperty.value;
                    },
                    set: function (value) {
                        this.playedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "preloadProperty", {
                    get: function () {
                        if (!this._preloadProperty)
                            initializeProperty(this, 'preload', 'preload');
                        return this._preloadProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "preload", {
                    get: function () {
                        return this.preloadProperty.value;
                    },
                    set: function (value) {
                        this.preloadProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "volumeProperty", {
                    get: function () {
                        if (!this._volumeProperty)
                            initializeProperty(this, 'volume', 'volume');
                        return this._volumeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "volume", {
                    get: function () {
                        return this.volumeProperty.value;
                    },
                    set: function (value) {
                        this.volumeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "audioCompleteEvent", {
                    get: function () {
                        if (!this._audioCompleteEvent)
                            this._audioCompleteEvent = new Html.HtmlElementEvent('complete', 'Event', this);
                        return this._audioCompleteEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "audioEndedEvent", {
                    get: function () {
                        if (!this._audioEndedEvent)
                            this._audioEndedEvent = new Html.HtmlElementEvent('ended', 'Event', this);
                        return this._audioEndedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "audioProcessEvent", {
                    get: function () {
                        if (!this._audioProcessEvent)
                            this._audioProcessEvent = new Html.HtmlElementEvent('audioprocess', 'Event', this);
                        return this._audioProcessEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaCanPlayEvent", {
                    get: function () {
                        if (!this._mediaCanPlayEvent)
                            this._mediaCanPlayEvent = new Html.HtmlElementEvent('canplay', 'Event', this);
                        return this._mediaCanPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaCanPlayThroughEvent", {
                    get: function () {
                        if (!this._mediaCanPlayThroughEvent)
                            this._mediaCanPlayThroughEvent = new Html.HtmlElementEvent('canplaythrough', 'Event', this);
                        return this._mediaCanPlayThroughEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaDurationChangeEvent", {
                    get: function () {
                        if (!this._mediaDurationChangeEvent)
                            this._mediaDurationChangeEvent = new Html.HtmlElementEvent('durationchange', 'Event', this);
                        return this._mediaDurationChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaEmptiedEvent", {
                    get: function () {
                        if (!this._mediaEmptiedEvent)
                            this._mediaEmptiedEvent = new Html.HtmlElementEvent('emptied', 'Event', this);
                        return this._mediaEmptiedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaEndedEvent", {
                    get: function () {
                        if (!this._mediaEndedEvent)
                            this._mediaEndedEvent = new Html.HtmlElementEvent('ended', 'Event', this);
                        return this._mediaEndedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaLoadedDataEvent", {
                    get: function () {
                        if (!this._mediaLoadedDataEvent)
                            this._mediaLoadedDataEvent = new Html.HtmlElementEvent('loadeddata', 'Event', this);
                        return this._mediaLoadedDataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaLoadedMetadataEvent", {
                    get: function () {
                        if (!this._mediaLoadedMetadataEvent)
                            this._mediaLoadedMetadataEvent = new Html.HtmlElementEvent('loadedmetadata', 'Event', this);
                        return this._mediaLoadedMetadataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaPauseEvent", {
                    get: function () {
                        if (!this._mediaPauseEvent)
                            this._mediaPauseEvent = new Html.HtmlElementEvent('pause', 'Event', this);
                        return this._mediaPauseEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaPlayEvent", {
                    get: function () {
                        if (!this._mediaPlayEvent)
                            this._mediaPlayEvent = new Html.HtmlElementEvent('play', 'Event', this);
                        return this._mediaPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaPlayingEvent", {
                    get: function () {
                        if (!this._mediaPlayingEvent)
                            this._mediaPlayingEvent = new Html.HtmlElementEvent('playing', 'Event', this);
                        return this._mediaPlayingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaRateChangeEvent", {
                    get: function () {
                        if (!this._mediaRateChangeEvent)
                            this._mediaRateChangeEvent = new Html.HtmlElementEvent('ratechange', 'Event', this);
                        return this._mediaRateChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaSeekedEvent", {
                    get: function () {
                        if (!this._mediaSeekedEvent)
                            this._mediaSeekedEvent = new Html.HtmlElementEvent('seeked', 'Event', this);
                        return this._mediaSeekedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaSeekingEvent", {
                    get: function () {
                        if (!this._mediaSeekingEvent)
                            this._mediaSeekingEvent = new Html.HtmlElementEvent('seeking', 'Event', this);
                        return this._mediaSeekingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaStalledEvent", {
                    get: function () {
                        if (!this._mediaStalledEvent)
                            this._mediaStalledEvent = new Html.HtmlElementEvent('stalled', 'Event', this);
                        return this._mediaStalledEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaSuspendEvent", {
                    get: function () {
                        if (!this._mediaSuspendEvent)
                            this._mediaSuspendEvent = new Html.HtmlElementEvent('suspend', 'Event', this);
                        return this._mediaSuspendEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaTimeUpdateEvent", {
                    get: function () {
                        if (!this._mediaTimeUpdateEvent)
                            this._mediaTimeUpdateEvent = new Html.HtmlElementEvent('timeupdate', 'Event', this);
                        return this._mediaTimeUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaVolumeChangeEvent", {
                    get: function () {
                        if (!this._mediaVolumeChangeEvent)
                            this._mediaVolumeChangeEvent = new Html.HtmlElementEvent('volumechange', 'Event', this);
                        return this._mediaVolumeChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AudioElement.prototype, "mediaWaitingEvent", {
                    get: function () {
                        if (!this._mediaWaitingEvent)
                            this._mediaWaitingEvent = new Html.HtmlElementEvent('waiting', 'Event', this);
                        return this._mediaWaitingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                AudioElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoPlay', true);
                    setPropertyFromConfig(this, config, 'buffered', true);
                    setPropertyFromConfig(this, config, 'controls', true);
                    setPropertyFromConfig(this, config, 'loop', true);
                    setPropertyFromConfig(this, config, 'muted', true);
                    setPropertyFromConfig(this, config, 'played', true);
                    setPropertyFromConfig(this, config, 'preload', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'volume', true);
                    if (config.audioCompleteHandler)
                        this.audioCompleteEvent.subscribe(config.audioCompleteHandler);
                    if (config.audioEndedHandler)
                        this.audioEndedEvent.subscribe(config.audioEndedHandler);
                    if (config.audioProcessHandler)
                        this.audioProcessEvent.subscribe(config.audioProcessHandler);
                    if (config.mediaCanPlayHandler)
                        this.mediaCanPlayEvent.subscribe(config.mediaCanPlayHandler);
                    if (config.mediaCanPlayThroughHandler)
                        this.mediaCanPlayThroughEvent.subscribe(config.mediaCanPlayThroughHandler);
                    if (config.mediaDurationChangeHandler)
                        this.mediaDurationChangeEvent.subscribe(config.mediaDurationChangeHandler);
                    if (config.mediaEmptiedHandler)
                        this.mediaEmptiedEvent.subscribe(config.mediaEmptiedHandler);
                    if (config.mediaEndedHandler)
                        this.mediaEndedEvent.subscribe(config.mediaEndedHandler);
                    if (config.mediaLoadedDataHandler)
                        this.mediaLoadedDataEvent.subscribe(config.mediaLoadedDataHandler);
                    if (config.mediaLoadedMetadataHandler)
                        this.mediaLoadedMetadataEvent.subscribe(config.mediaLoadedMetadataHandler);
                    if (config.mediaPauseHandler)
                        this.mediaPauseEvent.subscribe(config.mediaPauseHandler);
                    if (config.mediaPlayHandler)
                        this.mediaPlayEvent.subscribe(config.mediaPlayHandler);
                    if (config.mediaPlayingHandler)
                        this.mediaPlayingEvent.subscribe(config.mediaPlayingHandler);
                    if (config.mediaRateChangeHandler)
                        this.mediaRateChangeEvent.subscribe(config.mediaRateChangeHandler);
                    if (config.mediaSeekedHandler)
                        this.mediaSeekedEvent.subscribe(config.mediaSeekedHandler);
                    if (config.mediaSeekingHandler)
                        this.mediaSeekingEvent.subscribe(config.mediaSeekingHandler);
                    if (config.mediaStalledHandler)
                        this.mediaStalledEvent.subscribe(config.mediaStalledHandler);
                    if (config.mediaSuspendHandler)
                        this.mediaSuspendEvent.subscribe(config.mediaSuspendHandler);
                    if (config.mediaTimeUpdateHandler)
                        this.mediaTimeUpdateEvent.subscribe(config.mediaTimeUpdateHandler);
                    if (config.mediaVolumeChangeHandler)
                        this.mediaVolumeChangeEvent.subscribe(config.mediaVolumeChangeHandler);
                    if (config.mediaWaitingHandler)
                        this.mediaWaitingEvent.subscribe(config.mediaWaitingHandler);
                };
                return AudioElement;
            })(HtmlElementContainer);
            Elements.AudioElement = AudioElement;
            var BaseElement = (function (_super) {
                __extends(BaseElement, _super);
                function BaseElement(config) {
                    _super.call(this, 'base', config);
                }
                Object.defineProperty(BaseElement.prototype, "hrefProperty", {
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseElement.prototype, "href", {
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseElement.prototype, "targetProperty", {
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseElement.prototype, "target", {
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'target', true);
                };
                return BaseElement;
            })(HtmlElement);
            Elements.BaseElement = BaseElement;
            var BidirectionalIsolationElement = (function (_super) {
                __extends(BidirectionalIsolationElement, _super);
                function BidirectionalIsolationElement(config) {
                    _super.call(this, 'bdi', config);
                }
                BidirectionalIsolationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return BidirectionalIsolationElement;
            })(HtmlElementContainer);
            Elements.BidirectionalIsolationElement = BidirectionalIsolationElement;
            var BidirectionalOverrideElement = (function (_super) {
                __extends(BidirectionalOverrideElement, _super);
                function BidirectionalOverrideElement(config) {
                    _super.call(this, 'bdo', config);
                }
                BidirectionalOverrideElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return BidirectionalOverrideElement;
            })(HtmlElementContainer);
            Elements.BidirectionalOverrideElement = BidirectionalOverrideElement;
            var BlockQuotationElement = (function (_super) {
                __extends(BlockQuotationElement, _super);
                function BlockQuotationElement(config) {
                    _super.call(this, 'blockquote', config);
                }
                Object.defineProperty(BlockQuotationElement.prototype, "citationProperty", {
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlockQuotationElement.prototype, "citation", {
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                BlockQuotationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return BlockQuotationElement;
            })(HtmlElementContainer);
            Elements.BlockQuotationElement = BlockQuotationElement;
            var BodyElement = (function (_super) {
                __extends(BodyElement, _super);
                function BodyElement(config) {
                    _super.call(this, 'body', config);
                }
                Object.defineProperty(BodyElement.prototype, "unloadEvent", {
                    get: function () {
                        if (!this._unloadEvent)
                            this._unloadEvent = new Html.HtmlElementEvent('unload', 'UIEvent', this);
                        return this._unloadEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                BodyElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    if (config.unloadHandler)
                        this.unloadEvent.subscribe(config.unloadHandler);
                };
                return BodyElement;
            })(HtmlElementContainer);
            Elements.BodyElement = BodyElement;
            var BoldElement = (function (_super) {
                __extends(BoldElement, _super);
                function BoldElement(config) {
                    _super.call(this, 'b', config);
                }
                BoldElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return BoldElement;
            })(HtmlElementContainer);
            Elements.BoldElement = BoldElement;
            var ButtonElement = (function (_super) {
                __extends(ButtonElement, _super);
                function ButtonElement(config) {
                    _super.call(this, 'button', config);
                }
                Object.defineProperty(ButtonElement.prototype, "autoFocusProperty", {
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "autoFocus", {
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ButtonElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ButtonElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'value', true);
                };
                return ButtonElement;
            })(HtmlElementContainer);
            Elements.ButtonElement = ButtonElement;
            var CanvasElement = (function (_super) {
                __extends(CanvasElement, _super);
                function CanvasElement(config) {
                    _super.call(this, 'canvas', config);
                }
                Object.defineProperty(CanvasElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CanvasElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CanvasElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CanvasElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                CanvasElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'width', true);
                    setPropertyFromConfig(this, config, 'height', true);
                };
                return CanvasElement;
            })(HtmlElementContainer);
            Elements.CanvasElement = CanvasElement;
            var CitationElement = (function (_super) {
                __extends(CitationElement, _super);
                function CitationElement(config) {
                    _super.call(this, 'cite', config);
                }
                CitationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return CitationElement;
            })(HtmlElementContainer);
            Elements.CitationElement = CitationElement;
            var CodeElement = (function (_super) {
                __extends(CodeElement, _super);
                function CodeElement(config) {
                    _super.call(this, 'code', config);
                }
                CodeElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return CodeElement;
            })(HtmlElementContainer);
            Elements.CodeElement = CodeElement;
            var DataElement = (function (_super) {
                __extends(DataElement, _super);
                function DataElement(config) {
                    _super.call(this, 'data', config);
                }
                Object.defineProperty(DataElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'nodeValue');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                DataElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'value', true);
                };
                return DataElement;
            })(HtmlElementContainer);
            Elements.DataElement = DataElement;
            var DataListElement = (function (_super) {
                __extends(DataListElement, _super);
                function DataListElement(config) {
                    _super.call(this, 'datalist', config);
                }
                DataListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DataListElement;
            })(HtmlElementContainer);
            Elements.DataListElement = DataListElement;
            var DefinitionElement = (function (_super) {
                __extends(DefinitionElement, _super);
                function DefinitionElement(config) {
                    _super.call(this, 'dfn', config);
                }
                DefinitionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DefinitionElement;
            })(HtmlElementContainer);
            Elements.DefinitionElement = DefinitionElement;
            var DefinitionTermElement = (function (_super) {
                __extends(DefinitionTermElement, _super);
                function DefinitionTermElement(config) {
                    _super.call(this, 'dt', config);
                }
                DefinitionTermElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DefinitionTermElement;
            })(HtmlElementContainer);
            Elements.DefinitionTermElement = DefinitionTermElement;
            var DeletedTextElement = (function (_super) {
                __extends(DeletedTextElement, _super);
                function DeletedTextElement(config) {
                    _super.call(this, 'del', config);
                }
                Object.defineProperty(DeletedTextElement.prototype, "citationProperty", {
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DeletedTextElement.prototype, "citation", {
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                DeletedTextElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return DeletedTextElement;
            })(HtmlElementContainer);
            Elements.DeletedTextElement = DeletedTextElement;
            var DescriptionElement = (function (_super) {
                __extends(DescriptionElement, _super);
                function DescriptionElement(config) {
                    _super.call(this, 'dd', config);
                }
                DescriptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DescriptionElement;
            })(HtmlElementContainer);
            Elements.DescriptionElement = DescriptionElement;
            var DescriptionListElement = (function (_super) {
                __extends(DescriptionListElement, _super);
                function DescriptionListElement(config) {
                    _super.call(this, 'dl', config);
                }
                DescriptionListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DescriptionListElement;
            })(HtmlElementContainer);
            Elements.DescriptionListElement = DescriptionListElement;
            var DetailsElement = (function (_super) {
                __extends(DetailsElement, _super);
                function DetailsElement(config) {
                    _super.call(this, 'details', config);
                }
                DetailsElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DetailsElement;
            })(HtmlElementContainer);
            Elements.DetailsElement = DetailsElement;
            var DivisionElement = (function (_super) {
                __extends(DivisionElement, _super);
                function DivisionElement(config) {
                    _super.call(this, 'div', config);
                }
                DivisionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return DivisionElement;
            })(HtmlElementContainer);
            Elements.DivisionElement = DivisionElement;
            var EmbedElement = (function (_super) {
                __extends(EmbedElement, _super);
                function EmbedElement(config) {
                    _super.call(this, 'embed', config);
                }
                Object.defineProperty(EmbedElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbedElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                EmbedElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return EmbedElement;
            })(HtmlElement);
            Elements.EmbedElement = EmbedElement;
            var EmbeddedObjectElement = (function (_super) {
                __extends(EmbeddedObjectElement, _super);
                function EmbeddedObjectElement(config) {
                    _super.call(this, 'object', config);
                }
                Object.defineProperty(EmbeddedObjectElement.prototype, "dataProperty", {
                    get: function () {
                        if (!this._dataProperty)
                            initializeProperty(this, 'data', 'data');
                        return this._dataProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "data", {
                    get: function () {
                        return this.dataProperty.value;
                    },
                    set: function (value) {
                        this.dataProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmbeddedObjectElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                EmbeddedObjectElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'data', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return EmbeddedObjectElement;
            })(HtmlElementContainer);
            Elements.EmbeddedObjectElement = EmbeddedObjectElement;
            var EmphasisElement = (function (_super) {
                __extends(EmphasisElement, _super);
                function EmphasisElement(config) {
                    _super.call(this, 'em', config);
                }
                EmphasisElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return EmphasisElement;
            })(HtmlElementContainer);
            Elements.EmphasisElement = EmphasisElement;
            var FieldsetElement = (function (_super) {
                __extends(FieldsetElement, _super);
                function FieldsetElement(config) {
                    _super.call(this, 'fieldset', config);
                }
                Object.defineProperty(FieldsetElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FieldsetElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FieldsetElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                FieldsetElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                };
                return FieldsetElement;
            })(HtmlElementContainer);
            Elements.FieldsetElement = FieldsetElement;
            var FigureElement = (function (_super) {
                __extends(FigureElement, _super);
                function FigureElement(config) {
                    _super.call(this, 'figure', config);
                }
                FigureElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return FigureElement;
            })(HtmlElementContainer);
            Elements.FigureElement = FigureElement;
            var FigureCaptionElement = (function (_super) {
                __extends(FigureCaptionElement, _super);
                function FigureCaptionElement(config) {
                    _super.call(this, 'figcaption', config);
                }
                FigureCaptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return FigureCaptionElement;
            })(HtmlElementContainer);
            Elements.FigureCaptionElement = FigureCaptionElement;
            var FooterElement = (function (_super) {
                __extends(FooterElement, _super);
                function FooterElement(config) {
                    _super.call(this, 'footer', config);
                }
                FooterElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return FooterElement;
            })(HtmlElementContainer);
            Elements.FooterElement = FooterElement;
            var FormElement = (function (_super) {
                __extends(FormElement, _super);
                function FormElement(config) {
                    _super.call(this, 'form', config);
                }
                Object.defineProperty(FormElement.prototype, "acceptCharsetProperty", {
                    get: function () {
                        if (!this._acceptCharsetProperty)
                            initializeProperty(this, 'acceptCharset', 'acceptCharset');
                        return this._acceptCharsetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "acceptCharset", {
                    get: function () {
                        return this.acceptCharsetProperty.value;
                    },
                    set: function (value) {
                        this.acceptCharsetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "actionProperty", {
                    get: function () {
                        if (!this._actionProperty)
                            initializeProperty(this, 'action', 'action');
                        return this._actionProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "action", {
                    get: function () {
                        return this.actionProperty.value;
                    },
                    set: function (value) {
                        this.actionProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "autoCompleteProperty", {
                    get: function () {
                        if (!this._autoCompleteProperty)
                            initializeProperty(this, 'autoComplete', 'autocomplete');
                        return this._autoCompleteProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "autoComplete", {
                    get: function () {
                        return this.autoCompleteProperty.value;
                    },
                    set: function (value) {
                        this.autoCompleteProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "encodingTypeProperty", {
                    get: function () {
                        if (!this._encodingTypeProperty)
                            initializeProperty(this, 'encodingType', 'enctype');
                        return this._encodingTypeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "encodingType", {
                    get: function () {
                        return this.encodingTypeProperty.value;
                    },
                    set: function (value) {
                        this.encodingTypeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "methodProperty", {
                    get: function () {
                        if (!this._methodProperty)
                            initializeProperty(this, 'method', 'method');
                        return this._methodProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "method", {
                    get: function () {
                        return this.methodProperty.value;
                    },
                    set: function (value) {
                        this.methodProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "targetProperty", {
                    get: function () {
                        if (!this._targetProperty)
                            initializeProperty(this, 'target', 'target');
                        return this._targetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "target", {
                    get: function () {
                        return this.targetProperty.value;
                    },
                    set: function (value) {
                        this.targetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "resetEvent", {
                    get: function () {
                        if (!this._resetEvent)
                            this._resetEvent = new Html.HtmlElementEvent('reset', 'Event', this);
                        return this._resetEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormElement.prototype, "submitEvent", {
                    get: function () {
                        if (!this._submitEvent)
                            this._submitEvent = new Html.HtmlElementEvent('submit', 'Event', this);
                        return this._submitEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                FormElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'acceptCharset', true);
                    setPropertyFromConfig(this, config, 'action', true);
                    setPropertyFromConfig(this, config, 'autoComplete', true);
                    setPropertyFromConfig(this, config, 'encodingType', true);
                    setPropertyFromConfig(this, config, 'method', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'target', true);
                    if (config.resetHandler)
                        this.resetEvent.subscribe(config.resetHandler);
                    if (config.submitHandler)
                        this.submitEvent.subscribe(config.submitHandler);
                };
                return FormElement;
            })(HtmlElementContainer);
            Elements.FormElement = FormElement;
            var HeadElement = (function (_super) {
                __extends(HeadElement, _super);
                function HeadElement(config) {
                    _super.call(this, 'head', config);
                }
                HeadElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeadElement;
            })(HtmlElementContainer);
            Elements.HeadElement = HeadElement;
            var HeaderElement = (function (_super) {
                __extends(HeaderElement, _super);
                function HeaderElement(config) {
                    _super.call(this, 'header', config);
                }
                HeaderElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderElement;
            })(HtmlElementContainer);
            Elements.HeaderElement = HeaderElement;
            var HeaderFiveElement = (function (_super) {
                __extends(HeaderFiveElement, _super);
                function HeaderFiveElement(config) {
                    _super.call(this, 'h5', config);
                }
                HeaderFiveElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderFiveElement;
            })(HtmlElementContainer);
            Elements.HeaderFiveElement = HeaderFiveElement;
            var HeaderFourElement = (function (_super) {
                __extends(HeaderFourElement, _super);
                function HeaderFourElement(config) {
                    _super.call(this, 'h4', config);
                }
                HeaderFourElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderFourElement;
            })(HtmlElementContainer);
            Elements.HeaderFourElement = HeaderFourElement;
            var HeaderOneElement = (function (_super) {
                __extends(HeaderOneElement, _super);
                function HeaderOneElement(config) {
                    _super.call(this, 'h1', config);
                }
                HeaderOneElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderOneElement;
            })(HtmlElementContainer);
            Elements.HeaderOneElement = HeaderOneElement;
            var HeaderSixElement = (function (_super) {
                __extends(HeaderSixElement, _super);
                function HeaderSixElement(config) {
                    _super.call(this, 'h6', config);
                }
                HeaderSixElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderSixElement;
            })(HtmlElementContainer);
            Elements.HeaderSixElement = HeaderSixElement;
            var HeaderThreeElement = (function (_super) {
                __extends(HeaderThreeElement, _super);
                function HeaderThreeElement(config) {
                    _super.call(this, 'h3', config);
                }
                HeaderThreeElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderThreeElement;
            })(HtmlElementContainer);
            Elements.HeaderThreeElement = HeaderThreeElement;
            var HeaderTwoElement = (function (_super) {
                __extends(HeaderTwoElement, _super);
                function HeaderTwoElement(config) {
                    _super.call(this, 'h2', config);
                }
                HeaderTwoElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HeaderTwoElement;
            })(HtmlElementContainer);
            Elements.HeaderTwoElement = HeaderTwoElement;
            var HorizontalRuleElement = (function (_super) {
                __extends(HorizontalRuleElement, _super);
                function HorizontalRuleElement(config) {
                    _super.call(this, 'hr', config);
                }
                HorizontalRuleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return HorizontalRuleElement;
            })(HtmlElement);
            Elements.HorizontalRuleElement = HorizontalRuleElement;
            var ImageElement = (function (_super) {
                __extends(ImageElement, _super);
                function ImageElement(config) {
                    _super.call(this, 'img', config);
                }
                Object.defineProperty(ImageElement.prototype, "alternateProperty", {
                    get: function () {
                        if (!this._alternateProperty)
                            initializeProperty(this, 'alternate', 'alt');
                        return this._alternateProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "alternate", {
                    get: function () {
                        return this.alternateProperty.value;
                    },
                    set: function (value) {
                        this.alternateProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "longDescriptionProperty", {
                    get: function () {
                        if (!this._longDescriptionProperty)
                            initializeProperty(this, 'longDescription', 'longDesc');
                        return this._longDescriptionProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "longDescription", {
                    get: function () {
                        return this.longDescriptionProperty.value;
                    },
                    set: function (value) {
                        this.longDescriptionProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "abortEvent", {
                    get: function () {
                        if (!this._abortEvent)
                            this._abortEvent = new Html.HtmlElementEvent('abort', 'UIEvent', this);
                        return this._abortEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageElement.prototype, "errorEvent", {
                    get: function () {
                        if (!this._errorEvent)
                            this._errorEvent = new Html.HtmlElementEvent('error', 'UIEvent', this);
                        return this._errorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImageElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'alternate', true);
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'longDescription', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                    if (config.abortHandler)
                        this.abortEvent.subscribe(config.abortHandler);
                    if (config.errorHandler)
                        this.errorEvent.subscribe(config.errorHandler);
                };
                return ImageElement;
            })(HtmlElement);
            Elements.ImageElement = ImageElement;
            var InlineFrameElement = (function (_super) {
                __extends(InlineFrameElement, _super);
                function InlineFrameElement(config) {
                    _super.call(this, 'iframe', config);
                }
                Object.defineProperty(InlineFrameElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "scrollingProperty", {
                    get: function () {
                        if (!this._scrollingProperty)
                            initializeProperty(this, 'scrolling', 'scrolling');
                        return this._scrollingProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "scrolling", {
                    get: function () {
                        return this.scrollingProperty.value;
                    },
                    set: function (value) {
                        this.scrollingProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InlineFrameElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                InlineFrameElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'scrolling', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return InlineFrameElement;
            })(HtmlElementContainer);
            Elements.InlineFrameElement = InlineFrameElement;
            var InputElement = (function (_super) {
                __extends(InputElement, _super);
                function InputElement(config) {
                    _super.call(this, 'input', config);
                }
                Object.defineProperty(InputElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "acceptProperty", {
                    get: function () {
                        if (!this._acceptProperty)
                            initializeProperty(this, 'accept', 'accept');
                        return this._acceptProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "accept", {
                    get: function () {
                        return this.acceptProperty.value;
                    },
                    set: function (value) {
                        this.acceptProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoCompleteProperty", {
                    get: function () {
                        if (!this._autoCompleteProperty)
                            initializeProperty(this, 'autoComplete', 'autocomplete');
                        return this._autoCompleteProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoComplete", {
                    get: function () {
                        return this.autoCompleteProperty.value;
                    },
                    set: function (value) {
                        this.autoCompleteProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoFocusProperty", {
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "autoFocus", {
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "checkedProperty", {
                    get: function () {
                        if (!this._checkedProperty)
                            initializeProperty(this, 'checked', 'checked');
                        return this._checkedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "checked", {
                    get: function () {
                        return this.checkedProperty.value;
                    },
                    set: function (value) {
                        this.checkedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "list", {
                    get: function () {
                        return getElementPropertyValue(this, 'list');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'list', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "maxProperty", {
                    get: function () {
                        if (!this._maxProperty)
                            initializeProperty(this, 'max', 'max');
                        return this._maxProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "max", {
                    get: function () {
                        return this.maxProperty.value;
                    },
                    set: function (value) {
                        this.maxProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "minProperty", {
                    get: function () {
                        if (!this._minProperty)
                            initializeProperty(this, 'min', 'min');
                        return this._minProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "min", {
                    get: function () {
                        return this.minProperty.value;
                    },
                    set: function (value) {
                        this.minProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "multipleProperty", {
                    get: function () {
                        if (!this._multipleProperty)
                            initializeProperty(this, 'multiple', 'multiple');
                        return this._multipleProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "multiple", {
                    get: function () {
                        return this.multipleProperty.value;
                    },
                    set: function (value) {
                        this.multipleProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "patternProperty", {
                    get: function () {
                        if (!this._patternProperty)
                            initializeProperty(this, 'pattern', 'pattern');
                        return this._patternProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "pattern", {
                    get: function () {
                        return this.patternProperty.value;
                    },
                    set: function (value) {
                        this.patternProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "placeHolderProperty", {
                    get: function () {
                        if (!this._placeHolderProperty)
                            initializeProperty(this, 'placeHolder', 'placeholder');
                        return this._placeHolderProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "placeHolder", {
                    get: function () {
                        return this.placeHolderProperty.value;
                    },
                    set: function (value) {
                        this.placeHolderProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "requiredProperty", {
                    get: function () {
                        if (!this._requiredProperty)
                            initializeProperty(this, 'required', 'required');
                        return this._requiredProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "required", {
                    get: function () {
                        return this.requiredProperty.value;
                    },
                    set: function (value) {
                        this.requiredProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "sizeProperty", {
                    get: function () {
                        if (!this._sizeProperty)
                            initializeProperty(this, 'size', 'size');
                        return this._sizeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "size", {
                    get: function () {
                        return this.sizeProperty.value;
                    },
                    set: function (value) {
                        this.sizeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "stepProperty", {
                    get: function () {
                        if (!this._stepProperty)
                            initializeProperty(this, 'step', 'step');
                        return this._stepProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "step", {
                    get: function () {
                        return this.stepProperty.value;
                    },
                    set: function (value) {
                        this.stepProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "changeEvent", {
                    get: function () {
                        if (!this._changeEvent)
                            this._changeEvent = new Html.HtmlElementEvent('change', 'Event', this);
                        return this._changeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InputElement.prototype, "inputEvent", {
                    get: function () {
                        if (!this._inputEvent)
                            this._inputEvent = new Html.HtmlElementEvent('input', 'Event', this);
                        return this._inputEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                InputElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'accept', true);
                    setPropertyFromConfig(this, config, 'autoComplete', true);
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'checked', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'height', true);
                    setElementPropertyFromConfig(this, config, 'list');
                    setPropertyFromConfig(this, config, 'max', true);
                    setPropertyFromConfig(this, config, 'min', true);
                    setPropertyFromConfig(this, config, 'multiple', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'pattern', true);
                    setPropertyFromConfig(this, config, 'placeHolder', true);
                    setPropertyFromConfig(this, config, 'required', true);
                    setPropertyFromConfig(this, config, 'size', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'step', true);
                    setPropertyFromConfig(this, config, 'value', true);
                    setPropertyFromConfig(this, config, 'width', true);
                    if (config.changeHandler)
                        this.changeEvent.subscribe(config.changeHandler);
                    if (config.inputHandler)
                        this.inputEvent.subscribe(config.inputHandler);
                };
                return InputElement;
            })(HtmlElement);
            Elements.InputElement = InputElement;
            var InsertedElement = (function (_super) {
                __extends(InsertedElement, _super);
                function InsertedElement(config) {
                    _super.call(this, 'ins', config);
                }
                Object.defineProperty(InsertedElement.prototype, "citationProperty", {
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(InsertedElement.prototype, "citation", {
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                InsertedElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return InsertedElement;
            })(HtmlElementContainer);
            Elements.InsertedElement = InsertedElement;
            var ItalicElement = (function (_super) {
                __extends(ItalicElement, _super);
                function ItalicElement(config) {
                    _super.call(this, 'i', config);
                }
                ItalicElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return ItalicElement;
            })(HtmlElementContainer);
            Elements.ItalicElement = ItalicElement;
            var KeyboardInputElement = (function (_super) {
                __extends(KeyboardInputElement, _super);
                function KeyboardInputElement(config) {
                    _super.call(this, 'kbd', config);
                }
                KeyboardInputElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return KeyboardInputElement;
            })(HtmlElementContainer);
            Elements.KeyboardInputElement = KeyboardInputElement;
            var LabelElement = (function (_super) {
                __extends(LabelElement, _super);
                function LabelElement(config) {
                    _super.call(this, 'label', config);
                }
                Object.defineProperty(LabelElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                LabelElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setElementPropertyFromConfig(this, config, 'form');
                };
                return LabelElement;
            })(HtmlElementContainer);
            Elements.LabelElement = LabelElement;
            var LegendFieldElement = (function (_super) {
                __extends(LegendFieldElement, _super);
                function LegendFieldElement(config) {
                    _super.call(this, 'legend', config);
                }
                LegendFieldElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return LegendFieldElement;
            })(HtmlElementContainer);
            Elements.LegendFieldElement = LegendFieldElement;
            var LineBreakElement = (function (_super) {
                __extends(LineBreakElement, _super);
                function LineBreakElement(config) {
                    _super.call(this, 'br', config);
                }
                LineBreakElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return LineBreakElement;
            })(HtmlElement);
            Elements.LineBreakElement = LineBreakElement;
            var LinkElement = (function (_super) {
                __extends(LinkElement, _super);
                function LinkElement(config) {
                    _super.call(this, 'link', config);
                }
                Object.defineProperty(LinkElement.prototype, "characterSetProperty", {
                    get: function () {
                        if (!this._characterSetProperty)
                            initializeProperty(this, 'characterSet', 'charset');
                        return this._characterSetProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "characterSet", {
                    get: function () {
                        return this.characterSetProperty.value;
                    },
                    set: function (value) {
                        this.characterSetProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "hrefProperty", {
                    get: function () {
                        if (!this._hrefProperty)
                            initializeProperty(this, 'href', 'href');
                        return this._hrefProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "href", {
                    get: function () {
                        return this.hrefProperty.value;
                    },
                    set: function (value) {
                        this.hrefProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "hrefLanguageProperty", {
                    get: function () {
                        if (!this._hrefLanguageProperty)
                            initializeProperty(this, 'hrefLanguage', 'hreflang');
                        return this._hrefLanguageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "hrefLanguage", {
                    get: function () {
                        return this.hrefLanguageProperty.value;
                    },
                    set: function (value) {
                        this.hrefLanguageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "mediaProperty", {
                    get: function () {
                        if (!this._mediaProperty)
                            initializeProperty(this, 'media', 'media');
                        return this._mediaProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "media", {
                    get: function () {
                        return this.mediaProperty.value;
                    },
                    set: function (value) {
                        this.mediaProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "relationshipProperty", {
                    get: function () {
                        if (!this._relationshipProperty)
                            initializeProperty(this, 'relationship', 'rel');
                        return this._relationshipProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "relationship", {
                    get: function () {
                        return this.relationshipProperty.value;
                    },
                    set: function (value) {
                        this.relationshipProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "reverseRelationshipProperty", {
                    get: function () {
                        if (!this._reverseRelationshipProperty)
                            initializeProperty(this, 'reverseRelationship', 'rev');
                        return this._reverseRelationshipProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "reverseRelationship", {
                    get: function () {
                        return this.reverseRelationshipProperty.value;
                    },
                    set: function (value) {
                        this.reverseRelationshipProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinkElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                LinkElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'characterSet', true);
                    setPropertyFromConfig(this, config, 'href', true);
                    setPropertyFromConfig(this, config, 'hrefLanguage', true);
                    setPropertyFromConfig(this, config, 'media', true);
                    setPropertyFromConfig(this, config, 'relationship', true);
                    setPropertyFromConfig(this, config, 'reverseRelationship', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return LinkElement;
            })(HtmlElement);
            Elements.LinkElement = LinkElement;
            var ListItemElement = (function (_super) {
                __extends(ListItemElement, _super);
                function ListItemElement(config) {
                    _super.call(this, 'li', config);
                }
                Object.defineProperty(ListItemElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListItemElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListItemElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ListItemElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ListItemElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'value', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return ListItemElement;
            })(HtmlElementContainer);
            Elements.ListItemElement = ListItemElement;
            var MainElement = (function (_super) {
                __extends(MainElement, _super);
                function MainElement(config) {
                    _super.call(this, 'main', config);
                }
                MainElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return MainElement;
            })(HtmlElementContainer);
            Elements.MainElement = MainElement;
            var MapElement = (function (_super) {
                __extends(MapElement, _super);
                function MapElement(config) {
                    _super.call(this, 'map', config);
                }
                Object.defineProperty(MapElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MapElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                MapElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'name', true);
                };
                return MapElement;
            })(HtmlElementContainer);
            Elements.MapElement = MapElement;
            var MarkElement = (function (_super) {
                __extends(MarkElement, _super);
                function MarkElement(config) {
                    _super.call(this, 'mark', config);
                }
                MarkElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return MarkElement;
            })(HtmlElementContainer);
            Elements.MarkElement = MarkElement;
            var MetaElement = (function (_super) {
                __extends(MetaElement, _super);
                function MetaElement(config) {
                    _super.call(this, 'meta', config);
                }
                Object.defineProperty(MetaElement.prototype, "contentProperty", {
                    get: function () {
                        if (!this._contentProperty)
                            initializeProperty(this, 'content', 'content');
                        return this._contentProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "content", {
                    get: function () {
                        return this.contentProperty.value;
                    },
                    set: function (value) {
                        this.contentProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "httpEquivProperty", {
                    get: function () {
                        if (!this._httpEquivProperty)
                            initializeProperty(this, 'httpEquiv', 'httpEquiv');
                        return this._httpEquivProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "httpEquiv", {
                    get: function () {
                        return this.httpEquivProperty.value;
                    },
                    set: function (value) {
                        this.httpEquivProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "schemeProperty", {
                    get: function () {
                        if (!this._schemeProperty)
                            initializeProperty(this, 'scheme', 'scheme');
                        return this._schemeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MetaElement.prototype, "scheme", {
                    get: function () {
                        return this.schemeProperty.value;
                    },
                    set: function (value) {
                        this.schemeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                MetaElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'content', true);
                    setPropertyFromConfig(this, config, 'httpEquiv', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'scheme', true);
                };
                return MetaElement;
            })(HtmlElement);
            Elements.MetaElement = MetaElement;
            var NavigationElement = (function (_super) {
                __extends(NavigationElement, _super);
                function NavigationElement(config) {
                    _super.call(this, 'nav', config);
                }
                NavigationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return NavigationElement;
            })(HtmlElementContainer);
            Elements.NavigationElement = NavigationElement;
            var NoScriptElement = (function (_super) {
                __extends(NoScriptElement, _super);
                function NoScriptElement(config) {
                    _super.call(this, 'noscript', config);
                }
                NoScriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return NoScriptElement;
            })(HtmlElementContainer);
            Elements.NoScriptElement = NoScriptElement;
            var OptionElement = (function (_super) {
                __extends(OptionElement, _super);
                function OptionElement(config) {
                    _super.call(this, 'option', config);
                }
                Object.defineProperty(OptionElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "labelProperty", {
                    get: function () {
                        if (!this._labelProperty)
                            initializeProperty(this, 'label', 'label');
                        return this._labelProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "label", {
                    get: function () {
                        return this.labelProperty.value;
                    },
                    set: function (value) {
                        this.labelProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "selectedProperty", {
                    get: function () {
                        if (!this._selectedProperty)
                            initializeProperty(this, 'selected', 'selected');
                        return this._selectedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "selected", {
                    get: function () {
                        return this.selectedProperty.value;
                    },
                    set: function (value) {
                        this.selectedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                OptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setPropertyFromConfig(this, config, 'label', true);
                    setPropertyFromConfig(this, config, 'selected', true);
                    setPropertyFromConfig(this, config, 'value', true);
                };
                return OptionElement;
            })(HtmlElementContainer);
            Elements.OptionElement = OptionElement;
            var OptionsGroupElement = (function (_super) {
                __extends(OptionsGroupElement, _super);
                function OptionsGroupElement(config) {
                    _super.call(this, 'optgroup', config);
                }
                Object.defineProperty(OptionsGroupElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsGroupElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsGroupElement.prototype, "labelProperty", {
                    get: function () {
                        if (!this._labelProperty)
                            initializeProperty(this, 'label', 'label');
                        return this._labelProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsGroupElement.prototype, "label", {
                    get: function () {
                        return this.labelProperty.value;
                    },
                    set: function (value) {
                        this.labelProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                OptionsGroupElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setPropertyFromConfig(this, config, 'label', true);
                };
                return OptionsGroupElement;
            })(HtmlElementContainer);
            Elements.OptionsGroupElement = OptionsGroupElement;
            var OrderedListElement = (function (_super) {
                __extends(OrderedListElement, _super);
                function OrderedListElement(config) {
                    _super.call(this, 'ol', config);
                }
                Object.defineProperty(OrderedListElement.prototype, "compactProperty", {
                    get: function () {
                        if (!this._compactProperty)
                            initializeProperty(this, 'compact', 'compact');
                        return this._compactProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "compact", {
                    get: function () {
                        return this.compactProperty.value;
                    },
                    set: function (value) {
                        this.compactProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "startProperty", {
                    get: function () {
                        if (!this._startProperty)
                            initializeProperty(this, 'start', 'start');
                        return this._startProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "start", {
                    get: function () {
                        return this.startProperty.value;
                    },
                    set: function (value) {
                        this.startProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OrderedListElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                OrderedListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'compact', true);
                    setPropertyFromConfig(this, config, 'start', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return OrderedListElement;
            })(HtmlElementContainer);
            Elements.OrderedListElement = OrderedListElement;
            var ParagraphElement = (function (_super) {
                __extends(ParagraphElement, _super);
                function ParagraphElement(config) {
                    _super.call(this, 'p', config);
                }
                ParagraphElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return ParagraphElement;
            })(HtmlElementContainer);
            Elements.ParagraphElement = ParagraphElement;
            var ParameterElement = (function (_super) {
                __extends(ParameterElement, _super);
                function ParameterElement(config) {
                    _super.call(this, 'param', config);
                }
                Object.defineProperty(ParameterElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "valueTypeProperty", {
                    get: function () {
                        if (!this._valueTypeProperty)
                            initializeProperty(this, 'valueType', 'valueType');
                        return this._valueTypeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ParameterElement.prototype, "valueType", {
                    get: function () {
                        return this.valueTypeProperty.value;
                    },
                    set: function (value) {
                        this.valueTypeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ParameterElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'value', true);
                    setPropertyFromConfig(this, config, 'valueType', true);
                };
                return ParameterElement;
            })(HtmlElement);
            Elements.ParameterElement = ParameterElement;
            var PreformattedElement = (function (_super) {
                __extends(PreformattedElement, _super);
                function PreformattedElement(config) {
                    _super.call(this, 'pre', config);
                }
                PreformattedElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return PreformattedElement;
            })(HtmlElementContainer);
            Elements.PreformattedElement = PreformattedElement;
            var ProgressElement = (function (_super) {
                __extends(ProgressElement, _super);
                function ProgressElement(config) {
                    _super.call(this, 'progress', config);
                }
                Object.defineProperty(ProgressElement.prototype, "maxProperty", {
                    get: function () {
                        if (!this._maxProperty)
                            initializeProperty(this, 'max', 'max');
                        return this._maxProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "max", {
                    get: function () {
                        return this.maxProperty.value;
                    },
                    set: function (value) {
                        this.maxProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "valueProperty", {
                    get: function () {
                        if (!this._valueProperty)
                            initializeProperty(this, 'value', 'value');
                        return this._valueProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "value", {
                    get: function () {
                        return this.valueProperty.value;
                    },
                    set: function (value) {
                        this.valueProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "progressErrorEvent", {
                    get: function () {
                        if (!this._progressErrorEvent)
                            this._progressErrorEvent = new Html.HtmlElementEvent('error', 'ProgressEvent', this);
                        return this._progressErrorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "progressEvent", {
                    get: function () {
                        if (!this._progressEvent)
                            this._progressEvent = new Html.HtmlElementEvent('progress', 'ProgressEvent', this);
                        return this._progressEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProgressElement.prototype, "progressLoadEndEvent", {
                    get: function () {
                        if (!this._progressLoadEndEvent)
                            this._progressLoadEndEvent = new Html.HtmlElementEvent('loadend', 'ProgressEvent', this);
                        return this._progressLoadEndEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProgressElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'max', true);
                    setPropertyFromConfig(this, config, 'value', true);
                    if (config.progressErrorHandler)
                        this.progressErrorEvent.subscribe(config.progressErrorHandler);
                    if (config.progressHandler)
                        this.progressEvent.subscribe(config.progressHandler);
                    if (config.progressLoadEndHandler)
                        this.progressLoadEndEvent.subscribe(config.progressLoadEndHandler);
                };
                return ProgressElement;
            })(HtmlElementContainer);
            Elements.ProgressElement = ProgressElement;
            var QuoteElement = (function (_super) {
                __extends(QuoteElement, _super);
                function QuoteElement(config) {
                    _super.call(this, 'q', config);
                }
                Object.defineProperty(QuoteElement.prototype, "citationProperty", {
                    get: function () {
                        if (!this._citationProperty)
                            initializeProperty(this, 'citation', 'cite');
                        return this._citationProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(QuoteElement.prototype, "citation", {
                    get: function () {
                        return this.citationProperty.value;
                    },
                    set: function (value) {
                        this.citationProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                QuoteElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'citation', true);
                };
                return QuoteElement;
            })(HtmlElementContainer);
            Elements.QuoteElement = QuoteElement;
            var RootElement = (function (_super) {
                __extends(RootElement, _super);
                function RootElement(config) {
                    _super.call(this, 'html', config);
                }
                RootElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RootElement;
            })(HtmlElementContainer);
            Elements.RootElement = RootElement;
            var RubyElement = (function (_super) {
                __extends(RubyElement, _super);
                function RubyElement(config) {
                    _super.call(this, 'ruby', config);
                }
                RubyElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RubyElement;
            })(HtmlElementContainer);
            Elements.RubyElement = RubyElement;
            var RubyParenthesisElement = (function (_super) {
                __extends(RubyParenthesisElement, _super);
                function RubyParenthesisElement(config) {
                    _super.call(this, 'rp', config);
                }
                RubyParenthesisElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RubyParenthesisElement;
            })(HtmlElementContainer);
            Elements.RubyParenthesisElement = RubyParenthesisElement;
            var RubyPronunciationElement = (function (_super) {
                __extends(RubyPronunciationElement, _super);
                function RubyPronunciationElement(config) {
                    _super.call(this, 'rt', config);
                }
                RubyPronunciationElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return RubyPronunciationElement;
            })(HtmlElementContainer);
            Elements.RubyPronunciationElement = RubyPronunciationElement;
            var SampleElement = (function (_super) {
                __extends(SampleElement, _super);
                function SampleElement(config) {
                    _super.call(this, 'samp', config);
                }
                SampleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SampleElement;
            })(HtmlElementContainer);
            Elements.SampleElement = SampleElement;
            var ScriptElement = (function (_super) {
                __extends(ScriptElement, _super);
                function ScriptElement(config) {
                    _super.call(this, 'script', config);
                }
                Object.defineProperty(ScriptElement.prototype, "asyncProperty", {
                    get: function () {
                        if (!this._asyncProperty)
                            initializeProperty(this, 'async', 'async');
                        return this._asyncProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "async", {
                    get: function () {
                        return this.asyncProperty.value;
                    },
                    set: function (value) {
                        this.asyncProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "deferProperty", {
                    get: function () {
                        if (!this._deferProperty)
                            initializeProperty(this, 'defer', 'defer');
                        return this._deferProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "defer", {
                    get: function () {
                        return this.deferProperty.value;
                    },
                    set: function (value) {
                        this.deferProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ScriptElement.prototype, "errorEvent", {
                    get: function () {
                        if (!this._errorEvent)
                            this._errorEvent = new Html.HtmlElementEvent('error', 'UIEvent', this);
                        return this._errorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                ScriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'async', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'defer', true);
                    if (config.errorHandler)
                        this.errorEvent.subscribe(config.errorHandler);
                };
                return ScriptElement;
            })(HtmlElementContainer);
            Elements.ScriptElement = ScriptElement;
            var SectionElement = (function (_super) {
                __extends(SectionElement, _super);
                function SectionElement(config) {
                    _super.call(this, 'section', config);
                }
                SectionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SectionElement;
            })(HtmlElementContainer);
            Elements.SectionElement = SectionElement;
            var SelectElement = (function (_super) {
                __extends(SelectElement, _super);
                function SelectElement(config) {
                    _super.call(this, 'select', config);
                }
                Object.defineProperty(SelectElement.prototype, "autoFocusProperty", {
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "autoFocus", {
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "multipleOptionsProperty", {
                    get: function () {
                        if (!this._multipleOptionsProperty)
                            initializeProperty(this, 'multipleOptions', 'multiple');
                        return this._multipleOptionsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "multipleOptions", {
                    get: function () {
                        return this.multipleOptionsProperty.value;
                    },
                    set: function (value) {
                        this.multipleOptionsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "requiredProperty", {
                    get: function () {
                        if (!this._requiredProperty)
                            initializeProperty(this, 'required', 'required');
                        return this._requiredProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "required", {
                    get: function () {
                        return this.requiredProperty.value;
                    },
                    set: function (value) {
                        this.requiredProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "sizeProperty", {
                    get: function () {
                        if (!this._sizeProperty)
                            initializeProperty(this, 'size', 'size');
                        return this._sizeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "size", {
                    get: function () {
                        return this.sizeProperty.value;
                    },
                    set: function (value) {
                        this.sizeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SelectElement.prototype, "changeEvent", {
                    get: function () {
                        if (!this._changeEvent)
                            this._changeEvent = new Html.HtmlElementEvent('change', 'Event', this);
                        return this._changeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                SelectElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'multipleOptions', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'required', true);
                    setPropertyFromConfig(this, config, 'size', true);
                    if (config.changeHandler)
                        this.changeEvent.subscribe(config.changeHandler);
                };
                return SelectElement;
            })(HtmlElementContainer);
            Elements.SelectElement = SelectElement;
            var SmallElement = (function (_super) {
                __extends(SmallElement, _super);
                function SmallElement(config) {
                    _super.call(this, 'small', config);
                }
                SmallElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SmallElement;
            })(HtmlElementContainer);
            Elements.SmallElement = SmallElement;
            var SourceElement = (function (_super) {
                __extends(SourceElement, _super);
                function SourceElement(config) {
                    _super.call(this, 'source', config);
                }
                Object.defineProperty(SourceElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SourceElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SourceElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SourceElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                SourceElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return SourceElement;
            })(HtmlElementContainer);
            Elements.SourceElement = SourceElement;
            var SpanElement = (function (_super) {
                __extends(SpanElement, _super);
                function SpanElement(config) {
                    _super.call(this, 'span', config);
                }
                SpanElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SpanElement;
            })(HtmlElementContainer);
            Elements.SpanElement = SpanElement;
            var StrikethroughElement = (function (_super) {
                __extends(StrikethroughElement, _super);
                function StrikethroughElement(config) {
                    _super.call(this, 's', config);
                }
                StrikethroughElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return StrikethroughElement;
            })(HtmlElementContainer);
            Elements.StrikethroughElement = StrikethroughElement;
            var StrongElement = (function (_super) {
                __extends(StrongElement, _super);
                function StrongElement(config) {
                    _super.call(this, 'strong', config);
                }
                StrongElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return StrongElement;
            })(HtmlElementContainer);
            Elements.StrongElement = StrongElement;
            var StyleElement = (function (_super) {
                __extends(StyleElement, _super);
                function StyleElement(config) {
                    _super.call(this, 'style', config);
                }
                Object.defineProperty(StyleElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "mediaProperty", {
                    get: function () {
                        if (!this._mediaProperty)
                            initializeProperty(this, 'media', 'media');
                        return this._mediaProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "media", {
                    get: function () {
                        return this.mediaProperty.value;
                    },
                    set: function (value) {
                        this.mediaProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StyleElement.prototype, "errorEvent", {
                    get: function () {
                        if (!this._errorEvent)
                            this._errorEvent = new Html.HtmlElementEvent('error', 'UIEvent', this);
                        return this._errorEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                StyleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'type', true);
                    setPropertyFromConfig(this, config, 'media', true);
                    setPropertyFromConfig(this, config, 'disabled', false);
                    if (config.errorHandler)
                        this.errorEvent.subscribe(config.errorHandler);
                };
                return StyleElement;
            })(HtmlElementContainer);
            Elements.StyleElement = StyleElement;
            var SubscriptElement = (function (_super) {
                __extends(SubscriptElement, _super);
                function SubscriptElement(config) {
                    _super.call(this, 'sub', config);
                }
                SubscriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SubscriptElement;
            })(HtmlElementContainer);
            Elements.SubscriptElement = SubscriptElement;
            var SummaryElement = (function (_super) {
                __extends(SummaryElement, _super);
                function SummaryElement(config) {
                    _super.call(this, 'summary', config);
                }
                SummaryElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SummaryElement;
            })(HtmlElementContainer);
            Elements.SummaryElement = SummaryElement;
            var SuperscriptElement = (function (_super) {
                __extends(SuperscriptElement, _super);
                function SuperscriptElement(config) {
                    _super.call(this, 'sup', config);
                }
                SuperscriptElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return SuperscriptElement;
            })(HtmlElementContainer);
            Elements.SuperscriptElement = SuperscriptElement;
            var TableElement = (function (_super) {
                __extends(TableElement, _super);
                function TableElement(config) {
                    _super.call(this, 'table', config);
                }
                TableElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TableElement;
            })(HtmlElementContainer);
            Elements.TableElement = TableElement;
            var TableCaptionElement = (function (_super) {
                __extends(TableCaptionElement, _super);
                function TableCaptionElement(config) {
                    _super.call(this, 'caption', config);
                }
                TableCaptionElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TableCaptionElement;
            })(HtmlElementContainer);
            Elements.TableCaptionElement = TableCaptionElement;
            var TableColumnElement = (function (_super) {
                __extends(TableColumnElement, _super);
                function TableColumnElement(config) {
                    _super.call(this, 'col', config);
                }
                Object.defineProperty(TableColumnElement.prototype, "spanProperty", {
                    get: function () {
                        if (!this._spanProperty)
                            initializeProperty(this, 'span', 'span');
                        return this._spanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnElement.prototype, "span", {
                    get: function () {
                        return this.spanProperty.value;
                    },
                    set: function (value) {
                        this.spanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TableColumnElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'span', true);
                };
                return TableColumnElement;
            })(HtmlElement);
            Elements.TableColumnElement = TableColumnElement;
            var TableColumnGroupElement = (function (_super) {
                __extends(TableColumnGroupElement, _super);
                function TableColumnGroupElement(config) {
                    _super.call(this, 'colgroup', config);
                }
                Object.defineProperty(TableColumnGroupElement.prototype, "spanProperty", {
                    get: function () {
                        if (!this._spanProperty)
                            initializeProperty(this, 'span', 'span');
                        return this._spanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnGroupElement.prototype, "span", {
                    get: function () {
                        return this.spanProperty.value;
                    },
                    set: function (value) {
                        this.spanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnGroupElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableColumnGroupElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TableColumnGroupElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'span', true);
                    setPropertyFromConfig(this, config, 'width', true);
                };
                return TableColumnGroupElement;
            })(HtmlElement);
            Elements.TableColumnGroupElement = TableColumnGroupElement;
            var TableDataCellElement = (function (_super) {
                __extends(TableDataCellElement, _super);
                function TableDataCellElement(config) {
                    _super.call(this, 'td', config);
                }
                Object.defineProperty(TableDataCellElement.prototype, "columnSpanProperty", {
                    get: function () {
                        if (!this._columnSpanProperty)
                            initializeProperty(this, 'columnSpan', 'colSpan');
                        return this._columnSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "columnSpan", {
                    get: function () {
                        return this.columnSpanProperty.value;
                    },
                    set: function (value) {
                        this.columnSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "headersProperty", {
                    get: function () {
                        if (!this._headersProperty)
                            initializeProperty(this, 'headers', 'headers');
                        return this._headersProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "headers", {
                    get: function () {
                        return this.headersProperty.value;
                    },
                    set: function (value) {
                        this.headersProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "rowSpanProperty", {
                    get: function () {
                        if (!this._rowSpanProperty)
                            initializeProperty(this, 'rowSpan', 'rowSpan');
                        return this._rowSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "rowSpan", {
                    get: function () {
                        return this.rowSpanProperty.value;
                    },
                    set: function (value) {
                        this.rowSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "scopeProperty", {
                    get: function () {
                        if (!this._scopeProperty)
                            initializeProperty(this, 'scope', 'scope');
                        return this._scopeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableDataCellElement.prototype, "scope", {
                    get: function () {
                        return this.scopeProperty.value;
                    },
                    set: function (value) {
                        this.scopeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TableDataCellElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'columnSpan', true);
                    setPropertyFromConfig(this, config, 'headers', true);
                    setPropertyFromConfig(this, config, 'rowSpan', true);
                    setPropertyFromConfig(this, config, 'scope', true);
                };
                return TableDataCellElement;
            })(HtmlElementContainer);
            Elements.TableDataCellElement = TableDataCellElement;
            var TableHeaderCellElement = (function (_super) {
                __extends(TableHeaderCellElement, _super);
                function TableHeaderCellElement(config) {
                    _super.call(this, 'th', config);
                }
                Object.defineProperty(TableHeaderCellElement.prototype, "columnSpanProperty", {
                    get: function () {
                        if (!this._columnSpanProperty)
                            initializeProperty(this, 'columnSpan', 'colSpan');
                        return this._columnSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "columnSpan", {
                    get: function () {
                        return this.columnSpanProperty.value;
                    },
                    set: function (value) {
                        this.columnSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "headersProperty", {
                    get: function () {
                        if (!this._headersProperty)
                            initializeProperty(this, 'headers', 'headers');
                        return this._headersProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "headers", {
                    get: function () {
                        return this.headersProperty.value;
                    },
                    set: function (value) {
                        this.headersProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "rowSpanProperty", {
                    get: function () {
                        if (!this._rowSpanProperty)
                            initializeProperty(this, 'rowSpan', 'rowSpan');
                        return this._rowSpanProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TableHeaderCellElement.prototype, "rowSpan", {
                    get: function () {
                        return this.rowSpanProperty.value;
                    },
                    set: function (value) {
                        this.rowSpanProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TableHeaderCellElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'columnSpan', true);
                    setPropertyFromConfig(this, config, 'headers', true);
                    setPropertyFromConfig(this, config, 'rowSpan', true);
                };
                return TableHeaderCellElement;
            })(HtmlElementContainer);
            Elements.TableHeaderCellElement = TableHeaderCellElement;
            var TableRowElement = (function (_super) {
                __extends(TableRowElement, _super);
                function TableRowElement(config) {
                    _super.call(this, 'tr', config);
                }
                TableRowElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TableRowElement;
            })(HtmlElementContainer);
            Elements.TableRowElement = TableRowElement;
            var TextAreaElement = (function (_super) {
                __extends(TextAreaElement, _super);
                function TextAreaElement(config) {
                    _super.call(this, 'textarea', config);
                }
                Object.defineProperty(TextAreaElement.prototype, "autoFocusProperty", {
                    get: function () {
                        if (!this._autoFocusProperty)
                            initializeProperty(this, 'autoFocus', 'autofocus');
                        return this._autoFocusProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "autoFocus", {
                    get: function () {
                        return this.autoFocusProperty.value;
                    },
                    set: function (value) {
                        this.autoFocusProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "columnsProperty", {
                    get: function () {
                        if (!this._columnsProperty)
                            initializeProperty(this, 'columns', 'cols');
                        return this._columnsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "columns", {
                    get: function () {
                        return this.columnsProperty.value;
                    },
                    set: function (value) {
                        this.columnsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "disabledProperty", {
                    get: function () {
                        if (!this._disabledProperty)
                            initializeProperty(this, 'disabled', 'disabled');
                        return this._disabledProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "disabled", {
                    get: function () {
                        return this.disabledProperty.value;
                    },
                    set: function (value) {
                        this.disabledProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "form", {
                    get: function () {
                        return getElementPropertyValue(this, 'form');
                    },
                    set: function (value) {
                        setElementPropertyValue(this, 'form', value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "maxLengthProperty", {
                    get: function () {
                        if (!this._maxLengthProperty)
                            initializeProperty(this, 'maxLength', 'maxLength');
                        return this._maxLengthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "maxLength", {
                    get: function () {
                        return this.maxLengthProperty.value;
                    },
                    set: function (value) {
                        this.maxLengthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "nameProperty", {
                    get: function () {
                        if (!this._nameProperty)
                            initializeProperty(this, 'name', 'name');
                        return this._nameProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "name", {
                    get: function () {
                        return this.nameProperty.value;
                    },
                    set: function (value) {
                        this.nameProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "placeHolderProperty", {
                    get: function () {
                        if (!this._placeHolderProperty)
                            initializeProperty(this, 'placeHolder', 'placeholder');
                        return this._placeHolderProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "placeHolder", {
                    get: function () {
                        return this.placeHolderProperty.value;
                    },
                    set: function (value) {
                        this.placeHolderProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "readOnlyProperty", {
                    get: function () {
                        if (!this._readOnlyProperty)
                            initializeProperty(this, 'readOnly', 'readOnly');
                        return this._readOnlyProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "readOnly", {
                    get: function () {
                        return this.readOnlyProperty.value;
                    },
                    set: function (value) {
                        this.readOnlyProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "requiredProperty", {
                    get: function () {
                        if (!this._requiredProperty)
                            initializeProperty(this, 'required', 'required');
                        return this._requiredProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "required", {
                    get: function () {
                        return this.requiredProperty.value;
                    },
                    set: function (value) {
                        this.requiredProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "rowsProperty", {
                    get: function () {
                        if (!this._rowsProperty)
                            initializeProperty(this, 'rows', 'rows');
                        return this._rowsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "rows", {
                    get: function () {
                        return this.rowsProperty.value;
                    },
                    set: function (value) {
                        this.rowsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionEndProperty", {
                    get: function () {
                        if (!this._selectionEndProperty)
                            initializeProperty(this, 'selectionEnd', 'selectionEnd');
                        return this._selectionEndProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionEnd", {
                    get: function () {
                        return this.selectionEndProperty.value;
                    },
                    set: function (value) {
                        this.selectionEndProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionStartProperty", {
                    get: function () {
                        if (!this._selectionStartProperty)
                            initializeProperty(this, 'selectionStart', 'selectionStart');
                        return this._selectionStartProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "selectionStart", {
                    get: function () {
                        return this.selectionStartProperty.value;
                    },
                    set: function (value) {
                        this.selectionStartProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "wrapProperty", {
                    get: function () {
                        if (!this._wrapProperty)
                            initializeProperty(this, 'wrap', 'wrap');
                        return this._wrapProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "wrap", {
                    get: function () {
                        return this.wrapProperty.value;
                    },
                    set: function (value) {
                        this.wrapProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "changeEvent", {
                    get: function () {
                        if (!this._changeEvent)
                            this._changeEvent = new Html.HtmlElementEvent('change', 'Event', this);
                        return this._changeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextAreaElement.prototype, "inputEvent", {
                    get: function () {
                        if (!this._inputEvent)
                            this._inputEvent = new Html.HtmlElementEvent('input', 'Event', this);
                        return this._inputEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                TextAreaElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoFocus', true);
                    setPropertyFromConfig(this, config, 'columns', true);
                    setPropertyFromConfig(this, config, 'disabled', true);
                    setElementPropertyFromConfig(this, config, 'form');
                    setPropertyFromConfig(this, config, 'maxLength', true);
                    setPropertyFromConfig(this, config, 'name', true);
                    setPropertyFromConfig(this, config, 'placeHolder', true);
                    setPropertyFromConfig(this, config, 'readOnly', true);
                    setPropertyFromConfig(this, config, 'required', true);
                    setPropertyFromConfig(this, config, 'rows', true);
                    setPropertyFromConfig(this, config, 'selectionEnd', false);
                    setPropertyFromConfig(this, config, 'selectionStart', false);
                    setPropertyFromConfig(this, config, 'wrap', true);
                    if (config.changeHandler)
                        this.changeEvent.subscribe(config.changeHandler);
                    if (config.inputHandler)
                        this.inputEvent.subscribe(config.inputHandler);
                };
                return TextAreaElement;
            })(HtmlElementContainer);
            Elements.TextAreaElement = TextAreaElement;
            var TitleElement = (function (_super) {
                __extends(TitleElement, _super);
                function TitleElement(config) {
                    _super.call(this, 'title', config);
                }
                TitleElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return TitleElement;
            })(HtmlElementContainer);
            Elements.TitleElement = TitleElement;
            var TrackElement = (function (_super) {
                __extends(TrackElement, _super);
                function TrackElement(config) {
                    _super.call(this, 'track', config);
                }
                Object.defineProperty(TrackElement.prototype, "defaultProperty", {
                    get: function () {
                        if (!this._defaultProperty)
                            initializeProperty(this, 'default', 'default');
                        return this._defaultProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "default", {
                    get: function () {
                        return this.defaultProperty.value;
                    },
                    set: function (value) {
                        this.defaultProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "kindProperty", {
                    get: function () {
                        if (!this._kindProperty)
                            initializeProperty(this, 'kind', 'kind');
                        return this._kindProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "kind", {
                    get: function () {
                        return this.kindProperty.value;
                    },
                    set: function (value) {
                        this.kindProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "labelProperty", {
                    get: function () {
                        if (!this._labelProperty)
                            initializeProperty(this, 'label', 'label');
                        return this._labelProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "label", {
                    get: function () {
                        return this.labelProperty.value;
                    },
                    set: function (value) {
                        this.labelProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "sourceLanguageProperty", {
                    get: function () {
                        if (!this._sourceLanguageProperty)
                            initializeProperty(this, 'sourceLanguage', 'srclang');
                        return this._sourceLanguageProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TrackElement.prototype, "sourceLanguage", {
                    get: function () {
                        return this.sourceLanguageProperty.value;
                    },
                    set: function (value) {
                        this.sourceLanguageProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TrackElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'default', true);
                    setPropertyFromConfig(this, config, 'kind', true);
                    setPropertyFromConfig(this, config, 'label', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'sourceLanguage', true);
                };
                return TrackElement;
            })(HtmlElementContainer);
            Elements.TrackElement = TrackElement;
            var UnderlineElement = (function (_super) {
                __extends(UnderlineElement, _super);
                function UnderlineElement(config) {
                    _super.call(this, 'u', config);
                }
                UnderlineElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return UnderlineElement;
            })(HtmlElementContainer);
            Elements.UnderlineElement = UnderlineElement;
            var UnorderedListElement = (function (_super) {
                __extends(UnorderedListElement, _super);
                function UnorderedListElement(config) {
                    _super.call(this, 'ul', config);
                }
                Object.defineProperty(UnorderedListElement.prototype, "compactProperty", {
                    get: function () {
                        if (!this._compactProperty)
                            initializeProperty(this, 'compact', 'compact');
                        return this._compactProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UnorderedListElement.prototype, "compact", {
                    get: function () {
                        return this.compactProperty.value;
                    },
                    set: function (value) {
                        this.compactProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UnorderedListElement.prototype, "typeProperty", {
                    get: function () {
                        if (!this._typeProperty)
                            initializeProperty(this, 'type', 'type');
                        return this._typeProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UnorderedListElement.prototype, "type", {
                    get: function () {
                        return this.typeProperty.value;
                    },
                    set: function (value) {
                        this.typeProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                UnorderedListElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'compact', true);
                    setPropertyFromConfig(this, config, 'type', true);
                };
                return UnorderedListElement;
            })(HtmlElementContainer);
            Elements.UnorderedListElement = UnorderedListElement;
            var VariableElement = (function (_super) {
                __extends(VariableElement, _super);
                function VariableElement(config) {
                    _super.call(this, 'var', config);
                }
                VariableElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return VariableElement;
            })(HtmlElementContainer);
            Elements.VariableElement = VariableElement;
            var VideoElement = (function (_super) {
                __extends(VideoElement, _super);
                function VideoElement(config) {
                    _super.call(this, 'video', config);
                }
                Object.defineProperty(VideoElement.prototype, "autoPlayProperty", {
                    get: function () {
                        if (!this._autoPlayProperty)
                            initializeProperty(this, 'autoPlay', 'autoplay');
                        return this._autoPlayProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "autoPlay", {
                    get: function () {
                        return this.autoPlayProperty.value;
                    },
                    set: function (value) {
                        this.autoPlayProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "bufferedProperty", {
                    get: function () {
                        if (!this._bufferedProperty)
                            initializeProperty(this, 'buffered', 'buffered');
                        return this._bufferedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "buffered", {
                    get: function () {
                        return this.bufferedProperty.value;
                    },
                    set: function (value) {
                        this.bufferedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "controlsProperty", {
                    get: function () {
                        if (!this._controlsProperty)
                            initializeProperty(this, 'controls', 'controls');
                        return this._controlsProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "controls", {
                    get: function () {
                        return this.controlsProperty.value;
                    },
                    set: function (value) {
                        this.controlsProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "heightProperty", {
                    get: function () {
                        if (!this._heightProperty)
                            initializeProperty(this, 'height', 'height');
                        return this._heightProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "height", {
                    get: function () {
                        return this.heightProperty.value;
                    },
                    set: function (value) {
                        this.heightProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "loopProperty", {
                    get: function () {
                        if (!this._loopProperty)
                            initializeProperty(this, 'loop', 'loop');
                        return this._loopProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "loop", {
                    get: function () {
                        return this.loopProperty.value;
                    },
                    set: function (value) {
                        this.loopProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mutedProperty", {
                    get: function () {
                        if (!this._mutedProperty)
                            initializeProperty(this, 'muted', 'muted');
                        return this._mutedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "muted", {
                    get: function () {
                        return this.mutedProperty.value;
                    },
                    set: function (value) {
                        this.mutedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "playedProperty", {
                    get: function () {
                        if (!this._playedProperty)
                            initializeProperty(this, 'played', 'played');
                        return this._playedProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "played", {
                    get: function () {
                        return this.playedProperty.value;
                    },
                    set: function (value) {
                        this.playedProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "preloadProperty", {
                    get: function () {
                        if (!this._preloadProperty)
                            initializeProperty(this, 'preload', 'preload');
                        return this._preloadProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "preload", {
                    get: function () {
                        return this.preloadProperty.value;
                    },
                    set: function (value) {
                        this.preloadProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "posterProperty", {
                    get: function () {
                        if (!this._posterProperty)
                            initializeProperty(this, 'poster', 'poster');
                        return this._posterProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "poster", {
                    get: function () {
                        return this.posterProperty.value;
                    },
                    set: function (value) {
                        this.posterProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "sourceProperty", {
                    get: function () {
                        if (!this._sourceProperty)
                            initializeProperty(this, 'source', 'src');
                        return this._sourceProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "source", {
                    get: function () {
                        return this.sourceProperty.value;
                    },
                    set: function (value) {
                        this.sourceProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "widthProperty", {
                    get: function () {
                        if (!this._widthProperty)
                            initializeProperty(this, 'width', 'width');
                        return this._widthProperty;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "width", {
                    get: function () {
                        return this.widthProperty.value;
                    },
                    set: function (value) {
                        this.widthProperty.value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaCanPlayEvent", {
                    get: function () {
                        if (!this._mediaCanPlayEvent)
                            this._mediaCanPlayEvent = new Html.HtmlElementEvent('canplay', 'Event', this);
                        return this._mediaCanPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaCanPlayThroughEvent", {
                    get: function () {
                        if (!this._mediaCanPlayThroughEvent)
                            this._mediaCanPlayThroughEvent = new Html.HtmlElementEvent('canplaythrough', 'Event', this);
                        return this._mediaCanPlayThroughEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaDurationChangeEvent", {
                    get: function () {
                        if (!this._mediaDurationChangeEvent)
                            this._mediaDurationChangeEvent = new Html.HtmlElementEvent('durationchange', 'Event', this);
                        return this._mediaDurationChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaEmptiedEvent", {
                    get: function () {
                        if (!this._mediaEmptiedEvent)
                            this._mediaEmptiedEvent = new Html.HtmlElementEvent('emptied', 'Event', this);
                        return this._mediaEmptiedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaEndedEvent", {
                    get: function () {
                        if (!this._mediaEndedEvent)
                            this._mediaEndedEvent = new Html.HtmlElementEvent('ended', 'Event', this);
                        return this._mediaEndedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaLoadedDataEvent", {
                    get: function () {
                        if (!this._mediaLoadedDataEvent)
                            this._mediaLoadedDataEvent = new Html.HtmlElementEvent('loadeddata', 'Event', this);
                        return this._mediaLoadedDataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaLoadedMetadataEvent", {
                    get: function () {
                        if (!this._mediaLoadedMetadataEvent)
                            this._mediaLoadedMetadataEvent = new Html.HtmlElementEvent('loadedmetadata', 'Event', this);
                        return this._mediaLoadedMetadataEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaPauseEvent", {
                    get: function () {
                        if (!this._mediaPauseEvent)
                            this._mediaPauseEvent = new Html.HtmlElementEvent('pause', 'Event', this);
                        return this._mediaPauseEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaPlayEvent", {
                    get: function () {
                        if (!this._mediaPlayEvent)
                            this._mediaPlayEvent = new Html.HtmlElementEvent('play', 'Event', this);
                        return this._mediaPlayEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaPlayingEvent", {
                    get: function () {
                        if (!this._mediaPlayingEvent)
                            this._mediaPlayingEvent = new Html.HtmlElementEvent('playing', 'Event', this);
                        return this._mediaPlayingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaRateChangeEvent", {
                    get: function () {
                        if (!this._mediaRateChangeEvent)
                            this._mediaRateChangeEvent = new Html.HtmlElementEvent('ratechange', 'Event', this);
                        return this._mediaRateChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaSeekedEvent", {
                    get: function () {
                        if (!this._mediaSeekedEvent)
                            this._mediaSeekedEvent = new Html.HtmlElementEvent('seeked', 'Event', this);
                        return this._mediaSeekedEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaSeekingEvent", {
                    get: function () {
                        if (!this._mediaSeekingEvent)
                            this._mediaSeekingEvent = new Html.HtmlElementEvent('seeking', 'Event', this);
                        return this._mediaSeekingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaStalledEvent", {
                    get: function () {
                        if (!this._mediaStalledEvent)
                            this._mediaStalledEvent = new Html.HtmlElementEvent('stalled', 'Event', this);
                        return this._mediaStalledEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaSuspendEvent", {
                    get: function () {
                        if (!this._mediaSuspendEvent)
                            this._mediaSuspendEvent = new Html.HtmlElementEvent('suspend', 'Event', this);
                        return this._mediaSuspendEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaTimeUpdateEvent", {
                    get: function () {
                        if (!this._mediaTimeUpdateEvent)
                            this._mediaTimeUpdateEvent = new Html.HtmlElementEvent('timeupdate', 'Event', this);
                        return this._mediaTimeUpdateEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaVolumeChangeEvent", {
                    get: function () {
                        if (!this._mediaVolumeChangeEvent)
                            this._mediaVolumeChangeEvent = new Html.HtmlElementEvent('volumechange', 'Event', this);
                        return this._mediaVolumeChangeEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VideoElement.prototype, "mediaWaitingEvent", {
                    get: function () {
                        if (!this._mediaWaitingEvent)
                            this._mediaWaitingEvent = new Html.HtmlElementEvent('waiting', 'Event', this);
                        return this._mediaWaitingEvent;
                    },
                    enumerable: true,
                    configurable: true
                });
                VideoElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                    setPropertyFromConfig(this, config, 'autoPlay', true);
                    setPropertyFromConfig(this, config, 'buffered', true);
                    setPropertyFromConfig(this, config, 'controls', true);
                    setPropertyFromConfig(this, config, 'height', true);
                    setPropertyFromConfig(this, config, 'loop', true);
                    setPropertyFromConfig(this, config, 'muted', true);
                    setPropertyFromConfig(this, config, 'played', true);
                    setPropertyFromConfig(this, config, 'preload', true);
                    setPropertyFromConfig(this, config, 'poster', true);
                    setPropertyFromConfig(this, config, 'source', true);
                    setPropertyFromConfig(this, config, 'width', true);
                    if (config.mediaCanPlayHandler)
                        this.mediaCanPlayEvent.subscribe(config.mediaCanPlayHandler);
                    if (config.mediaCanPlayThroughHandler)
                        this.mediaCanPlayThroughEvent.subscribe(config.mediaCanPlayThroughHandler);
                    if (config.mediaDurationChangeHandler)
                        this.mediaDurationChangeEvent.subscribe(config.mediaDurationChangeHandler);
                    if (config.mediaEmptiedHandler)
                        this.mediaEmptiedEvent.subscribe(config.mediaEmptiedHandler);
                    if (config.mediaEndedHandler)
                        this.mediaEndedEvent.subscribe(config.mediaEndedHandler);
                    if (config.mediaLoadedDataHandler)
                        this.mediaLoadedDataEvent.subscribe(config.mediaLoadedDataHandler);
                    if (config.mediaLoadedMetadataHandler)
                        this.mediaLoadedMetadataEvent.subscribe(config.mediaLoadedMetadataHandler);
                    if (config.mediaPauseHandler)
                        this.mediaPauseEvent.subscribe(config.mediaPauseHandler);
                    if (config.mediaPlayHandler)
                        this.mediaPlayEvent.subscribe(config.mediaPlayHandler);
                    if (config.mediaPlayingHandler)
                        this.mediaPlayingEvent.subscribe(config.mediaPlayingHandler);
                    if (config.mediaRateChangeHandler)
                        this.mediaRateChangeEvent.subscribe(config.mediaRateChangeHandler);
                    if (config.mediaSeekedHandler)
                        this.mediaSeekedEvent.subscribe(config.mediaSeekedHandler);
                    if (config.mediaSeekingHandler)
                        this.mediaSeekingEvent.subscribe(config.mediaSeekingHandler);
                    if (config.mediaStalledHandler)
                        this.mediaStalledEvent.subscribe(config.mediaStalledHandler);
                    if (config.mediaSuspendHandler)
                        this.mediaSuspendEvent.subscribe(config.mediaSuspendHandler);
                    if (config.mediaTimeUpdateHandler)
                        this.mediaTimeUpdateEvent.subscribe(config.mediaTimeUpdateHandler);
                    if (config.mediaVolumeChangeHandler)
                        this.mediaVolumeChangeEvent.subscribe(config.mediaVolumeChangeHandler);
                    if (config.mediaWaitingHandler)
                        this.mediaWaitingEvent.subscribe(config.mediaWaitingHandler);
                };
                return VideoElement;
            })(HtmlElementContainer);
            Elements.VideoElement = VideoElement;
            var WordBreakOpportunityElement = (function (_super) {
                __extends(WordBreakOpportunityElement, _super);
                function WordBreakOpportunityElement(config) {
                    _super.call(this, 'wbr', config);
                }
                WordBreakOpportunityElement.prototype.configure = function (element, document) {
                    _super.prototype.configure.call(this, element, document);
                    var config = this.getConfig();
                };
                return WordBreakOpportunityElement;
            })(HtmlElementContainer);
            Elements.WordBreakOpportunityElement = WordBreakOpportunityElement;
            function isTextNode(node) {
                return node.nodeName === '#text';
            }
            function initializeProperty(element, propertyName, htmlPropertyName) {
                var bindingProperyName = propertyName + 'Property', fieldName = '_' + bindingProperyName, htmlElement = element.element, htmlValue = htmlElement[htmlPropertyName], property = new b.Property(element);
                property['htmlValue'] = htmlValue;
                if (!property.track)
                    console.log(property);
                property.track(function (values, host) {
                    var value = values[0].value, currentHtmlValue = htmlElement[htmlPropertyName];
                    var valueWasNotChanged = false, htmlElementProperty = htmlElement[htmlPropertyName];
                    try {
                        if (currentHtmlValue !== value) {
                            htmlElement[htmlPropertyName] = value;
                            if (htmlElement[htmlPropertyName] !== value)
                                valueWasNotChanged = true;
                        }
                    }
                    catch (ex) {
                        valueWasNotChanged = true;
                    }
                    if (valueWasNotChanged) {
                        property.value = htmlElement[htmlPropertyName];
                        Classical.Assert.isInvalid(Classical.Utilities.format('{0} is not a valid value for {1}.{2} in the current context.', value, element.getType().name, propertyName));
                    }
                });
                element[fieldName] = property;
            }
            function initializeChildrenProperty(element) {
                var htmlElement = element.getElement(), htmlElementChildren = htmlElement.childNodes, htmlElementChildrenArray = Array.prototype.slice.call(htmlElementChildren), collectionProperty = new bc.Collection(htmlElementChildrenArray.map(function (node) {
                    return HtmlNode.getHtmlNode(node);
                }));
                collectionProperty.track(function (collection, info) {
                    collection.forEach(function (propertyUpdate) {
                        var action = propertyUpdate.type;
                        if (action.equals(0 /* Add */)) {
                            var oldChild = htmlElementChildren[propertyUpdate.index], newIndex = propertyUpdate.index, newItem = propertyUpdate.newValue, newElement = newItem.element;
                            if (!newElement) {
                                newItem.initialize();
                                newElement = newItem.element;
                            }
                            Classical.Assert.isTrue(htmlElementChildren.length <= newIndex, 'The index of the element to add is out of range of the HtmlNode.');
                            element._updating = true;
                            if (!oldChild)
                                htmlElement.appendChild(newElement);
                            else
                                htmlElement.replaceChild(newElement, oldChild);
                        }
                        else if (action.equals(2 /* Remove */)) {
                            var oldChild = htmlElementChildren[info.oldIndex];
                            Classical.Assert.isDefined(oldChild, 'The element to remove could not be found.');
                            element._updating = true;
                            htmlElement.removeChild(oldChild);
                        }
                        else {
                            Classical.Assert.isInvalid('The CollectionAction was not recognized.');
                        }
                    });
                });
                element['_children'] = collectionProperty;
            }
            function setPropertyFromConfig(element, config, propertyName, isInitializable) {
                var binderPropertyName = propertyName + 'Binder', bindingPropertyName = propertyName + 'Property', configValue = config[propertyName], configBinder = config[binderPropertyName], elementPropertyValue = element[propertyName];
                if (!isInitializable || u.areEqual(elementPropertyValue, configValue))
                    return;
                if (!configBinder && configValue !== undefined) {
                    element[propertyName] = configValue;
                }
                else if (configBinder) {
                    var property = element[bindingPropertyName];
                    property.bind(configBinder);
                }
            }
            function setChildrenPropertyFromConfig(element, config) {
                var children = config.children, childrenBinder = config.childrenBinder, childrenCollection = element.children;
                if (children && !childrenBinder) {
                    childrenCollection.addRange(children);
                }
                else if (childrenBinder) {
                    childrenCollection.bind(childrenBinder);
                }
            }
            function getElementPropertyValue(element, propertyName) {
                var propertyFieldName = '_' + propertyName, value = element[propertyFieldName];
                if (value)
                    return value;
                var id = element[propertyFieldName + 'ID'];
                value = Html.wrap(id);
                element[propertyFieldName] = value;
                return value;
            }
            function setElementPropertyValue(element, propertyName, value) {
                var propertyFieldName = '_' + propertyName, propertyFieldID = propertyFieldName + 'ID';
                if (value)
                    element[propertyFieldID] = value.element.id;
                else
                    element[propertyFieldID] = null;
                element[propertyFieldName] = value;
            }
            function setElementPropertyFromConfig(element, config, propertyName) {
                var configPropertyName = propertyName + 'ID', configValue = config[configPropertyName];
                element['_' + configPropertyName] = configValue;
            }
            var toString = Object.prototype.toString;
            var elementMap = new Classical.Collections.Dictionary(5000);
            var propertyMap = new Classical.Collections.Dictionary(50).add('textContent', 'text').add('className', 'classes').add('dir', 'direction').add('lang', 'language').add('spellcheck', 'spellCheck').add('hreflang', 'hrefLanguage').add('rel', 'relationship').add('alt', 'alternate').add('coords', 'coordinates').add('autoplay', 'autoPlay').add('src', 'source').add('cite', 'citation').add('autofocus', 'autoFocus').add('autocomplete', 'autoComplete').add('enctype', 'encodingType').add('longDesc', 'longDescription').add('placeholder', 'placeHolder').add('charset', 'characterSet').add('rev', 'reverseRelationship').add('multiple', 'multipleOptions').add('colSpan', 'columnSpan').add('cols', 'columns').add('srclang', 'sourceLanguage');
            var contentMap = new Classical.Collections.Dictionary(10).add('accept-charset', 'acceptCharset').add('longdesc', 'longDesc').add('http-equiv', 'httpEquiv').add('colspan', 'colSpan').add('rowspan', 'rowSpan').add('maxlength', 'maxLength').add('readonly', 'readOnly');
            var constructorMap = new Classical.Collections.Dictionary(150).add('#text', TextNode).add('ABBR', AbbreviationElement).add('ADDRESS', AddressElement).add('A', AnchorElement).add('AREA', AreaElement).add('ARTICLE', ArticleElement).add('ASIDE', AsideElement).add('AUDIO', AudioElement).add('BASE', BaseElement).add('BDI', BidirectionalIsolationElement).add('BDO', BidirectionalOverrideElement).add('BLOCKQUOTE', BlockQuotationElement).add('BODY', BodyElement).add('B', BoldElement).add('BUTTON', ButtonElement).add('CANVAS', CanvasElement).add('CITE', CitationElement).add('CODE', CodeElement).add('DATA', DataElement).add('DATALIST', DataListElement).add('DFN', DefinitionElement).add('DT', DefinitionTermElement).add('DEL', DeletedTextElement).add('DD', DescriptionElement).add('DL', DescriptionListElement).add('DETAILS', DetailsElement).add('DIV', DivisionElement).add('EMBED', EmbedElement).add('OBJECT', EmbeddedObjectElement).add('EM', EmphasisElement).add('FIELDSET', FieldsetElement).add('FIGURE', FigureElement).add('FIGCAPTION', FigureCaptionElement).add('FOOTER', FooterElement).add('FORM', FormElement).add('HEAD', HeadElement).add('HEADER', HeaderElement).add('H5', HeaderFiveElement).add('H4', HeaderFourElement).add('H1', HeaderOneElement).add('H6', HeaderSixElement).add('H3', HeaderThreeElement).add('H2', HeaderTwoElement).add('HR', HorizontalRuleElement).add('IMG', ImageElement).add('IFRAME', InlineFrameElement).add('INPUT', InputElement).add('INS', InsertedElement).add('I', ItalicElement).add('KBD', KeyboardInputElement).add('LABEL', LabelElement).add('LEGEND', LegendFieldElement).add('BR', LineBreakElement).add('LINK', LinkElement).add('LI', ListItemElement).add('MAIN', MainElement).add('MAP', MapElement).add('MARK', MarkElement).add('META', MetaElement).add('NAV', NavigationElement).add('NOSCRIPT', NoScriptElement).add('OPTION', OptionElement).add('OPTGROUP', OptionsGroupElement).add('OL', OrderedListElement).add('P', ParagraphElement).add('PARAM', ParameterElement).add('PRE', PreformattedElement).add('PROGRESS', ProgressElement).add('Q', QuoteElement).add('HTML', RootElement).add('RUBY', RubyElement).add('RP', RubyParenthesisElement).add('RT', RubyPronunciationElement).add('SAMP', SampleElement).add('SCRIPT', ScriptElement).add('SECTION', SectionElement).add('SELECT', SelectElement).add('SMALL', SmallElement).add('SOURCE', SourceElement).add('SPAN', SpanElement).add('S', StrikethroughElement).add('STRONG', StrongElement).add('STYLE', StyleElement).add('SUB', SubscriptElement).add('SUMMARY', SummaryElement).add('SUP', SuperscriptElement).add('TABLE', TableElement).add('CAPTION', TableCaptionElement).add('COL', TableColumnElement).add('COLGROUP', TableColumnGroupElement).add('TD', TableDataCellElement).add('TH', TableHeaderCellElement).add('TR', TableRowElement).add('TEXTAREA', TextAreaElement).add('TITLE', TitleElement).add('TRACK', TrackElement).add('U', UnderlineElement).add('UL', UnorderedListElement).add('VAR', VariableElement).add('VIDEO', VideoElement).add('WBR', WordBreakOpportunityElement);
        })(Elements = Html.Elements || (Html.Elements = {}));
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        function create(node, append, appendTo) {
            if (append === void 0) { append = true; }
            if (appendTo === void 0) { appendTo = null; }
            Classical.Assert.isDefined(node, 'The HtmlNode was not defined');
            if (node.isInitialized())
                return;
            if (!append || appendTo) {
                node.initialize();
                if (appendTo)
                    appendTo.appendChild(node.element);
                return node;
            }
            addToBody(node);
            return node;
        }
        Html.create = create;
        function addToBody(node) {
            if (!document.body) {
                setInterval(function () { return addToBody(node); });
                return;
            }
            node.initialize();
            document.body.appendChild(node.element);
        }
        function wrap(arg) {
            var element = arg;
            if (Classical.Utilities.isString(arg))
                element = document.getElementById(arg);
            return Html.Elements.HtmlNode.getHtmlNode(element);
        }
        Html.wrap = wrap;
        function text(content) {
            if (!Classical.Utilities.isDefined(content))
                content = '';
            if (Classical.Utilities.isString(content) || !content.source) {
                if (!content.source)
                    content = content.toString();
                return new Html.Elements.TextNode({ text: content });
            }
            return new Html.Elements.TextNode({ textBinder: content });
        }
        Html.text = text;
        function abbr(config) {
            return new Html.Elements.AbbreviationElement(config);
        }
        Html.abbr = abbr;
        function address(config) {
            return new Html.Elements.AddressElement(config);
        }
        Html.address = address;
        function a(config) {
            return new Html.Elements.AnchorElement(config);
        }
        Html.a = a;
        function area(config) {
            return new Html.Elements.AreaElement(config);
        }
        Html.area = area;
        function article(config) {
            return new Html.Elements.ArticleElement(config);
        }
        Html.article = article;
        function aside(config) {
            return new Html.Elements.AsideElement(config);
        }
        Html.aside = aside;
        function audio(config) {
            return new Html.Elements.AudioElement(config);
        }
        Html.audio = audio;
        function base(config) {
            return new Html.Elements.BaseElement(config);
        }
        Html.base = base;
        function bdi(config) {
            return new Html.Elements.BidirectionalIsolationElement(config);
        }
        Html.bdi = bdi;
        function bdo(config) {
            return new Html.Elements.BidirectionalOverrideElement(config);
        }
        Html.bdo = bdo;
        function blockquote(config) {
            return new Html.Elements.BlockQuotationElement(config);
        }
        Html.blockquote = blockquote;
        function body(config) {
            return new Html.Elements.BodyElement(config);
        }
        Html.body = body;
        function b(config) {
            return new Html.Elements.BoldElement(config);
        }
        Html.b = b;
        function button(config) {
            return new Html.Elements.ButtonElement(config);
        }
        Html.button = button;
        function canvas(config) {
            return new Html.Elements.CanvasElement(config);
        }
        Html.canvas = canvas;
        function cite(config) {
            return new Html.Elements.CitationElement(config);
        }
        Html.cite = cite;
        function code(config) {
            return new Html.Elements.CodeElement(config);
        }
        Html.code = code;
        function data(config) {
            return new Html.Elements.DataElement(config);
        }
        Html.data = data;
        function datalist(config) {
            return new Html.Elements.DataListElement(config);
        }
        Html.datalist = datalist;
        function dfn(config) {
            return new Html.Elements.DefinitionElement(config);
        }
        Html.dfn = dfn;
        function dt(config) {
            return new Html.Elements.DefinitionTermElement(config);
        }
        Html.dt = dt;
        function del(config) {
            return new Html.Elements.DeletedTextElement(config);
        }
        Html.del = del;
        function dd(config) {
            return new Html.Elements.DescriptionElement(config);
        }
        Html.dd = dd;
        function dl(config) {
            return new Html.Elements.DescriptionListElement(config);
        }
        Html.dl = dl;
        function details(config) {
            return new Html.Elements.DetailsElement(config);
        }
        Html.details = details;
        function div(config) {
            return new Html.Elements.DivisionElement(config);
        }
        Html.div = div;
        function embed(config) {
            return new Html.Elements.EmbedElement(config);
        }
        Html.embed = embed;
        function obj(config) {
            return new Html.Elements.EmbeddedObjectElement(config);
        }
        Html.obj = obj;
        function em(config) {
            return new Html.Elements.EmphasisElement(config);
        }
        Html.em = em;
        function fieldset(config) {
            return new Html.Elements.FieldsetElement(config);
        }
        Html.fieldset = fieldset;
        function figure(config) {
            return new Html.Elements.FigureElement(config);
        }
        Html.figure = figure;
        function figcaption(config) {
            return new Html.Elements.FigureCaptionElement(config);
        }
        Html.figcaption = figcaption;
        function footer(config) {
            return new Html.Elements.FooterElement(config);
        }
        Html.footer = footer;
        function form(config) {
            return new Html.Elements.FormElement(config);
        }
        Html.form = form;
        function head(config) {
            return new Html.Elements.HeadElement(config);
        }
        Html.head = head;
        function header(config) {
            return new Html.Elements.HeaderElement(config);
        }
        Html.header = header;
        function h5(config) {
            return new Html.Elements.HeaderFiveElement(config);
        }
        Html.h5 = h5;
        function h4(config) {
            return new Html.Elements.HeaderFourElement(config);
        }
        Html.h4 = h4;
        function h1(config) {
            return new Html.Elements.HeaderOneElement(config);
        }
        Html.h1 = h1;
        function h6(config) {
            return new Html.Elements.HeaderSixElement(config);
        }
        Html.h6 = h6;
        function h3(config) {
            return new Html.Elements.HeaderThreeElement(config);
        }
        Html.h3 = h3;
        function h2(config) {
            return new Html.Elements.HeaderTwoElement(config);
        }
        Html.h2 = h2;
        function hr(config) {
            return new Html.Elements.HorizontalRuleElement(config);
        }
        Html.hr = hr;
        function img(config) {
            return new Html.Elements.ImageElement(config);
        }
        Html.img = img;
        function iframe(config) {
            return new Html.Elements.InlineFrameElement(config);
        }
        Html.iframe = iframe;
        function input(config) {
            return new Html.Elements.InputElement(config);
        }
        Html.input = input;
        function ins(config) {
            return new Html.Elements.InsertedElement(config);
        }
        Html.ins = ins;
        function i(config) {
            return new Html.Elements.ItalicElement(config);
        }
        Html.i = i;
        function kbd(config) {
            return new Html.Elements.KeyboardInputElement(config);
        }
        Html.kbd = kbd;
        function label(config) {
            return new Html.Elements.LabelElement(config);
        }
        Html.label = label;
        function legend(config) {
            return new Html.Elements.LegendFieldElement(config);
        }
        Html.legend = legend;
        function br(config) {
            return new Html.Elements.LineBreakElement(config);
        }
        Html.br = br;
        function link(config) {
            return new Html.Elements.LinkElement(config);
        }
        Html.link = link;
        function li(config) {
            return new Html.Elements.ListItemElement(config);
        }
        Html.li = li;
        function main(config) {
            return new Html.Elements.MainElement(config);
        }
        Html.main = main;
        function map(config) {
            return new Html.Elements.MapElement(config);
        }
        Html.map = map;
        function mark(config) {
            return new Html.Elements.MarkElement(config);
        }
        Html.mark = mark;
        function meta(config) {
            return new Html.Elements.MetaElement(config);
        }
        Html.meta = meta;
        function nav(config) {
            return new Html.Elements.NavigationElement(config);
        }
        Html.nav = nav;
        function noscript(config) {
            return new Html.Elements.NoScriptElement(config);
        }
        Html.noscript = noscript;
        function option(config) {
            return new Html.Elements.OptionElement(config);
        }
        Html.option = option;
        function optgroup(config) {
            return new Html.Elements.OptionsGroupElement(config);
        }
        Html.optgroup = optgroup;
        function ol(config) {
            return new Html.Elements.OrderedListElement(config);
        }
        Html.ol = ol;
        function p(config) {
            return new Html.Elements.ParagraphElement(config);
        }
        Html.p = p;
        function param(config) {
            return new Html.Elements.ParameterElement(config);
        }
        Html.param = param;
        function pre(config) {
            return new Html.Elements.PreformattedElement(config);
        }
        Html.pre = pre;
        function progress(config) {
            return new Html.Elements.ProgressElement(config);
        }
        Html.progress = progress;
        function q(config) {
            return new Html.Elements.QuoteElement(config);
        }
        Html.q = q;
        function html(config) {
            return new Html.Elements.RootElement(config);
        }
        Html.html = html;
        function ruby(config) {
            return new Html.Elements.RubyElement(config);
        }
        Html.ruby = ruby;
        function rp(config) {
            return new Html.Elements.RubyParenthesisElement(config);
        }
        Html.rp = rp;
        function rt(config) {
            return new Html.Elements.RubyPronunciationElement(config);
        }
        Html.rt = rt;
        function samp(config) {
            return new Html.Elements.SampleElement(config);
        }
        Html.samp = samp;
        function script(config) {
            return new Html.Elements.ScriptElement(config);
        }
        Html.script = script;
        function section(config) {
            return new Html.Elements.SectionElement(config);
        }
        Html.section = section;
        function select(config) {
            return new Html.Elements.SelectElement(config);
        }
        Html.select = select;
        function small(config) {
            return new Html.Elements.SmallElement(config);
        }
        Html.small = small;
        function source(config) {
            return new Html.Elements.SourceElement(config);
        }
        Html.source = source;
        function span(config) {
            return new Html.Elements.SpanElement(config);
        }
        Html.span = span;
        function s(config) {
            return new Html.Elements.StrikethroughElement(config);
        }
        Html.s = s;
        function strong(config) {
            return new Html.Elements.StrongElement(config);
        }
        Html.strong = strong;
        function style(config) {
            return new Html.Elements.StyleElement(config);
        }
        Html.style = style;
        function sub(config) {
            return new Html.Elements.SubscriptElement(config);
        }
        Html.sub = sub;
        function summary(config) {
            return new Html.Elements.SummaryElement(config);
        }
        Html.summary = summary;
        function sup(config) {
            return new Html.Elements.SuperscriptElement(config);
        }
        Html.sup = sup;
        function table(config) {
            return new Html.Elements.TableElement(config);
        }
        Html.table = table;
        function caption(config) {
            return new Html.Elements.TableCaptionElement(config);
        }
        Html.caption = caption;
        function col(config) {
            return new Html.Elements.TableColumnElement(config);
        }
        Html.col = col;
        function colgroup(config) {
            return new Html.Elements.TableColumnGroupElement(config);
        }
        Html.colgroup = colgroup;
        function td(config) {
            return new Html.Elements.TableDataCellElement(config);
        }
        Html.td = td;
        function th(config) {
            return new Html.Elements.TableHeaderCellElement(config);
        }
        Html.th = th;
        function tr(config) {
            return new Html.Elements.TableRowElement(config);
        }
        Html.tr = tr;
        function textarea(config) {
            return new Html.Elements.TextAreaElement(config);
        }
        Html.textarea = textarea;
        function title(config) {
            return new Html.Elements.TitleElement(config);
        }
        Html.title = title;
        function track(config) {
            return new Html.Elements.TrackElement(config);
        }
        Html.track = track;
        function u(config) {
            return new Html.Elements.UnderlineElement(config);
        }
        Html.u = u;
        function ul(config) {
            return new Html.Elements.UnorderedListElement(config);
        }
        Html.ul = ul;
        function variable(config) {
            return new Html.Elements.VariableElement(config);
        }
        Html.variable = variable;
        function video(config) {
            return new Html.Elements.VideoElement(config);
        }
        Html.video = video;
        function wbr(config) {
            return new Html.Elements.WordBreakOpportunityElement(config);
        }
        Html.wbr = wbr;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
var Classical;
(function (Classical) {
    var Html;
    (function (Html) {
        var HtmlElementEvent = (function () {
            function HtmlElementEvent(eventName, eventType, node) {
                this._eventName = eventName;
                this._eventType = eventType;
                this._node = node;
            }
            Object.defineProperty(HtmlElementEvent.prototype, "node", {
                get: function () {
                    return this._node;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HtmlElementEvent.prototype, "eventName", {
                get: function () {
                    return this._eventName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HtmlElementEvent.prototype, "eventType", {
                get: function () {
                    return this._eventType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HtmlElementEvent.prototype, "event", {
                get: function () {
                    if (!this._event) {
                        this._event = document.createEvent(this._eventType);
                        this._event.initEvent(this._eventName, true, true);
                    }
                    return this._event;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HtmlElementEvent.prototype, "registrationMap", {
                get: function () {
                    if (!this._registrationMap)
                        this._registrationMap = new Classical.Collections.Dictionary();
                    return this._registrationMap;
                },
                enumerable: true,
                configurable: true
            });
            HtmlElementEvent.prototype.subscribe = function (registration) {
                var _this = this;
                Classical.Assert.isDefined(registration, 'The registration is not defined.');
                var elementRegistration = function (domInfo) {
                    registration(_this.node, domInfo);
                };
                this.registrationMap.add(registration, elementRegistration);
                this.node.element.addEventListener(this._eventName, elementRegistration);
            };
            HtmlElementEvent.prototype.unsubscribe = function (registration) {
                Classical.Assert.isDefined(registration, 'The registration is not defined.');
                var map = this.registrationMap, elementRegistration = map.getValue(registration);
                Classical.Assert.isDefined(elementRegistration, Classical.Utilities.format('The registration has not been subscribed to the {0} event.', this._eventName));
                this.node.element.removeEventListener(this._eventName, elementRegistration);
                map.remove(registration);
            };
            HtmlElementEvent.prototype.execute = function (info) {
                this.node.element.dispatchEvent(this.event);
            };
            HtmlElementEvent.prototype.clear = function () {
                var _this = this;
                this.registrationMap.keys.query().forEach(function (registration) {
                    _this.unsubscribe(registration);
                });
            };
            HtmlElementEvent.prototype.count = function () {
                return this.registrationMap.count();
            };
            return HtmlElementEvent;
        })();
        Html.HtmlElementEvent = HtmlElementEvent;
    })(Html = Classical.Html || (Classical.Html = {}));
})(Classical || (Classical = {}));
